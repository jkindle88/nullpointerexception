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
			var parent = $(this).parent('div');
			
			//Hide main content
			$(parent).children(':nth-child(2)').hide();

			$(parent).removeClass('height-6em');
			$(parent).find('div').removeClass('height-max').removeClass('ribbon');
			$(parent).children(':nth-child(1)').animate(
				{width: '100%'}, 
				300, 'swing', function(){
					$(parent).children(':nth-child(2)').removeClass('col-xs-10').addClass('col-xs-12');
					$(parent).children(':nth-child(2)').show();
				}).addClass('col-xs-12').removeClass('col-xs-2');
		},
		function() {
			var parent = $(this).parent('div');

			$(parent).addClass('height-6em');
			$(parent).find('div').addClass('height-max').addClass('ribbon');
			$(parent).children(':nth-child(1)').animate({width: '16.66%'}, 500).removeClass('col-xs-12').addClass('col-xs-2');
			$(parent).children(':nth-child(2)').addClass('col-xs-10').removeClass('col-xs-12');


		}
	);
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