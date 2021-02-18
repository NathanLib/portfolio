// Help from : https://codepen.io/dazulu/pen/VVZrQv

var jquery = require("jquery");
window.$ = window.jQuery = jquery;

const range = 25;
const calcValue = (a, b) => ((a / b) * range - range / 2).toFixed(1);

$(window).on("load", function () {
	$(".work-card").on({
		mousemove: function (e) {
			var xValue = calcValue(e.offsetX, 375);
			var yValue = calcValue(e.offsetY, 375);

			$(this).css(
				"transform",
				"rotateX(" + xValue + "deg) rotateY(" + yValue + "deg)"
			);

			$(this)
				.find("img")
				.css(
					"transform",
					"translateX(" + xValue + "px) translateY(" + yValue + "px)"
				);

			$(this).find(".work-card-overlay").css("display", "flex");
		},

		mouseleave: function () {
			$(this).css("transform", "rotateX(0deg) rotateY(0deg)");

			$(this)
				.find("img")
				.css("transform", "translateX(0px) translateY(0px)");

			$(this).find(".work-card-overlay").css("display", "none");
		},
	});
});
