const hamburger = document.getElementById("hamburger");
const nav = document.getElementsByTagName("nav")[0];

const toggleMenu = () => {
	hamburger.classList.toggle("checked");
	nav.classList.toggle("hide");
};

hamburger.addEventListener("click", toggleMenu);
hamburger.addEventListener("keydown", e => {
	if (e.key === "Enter") {
		toggleMenu();
	}
});