# Chai-Verify #

Chai-verify is fast, easy way to perform small to medium object comparisons when you want the readability of Approvals without the overhead.

## Setup ##

Installing chai-verify:

```javascript
npm install chai-verify --save-dev
```

Chai-verify has a peer dependency of the Chai assertion library.  If you don't have chai installed, then install this way instead:

```javascript
npm install chai chai-verify --save-dev
```

## Usage ##

### Setting up for your tests ###

In node, do the following in your test file:

```javascript
const chai = require('chai');
const chaiVerify = require('chai-verify');

chai.use(chaiVerify);
```

For testing in the browser, do the following:

```html
<script src="/path/to/chai"></script>
<script src="/path/to/chai-verify"></script>
```

### Verifying values in your tests ###

Using the assert API, you can do the following:

```javascript
it('verifies with assert', function () {
    const badValue = { bad: 'value' };
    const expected = { foo: 'bar' };

    assert.verify(badValue, expected);
});
```

Using the expect API, you can do the following instead:

```javascript
it('verifies with expect', function () {
    const badValue = { bad: 'value' };
    const expected = { foo: 'bar' };

    expect(badValue).to.be.verifiedAs(expected);
});
```

Both of these cases will output the following error:

```
Actual and expected values do not match, received values as follows
===================================================================

Actual
------
{
    "bad": "value"
}

Expected
--------
{
    "foo": "bar"
}
```