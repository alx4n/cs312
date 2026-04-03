import { LocationType } from "@/mongoose/locations/schema";
import styles from "./index.module.css";

interface DetailProps {
    location_item: LocationType
};

export const LocationDetails = (props: DetailProps) : React.JSX.Element => {
    let location = props.location_item;
    if (location) {
        return (
            <div>
                <ul>
                    <li>{props.location_item.address as String}</li>
                    <li>{props.location_item.zipcode as String}</li>
                    <li>{props.location_item.borough as String}</li>
                    <li>{props.location_item.cuisine as String}</li>
                    <li>{props.location_item.grade as String}</li>
                </ul>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
};