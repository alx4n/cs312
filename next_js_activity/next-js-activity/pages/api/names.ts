import type {
    GetServerSideProps,
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
    NextPage,
    PreviewData
} from "next";
import { getServerSideProps } from "next/dist/build/templates/pages";

type responseItemType = {
    name: string;
};

const NamesSSR: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const output = props.names.map((item: responseItemType) => {
        return (
            <li 
        )
    })
}