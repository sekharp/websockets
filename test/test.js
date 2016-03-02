var request = require("request"),
    assert = require('assert'),
    base_url = "http://localhost:3000/";

describe("Ask the Audience Server", function() {

  describe("GET /", function() {
    request.get(base_url, function(error, response, body) {
      assert.equal(200, response.statusCode);
      done();
    });
  });

});
