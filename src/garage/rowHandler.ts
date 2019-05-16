import {Row, Spot, SpotType} from '../model'
import {AvailableSpots} from './availableSpots'

export class RowHandler{
    constructor(private busSize : number){}
    findOpenSpots(row: Row){
        let availables = new AvailableSpots();
        var calcSpot = 
        row.spots.reduce( (largerunning, spot) => { 
            if(!spot.occupied){
                if((<any>SpotType)[spot.type] === SpotType.large){
                    ++largerunning;
                    ++availables.large;
                } else if((<any>SpotType)[spot.type] === SpotType.compact){
                    largerunning = 0;
                    ++availables.compact;
                }else if((<any>SpotType)[spot.type] === SpotType.motorcycle){
                    ++availables.cycle;
                    largerunning = 0;
                }
                if(largerunning == this.busSize){
                    ++availables.bus;
                    largerunning = 0;
                }
            }  
            return largerunning;
            
        },0);
console.log(availables);
        return availables;
    }
}