import AddEntitiesModule from './addEntities';
import AddEntitiesController from './addEntities.controller';
import AddEntitiesComponent from './addEntities.component';
import AddEntitiesTemplate from './addEntities.html';

describe('AddEntities', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AddEntitiesModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AddEntitiesController();
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
      expect(AddEntitiesTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = AddEntitiesComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(AddEntitiesTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(AddEntitiesController);
    });
  });
});
