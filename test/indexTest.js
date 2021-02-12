const expect = require('chai').expect;
const request = require('supertest');
const express = require('express');

//chai.use('chaihttp');
function createApp() {
  app = express();

  return app;
}

describe('Our server', function () {
  var app;

  before(function (done) {
    app = createApp();
    app.listen(function (err) {
      if (err) {
        done(err);
      }
      done();
    });
  });

  it('should redirect to spotify', function () {
    request(app)
      .get('http://localhost:8080/login')
      .end(function (err, res) {
        // expect(res).to.redirectTo(/https:\/\/accounts\.spotify\.com\/./);
        expect(res).to.have.param('client_id');
        expect(res).to.have.param('response_type');
        expect(res).to.have.param('scope');
        expect(res).to.have.param('redirect_ui');
        done(); // <= Call done to signal callback end
      });
  });
});
