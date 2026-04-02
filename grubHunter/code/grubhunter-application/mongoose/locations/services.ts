import LocationModel from "./model";
import type { LocationID, LocationWishlist } from "./custom";
import type { LocationType } from "./schema";
import { QueryOptions } from "mongoose";


async function findLocations( filter: LocationID | LocationWishlist | {}): Promise<LocationType[] | []> {
    try {
        let result : LocationType[] = await LocationModel.find(filter);

        return result;
    } catch (err) {
        console.log(err);
    }

    return [];
}

export async function findAllLocations(): Promise<LocationType[] | []> {
    let filter = {};

    return await findLocations(filter);
}

export async function findLocationsByID( locationIds: string[]): Promise<Array<LocationType> | [] > {
    let filter = { locationId: locationIds };

    return await findLocations(filter);
}

export async function onWishlist( userId: string ): Promise<LocationType[] | []> {
    let filter: LocationWishlist = {
        onWishlist: {
            $user: [userId],
        },
    };

    return await findLocations(filter);
}

export async function updateWishlist( locationId: string, userId: string, action: string): Promise<LocationType | null | {}> {
    let filter = { id: locationId };
    let options: QueryOptions = {upsert: true, returnDocument: "after"};
    let update = {};

    switch (action) {
        case "add": update = { $push: { onWishlist: userId } };
        break;

        case "remove": update = { $pull: { onWishlist: userId } };
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