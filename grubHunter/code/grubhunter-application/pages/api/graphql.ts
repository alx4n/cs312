import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { typeDefs } from "@/graphql/locations/schema";
import { resolvers } from "@/graphql/locations/resolvers";
import { getToken } from "next-auth/jwt";

// @ts-ignore
const server = new ApolloServer({
    resolvers,
    typeDefs
});

const params = {
    context: async (req: NextApiRequest) => {
        const token = await getToken(req.body);
        return {token};
    }
};


const handler = startServerAndCreateNextHandler(server, params);

const allowCors = (fn: NextApiHandler) =>
    async (req: NextApiRequest, res: NextApiResponse) => {
        res.setHeader("Allow", "POST");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "POST");
        res.setHeader("Access-Control-Allow-Headers", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");

        if (req.method === "OPTIONS") {
            res.status(200).end();
        }
        
        return await fn(req, res);
    };

export default allowCors(handler);