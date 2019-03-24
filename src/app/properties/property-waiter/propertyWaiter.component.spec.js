describe('PropertyWaiter', () => {
  let $componentController, $httpBackend;

  beforeEach(module('property'));

  describe('Methods', () => {

    beforeEach(inject((_$componentController_, _$httpBackend_) => {
      $componentController = _$componentController_;
      $httpBackend = _$httpBackend_;
    }));

    it('should post the property data to "app/properties" when creating a new property.', () => {
      const propertyToBeCreated = {
        number: '123456789-000',
        makeAndModel: 'Banana',
        type: 'Phone'
      };
      const bindings = {};
      const ctrl = $componentController('propertyWaiter', null, bindings);

      ctrl.newProperty.number = propertyToBeCreated.number;
      ctrl.newProperty.makeAndModel = propertyToBeCreated.makeAndModel;
      ctrl.newProperty.type = propertyToBeCreated.type;

      $httpBackend.expectPOST(/api\/properties/, propertyToBeCreated).respond(propertyToBeCreated);
      ctrl.create();
      $httpBackend.flush();
    });

    
    it('should put the new property data to "api/properties" when editing an existing property.', () => {
      const propertyToBeEdited = {
        number: '123456789-123',
        makeAndModel: 'Banana',
        type: 'Phone'
      };
      const editedProperty = {
        number: '123456789-456',
        makeAndModel: 'Orange',
        type: 'Smart Phone'
      };
      const bindings = { property: propertyToBeEdited };
      const ctrl = $componentController('propertyWaiter', null, bindings);

      ctrl.property.number = editedProperty.number;
      ctrl.property.makeAndModel = editedProperty.makeAndModel;
      ctrl.property.type = editedProperty.type;

      $httpBackend.expectPUT(/api\/properties/, editedProperty).respond(editedProperty);
      ctrl.edit();
      $httpBackend.flush();
    });

    it('should call the "onClose" callback once it performs the creating function.', () => {
      $httpBackend.whenPOST(/api\/properties/).respond({});

      const onCloseSpy = jasmine.createSpy('onClose');
      const bindings = { onClose: onCloseSpy };
      const ctrl = $componentController('propertyWaiter', null, bindings);

      ctrl.create();
      $httpBackend.flush();
      expect(onCloseSpy).toHaveBeenCalled();
    });

    it('should call the "onClose" callback once it performs the editing function.', () => {
      $httpBackend.whenPUT(/api\/properties/).respond({});

      const onCloseSpy = jasmine.createSpy('onClose');
      const bindings = { onClose: onCloseSpy };
      const ctrl = $componentController('propertyWaiter', null, bindings);

      ctrl.edit();
      $httpBackend.flush();
      expect(onCloseSpy).toHaveBeenCalled();
    });

  });

  xdescribe('Views', () => {

    it('should have a form to create a new property.', () => {

    });

    describe('Property waiter requires user to fill out necessary fields when creating a new property.', () => {

      it('should NOT enable the creating button if user doesn\'t provide the name.', () => {

      });

      it('should NOT enable the creating button if user doesn\'t provide the make.', () => {

      });

      it('should NOT enable the creating button if user doesn\'t provide the model.', () => {

      });

      it('should NOT enable the creating button if user doesn\'t provide the type.', () => {

      });

      it('should NOT enable the creating button if user doesn\'t provide the purchase date.', () => {

      });

      it('should NOT enable the creating button if user doesn\'t provide the cost.', () => {

      });

      it('should NOT enable the creating button if user doesn\'t provide the custodian.', () => {

      });

      it('should NOT enable the creating button if user doesn\'t provide the location.', () => {

      });

      it('should enable the creating button when all required fields are filled out.', () => {

      });

    });

    xdescribe('Property waiter can edit an existing property.', () => {

    });

  });

});