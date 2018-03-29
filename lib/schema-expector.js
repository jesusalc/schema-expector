// ./lib/schema-expector_test.js

'use strict';

const schema_expector = (schema, expect, body) => {
    expect(body).to.have.schema(schema);
    for (let key in schema) {
        // skip loop if the property is from prototype
        if (!schema.hasOwnProperty(key)) continue;

        // eslint-disable-next-line security/detect-object-injection
        let obj = schema[key];
        for (let prop in obj) {
            // skip loop if the property is from prototype
            if (!obj.hasOwnProperty(prop)) continue;

            // your code
            // alert(prop + " = " + obj[prop]);
            // console.log(' key name', prop);
            // console.log(' key values', obj[prop]);
            // console.log(' .call out inside value ', obj[prop].required);

            // eslint-disable-next-line security/detect-object-injection
            if (obj[prop].required) {
                expect(body).to.have.property(prop);
                // eslint-disable-next-line security/detect-object-injection
                expect(body[prop]).to.be.a(obj[prop].type);
            } else {
                expect(body).not.to.have.property(prop);
            }
        } //for
    } //for
};

module.exports = schema_expector;
