

rocketLogo = "static/img/rocket-ship.jpg"
cohabName = "Hello World"
cohabInfo = "New Cohab"

$(document).ready(function(){	

	$('#new-cohab').click(function() {
		$('#createModal').modal('show');   
	});

	$('#creater').click(function(){
		$('#cohabList').append('<div class="col-xs-6 col-sm-3 placeholder"><img data-src="'+ rocketLogo+'" id="img-animate" class="img-responsive" alt="New Cohab" src="'+ rocketLogo +'"><h4>'+ cohabName +'</h4>' + '<span class="text-muted">'+cohabInfo +'</span>' + '</div>')
		console.log('We are close');
	});

	$('#addCohab').click(function(){
		console.log('New cohab created');
	});



});