function initTypeWriter() {

	function typeWriter(elmt, n) {
		var text = elmt.data('text');
		var d = jQuery.Deferred();

		var typeIt = function() {

			if (n < (text.length)) {
				elmt.html(text.substring(0, n + 1));
				n++;
				setTimeout(function() {
					typeIt();
				}, 50);
			} else {
				d.resolve();
			}
		};

		typeIt();
		return d.promise();
	}

	setTimeout(function() {
		typeWriter($('.test:first-child'), 0).then(function() {
			$('#welcome').append('<span class="test" data-text="Bienvenue sur mon site."></span>');

			setTimeout(function() {
				typeWriter($('.test:last-child'), 0).then(function() {
					$('#welcome').append('<span class="test" data-text="Appuyez sur la touche Entrée pour commencer."></span>');

					setTimeout(function() {
						typeWriter($('.test:last-child'), 0).then(function() {
							$('#welcome').append('<span class="test"></span>');

							$(document).keypress(function(e) {
								if (e.keyCode == 13) {
									$('#welcome').append("<span id='init'>Initialisation de l'expérience...</span>");
									setTimeout(function() {
										$('#welcome').fadeOut("slow");
									}, 2000);
								}
							});
						});
					}, 1000);
				});
			}, 1000);
		});
	}, 2000);
}