$.fn.toggleClick = function(){

	var functions = arguments ;

	return this.click(function(){
		var iteration = $(this).data('iteration') || 0;
		functions[iteration].apply(this, arguments);
		iteration = (iteration + 1) % functions.length ;
		$(this).data('iteration', iteration);
	});
};

$(document).ready(function(){
	// Dashboard actions
	$('#ribbon-today').toggleClick(
		function() {
			$('#today-bubble').show();
		},
		function() {
			$('#today-bubble').hide();
		}
		);

	$( "#Save" ).click(function() { 

		var dateSelected = $( "#timeDateBox" ).val();
		$( "#ForecastDate" ).html( dateSelected );

		// $( "#ForecastDate" ).add( "<span>Again</span>" ).appendTo($( "#ForecastDate" ));

	});

})

angular.module('null', ['ui.bootstrap']);
var DatepickerDemoCtrl = function ($scope, $timeout) {
	$scope.today = function() {
		$scope.dt = new Date();
	};
	$scope.today();

	$scope.showWeeks = true;
	$scope.toggleWeeks = function () {
		$scope.showWeeks = ! $scope.showWeeks;
	};

	$scope.clear = function () {
		$scope.dt = null;
	};

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
  	return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
  	$scope.minDate = ( $scope.minDate ) ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function() {
  	$timeout(function() {
  		$scope.opened = true;
  	});
  };

  $scope.dateOptions = {
  	'year-format': "'yy'",
  	'starting-day': 1
  };
};
