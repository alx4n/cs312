import fetch from 'node-fetch';

type responseItemType = {
    message: string[];
    status: string;
}

export const fetchDogs = async (): Promise<responseItemType[] | []> => {
    const url = "https://dog.ceo/api/breed/hound/list";
    let data: responseItemType[];
    try {
        const response = await fetch(url);
        data = (await response.json()) as responseItemType[];
    } catch (err) {
        data = [];
    }
    return data;
}