const express = require('express');

describe('Our application', function () {
  var app;
  var date;

  this.timeout(5000);

  before(function (done) {
    app = express();
    app.listen(3000, function (err) {
      if (err) {
        return done(err);
      }
      done();
    });
  });

  beforeEach(function () {
    date = new Date();
  });

  after(function () {
    console.log('All of our tests are complete');
  });

  afterEach(function () {
    //console.log(`The date for that one was ${date}.`);
  });

  it('understands basic math', function (done) {
    if (2 == 1) {
      throw new Error('not sure how that happened');
    }
    done();
  });

  it('Should understand booleans', function () {});

  describe('Going Deeper', function () {
    before(() => {
      console.log('deeper');
    });

    it('should perform basic math', function (done) {
      if (1 + 1 != 2) {
        throw new Error('oops');
      }
      done();
    });
  });
});
