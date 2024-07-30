document.addEventListener("DOMContentLoaded", () => {
	const parent = document.querySelector(".chat");
	const openChat = parent.querySelector(".chat__label");

	openChat.addEventListener("click", () => {
		parent.classList.toggle("chat--opened");
	});

	document.addEventListener("click", (e) => {
		const parentArea = e.composedPath().includes(parent);

		if (!parentArea && parent.classList.contains("chat--opened")) {
			parent.classList.remove("chat--opened");
		}
	});
});
