// ./test/schema-expector_test.js

'use strict';
const chakram = require('chakram');
const expect = chakram.expect;

const schema_expector = require('../lib/schema-expector.js');

const images = [{updated_at: '2018-02-02T17:03:46.904Z', _id: '5a7498198905e800076b1cfb'}, {updated_at: '2018-02-02T17:03:46.904Z', _id: '5a7498198905e800076b1cfb'},
    {updated_at: '2018-02-02T16:54:02.985Z', _id: '5a7497ab78c22400072fd2e6'}
];
const val = [];
/**
 * Manually invoke:
 *
 * LOG=OFF ./node_modules/.bin/mocha test/utils_test.js --exit --silent
 *
 * or
 *
 * npm run 1test -g test/utils_test.js --silent
 */
describe('Utils', function() {
    let req = {
        body: {
            a: 'a',
            b: 'b',
            c: 'c'
        },
        params: {
            a: 'a',
            b: 'b',
            c: 'c'
        }
    };

    let res = {
        status: function(param) {
            return this;
        },
        json: function(param) {
            return param;
        }
    };

    /* Disable - start */
    let write;
    let log;
    let output = '';


    // restore process.stdout.write() and console.log() to their previous glory
    let cleanup = () => {
        process.stdout.write = write;
        console.log = log;
    };

    beforeEach(() => {
        // store these functions to restore later because we are messing with them
        write = process.stdout.write;
    log = console.log;

    // our stub will concatenate any output to a string
    process.stdout.write = console.log = s => {
        output += s;
    };
    if (output !== '') {
        console.log('done');
    }
});

    // restore after each test
    afterEach(cleanup);
    /* Disable - end */



    describe('schema_expector', function() {
        let str = 59;
        it ('body request check', () => {
            let body = {   asset_id: 'c3073f31-c690-478f-bdb5-2b260fbfd986',
                updated_at: '2018-03-28T14:47:09.481Z',
                created_at: '2018-03-28T14:47:08.709Z',
                eid: '5a6f144e8abd9a0007504210',
                type: 'profile',
                ssl: 'https://c690-478f-bdb5-2b260fbfd986-cat-in-the-hat.jpg',
                alt: 'Ts tx Tex tex tex Sector - This is a cat smiling ',
                name: 'Cat in the hat',
                order: 1,
                image_id: 'test/5-2b260fbfd986-cat-in-the-hat' };
            let upload_response_schema = [{
                asset_id:   {type: 'string', required: true},
                updated_at: {type: 'string', required: true},
                eid:        {type: 'string', required: true},
                alt:        {type: 'string', required: true},
                name:       {type: 'string', required: true},
                ssl:        {type: 'string', required: true},
                image_id:   {type: 'string', required: true},
                type:       {type: 'string', required: true},
                created_at: {type: 'string', required: true},
                order:      {type: 'number', required: true}
            }];
            schema_expector(upload_response_schema, expect, body);
        });



    });
});
