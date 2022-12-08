let up = document.querySelector(".up");

onscroll = function() {
	console.log(scrollY)
	if (scrollY >= 1000) {
		up.classList.add("show")
	}else {
		up.classList.remove("show")
	}
	up.onclick = function() {
		scrollTo({
			top: 0,
			behavior: "smooth"
		})
	}
}