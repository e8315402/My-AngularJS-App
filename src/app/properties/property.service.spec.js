describe('Property service', () => {

  var resourceMock, propertyService;

  beforeEach(module('property'));

  beforeEach(() => {
    resourceMock = jasmine.createSpy();
    module(function ($provide) {
      $provide.value('$resource', resourceMock);
    });
    inject(function ($injector) {
      propertyService = $injector.get('propertyService');
    });
  });

  it('should a resource service of the endpoint: "api/properties"', () => {
    expect(resourceMock.calls.first().args[0]).toBe("api/properties");
  });

  // it('')
});