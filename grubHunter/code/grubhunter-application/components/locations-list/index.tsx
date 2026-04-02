import "./index.module.css";
import { LocationListItem } from "@/components/locations-list-item/index";
import { LocationType } from "@/mongoose/locations/schema";

interface LocationListProps {
    location_items: LocationType[]
};

export const LocationList = (props: LocationListProps): React.JSX.Element => {
    const output =  props.location_items.map((item: LocationType) => {
        return (
            <LocationListItem location={item}></LocationListItem>
        )
    })
    return (
        <div>
            {output}
        </div>
    );
}