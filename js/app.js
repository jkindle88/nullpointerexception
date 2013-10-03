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
			
			$(parent).removeClass('height-6em');
			$(parent).find('div').removeClass('height-max').removeClass('ribbon');
			$(parent).find('div').addClass('col-xs-12')
			$(parent).find('span').removeClass('rotate');

		},
		function() {
			
		}
	);
})