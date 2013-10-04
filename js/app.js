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
	// Show loging screen if necessary
	$('#myModal').modal('show');

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
