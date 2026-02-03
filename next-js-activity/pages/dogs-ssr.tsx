import type {
    GetServerSideProps,
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
    NextPage,
    PreviewData
} from "next";
import React from "react";
import { ParsedUrlQuery } from "querystring";
import { fetchDogs } from "../utils/fetch-dogs"

type responseItemType = {
    message: string[];
    status: string;
};

const DogsSSR: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    
    const output = props.messages.message.map((item: string) => {
        return (
            <li>
                {item};
            </li>
        );
    });

    return (<ul>
        {output}
    </ul>)
};

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
    let messages: responseItemType[] | [] = [];
    try {
        messages = await fetchDogs();
    } catch (err) {}
    return {
        props: {
            messages
        }
    }
}

export default DogsSSR;