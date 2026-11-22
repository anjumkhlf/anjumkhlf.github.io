// get button from its id
const toggleButton = document.getElementById("toggle-theme");
// get whatever theme is currently sacved
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
}

toggleButton.addEventListener("click", () => {
    // gets the current theme from the document
    const currentTheme = document.documentElement.getAttribute("data-theme");
    // if current theme is dark, new theme is light + vice versa
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    // sets the attribute in the document to the new theme
    document.documentElement.setAttribute("data-theme", newTheme);
    // changes the page to the new theme
    localStorage.setItem("theme", newTheme);

    // updates button text
    toggleButton.textContent = newTheme === "dark" ? "light mode" : "dark mode";
})