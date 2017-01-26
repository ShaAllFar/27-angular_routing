'use strict';

require('./lib/test-setup.js');

const angular = require('angular');

describe('Home Controller', function(){
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.homeCtrl = new $controller('HomeController');
    });
  });
  describe('Initial Property', () => {
    it('title property should equal mi casa es su casa', () => {
      expect(this.homeCtrl.title).toEqual('mi casa es su casa');
    });
  });
});
