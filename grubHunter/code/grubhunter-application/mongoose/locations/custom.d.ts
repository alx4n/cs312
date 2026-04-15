export type LocationID = {
    location_id: string | string[];
};

export type LocationWishlist = {
    on_wishlist: { 
        $in: string[];
    }
};

