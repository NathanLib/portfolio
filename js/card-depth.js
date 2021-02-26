// Help from : https://codepen.io/dazulu/pen/VVZrQv

const range = 25;
const calcValue = (a, b) => ((a / b) * range - range / 2).toFixed(1);

$(window).on("load", function () {
	var timeout;

	$(".work__card").on(
		{
			mousemove: function (e) {
				if (timeout) {
					window.cancelAnimationFrame(timeout);
				}

				var width = $(this).width();
				var height = $(this).height();

				var xValue = calcValue(e.offsetX, width);
				var yValue = calcValue(e.offsetY, height);

				timeout = window.requestAnimationFrame(() => {
					// Limit size to avoid bugs on small screens
					if ($("body").width() > 568) {
						$(this).css(
							"transform",
							"rotateX(" +
								xValue +
								"deg) rotateY(" +
								yValue +
								"deg)"
						);

						$(this)
							.find("img")
							.css(
								"transform",
								"translateX(" +
									xValue +
									"px) translateY(" +
									yValue +
									"px)"
							);
					}

					$(this).find(".work__card--overlay").css("display", "flex");
				});
			},

			mouseleave: function () {
				// Probleme de détection sur safari
				$(this).css("transform", "rotateX(0) rotateY(0)");

				$(this)
					.find("img")
					.css("transform", "translateX(0) translateY(0)");

				$(this).find(".work__card--overlay").css("display", "none");
			},
		},
		false
	);
});
