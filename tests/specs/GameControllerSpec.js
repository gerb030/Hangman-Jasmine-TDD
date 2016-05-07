describe('GameCtrl', function() {
  beforeEach(module('hangman.controllers'));
  beforeEach(inject(function($injector) {
    $scope = $injector.get('$rootScope');
    $gameMock = {
      new: jasmine.createSpy('game creator spy').and.returnValue({})           
    };
    $gameServiceMock = {
      new: jasmine.createSpy('game start spy').and.returnValue($gameMock.new('nl')),           
      get: jasmine.createSpy('existing game spy').and.returnValue(
          {
            get: jasmine.createSpy('existing game spy').and.returnValue(true)
          }
        )           
    };
    $stateParamsMock = jasmine.createSpyObj('$state spy', ['go']);
    $ionicPopupMock = jasmine.createSpyObj('$ionicPopup spy', ['alert']);
    $controller = $injector.get('$controller');
    GameCtrl = $controller('GameCtrl', 
      {
        $scope: $scope, 
        $stateParams: $stateParamsMock, 
        $ionicPopup: $ionicPopupMock, 
        GameService: $gameServiceMock});
  }));

  describe('#startGame', function() {
    beforeEach(inject(function(_$rootScope_) {  
        $scope.startGame();
    }));
    it('should call new on GameService', function() {
        expect($gameServiceMock.new).toHaveBeenCalled(); 
    })
    it('game should contain a new game', function() {
      // TODO
//        console.log(typeof $scope.game);
        //expect($scope.game).toEqual(); 
    })

  })
  describe('#existingGame', function() {
    beforeEach(inject(function(_$rootScope_) {  
        $scope.continueExistingGame(13);
    }));
    it('should call new on GameService', function() {
        expect($gameServiceMock.get).toHaveBeenCalled(); 
    })
  })
});
//        controller.startGame();

/*



*/

    // describe('startGame', function() {

    //     // TODO: Call doLogin on the Controller

    //     it('should call new on GameService', function() {
    //         expect(GameServiceMock.new).toHaveBeenCalled(); 
    //     });

    //     describe('when the game has started,', function() {
    //         it('if successful, should change state to my-dinners', function() {

    //             // TODO: Mock the login response from DinnerService

    //             expect(stateMock.go).toHaveBeenCalledWith('my-dinners');
    //         });

    //         it('if unsuccessful, should show a popup', function() {

    //             // TODO: Mock the login response from DinnerService

    //             expect(ionicPopupMock.alert).toHaveBeenCalled();
    //         });
    //     });
    // })
  // describe('$scope.grade', function() {
  //   it('sets the strength to "strong" if the password length is >8 chars', function() {
  //     var $scope = {};
  //     var controller = $controller('PasswordController', { $scope: $scope });
  //     $scope.password = 'longerthaneightchars';
  //     $scope.grade();
  //     expect($scope.strength).toEqual('strong');
  //   });
  // });


/*
describe('LoginController', function() {

    var controller, 
        deferredLogin,
        dinnerServiceMock,
        stateMock,
        ionicPopupMock;

    // TODO: Load the App Module

    // TODO: Instantiate the Controller and Mocks

    describe('#doLogin', function() {

        // TODO: Call doLogin on the Controller

        it('should call login on dinnerService', function() {
            expect(dinnerServiceMock.login).toHaveBeenCalledWith('test1', 'password1'); 
        });

        describe('when the login is executed,', function() {
            it('if successful, should change state to my-dinners', function() {

                // TODO: Mock the login response from DinnerService

                expect(stateMock.go).toHaveBeenCalledWith('my-dinners');
            });

            it('if unsuccessful, should show a popup', function() {

                // TODO: Mock the login response from DinnerService

                expect(ionicPopupMock.alert).toHaveBeenCalled();
            });
        });
    })
});
*/