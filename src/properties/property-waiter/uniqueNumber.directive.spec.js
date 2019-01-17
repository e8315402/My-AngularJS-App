describe('Simple input with ng-model', () => {

  var $compile, $rootScope;

  beforeEach(inject(function (_$rootScope_, _$compile_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
  }))

  it('should update the pNumber in the scope once it get the value', () => {
    var inputElem = $compile('<input name="input" type="text" ng-model="pNumber"/>')($rootScope);
    $rootScope.$digest();

    inputElem.val('bbbb');
    inputElem[0].dispatchEvent(new Event('input'));

    expect($rootScope.pNumber).toBe('bbbb');
    expect(inputElem.val()).toBe('bbbb');
  });
});

describe('Unique number directive', () => {
  
  var $rootScope, $compile, $httpBackend;
  var formElem;

  beforeEach(module('property'));

  beforeEach(inject(function (_$rootScope_, _$compile_, _$httpBackend_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    $httpBackend = _$httpBackend_;
  }));

  beforeEach(function () {
    $httpBackend.whenGET(/api\/properties\?number=.+/).respond(function (method, url, data, headers, params) {
      if (params['number'] === 'aaaa')
        return [200, ['aaaa']];
      else return [200, []]
    })
  })

  beforeEach(function () {
    formElem = $compile('<div><form id="pForm" name="pForm"><input name="pNumberInput" type="text" ng-model="pNumber" unique-number></form></div>')($rootScope);
    $rootScope.$digest();
  })

  it('should set set validity on the form from the input if the property number isn\'t unique.', function () {
    formElem.find('input').val('aaaa');
    formElem.find('input')[0].dispatchEvent(new Event('input'));

    expect($rootScope.pNumber).toBe('aaaa');
    expect(formElem.find('input').val()).toBe('aaaa');
    expect($rootScope.pForm.$valid).toBe(true);

    $httpBackend.flush()
    expect($rootScope.pForm.$valid).toBe(false);
  });

  it('should set set validity on the form from the input if the property number isn\'t unique.', function () {
    formElem.find('input').val('bbbb');
    formElem.find('input')[0].dispatchEvent(new Event('input'));

    expect($rootScope.pNumber).toBe('bbbb');
    expect(formElem.find('input').val()).toBe('bbbb');
    expect($rootScope.pForm.$valid).toBe(true);

    $httpBackend.flush()
    expect($rootScope.pForm.$valid).toBe(true);
  });

})