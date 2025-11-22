let display = document.getElementById("display");

function appendValue(val) {
    display.value += val;
}

function clearDisplay() {
    display.value = "";
}

function deleteChar() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
        setTimeout(() => display.value = "", 1000);
    }
}

/* Dark / Light Theme Toggle */
const toggle = document.getElementById("toggleTheme");
const modeText = document.getElementById("modeText");

toggle.addEventListener("change", () => {
    if (toggle.checked) {
        document.body.classList.add("light");
        modeText.textContent = "☀️ Light Mode";
    } else {
        document.body.classList.remove("light");
        modeText.textContent = "🌙 Dark Mode";
    }
});
