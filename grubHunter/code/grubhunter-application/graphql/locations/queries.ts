import { findAllLocations, findLocationsByID, onWishlist } from "@/mongoose/locations/services"

export const QueryResolvers = {
    allLocations: async (_: unknown) => {
       const locations = await findAllLocations();
       return locations;
    },
    locationsById: async (_:unknown, param: { location_ids: string[] }) => {
        const locations = await findLocationsByID(param.location_ids);
        return await locations;
    },
    onUserWishlist: async (_:unknown, param: {user_id: string}) => {
        return await onWishlist(param.user_id);
    }
}