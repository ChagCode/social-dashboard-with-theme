const darkBtn = document.getElementById("dark");
const lightBtn = document.getElementById("light");

const setDarkTheme = () => {
  document.querySelector("body").classList = "dark";
};
const setLightTheme = () => {
  document.querySelector("body").classList = "light";
};

const setTheme = () => {
  if (localStorage.getItem("theme") === "dark") {
    setDarkTheme();
    darkBtn.click();
  } else if (localStorage.getItem("theme") === "light") {
    setLightTheme();
    lightBtn.click();
  }
};

const checkTheme = () => {
  if (localStorage.getItem("theme") === null) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkTheme();
      darkBtn.click();
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setLightTheme();
      lightBtn.click();
    }
  }
};

const checkThemeChange = () => {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      checkTheme();
    });
};

setTheme();
checkTheme();
checkThemeChange();

const radioButtons = document.querySelectorAll(
  ".toggle__wrapper input[type='radio']"
);
for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener("click", (event) => {
    if (darkBtn.checked) {
      localStorage.setItem("theme", "dark");
      setDarkTheme();
    } else {
      localStorage.setItem("theme", "light");
      setLightTheme();
    }
  });
}
