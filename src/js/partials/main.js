document.addEventListener("DOMContentLoaded", () => {
	const parent = document.querySelector(".chat");
	const openChat = parent.querySelector(".chat__label");
	const usersPanel = parent.querySelector(".chat__users");
	const search = usersPanel.querySelector(".chat__search");
	const searchSVG = search.querySelector(".chat__search svg");
	const selectNewPerson = search.querySelector(".js-choose-person");

	const setSearchClosedState = () => {
		searchSVG.removeAttribute("hidden");
		selectNewPerson.setAttribute("hidden", "true");
		usersPanel.classList.remove("chat__users--select");
	}

	const setSearchOpenedState = () => {
		searchSVG.setAttribute("hidden", "true");
		selectNewPerson.removeAttribute("hidden");
		usersPanel.classList.add("chat__users--select");
	}

	openChat.addEventListener("click", () => {
		parent.classList.toggle("chat--opened");
	});

	document.addEventListener("click", (e) => {
		const parentArea = e.composedPath().includes(parent);
		const searchArea = e.composedPath().includes(search);

		if (!parentArea && parent.classList.contains("chat--opened")) {
			parent.classList.remove("chat--opened");
		}

		if (!searchArea) {
			setSearchClosedState();
		}
	});

	search.addEventListener("click", () => {
		setSearchOpenedState();
	});

	selectNewPerson.addEventListener("change", () => {
		setSearchClosedState();
	});
});
