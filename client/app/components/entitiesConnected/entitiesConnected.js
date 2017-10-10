import angular from 'angular';
import uiRouter from 'angular-ui-router';
import entitiesConnectedComponent from './entitiesConnected.component';
import EntityService from '../../services/EntityService';

let entitiesConnectedModule = angular.module('entitiesConnected', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('entitiesConnected', {
      url: '/entitiesConnected',
      component: 'entitiesConnected'
    });
})

.component('entitiesConnected', entitiesConnectedComponent)

.factory('EntityService', EntityService)

.name;

export default entitiesConnectedModule;
