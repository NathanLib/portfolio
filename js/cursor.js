// From : https://codepen.io/clementGir/pen/RQqvQx

const $bigBall = document.querySelector(".cursor__ball--big");
const $smallBall = document.querySelector(".cursor__ball--small");
const $hoverables = document.querySelectorAll(".hoverable");

if (!isOnMobile()) {
	// Listeners
	document.body.addEventListener("mousemove", onMouseMove);
	for (let i = 0; i < $hoverables.length; i++) {
		$hoverables[i].addEventListener("mouseenter", onMouseHover);
		$hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
	}
} else {
	var cursor = document.getElementById("cursor");
	cursor.style.display = "none";
}

// Move the cursor
function onMouseMove(e) {
	TweenMax.to($bigBall, 0.4, {
		x: e.pageX - 15,
		y: e.pageY - 15,
	});
	TweenMax.to($smallBall, 0.1, {
		x: e.pageX - 5,
		y: e.pageY - 5,
	});
}

// Hover an element
function onMouseHover() {
	TweenMax.to($bigBall, 0.3, {
		scale: 1.75,
	});
}
function onMouseHoverOut() {
	TweenMax.to($bigBall, 0.3, {
		scale: 1,
	});
}

function isOnMobile() {
	if (
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		)
	) {
		return true;
	} else {
		return false;
	}
}
