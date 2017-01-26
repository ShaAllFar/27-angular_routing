'use strict';

require('./lib/test-setup.js');

const angular = require('angular');
require('angular-mocks');


describe('Gallery Controller', function(){
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.galleryCtrl = new $controller('GalleryController');
    });
  });
  describe('Intial Property', () => {
    it('title property should equal gallery', () => {
      expect(this.galleryCtrl.title).toEqual('gallery');
    });
  });
});
