import styles from "./index.module.css";
import Link from "next/link";
import { LocationType } from "@/mongoose/locations/schema";
import { Key } from "react";

interface LocationProps {
    location: LocationType
};

export const LocationListItem = (props: LocationProps): React.JSX.Element => {
    return (
        <li key={props.location.location_id as Key}>
            <Link href={`/locations/${props.location.location_id}`}>
                <h2 className={styles.root}>{props.location.name as String}</h2>
                <p>{props.location.cuisine as String}</p>
                <p>{props.location.borough as String}</p>
            </Link>
        </li>
    )
};