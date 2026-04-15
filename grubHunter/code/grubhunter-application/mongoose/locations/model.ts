import mongoose, { model } from "mongoose";
import { LocationSchema, LocationType } from "./schema";

export default mongoose.models.Location || 
    model <LocationType> ("Location", LocationSchema);