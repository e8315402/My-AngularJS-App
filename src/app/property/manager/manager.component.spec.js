const propertyWaiterTestingHelper = {
  fulfillTable: (newProperty, prop) => {
    newProperty.number = prop.number;
    newProperty.name = prop.name;
    newProperty.make = prop.make;
    newProperty.model = prop.model;
    newProperty.type = prop.type;
    newProperty.cost = prop.cost;
    newProperty.presentValue = prop.presentValue;
    newProperty.purchaseDate = prop.purchaseDate;
    newProperty.ageLimit = prop.ageLimit;
    newProperty.custodian = prop.custodian;
    newProperty.user = prop.user;
    newProperty.location = prop.location;
    newProperty.placement = prop.placement;
  }
}

describe('PropertyWaiter', () => {
  let $componentController, $httpBackend;

  beforeEach(module('property'));

  describe('\'s component', () => {
    describe('is able to create a new property', () => {
      let $componentController;
      let propertyWaiterCtrl;

      beforeEach(inject((_$componentController_) => {
        $componentController = _$componentController_;
      }));

      beforeEach(() => {
        propertyWaiterCtrl = $componentController('propertyWaiter', null, null);
      });

      it('should be able to input property number.', () => {
        const expectedPropNumber = '3845692-1774561';
        expect(propertyWaiterCtrl.newProperty.number).toBeDefined();
        propertyWaiterCtrl.newProperty.number = expectedPropNumber;
        expect(propertyWaiterCtrl.newProperty.number).toEqual(expectedPropNumber);
      });

      it('should be able to input property name.', () => {
        const expectedPropName = 'My Apple';
        expect(propertyWaiterCtrl.newProperty.name).toBeDefined();
        propertyWaiterCtrl.newProperty.name = expectedPropName;
        expect(propertyWaiterCtrl.newProperty.name).toEqual(expectedPropName);
      });

      it('should be able to input property make.', () => {
        const expectedPropMake = 'Banana';
        expect(propertyWaiterCtrl.newProperty.make).toBeDefined();
        propertyWaiterCtrl.newProperty.make = expectedPropMake;
        expect(propertyWaiterCtrl.newProperty.make).toEqual(expectedPropMake);
      });

      it('should be able to input property model.', () => {
        const expectedPropModel = 'FAS 123';
        expect(propertyWaiterCtrl.newProperty.model).toBeDefined();
        propertyWaiterCtrl.newProperty.model = expectedPropModel;
        expect(propertyWaiterCtrl.newProperty.model).toEqual(expectedPropModel);
      });

      it('should be able to input property type.', () => {
        const expectedPropType = 'PC';
        expect(propertyWaiterCtrl.newProperty.type).toBeDefined();
        propertyWaiterCtrl.newProperty.type = expectedPropType;
        expect(propertyWaiterCtrl.newProperty.type).toEqual(expectedPropType);
      });

      it('should be able to input property cost.', () => {
        const expectedPropCost = 30000;
        expect(propertyWaiterCtrl.newProperty.cost).toBeDefined();
        propertyWaiterCtrl.newProperty.cost = expectedPropCost;
        expect(propertyWaiterCtrl.newProperty.cost).toEqual(expectedPropCost);
      });

      it('should be able to input property present value.', () => {
        const expectedPropPresentValue = 28000;
        expect(propertyWaiterCtrl.newProperty.presentValue).toBeDefined();
        propertyWaiterCtrl.newProperty.presentValue = expectedPropPresentValue;
        expect(propertyWaiterCtrl.newProperty.presentValue).toBe(expectedPropPresentValue);
      });

      it('should be able to input property purchase date.', () => {
        const expectedPropPurchaseDate = new Date();
        expect(propertyWaiterCtrl.newProperty.purchaseDate).toBeDefined();
        propertyWaiterCtrl.newProperty.purchaseDate = expectedPropPurchaseDate;
        expect(propertyWaiterCtrl.newProperty.purchaseDate).toEqual(expectedPropPurchaseDate);
      });

      it('should be able to input property age limit.', () => {
        const expectedPropAgeLimit = 5;
        expect(propertyWaiterCtrl.newProperty.ageLimit).toBeDefined();
        propertyWaiterCtrl.newProperty.ageLimit = expectedPropAgeLimit;
        expect(propertyWaiterCtrl.newProperty.ageLimit).toEqual(expectedPropAgeLimit);
      });

      it('should be able to input property custodian.', () => {
        const expectedPropCustodian = 'James';
        expect(propertyWaiterCtrl.newProperty.custodian).toBeDefined();
        propertyWaiterCtrl.newProperty.custodian = expectedPropCustodian;
        expect(propertyWaiterCtrl.newProperty.custodian).toEqual(expectedPropCustodian);
      });

      it('should be able to input property user.', () => {
        const expectedPropUser = 'Hank';
        expect(propertyWaiterCtrl.newProperty.user).toBeDefined();
        propertyWaiterCtrl.newProperty.user = expectedPropUser;
        expect(propertyWaiterCtrl.newProperty.user).toEqual(expectedPropUser);
      });

      it('should be able to input property location.', () => {
        const expectedPropLocation = 'Room 5747, Building ASD';
        expect(propertyWaiterCtrl.newProperty.location).toBeDefined();
        propertyWaiterCtrl.newProperty.location = expectedPropLocation;
        expect(propertyWaiterCtrl.newProperty.location).toEqual(expectedPropLocation);
      });

      it('should be able to input property placement.', () => {
        const expectedPropPlacement = 'Cabinet H';
        expect(propertyWaiterCtrl.newProperty.placement).toBeDefined();
        propertyWaiterCtrl.newProperty.placement = expectedPropPlacement;
        expect(propertyWaiterCtrl.newProperty.placement).toEqual(expectedPropPlacement);
      });

      it('should be able to create a new property.', () => {
        expect(propertyWaiterCtrl.create).toBeDefined();
        expect(typeof propertyWaiterCtrl.create).toBe('function');
      });

      describe('by property service, which is an api service access to "app/properties".', () => {
        let $httpBackend;

        beforeEach(inject((_$httpBackend_) => {
          $httpBackend = _$httpBackend_;
        }));

        it('should ask property service to send the property data.', () => {
          const propToBeCreate = {
            number: '5945561-1168462',
            name: 'Office Table',
            make: 'eMSO Company',
            model: 'Solid SSS',
            type: 'Table',
            cost: 12000,
            presentValue: 12000,
            purchaseDate: new Date(),
            ageLimit: 99,
            custodian: 'Teddy',
            user: 'Chenny',
            location: 'Office 5566, Autos.',
            placement: 'Part 3'
          };
          propertyWaiterCtrl.newProperty.number = propToBeCreate.number;
          propertyWaiterCtrl.newProperty.name = propToBeCreate.name;
          propertyWaiterCtrl.newProperty.make = propToBeCreate.make;
          propertyWaiterCtrl.newProperty.model = propToBeCreate.model;
          propertyWaiterCtrl.newProperty.type = propToBeCreate.type;
          propertyWaiterCtrl.newProperty.cost = propToBeCreate.cost;
          propertyWaiterCtrl.newProperty.presentValue = propToBeCreate.presentValue;
          propertyWaiterCtrl.newProperty.purchaseDate = propToBeCreate.purchaseDate;
          propertyWaiterCtrl.newProperty.ageLimit = propToBeCreate.ageLimit;
          propertyWaiterCtrl.newProperty.custodian = propToBeCreate.custodian;
          propertyWaiterCtrl.newProperty.user = propToBeCreate.user;
          propertyWaiterCtrl.newProperty.location = propToBeCreate.location;
          propertyWaiterCtrl.newProperty.placement = propToBeCreate.placement;

          $httpBackend.expectPOST(/api\/properties/, propToBeCreate).respond('succeed');
          propertyWaiterCtrl.create();
          $httpBackend.flush();
        });
      });

      describe('once all required fields have been filled out.', () => {

        let propToBeCreate;

        beforeEach(() => {
          propToBeCreate = {
            number: '5945561-1168462',
            name: 'Office Table',
            make: 'eMSO Company',
            model: 'Solid SSS',
            type: 'Table',
            cost: 12000,
            presentValue: 12000,
            purchaseDate: new Date(),
            ageLimit: 99,
            custodian: 'Teddy',
            user: 'Chenny',
            location: 'Office 5566, Autos.',
            placement: 'Part 3'
          };
        });

        it('should require property number.', () => {
          propToBeCreate.number = null;
          propertyWaiterTestingHelper.fulfillTable(propertyWaiterCtrl.newProperty, propToBeCreate);
          const expectedErrorMassage = 'Property number is required when creating a new property.';
          try {
            propertyWaiterCtrl.create();
            fail(expectedErrorMassage);
          } catch (error) {
            expect(error).toEqual(expectedErrorMassage);
          }
        });

        it('should require property make.', () => {
          propToBeCreate.make = null;
          propertyWaiterTestingHelper.fulfillTable(propertyWaiterCtrl.newProperty, propToBeCreate);
          const expectedErrorMassage = 'Property make is required when creating a new property.';
          try {
            propertyWaiterCtrl.create();
            fail(expectedErrorMassage);
          } catch (error) {
            expect(error).toEqual(expectedErrorMassage);
          }
        });

        it('should require property model.', () => {
          propToBeCreate.model = null;
          propertyWaiterTestingHelper.fulfillTable(propertyWaiterCtrl.newProperty, propToBeCreate);
          const expectedErrorMassage = 'Property model is required when creating a new property.';
          try {
            propertyWaiterCtrl.create();
            fail(expectedErrorMassage);
          } catch (error) {
            expect(error).toEqual(expectedErrorMassage);
          }
        });

        it('should require property type.', () => {
          propToBeCreate.type = null;
          propertyWaiterTestingHelper.fulfillTable(propertyWaiterCtrl.newProperty, propToBeCreate);
          const expectedErrorMassage = 'Property type is required when creating a new property.';
          try {
            propertyWaiterCtrl.create();
            fail(expectedErrorMassage);
          } catch (error) {
            expect(error).toEqual(expectedErrorMassage);
          }
        });

        it('should require property cost.', () => {
          propToBeCreate.cost = null;
          propertyWaiterTestingHelper.fulfillTable(propertyWaiterCtrl.newProperty, propToBeCreate);
          const expectedErrorMassage = 'Property cost is required when creating a new property.';
          try {
            propertyWaiterCtrl.create();
            fail(expectedErrorMassage);
          } catch (error) {
            expect(error).toEqual(expectedErrorMassage);
          }
        });

        it('should require property purchase date.', () => {
          propToBeCreate.purchaseDate = null;
          propertyWaiterTestingHelper.fulfillTable(propertyWaiterCtrl.newProperty, propToBeCreate);
          const expectedErrorMassage = 'Property purchase date is required when creating a new property.';
          try {
            propertyWaiterCtrl.create();
            fail(expectedErrorMassage);
          } catch (error) {
            expect(error).toEqual(expectedErrorMassage);
          }
        });

        it('should require property custodian.', () => {
          propToBeCreate.custodian = null;
          propertyWaiterTestingHelper.fulfillTable(propertyWaiterCtrl.newProperty, propToBeCreate);
          const expectedErrorMassage = 'Property custodian is required when creating a new property.';
          try {
            propertyWaiterCtrl.create();
            fail(expectedErrorMassage);
          } catch (error) {
            expect(error).toEqual(expectedErrorMassage);
          }
        });

        it('should require property location.', () => {
          propToBeCreate.location = null;
          propertyWaiterTestingHelper.fulfillTable(propertyWaiterCtrl.newProperty, propToBeCreate);
          const expectedErrorMassage = 'Property location is required when creating a new property.';
          try {
            propertyWaiterCtrl.create();
            fail(expectedErrorMassage);
          } catch (error) {
            expect(error).toEqual(expectedErrorMassage);
          }
        });

        it('should NOT require property present value', () => {
          propToBeCreate.presentValue = null;
          propertyWaiterTestingHelper.fulfillTable(propertyWaiterCtrl.newProperty, propToBeCreate);
          try {
            propertyWaiterCtrl.create();
          } catch (error) {
            fail('Property present value is NOT required when creating a new property.');
          }
        });

        it('should NOT require property age limit', () => {
          propToBeCreate.ageLimit = null;
          propertyWaiterTestingHelper.fulfillTable(propertyWaiterCtrl.newProperty, propToBeCreate);
          try {
            propertyWaiterCtrl.create();
          } catch (error) {
            fail('Property age limit is NOT required when creating a new property.');
          }
        });

        it('should NOT require property user', () => {
          propToBeCreate.user = null;
          propertyWaiterTestingHelper.fulfillTable(propertyWaiterCtrl.newProperty, propToBeCreate);
          try {
            propertyWaiterCtrl.create();
          } catch (error) {
            fail('Property user is NOT required when creating a new property.');
          }
        });

        it('should NOT require property placement', () => {
          propToBeCreate.placement = null;
          propertyWaiterTestingHelper.fulfillTable(propertyWaiterCtrl.newProperty, propToBeCreate);
          try {
            propertyWaiterCtrl.create();
          } catch (error) {
            fail('Property placement is NOT required when creating a new property.');
          }
        });
      })
    });

    describe('is able to edit an existing property', () => {

      let $componentController, $httpBackend;
      let propertyToBeEdited;

      beforeEach(inject((_$componentController_, _$httpBackend_) => {
        $componentController = _$componentController_;
        $httpBackend = _$httpBackend_;
      }))

      beforeEach(() => {
        propertyToBeEdited = {
          number: '5945561-1168462',
          name: 'Office Table',
          make: 'eMSO Company',
          model: 'Solid SSS',
          type: 'Table',
          cost: 12000,
          presentValue: 12000,
          purchaseDate: new Date(),
          ageLimit: 99,
          custodian: 'Teddy',
          user: 'Chenny',
          location: 'Office 5566, Autos.',
          placement: 'Part 3'
        }
        const bindings = {
          existingProperty: propertyToBeEdited
        };
        propertyWaiterCtrl = $componentController('propertyWaiter', null, bindings);
      });

      it('should be able to edit property number.', () => {
        const expectPropNumber = '000000-111111';
        propertyWaiterCtrl.existingProperty.number = expectPropNumber;

        propertyToBeEdited.number = expectPropNumber;
        $httpBackend.expectPUT(/api\/properties/, propertyToBeEdited).respond('succeed');
        propertyWaiterCtrl.edit();
        $httpBackend.flush();
        
      });
    });
  });

  xdescribe('Methods', () => {

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

  xdescribe('Views', () => {

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

      describe('In the "EDIT" mode, ', () => {

        let $compile, $rootScope;
        let propertyWaiter;

        beforeEach(inject((_$compile_, _$rootScope_) => {
          $compile = _$compile_;
          $rootScope = _$rootScope_;
        }));

        it('should expect an existing property to be served.', () => {
          try {
            propertyWaiter = $compile('<property-waiter mode="EDIT" property=""></property-waiter>')($rootScope);
            fail('')
          } catch (error) {

          }

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