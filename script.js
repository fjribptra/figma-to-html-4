const html = document.querySelector('html')
const colorMode = document.getElementById('colorMode')

function colorModeToggle() {
    if (html.dataset.colorMode != 'dark') {
        html.dataset.colorMode = 'dark';
        colorMode.textContent = 'Light mode'
    } else {
        html.dataset.colorMode = 'light';
        colorMode.textContent = 'Dark mode'
    }
}


