import { AvailableSpots } from "./availableSpots";
import { Row, Garage } from "../model";
import { RowHandler } from "./rowHandler";

export class SpaceFinder{
    constructor(private readonly bussize: number){

    }

    findAllSpots(garage: Garage) : AvailableSpots {
        let allSpots = this.findAllAvailbleSpots(garage);
        let spots : AvailableSpots = new AvailableSpots();
        allSpots.forEach((rowSpot) => {
            spots.bus += rowSpot.bus;
            spots.large += rowSpot.large;
            spots.compact += rowSpot.compact;
            spots.cycle += rowSpot.cycle;
            
        });
        console.log(spots);
        return spots;
    }

    private findAllAvailbleSpots(garage : Garage) : AvailableSpots[] {
        let spots : AvailableSpots[] = [];

        garage.rows.forEach(row =>
            spots.push(this.findSpotsPerRow(row)));

        return spots;
    }

    private findSpotsPerRow(row : Row) : AvailableSpots {
        var rowHander = new RowHandler(this.bussize);
        return rowHander.findOpenSpots(row);
    }
}