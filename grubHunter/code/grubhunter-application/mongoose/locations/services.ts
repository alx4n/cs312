import LocationModel from "./model";
import type { LocationID, LocationWishlist } from "./custom";
import type { LocationType } from "./schema";
import { QueryOptions } from "mongoose";


async function findLocations( filter: LocationID | LocationWishlist | {}): Promise<Array<LocationType | undefined>> {
    try {
        let result : Array<LocationType | undefined> = await LocationModel.find(filter);

        return result;
    } catch (err) {
        console.log(err);
    }

    return [];
}

export async function findAllLocations(): Promise<Array<LocationType | undefined>> {
    let filter = {};

    return await findLocations(filter);
}

export async function findLocationsByID( locationIds: string[]): Promise<Array<LocationType | undefined>> {
    let filter : LocationID = { location_id: locationIds };

    return await findLocations(filter);
}

export async function onWishlist( userId: string ): Promise<Array<LocationType | undefined>> {
    let filter: LocationWishlist = {
        on_wishlist: {
            $in: [userId],
        },
    };

    return await findLocations(filter);
}

export async function updateWishlist( locationId: string, userId: string, action: string): Promise<LocationType | null | {}> {
    let filter = { id: locationId };
    let options: QueryOptions = {upsert: true, returnDocument: "after"};
    let update = {};

    switch (action) {
        case "add": update = { $push: { on_wishlist: userId } };
        break;

        case "remove": update = { $pull: { on_wishlist: userId } };
        break;
    }
    
    try 
    {
        let result: LocationType | null = await LocationModel.findOneAndUpdate( filter, update, options );
        return result;
    } 
    catch (err) 
    {
        console.log(err);
    }
    
    return {};
}