import { JWT } from "next-auth/jwt";
import { GraphQLError } from "graphql/error";

interface paramInterface {
    user_id: string;
    location_id: string;
}

interface contextInterface {
    token: JWT;
}

export default function authGuard(mutation : paramInterface, context: contextInterface): boolean | Error {
    if (context?.token?.fdlst_private_userId) {
        if (context.token.fdlst_private_userId == mutation.user_id) {
            return true;
        } else {
            return new GraphQLError("User is not authorized", {
                extensions: {
                    code: "UNAUTHORIZED",
                    http: {
                        status: 500
                    }
                }
            });
        }
    } else {
        return new GraphQLError("User is not authenticated", {
            extensions: {
                code: "UNAUTHENTICATED",
                http: {
                    status: 500
                }
            }
        });
    }
}