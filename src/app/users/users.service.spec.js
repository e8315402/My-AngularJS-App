describe('Current user', () => {

  beforeEach(module('user'));

  let $httpBackend, userService;
  let expectUser;

  beforeEach(inject((_$httpBackend_, _userService_) => {
    $httpBackend = _$httpBackend_;
    userService = _userService_;
  }))

  beforeEach(() => {
    expectUser = {
      username: '1234567890',
      permission: []
    };
  });

  it('should get the current user through "getCurrentUser" method.', (done) => {
    $httpBackend.whenGET(/api\/users\/current/).respond(expectUser);
    userService.api.getUserAccount().$promise.then(() => {
      const currentUser = userService.getCurrentUser();
      expect(currentUser.username).toBeDefined();
      expect(currentUser.username).toEqual(expectUser.username);
      expect(currentUser.permission).toBeDefined();
      expect(currentUser.permission).toEqual(expectUser.permission);
      done();
    });
    $httpBackend.flush();
  });

  it('should store the current user.', (done) => {
    $httpBackend.whenGET(/api\/users\/current/).respond(expectUser);
    userService.api.getUserAccount().$promise.then(() => {
      userService.getCurrentUser();
      const currentUser = userService.getCurrentUser();
      expect(currentUser.username).toBeDefined();
      expect(currentUser.username).toEqual(expectUser.username);
      expect(currentUser.permission).toBeDefined();
      expect(currentUser.permission).toEqual(expectUser.permission);
      done();
    });
    $httpBackend.flush();
  })

});