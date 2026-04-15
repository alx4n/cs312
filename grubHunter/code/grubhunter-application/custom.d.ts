import { DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";
import mongoose from "mongoose";

declare module "next-auth" {
    interface Session {
        user: {
            fdlst_private_userId: string;
        } & DefaultSession["user"];
    }
}

/*
declare module "next-auth/jwt" {
    interface JWT {
        fdlst_private_user: string & DefaultJWT;
    }
}
*/

declare global {
    var mongoose: mongoose;
}