var jquery = require("jquery");
window.$ = window.jQuery = jquery;

$(window).on("load", function () {
	$("#nav-toggler").on("click", () => {
		$("#menu-toggle").toggleClass("display-none");
	});

	$(".copyright").text(new Date().getFullYear());
});

// $("#switch-mode").on("click", () => {
// 	$("#switch-mode-input").is(":checked")
// 		? $("#switch-mode-label").text("Light mode")
// 		: $("#switch-mode-label").text("Dark mode");
// });
