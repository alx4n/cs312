import mongoConnect from "@/middleware/mongo-connect";
import type { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, PreviewData, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import { onWishlist } from "@/mongoose/locations/services";
import { LocationType } from "@/mongoose/locations/schema";
import { LocationList } from "@/components/locations-list";
import { useSession } from "next-auth/react";

const WishlistPage: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    let { user_id, wishlist_json } = props;
    let wishlist : Array<LocationType> = JSON.parse(wishlist_json);
    let { data: session, status} = useSession();
    let title = "Your Wishlist";
    let output;

    if (status == "authenticated" && session?.user.fdlst_private_userId == user_id) {
        output = (
            <>
                <Head>
                    <title>{title}</title>
                </Head>
                <body>
                    <h1>{session?.user.name}'s Wishlist</h1>
                    <p>{ wishlist.length == 0 ? 'Your wishlist is empty': '' }</p>
                    <LocationList location_items={wishlist}/>
                </body>
            </>
        )
    }

    return output;
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
    let user_id : string = context.params['userId']!.toString();
    let user_wishlist: Array<LocationType | undefined> = [];
    let wishlist_json = "";
    try {
        await mongoConnect();
        user_wishlist = await onWishlist(user_id);
    } catch (err) {
        user_wishlist = [];
    }

    wishlist_json = JSON.stringify(user_wishlist);
    
    return {
        props: {
            user_id,
            wishlist_json
        }
    }
}

export default WishlistPage;