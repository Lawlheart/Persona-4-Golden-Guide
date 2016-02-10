var app = angular.module("personaApp", ['ngRoute']);

app.factory('persona', ['$http', function($http) {
	return $http.get('js/data.json')
		.success(function(data) {
			return data
		}).error(function(err) {
			return err
		})
}]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'HomeController',
		templateUrl: 'views/home.html'
	}).when('/calendar', {
		controller: 'HomeController',
		templateUrl: 'views/calendar.html'
	}).when('/days/:dateId', {
		controller: 'DateController',
		templateUrl: 'views/date.html'
	}).when('/slinks', {
		controller: 'SlinksController',
		templateUrl: 'views/slinks.html'
	}).when('/trivia', {
		controller: 'HomeController',
		templateUrl: 'views/trivia.html'
	}).when('/arcana/:arcanaId', {
		controller: 'ArcanaController',
		templateUrl: 'views/arcana.html'
	})
}]);

app.controller('HomeController', ['$scope', '$routeParams', function($scope, $routeParams) {}]);
app.controller('DateController', ['$scope', '$routeParams', 'persona', function($scope, $routeParams, persona) {
	persona.success(function(data) {
		$scope.day = data.calendar[$routeParams.dateId];
		$scope.dates = data.dates;
		var dateIndex = data.dates.indexOf($routeParams.dateId)
		$scope.prevDay = $scope.dates[dateIndex - 1] === undefined ? $scope.dates[dateIndex] : $scope.dates[dateIndex - 1];
		$scope.nextDay = $scope.dates[dateIndex + 1] === undefined ? $scope.dates[dateIndex] : $scope.dates[dateIndex + 1];
		console.log($scope.day);
		$scope.notes = $scope.day.dayNotes.split("<br>");
		$scope.nightNotes = $scope.day.nightNotes.split("<br>");
		$scope.revealSpoiler = function(index) {
			$(".spoiler span")[index].style.display = "block";
			$(".spoiler-reveal")[index].style.display = "none"
		};
	})
}]);
app.controller('SlinksController', ['$scope', '$routeParams', 'persona', function($scope, $routeParams, persona) {
	persona.success(function(data) {
		$scope.slinks = data.slinks
		console.log($scope.slinks);
	})
}]);

app.controller('ArcanaController', ['$scope', '$routeParams', 'persona', function($scope, $routeParams, persona) {
	persona.success(function(data) {
		$scope.calendar = data.calendar;
		$scope.dates = data.dates;
		var dates = $scope.dates;
		var calendar = $scope.calendar;
		$scope.arcanaDays = function(arcana) {
			var days = [];
			for(var i=0;i<dates.length;i++) {
				var day = calendar[dates[i]];
				if(day.socialLinks.indexOf(arcana)>=0) {
					days.push(day.date);
				}
				if(day.nightLinks.indexOf(arcana)>=0) {
					days.push(day.date + " (night)");
				}
			}
			return days
		},
		$scope.bikeRides = function(arcana) {
			var days = [];
			var names = data.names
			for(var i=0;i<dates.length;i++) {
				var day = calendar[dates[i]];
				if(day.dayNotes.indexOf(names[arcana] + " is available for a scooter ride today")>=0) {
					days.push(day.date);
				}
			}
			return days;
		}
		$scope.slinks = data.slinks;
		$scope.arcana = data.slinks[$routeParams.arcanaId];
		var ranks = $scope.arcana.rank.slice(1);
		$scope.ranks = {}
		for(key in ranks) {
			var rNum = "r" + key;
			$scope.ranks[rNum] =ranks[key]
		}
		$scope.tripdays = $scope.bikeRides($routeParams.arcanaId);
		$scope.freedays = $scope.arcanaDays($routeParams.arcanaId);
		$('#arcana').addClass('loaded');
		$scope.showRank = function(index) {
			$('.dialog').eq(index).toggle();
		}
		$scope.showDaysAvail = function() {
			$('.days-avail').toggle();
		}
		$scope.showTripDays = function() {
			$('.trip-days').toggle();
		}
		$('main').css('background', "linear-gradient(90deg, black, rgba(0,0,0,0.5), black), linear-gradient(rgba(19, 19, 128,0.5),  rgba(19, 19, 128,0.5)), #222 url('http://persona.lawlietblack.com/img/cards/" + $scope.arcana.img + "-card.png') no-repeat fixed center").css('background-size', 'cover');
	});
}]);

app.directive('personaNav', function() {
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'views/persona-nav.html',
		controller: ['$scope', '$location', function($scope, $location) {
			$scope.isActive = function(viewLocation) {
				return viewLocation === $location.path();
			} 
		}],
		link: function($scope, $element, $attrs) {
			console.log(location.hash)
		}
	}
})
app.directive('arcanaTile', function() {
	return {
		restrict: 'E',
		templateUrl:'views/arcana-tile.html' ,
		scope: {
			slink: '='
		}, 
		link: function($scope, $element, $attrs) {
			var $card = $element.children().eq(0);
      $element.hover(function() {
        $card.addClass('animated pulse');
      }, function() {
        window.setTimeout( function(){
          $card.removeClass('animated pulse');
          }, 1000); 
      });
      $scope.redirect = function(arcana) {
				location.href = "#/arcana/"+ arcana;
			}
		}
	}
})