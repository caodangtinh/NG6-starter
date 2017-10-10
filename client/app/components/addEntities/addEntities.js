import angular from 'angular';
import uiRouter from 'angular-ui-router';
import addEntitiesComponent from './addEntities.component';
import EntityService from '../../services/EntityService';

let addEntitiesModule = angular.module('addEntities', [
	uiRouter
])

	.config(($stateProvider, $urlRouterProvider) => {
		"ngInject";

		$stateProvider
			.state('addEntities', {
				url: '/addEntities',
				component: 'addEntities'
			});
	})

	.component('addEntities', addEntitiesComponent)

	.factory('EntityService', EntityService)

	.name;

export default addEntitiesModule;
