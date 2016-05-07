angular.module('hangman.controllers', [])

// .controller('AccountCtrl', function($scope, $ionicModal, $timeout) {
//   // Form data for the login modal
//   $scope.loginData = {};

//   // Create the login modal that we will use later
//   $ionicModal.fromTemplateUrl('templates/login.html', {
//     scope: $scope
//   }).then(function(modal) {
//     $scope.modal = modal;
//   });

//   // Triggered in the login modal to close it
//   $scope.closeLogin = function() {
//     $scope.modal.hide();
//   };

//   // Open the login modal
//   $scope.login = function() {
//     $scope.modal.show();
//   };

//   // Perform the login action when the user submits the login form
//   $scope.doLogin = function() {
//     console.log('Doing login', $scope.loginData);

//     // Simulate a login delay. Remove this and replace with your login
//     // code if using a login system
//     $timeout(function() {
//       $scope.closeLogin();
//     }, 1000);
//   };
// })
// .controller('AppCtrl', function($scope, $stateParams, GameService) {
//   $scope.games = GameService.all();
// })

.controller('GameCtrl', function($scope, $stateParams, $ionicPopup, GameService) {

  $scope.continueExistingGame = function(gameId) {
    $scope.game = GameService.get(gameId);
  };

  $scope.startGame = function() {
    $scope.game = GameService.new();
  };

  $scope.guessLetter = function() {
    
  };

  $scope.guessWord = function() {
    
  };
//  $scope.letters = getLetters();
  // if (typeof $stateParams.gameId != 'undefined') {
  //   // TODO: fetch game
  //   $scope.game = GameService.new();
  // } else {
  //   $scope.game = GameService.new();
  // }
  // $scope.boardLetters = $scope.game.getBoardLetters();
  // $scope.guesses = $scope.game.getGuesses();
  // $scope.livesRemaining = $scope.game.getLivesRemaining();
  // $scope.myGuess = 'X';
  // $scope.guess = {};

/*
  $scope.takeGuess = function() {
    if ($scope.guess.letter.length > 1) {
      $scope.guess.letter = '';
    }
    var letter = $scope.guess.letter.toUpperCase();
    var allowed = $scope.game.canTakeGuess(letter);
    if (allowed.continue) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Speel '+letter,
        template: 'Wil je deze letter spelen?'
      });
      confirmPopup.then(function(res) {
        if (res) {
          // TODO: process this
          alert('OK')
        }
      });
    } else {
      // TODO: show alert
      alert(allowed.msg);
    }
  };
  */
})

function getLetters() {
  return ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
}
