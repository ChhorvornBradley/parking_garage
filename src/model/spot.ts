import { SpotType } from "./spotType";

export interface Spot{
    position: number;
    type: SpotType;
    occupied: boolean;
}