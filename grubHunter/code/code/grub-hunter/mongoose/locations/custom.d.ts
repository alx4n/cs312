export type LocationID = {
    id: string | string[];
};

export type LocationWishlist = {
    onWishlist: { 
        $user: string[];
    }
};