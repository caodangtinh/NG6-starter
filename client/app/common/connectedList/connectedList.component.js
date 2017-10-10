import template from './connectedList.html';
import controller from './connectedList.controller';
import './connectedList.scss';

let connectedListComponent = {
	bindings: {
		'connected': '<'
	},
	template,
	controller,
	controllerAs: 'vm'
};

export default connectedListComponent;
