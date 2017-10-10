import angular from 'angular';
import Home from './home/home';
import AddEntities from './addEntities/addEntities';
import EntitiesConnected from './entitiesConnected/entitiesConnected';

let componentModule = angular.module('app.components', [
  Home,
  AddEntities,
  EntitiesConnected
])

.name;

export default componentModule;
