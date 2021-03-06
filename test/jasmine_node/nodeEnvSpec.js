'use strict';

describe('The node.js usage', function() {
  var CamundaClient;

  it('does not blow when loading', function() {
    expect(function() {
      CamundaClient = require('./../../lib/index');
    }).not.toThrow();
  });


  it('has to be configured', function() {
    expect(function() {
      new CamundaClient();
    }).toThrow();
  });


  describe('configuration', function() {
    it('needs a apiUri property', function() {
      expect(function() {
        new CamundaClient({});
      }).toThrow();
    });



  });
});
