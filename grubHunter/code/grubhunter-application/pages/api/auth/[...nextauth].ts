import GithubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import { createHash } from "node:crypto";

function helper(base: string) {
    return createHash('sha256').update(base).digest("hex");
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    return await NextAuth(req, res, {
        providers : [
            GithubProvider({
                clientId: process.env.GITHUB_CLIENT_ID || "", 
                clientSecret: process.env.GITHUB_CLIENT_SECRET || ""
            })
        ],
        callbacks: { 
            async jwt({token}) {
                if (token?.email && !token.fdlst_private_userId) {
                    token.fdlst_private_userId = helper(token.email);
                }
                return token;
            },
            async session({session}) {
                if (session?.user?.email && !session?.user.fdlst_private_userId) {
                    session.user.fdlst_private_userId = helper(session.user.email);
                }
                return session;
            },
        },
        //debug: true
    });
}