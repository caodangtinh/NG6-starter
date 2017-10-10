import angular from 'angular';
import uiRouter from 'angular-ui-router';
import connectedListComponent from './connectedList.component';

let connectedListModule = angular.module('connectedList', [
  uiRouter
])

.component('connectedList', connectedListComponent)

.name;

export default connectedListModule;
