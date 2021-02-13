window.addEventListener(
	"load",
	function () {
		var navToggler = document.getElementById("nav-toggler");
		var switchMode = document.getElementById("switch-mode");

		navToggler.addEventListener("click", function () {
			var menu = document.getElementById("menu-toggle");
			menu.classList.toggle("display-none");
		});

		// switchMode.addEventListener("click", function () {
		// 	var switchModeLabel = document.getElementById("switch-mode-label");
		// 	switchModeLabel.innerHTML = switchMode.checked
		// 		? "Light mode"
		// 		: "Dark mode";
		// });
	},
	false
);
