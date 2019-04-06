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
      const bindings = { mode: 'CREATE' };
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
      const bindings = { property: propertyToBeEdited, mode: 'EDIT' };
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
      const bindings = { onClose: onCloseSpy, mode: 'CREATE' };
      const ctrl = $componentController('propertyWaiter', null, bindings);

      ctrl.create();
      $httpBackend.flush();
      expect(onCloseSpy).toHaveBeenCalled();
    });

    it('should call the "onClose" callback once it performs the editing function.', () => {
      $httpBackend.whenPUT(/api\/properties/).respond({});

      const onCloseSpy = jasmine.createSpy('onClose');
      const bindings = { onClose: onCloseSpy, mode: 'EDIT' };
      const ctrl = $componentController('propertyWaiter', null, bindings);

      ctrl.edit();
      $httpBackend.flush();
      expect(onCloseSpy).toHaveBeenCalled();
    });

  });

  describe('Views', () => {

    describe('Property waiter provides a form that contains the fields against the property attributes', () => {
      let $compile, $rootScope;
      let propertyWaiter;

      beforeEach(inject((_$compile_, _$rootScope_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
      }));

      beforeEach(() => {
        propertyWaiter = $compile('<property-waiter mode="CREATE"></property-waiter>')($rootScope);
        $rootScope.$digest();
      });

      it('should have a form to create a new property.', () => {
        formElem = propertyWaiter.find('form');
        expect(formElem).toBeDefined();
        expect(formElem.prop('id')).toEqual('waiterForm');
      });

      it('should have a text input field for user to type the number.', () => {
        const nameInputElem = propertyWaiter.find('form').find('#number');
        expect(nameInputElem.prop('id')).toEqual('number');
        expect(nameInputElem.prop('type')).toEqual('text');
        expect(nameInputElem.prop('name')).toEqual('number');
        expect(nameInputElem.prop('required')).toBeTruthy();
      });

      it('should have a text input field for user to type the make.', () => {
        const makeInputElem = propertyWaiter.find('form').find('#make');
        expect(makeInputElem).toBeDefined();
        expect(makeInputElem.prop('id')).toEqual('make');
        expect(makeInputElem.prop('type')).toEqual('text');
        expect(makeInputElem.prop('name')).toEqual('make');
        expect(makeInputElem.prop('required')).toBeTruthy();
      });

      it('should have a text input field for user to type the model.', () => {
        const modelInputElem = propertyWaiter.find('form').find('#model');
        expect(modelInputElem).toBeDefined();
        expect(modelInputElem.prop('id')).toEqual('model');
        expect(modelInputElem.prop('type')).toEqual('text');
        expect(modelInputElem.prop('name')).toEqual('model');
        expect(modelInputElem.prop('required')).toBeTruthy();
      });

      it('should have a text input field for user to type the property type.', () => {
        const typeInputElem = propertyWaiter.find('form').find('#type');
        expect(typeInputElem).toBeDefined();
        expect(typeInputElem.prop('id')).toEqual('type');
        expect(typeInputElem.prop('type')).toEqual('text');
        expect(typeInputElem.prop('name')).toEqual('type');
      });

      it('should have a text input field for user to type the cost.', () => {
        const costInputElem = propertyWaiter.find('form').find('#cost');
        expect(costInputElem).toBeDefined();
        expect(costInputElem.prop('id')).toEqual('cost');
        expect(costInputElem.prop('type')).toEqual('number');
        expect(costInputElem.prop('name')).toEqual('cost');
        expect(costInputElem.prop('required')).toBeTruthy();
      });

      it('should have a text input field for user to type the present value.', () => {
        const presentValueInputElem = propertyWaiter.find('form').find('#presentValue');
        expect(presentValueInputElem).toBeDefined();
        expect(presentValueInputElem.prop('id')).toEqual('presentValue');
        expect(presentValueInputElem.prop('type')).toEqual('number');
        expect(presentValueInputElem.prop('name')).toEqual('presentValue');
      });

      it('should have a text input field for user to type the purchase date.', () => {
        const purchaseDateInputElem = propertyWaiter.find('form').find('#purchaseDate');
        expect(purchaseDateInputElem).toBeDefined();
        expect(purchaseDateInputElem.prop('id')).toEqual('purchaseDate');
        expect(purchaseDateInputElem.prop('type')).toEqual('date');
        expect(purchaseDateInputElem.prop('name')).toEqual('purchaseDate');
        expect(purchaseDateInputElem.prop('required')).toBeTruthy();
      });

      it('should have a text input field for user to type the limitation of age.', () => {
        const ageLimitInputElem = propertyWaiter.find('form').find('#ageLimit');
        expect(ageLimitInputElem).toBeDefined();
        expect(ageLimitInputElem.prop('id')).toEqual('ageLimit');
        expect(ageLimitInputElem.prop('type')).toEqual('number');
        expect(ageLimitInputElem.prop('name')).toEqual('ageLimit');
      });

      it('should have a text input field for user to type the custodian.', () => {
        const custodianInputElem = propertyWaiter.find('form').find('#custodian');
        expect(custodianInputElem).toBeDefined();
        expect(custodianInputElem.prop('id')).toEqual('custodian');
        expect(custodianInputElem.prop('type')).toEqual('text');
        expect(custodianInputElem.prop('name')).toEqual('custodian');
        expect(custodianInputElem.prop('required')).toBeTruthy();
      });

      it('should have a text input field for user to type the user.', () => {
        const userInputElem = propertyWaiter.find('form').find('#user');
        expect(userInputElem).toBeDefined();
        expect(userInputElem.prop('id')).toEqual('user');
        expect(userInputElem.prop('type')).toEqual('text');
        expect(userInputElem.prop('name')).toEqual('user');
      });

      it('should have a text input field for user to type the location.', () => {
        const locationInputElem = propertyWaiter.find('form').find('#location');
        expect(locationInputElem).toBeDefined();
        expect(locationInputElem.prop('id')).toEqual('location');
        expect(locationInputElem.prop('type')).toEqual('text');
        expect(locationInputElem.prop('name')).toEqual('location');
        expect(locationInputElem.prop('required')).toBeTruthy();
      });

      it('should have a text input field for user to type the placement.', () => {
        const placementInputElem = propertyWaiter.find('form').find('#placement');
        expect(placementInputElem).toBeDefined();
        expect(placementInputElem.prop('id')).toEqual('placement');
        expect(placementInputElem.prop('type')).toEqual('text');
        expect(placementInputElem.prop('name')).toEqual('placement');
      });

    });

    describe('Property waiter provides two mode: "EDIT" and "CREATE" for user to edit an existing property or create a new property.', () => {

      let $compile, $rootScope, $exceptionHandler;
      let propertyWaiter;

      beforeEach(inject((_$compile_, _$rootScope_, _$exceptionHandler_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $exceptionHandler = _$exceptionHandler_;
      }));

      it('should require a attribute "mode" to tell it which mode it should be.', (done) => {
        try {
          propertyWaiter = $compile('<property-waiter></property-waiter>')($rootScope);
          fail('The attribute: "mode" should be required.');
        } catch (error) {
          expect($exceptionHandler.errors.length).toEqual(1);
          expect($exceptionHandler.errors).toContain("The attribute \"mode\" for property-waiter is required.");
          done();
        }
      });

      xdescribe('In the "EDIT" mode, ', () => {

        let $compile, $rootScope;
        let propertyWaiter;
  
        beforeEach(inject((_$compile_, _$rootScope_) => {
          $compile = _$compile_;
          $rootScope = _$rootScope_;
        }));

        it('should expect an existing property to be served.', () => {
          propertyWaiter = $compile('<property-waiter></property-waiter>')($rootScope);
        });

        it('should present the property name in the name field.', () => {
          
        });

        it('should present the property _ in the _ field.', () => {
          
        });

        it('should present the property _ in the _ field.', () => {
          
        });

        it('should present the property _ in the _ field.', () => {
          
        });

        it('should present the property _ in the _ field.', () => {
          
        });

        it('should present the property _ in the _ field.', () => {
          
        });

        it('should show the edit button.', () => {
          
        });

        describe('should enable the edit button only when any of field is changed.', () => {
          
        });

        it('should hide the create button.', () => {
          
        });

        it('should show the cancel button.', () => {
          
        });

      });

      xdescribe('In the "CREATE" mode, ', () => {
        xit('should have a submit button for user to create a new property.', () => {
          const submitButton = propertyWaiter.find('form').find('#formSubmit');
          expect(submitButton).toBeDefined();
          expect(submitButton.prop('id')).toEqual('formSubmit');
          expect(submitButton.prop('type')).toEqual('submit');
          expect(submitButton.text()).toEqual('Create');
        });
      });

    });

    xdescribe('Property waiter requires user to fill out necessary fields when creating a new property.', () => {
      
      let $compile, $rootScope;
      let propertyWaiter;

      beforeEach(inject((_$compile_, _$rootScope_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
      }));

      beforeEach(() => {
        propertyWaiter = $compile('<property-waiter></property-waiter>')($rootScope);
        $rootScope.$digest();
      });

      it('should NOT enable the creating button if user doesn\'t provide the name.', () => {
        const nameInputElem = propertyWaiter.find('form').find('#name');
        nameInputElem.value('');
        const createButton = propertyWaiter.find('form')
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