import { LocationType } from "@/mongoose/locations/schema";
import styles from "./index.module.css";
import { Button } from "../button";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface DetailProps {
    location_item: LocationType
};

interface WishlistProps {
    location_id: string,
    user_id: string
}

export const LocationDetails = (props: DetailProps) : React.JSX.Element => {
    let location : LocationType = props.location_item[0] as LocationType;
    const [onWishlist, setOnWishlist] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    let {data: session} = useSession();
    let user_id = session?.user.fdlst_private_userId;

    useEffect(
        () => {
            setOnWishlist(location.on_wishlist[user_id]);
        }
    );

    const wishlistAction = (props: WishlistProps) : unknown => {
        let { location_id, user_id } = props;
        if (loading) {
            return;
        } else {
            setLoading(true);
            if (onWishlist) {
                fetch('/api/graphql', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify({ mutation: `
                        "query": "mutation {
                            removeWishlist(id: ${location_id}, user_id: ${user_id}) {
                                on_wishlist
                            }
                        }"
                    `})
                })
                .then(() => console.log("removed"))
                .then(() => {
                    location.on_wishlist.pop(user_id);
                    setOnWishlist(false);
                });
            } else {
                fetch('/api/graphql', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify({ mutation: `
                        "query": "mutation {
                            addWishlist(id: ${location_id}, user_id: ${user_id}) {
                                on_wishlist
                            }
                        }"
                    `})
                })
                .then(() => console.log("added"))
                .then(() => {
                    location.on_wishlist.push(user_id);
                    setOnWishlist(true);
                });
            }
            setLoading(false);
        }
    }

    if (location) {
        return (
            <div className={styles.root}>
                <h1>{location.name as String} Details</h1>
                <ul>
                    <li>Address: {location.address as string}</li>
                    <li>Zipcode: {location.zipcode as string}</li>
                    <li>Borough: {location.borough as string}</li>
                    <li>Cuisine: {location.cuisine as string}</li>
                    <li>Grade: {location.grade as string}</li>
                </ul>
                <>
                    {
                        user_id ? 
                            <Button disabled={loading} variant="outline" clickHandler={ () => wishlistAction( {location_id: location?.location_id as string, user_id: user_id} ) }> 
                                {onWishlist ? 'Remove from wishlist' : 'Add to wishlist'} 
                            </Button> 
                            : ''
                    }
                </>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
};