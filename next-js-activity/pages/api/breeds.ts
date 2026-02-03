import type { NextApiRequest, NextApiResponse } from "next";

type responseItemType = {
    message: string[];
    status: string;
};
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<NextApiResponse<responseItemType[]> | void> {
    const url = "https://dog.ceo/api/breed/hound/list";
    let data;
    try {
        const response = await fetch(url);
        data = (await response.json()) as responseItemType[];
    } catch (err) {
        return res.status(500);
    }
    const breeds = data.message.map((item: string) => {
        return { id: item };
    });
    return res.status(200).json(breeds);
}