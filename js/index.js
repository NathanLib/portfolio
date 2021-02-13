var jquery = require("jquery");
window.$ = window.jQuery = jquery;
import fullpage from "fullpage.js";

$(window).on("load", function () {
	// -----------
	new fullpage("#fullpage", {
		licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
		navigation: true,
		sectionsColor: ["#ff5f45", "#0798ec", "#fc6c7c", "grey"],
	});
	// -----------

	$("#nav-toggler").on("click", () => {
		$("#menu-toggle").toggleClass("display-none");
	});
});

// $("#switch-mode").on("click", () => {
// 	$("#switch-mode-input").is(":checked")
// 		? $("#switch-mode-label").text("Light mode")
// 		: $("#switch-mode-label").text("Dark mode");
// });
