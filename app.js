/*
<!-- Basketball Games -->
var basketballGames = [
	{id: 1, homeTeam: 'Nets', awayTeam: 'Celtics', time: '9:45 pm', bets: 33}, 
	{id: 2, homeTeam: 'Lakers', awayTeam: 'Heat', time: '7:30 pm', bets: 3}
	]
	
<!-- Football Games -->
var footballGames = [
	{id: 1, homeTeam: 'Seahawks', awayTeam: 'Jets', time: '6:30 pm', bets: 20},
	{id: 2, homeTeam: 'Colts', awayTeam: 'Falcons', time: '7:30 pm', bets: 2},
	{id: 3, homeTeam: 'Broncos', awayTeam: 'Pirates', time: '10:45 pm', bets: 33}
	]
*/
	
var isShowing = true;
	
var app = angular.module("Tr3umPHant", []);

app.controller('Graphic-Display', function() {
  this.isShowing = isShowing;
});

app.controller('DatepickerDemoCtrl', function ($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
	alert("Hello");
    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
});
