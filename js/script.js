const darkSwitch = document.getElementById("darkSwitch");
const inputEuro = document.getElementById("euroInput");
const valoreDollaro = document.getElementById("valoreDollaro");
const valoreYen = document.getElementById("valoreYen");
const valoreSterlina = document.getElementById("valoreSterlina");
const valoreNonValido = document.getElementById("valoreNonValido");

let valoreSterlinaC = 1.19;
let valoreYenC = 0.0057;
let valoreDollaroC = 0.89;


darkSwitch.addEventListener("change", function () {
    if (darkSwitch.checked) {
        document.body.setAttribute("data-bs-theme", "dark");
    } else {
        document.body.setAttribute("data-bs-theme", "light");
    }
});


inputEuro.addEventListener('input', function () {
    const inserimentoRaw = inputEuro.value.trim();
    const inserimento = Number(inserimentoRaw);


    if (inserimentoRaw === '' || !Number.isFinite(inserimento) || inserimento < 0) {
        valoreNonValido.classList.add('d-block');
        valoreNonValido.classList.remove('d-none');

        valoreDollaro.textContent = '';
        valoreSterlina.textContent = '';
        valoreYen.textContent = '';
        return;
    }

    valoreNonValido.classList.remove('d-block');
    valoreNonValido.classList.add('d-none');

    valoreDollaro.textContent = (inserimento * valoreDollaroC).toFixed(2) + ' dollari';
    valoreSterlina.textContent = (inserimento * valoreSterlinaC).toFixed(2) + ' sterline';
    valoreYen.textContent = (inserimento * valoreYenC).toFixed(0) + ' yen';
});


