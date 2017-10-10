import ConnectedListModule from './connectedList';
import ConnectedListController from './connectedList.controller';
import ConnectedListComponent from './connectedList.component';
import ConnectedListTemplate from './connectedList.html';

describe('ConnectedList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ConnectedListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ConnectedListController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ConnectedListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ConnectedListComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ConnectedListTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ConnectedListController);
    });
  });
});
