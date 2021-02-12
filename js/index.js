window.addEventListener(
	"load",
	function () {
		var navToggler = document.getElementById("nav-toggler");
		navToggler.addEventListener("click", function () {
			var menu = document.getElementById("menu-toggle");
			menu.classList.toggle("display-none");
		});
	},
	false
);
