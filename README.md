# schema-expector
Schema Inspector for Mocha Chai

  
```
$ npm install schema-expector --save-dev
$ npm test
```


# Sample use 
    const chakram = require('chakram');
    const expect = chakram.expect;
    const schema_expector = require('schema-expector');

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