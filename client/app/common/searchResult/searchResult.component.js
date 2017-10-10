import template from './searchResult.html';
import controller from './searchResult.controller';
import './searchResult.scss';

let searchResultComponent = {
  bindings: {
    'entities': '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default searchResultComponent;
