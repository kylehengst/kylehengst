var waypoints = $('#details').waypoint({
  handler: function(direction) {
    if(direction=='down'){
    	$('.nav').addClass('inverse');
    } else {
    	$('.nav').removeClass('inverse');
    }
  }
});

$('#menu a').click(function(event) {
	event.preventDefault();
	var link = this;
	$.smoothScroll({
		scrollTarget: link.hash
	});
});