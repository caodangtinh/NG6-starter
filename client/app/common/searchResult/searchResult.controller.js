class SearchResultController {
	constructor() {
		"ngInject"
		this.name = 'searchResult';
	}

	selectEntity(ele) {
		if (ele.status === '1')
		{
			ele.status = '0';
		}
		else if (ele.status === '0')
		{
			ele.status = '1';
		}
	}
}

export default SearchResultController;
