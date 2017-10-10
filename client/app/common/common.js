import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import SearchResult from './searchResult/searchResult';
import ConnectedList from './connectedList/connectedList';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  SearchResult,
  ConnectedList
])
  
.name;

export default commonModule;
