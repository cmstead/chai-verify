const chai = require('chai');
const chaiVerify = require('../chai-verify');

chai.use(chaiVerify);

const assert = chai.assert;
const expect = chai.expect;

describe('Chai-Verify', function () {

    describe('assert.verify', function () {
        it('properly fails when verifying two unmatched values', function () {
            const badValue = null;
            const expected = { foo: 'bar' };

            try {
                assert.verify(badValue, expected);
                throw new Error('Verify must throw');
            } catch (e) {
                const expectedMessage = '\n\nActual and expected values do not match, received values as follows\n===================================================================\n\nActual\n------\nnull\n\nExpected\n--------\n{\n    "foo": "bar"\n}';
                assert.equal(e.message, expectedMessage);
            }
        });
    });

    describe('expect().to.be.verifiedAs()', function () {
        it('properly fails when verifying two unmatched values', function () {
            const badValue = {};
            const expected = { foo: 'bar' };

            try {
                expect(badValue).to.be.verifiedAs(expected);
                // assert.verify(badValue, expected);
                throw new Error('verifiedAs must throw');
            } catch (e) {
                const expectedMessage = '\n\nActual and expected values do not match, received values as follows\n===================================================================\n\nActual\n------\n{}\n\nExpected\n--------\n{\n    "foo": "bar"\n}';
                assert.equal(e.message, expectedMessage);
            }
        });
    });

    describe.skip('Example -- Available only to see output', function () {
        it('verifies with assert', function () {
            const badValue = { bad: 'value' };
            const expected = { foo: 'bar' };

            assert.verify(badValue, expected);
        });
    });

});