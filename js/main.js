(function($) {
	
	//Initiate Skrollr
	var s = skrollr.init({
		forceHeight: false,
		smoothScrolling: false
	});
	
	//Set viewport height
	var winY = $(window).height();
	$('#intro').height (winY);
	
	$('body').scrollspy({ target: '.navbar' })
	
}(jQuery));