import { LocationDetails } from "@/components/location-details";
import mongoConnect from "@/middleware/mongo-connect";
import { LocationType } from "@/mongoose/locations/schema";
import { findLocationsByID } from "@/mongoose/locations/services";
import type { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";

const LocationDetailPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    let location = JSON.parse(props.loc_json);
    return (
        <LocationDetails location_item={location}/>
    )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
    let location_id : string[] = [context.params['locationId']!.toString()];
    let location: Array<LocationType | undefined> = [];
    let loc_json = "";
    try {
        await mongoConnect();
        location = await findLocationsByID(location_id);  
        //console.log(location);
        loc_json = JSON.stringify(location);
    } catch (err) {
        console.log(err);
    }
    return {
        props: {
            loc_json
        }
    }
}

export default LocationDetailPage;