import { expect } from 'smartchai';
import fs from 'fs';
import path from 'path';

import {RowHandler } from './rowHandler'
import { Row } from '../model'
import {AvailableSpots} from './availableSpots'
    describe('It should return 12 spaces total/cycle', () => {
        it('7 total spots open', async () => {
            // setup
            const expectedArg = new AvailableSpots();
            expectedArg.cycle = 1;
            expectedArg.compact = 1;
            expectedArg.large = 10;
            expectedArg.bus = 2;
            const data = getRowPositiveBus();
            const target = new RowHandler(5);

            const actualArg = target.findOpenSpots(data);

            // assert
            expect(actualArg.cycle).to.be.equal(expectedArg.cycle);
            expect(actualArg.compact).to.be.equal(expectedArg.compact);
            expect(actualArg.large).to.be.equal(expectedArg.large);
            expect(actualArg.bus).to.be.equal(expectedArg.bus);
        });
    });
    describe('It should return 6 spaces total/cycle', () => {
        it('7 total spots open', async () => {
            // setup
            const expectedArg = new AvailableSpots();
            expectedArg.cycle = 1;
            expectedArg.compact = 1;
            expectedArg.large = 4;
            expectedArg.bus = 0;
            const data = getRowNegativeBus();
            const target = new RowHandler(5);

            const actualArg = target.findOpenSpots(data);

            // assert
            expect(actualArg.cycle).to.be.equal(expectedArg.cycle);
            expect(actualArg.compact).to.be.equal(expectedArg.compact);
            expect(actualArg.large).to.be.equal(expectedArg.large);
            expect(actualArg.bus).to.be.equal(expectedArg.bus);
        });
    });
    function getRowPositiveBus(): Row {
        const fileData = fs.readFileSync(path.join(__dirname, '../../mocks/RowBusPositive.json'));
        const object = JSON.parse(fileData.toString());
        return object;
    }
    function getRowNegativeBus(): Row {
        const fileData = fs.readFileSync(path.join(__dirname, '../../mocks/RowBusNegative.json'));
        const object = JSON.parse(fileData.toString());
        return object;
    }