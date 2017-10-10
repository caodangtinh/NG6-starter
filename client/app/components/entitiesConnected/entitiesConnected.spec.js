import EntitiesConnectedModule from './entitiesConnected';
import EntitiesConnectedController from './entitiesConnected.controller';
import EntitiesConnectedComponent from './entitiesConnected.component';
import EntitiesConnectedTemplate from './entitiesConnected.html';

describe('EntitiesConnected', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EntitiesConnectedModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EntitiesConnectedController();
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
      expect(EntitiesConnectedTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = EntitiesConnectedComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(EntitiesConnectedTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(EntitiesConnectedController);
    });
  });
});
