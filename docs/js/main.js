const btnDarkMode = document.querySelector(".dark-mode-btn")

const darkSchemeClass = "dark"
const btnClass = "dark-mode-btn--active"

const darkModeProperty = "darkMode"

const scheme = {
    dark: "dark",
    light: "light",
}

const setDarkScheme = () => {
    btnDarkMode.classList.add(btnClass)
    document.body.classList.add(darkSchemeClass)
}

const setLightScheme = () => {
    btnDarkMode.classList.remove(btnClass)
    document.body.classList.remove(darkSchemeClass)
}

const setStorageProperty = (value) => {
    localStorage.setItem(darkModeProperty, value)
}

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setDarkScheme()
}

if (localStorage.getItem(darkModeProperty) === scheme.dark) {
    setDarkScheme()
} else if (localStorage.getItem(darkModeProperty) === scheme.light) {
    setLightScheme()
}

window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? scheme.dark : scheme.light

        if (newColorScheme === scheme.dark) {
            setDarkScheme()
        } else {
            setLightScheme()
        }
        setStorageProperty(newColorScheme)
    })

btnDarkMode.onclick = () => {
    btnDarkMode.classList.add("dark-mode-btn--transition")
    btnDarkMode.classList.toggle(btnClass)

    document.body.classList.add("color-scheme--transition")

    const isDark = document.body.classList.toggle(darkSchemeClass)

    if (isDark) {
        setStorageProperty(scheme.dark)
    } else {
        setStorageProperty(scheme.light)
    }
}
