import type { NextApiRequest, NextApiResponse } from "next";
import mongoConnect from "@/middleware/mongo-connect";
import { findAllLocations } from "@/mongoose/locations/services";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await mongoConnect();
    const locations = await findAllLocations();
    res.status(200).json(locations);
}