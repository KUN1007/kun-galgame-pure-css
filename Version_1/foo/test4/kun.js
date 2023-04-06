const signInBtn = document.getElementById("sign-in");
const signUpBtn = document.getElementById("sign-up");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".sign-container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("sign-container");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("sign-container");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());
