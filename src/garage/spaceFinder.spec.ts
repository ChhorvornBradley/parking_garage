
import { expect } from 'smartchai';
import fs from 'fs';
import path from 'path';

import {SpaceFinder} from './spaceFinder'
import { Garage } from '../model'
import {AvailableSpots} from './availableSpots'
    describe('It should return 6 spaces total/cycle', () => {
        it('7 total spots open', async () => {
            // setup
            const expectedArg = new AvailableSpots();
            expectedArg.cycle = 2;
            expectedArg.compact = 2;
            expectedArg.large = 14;
            expectedArg.bus = 2;
            const data = getGarage();
            const target = new SpaceFinder(5);

            const actualArg = target.findAllSpots(data);

            // assert
            expect(actualArg.cycle).to.be.equal(expectedArg.cycle);
            expect(actualArg.compact).to.be.equal(expectedArg.compact);
            expect(actualArg.large).to.be.equal(expectedArg.large);
            expect(actualArg.bus).to.be.equal(expectedArg.bus);
        });
    });
   
    function getGarage(): Garage {
        const fileData = fs.readFileSync(path.join(__dirname, '../../mocks/garageSample.json'));
        const object = JSON.parse(fileData.toString());
        return object;
    }