$(function() {

	$('.container').css('height', $(window).innerHeight());

	$(window).resize(function() {
		$('.container').css('height', $(window).innerHeight());
	});

	// initTypeWriter();
	// var typeWriter = new TypeWriter('#typeWriter');
	// typeWriter.start();

	$("#header-nav a").on("click", function(e) {
		e.preventDefault();

		var href = $(this).data("href");

		$("main section").filter(":visible").fadeOut(500, function() {
			$(href).fadeIn(500);
		});
	});
});