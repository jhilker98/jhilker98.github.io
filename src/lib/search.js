// imports
import DOMPurify from "dompurify";

// selectors
const search = document.querySelector("#search");
const searchReadout = document.querySelector("#searchReadout");

// functions
function updateDocumentTitle(search) {
    document.title = search
        ? `Search results for “${search}”`
        : "Search the Blog";
}

function updateSearchReadout(search) {
    searchReadout.textContent = search ? `Search results for “${search}”` : "";
}

// event listeners
window.addEventListener("DOMContentLoaded", () => {
    const urlParams = DOMPurify.sanitize(
        new URLSearchParams(window.location.search).get("q"),
    );
    updateDocumentTitle(urlParams);
    updateSearchReadout(urlParams);
    search.value = urlParams;
    search.focus();
});

search.addEventListener("input", () => {
    const searchTerm = DOMPurify.sanitize(search.value);
    updateDocumentTitle(searchTerm);
    updateSearchReadout(searchTerm);
});