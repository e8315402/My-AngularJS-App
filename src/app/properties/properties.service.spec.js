describe('propertiesService', () => {

  var mock, properties;

  beforeEach(module('property'));

  beforeEach(() => {
    mock = jasmine.createSpy();
    module(function ($provide) {
      $provide.value('$resource', mock);
    });
    inject(function($injector){
      properties = $injector.get('properties');
    });
  });

  it('should a resource service of the endpoint: "api/properties"', () => {
    expect(mock.calls.first().args[0]).toBe("api/properties");
  });
});