var jquery = require("jquery");
window.$ = window.jQuery = jquery;
import Grade from "grade-js";

$(window).on("load", function () {
	Grade(document.querySelectorAll(".gradient-wrap"));

	$("#nav-toggler").on("click", () => {
		$("#menu-toggle").toggleClass("display-none");
	});
});

// $("#switch-mode").on("click", () => {
// 	$("#switch-mode-input").is(":checked")
// 		? $("#switch-mode-label").text("Light mode")
// 		: $("#switch-mode-label").text("Dark mode");
// });
