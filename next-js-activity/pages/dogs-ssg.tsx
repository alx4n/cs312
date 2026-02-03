import type {
    GetStaticProps,
    GetStaticPropsContext,
    InferGetStaticPropsType,
    NextPage,
    PreviewData
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import { fetchDogs } from '@/utils/fetch-dogs';

type responseItemType = {
    message: string[];
    status: string;
};

const DogsSSG: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const output = props.messages.message.map((item: string) => {
        return (
            <li>
                {item};
            </li>
        );
    });

    return (
        <ul>
            {output}
        </ul>
    )
};

export const getStaticProps: GetStaticProps = async (
    context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
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

export default DogsSSG;