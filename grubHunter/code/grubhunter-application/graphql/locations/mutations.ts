import { updateWishlist } from "@/mongoose/locations/services";

export const MutationResolvers = {
    addWishlist: async (_:unknown, params: {location_id: string, user_id: string, context: {}}) => {
        return await updateWishlist(params.location_id, params.user_id, "add");
    },
    removeWishlist: async (_:unknown, params: {location_id: string, user_id: string, context: {}}) => {
        return await updateWishlist(params.location_id, params.user_id, "remove");
    }
}