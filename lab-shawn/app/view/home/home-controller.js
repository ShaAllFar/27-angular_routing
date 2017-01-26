'use strict';

require('./home.scss');

module.exports = ['$log', HomeController];

function HomeController($log){
  $log.debug('HomeController');

  this.title = 'mi casa es su casa';
}
