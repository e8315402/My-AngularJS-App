describe('Property service', () => {

  beforeEach(module('property'));

  describe('Construction', () => {

    let resourceMock, propertyService;
    beforeEach(() => {
      resourceMock = jasmine.createSpy()
      resourceMock.and.returnValue(function resourceMockFunction() { });
      module(function ($provide) {
        $provide.value('$resource', resourceMock);
      });
      inject(function ($injector) {
        propertyService = $injector.get('propertyService');
      });
    });

    it('should a resource service of the endpoint: "api/properties".', () => {
      expect(resourceMock).toHaveBeenCalled();
      expect(resourceMock.calls.count()).toEqual(1);
      expect(resourceMock.calls.first().args[0]).toBe("api/properties");
    });

  });

  describe('Methods', () => {

    let $httpBackend;
    let propertyService;

    beforeEach(inject((_$httpBackend_, _propertyService_) => {
      $httpBackend = _$httpBackend_;
      propertyService = _propertyService_;
    }));

    it('should have a method "api" for servicing.', () => {
      expect(propertyService.api).toBeDefined();
    });

    it('should get all properties through "query" method', (done) => {
      $httpBackend.whenGET(/api\/properties/).respond(['property_1', 'property_2']);
      propertyService.api.query().$promise.then((properties) => {
        expect(properties).toBeDefined();
        expect(properties).toEqual(jasmine.any(Array));
        expect(properties.length).toEqual(2);
        done();
      });
      $httpBackend.flush();
    });

    it('should get a single property by specifying a property number.', (done) => {
      $httpBackend.whenGET(/api\/properties/).respond((method, url, data, headers, params) => {
        return (params && params['number']) ? [200, ['property_n']] : [404];
      });
      propertyService.api.query({ number: '3140101-03-028895' }).$promise.then((properties) => {
        expect(properties).toBeDefined();
        expect(properties).toEqual(jasmine.any(Array));
        expect(properties.length).toEqual(1);
        done();
      });
      $httpBackend.flush();
    });

    it('should delete a property through "delete" method.', (done) => {
      $httpBackend.whenDELETE(/api\/properties\?number=.+/).respond({ number: '3140101-03-028895' });
      propertyService.api.delete({ number: '3140101-03-028895' }).$promise.then((result) => {
        expect(result.number).toEqual('3140101-03-028895');
        done();
      })
      $httpBackend.flush();
    });
  });

});
