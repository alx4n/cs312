import { updateWishlist } from "@/mongoose/locations/services";
import authGuard from "@/middleware/auth-guards";
import type { JWT } from "next-auth/jwt";

interface contextInterface {
    token: JWT
}

export const MutationResolvers = {
    addWishlist: async (_:unknown, params: {location_id: string, user_id: string, context: contextInterface}) => {
        var guard = authGuard({ user_id: params.user_id, location_id: params.location_id }, params.context)
        if (!guard) {
            return guard;
        } else {
            return await updateWishlist(params.location_id, params.user_id, "add");
        }
    },
    removeWishlist: async (_:unknown, params: {location_id: string, user_id: string, context: contextInterface}) => {
        var guard = authGuard({ user_id: params.user_id, location_id: params.location_id }, params.context)
        if (!guard) {
            return guard;
        } else {
            return await updateWishlist(params.location_id, params.user_id, "remove");
        }
    }
}