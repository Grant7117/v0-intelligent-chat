const assert = require('chai').assert;
const myFunctions = require('../index.js');

describe('myFunctions', () => {
  it('should return a greeting', () => {
    const result = myFunctions.hello();
    assert.equal(result, 'Hello from Firebase!');
  });
});
