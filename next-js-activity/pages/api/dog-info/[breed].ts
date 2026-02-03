import type { NextApiRequest, NextApiResponse } from "next";

type DogDetailType = {
    breed: string;
    size?: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<NextApiResponse<DogDetailType> | void> {
    return res.status(200).json({
        breed: req.query.breed,
        size: "large",
    });
}