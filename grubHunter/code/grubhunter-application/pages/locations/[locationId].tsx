import { LocationDetails } from "@/components/location-details";
import mongoConnect from "@/middleware/mongo-connect";
import { LocationType } from "@/mongoose/locations/schema";
import { findLocationsByID } from "@/mongoose/locations/services";
import type { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";

const LocationDetailPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <LocationDetails location_item={props.location}/>
    )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
    console.log(context.params['locationId']);
    let location_id : string[] = [context.params['locationId']!.toString()];
    console.log(location_id)
    let location: LocationType[] = [];
    try {
        await mongoConnect();
        location = await findLocationsByID(location_id);  
        console.log(location);
    } catch (err) {
        console.log(err);
    }
    return {
        props: {
            location
        }
    }
}

export default LocationDetailPage;