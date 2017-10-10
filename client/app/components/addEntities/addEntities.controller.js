class AddEntitiesController {
	constructor($state, EntityService) {
		"ngInject"
		this.state = $state;
		this.name = 'addEntities';
		this.EntityService = EntityService;
		this.entityLst = this.EntityService.getEntities();
		this.searchResult = [];
		this.searchTxt = '';
	}

	searchEntity() {
		let txt = this.searchTxt;
		angular.forEach(this.EntityService.getEntities(), (ele, idx) => {
			let e = angular.copy(ele);
			let r = ele.name.indexOf(txt);
			if(r === 0)
			{
				this.searchResult.push(ele);
			}
		});
		this.entityLst = this.searchResult;
		this.searchResult = [];
	};

	connectEntities() {
		let arr = this.EntityService.getEntities();
		this.EntityService.updateEntities(arr);
		this.state.go('entitiesConnected');
	};
}

export default AddEntitiesController;
