/**
 * @file Tests for lib/index.js
 */


const chai = require('chai');


const should = chai.should();


const response = require('../lib/index.js');


describe('response', () => {
  it('should export a function', () => {
    response.should.be.a('Function');
  });

  it('should return an object', () => {
    response({}).should.be.an('Object');
  });
});
