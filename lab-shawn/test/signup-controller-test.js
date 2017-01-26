'use strict';

require('./lib/test-setup.js');

const angular = require('angular');

describe('Signup Controller', function(){
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.signupCtrl = new $controller('SignupController');
    });
  });
  describe('Initial Property', () => {
    it('title property should equal sign all the way up', () => {
      expect(this.signupCtrl.title).toEqual('sign all the way up');
    });
  });
});
