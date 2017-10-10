class EntitiesConnectedController {
	constructor(EntityService) {
		"ngInject"
		this.name = 'entitiesConnected';
		this.EntityService = EntityService;
		this.totalAdded = 0;
		this.entitiesConnected = [];
		angular.forEach(this.EntityService.getEntities(), (ele) => {
			if (ele.status === '1') {
				this.totalAdded += 1;
				this.entitiesConnected.push(ele);
			}
		});
		this.showLst = 0;
		this.showFlg = '';
	}

	toogleEntitiesLst() {
		if (this.showLst === 0)
		{
			this.showLst = 1;
			this.showFlg = 'showLst';
		}
		else if (this.showLst === 1)
		{
			this.showLst = 0;
			this.showFlg = '';
		}
	}
}

export default EntitiesConnectedController;
