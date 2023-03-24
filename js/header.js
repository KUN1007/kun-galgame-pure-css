function activateSearchBox(el) {
  el.classList.add("top-search-box--active");
}
function deactivateSearchBox(el) {
  el.classList.remove("top-search-box--active");
}

function onFocus() {
  activateSearchBox(document.querySelector(".top-search-box"));
}

function onBlur() {
  deactivateSearchBox(document.querySelector(".top-search-box"));
}
