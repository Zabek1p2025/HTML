document.addEventListener("DOMContentLoaded", () => {

  


    const przycisk1 = document.getElementById("przycisk1");
    if (przycisk1) {
        przycisk1.addEventListener("click", () => {
            alert("Kliknięto przycisk!");
        });
    }

    

    const przycisk2 = document.getElementById("przycisk2");
    if (przycisk2) {
        przycisk2.addEventListener("mouseover", () => {
            przycisk2.style.backgroundColor = "#e74c3c";
            przycisk2.textContent = "Kursor jest na przycisku!";
        });
        przycisk2.addEventListener("mouseout", () => {
            przycisk2.style.backgroundColor = "#3498db";
            przycisk2.textContent = "Najedź na mnie";
        });
    }

  
    const przycisk3 = document.getElementById("przycisk3");
    if (przycisk3) {
        przycisk3.addEventListener("dblclick", () => {
            alert("Kliknięto dwukrotnie!");
        });
    }

  
    const przycisk4 = document.getElementById("przycisk4");
    if (przycisk4) {
        przycisk4.addEventListener("mousedown", () => {
            przycisk4.textContent = "Trzymasz przycisk...";
            przycisk4.style.backgroundColor = "#27ae60";
        });
        przycisk4.addEventListener("mouseup", () => {
            przycisk4.textContent = "Puściłeś przycisk!";
            przycisk4.style.backgroundColor = "#3498db";
        });
    }

 
    const przycisk5 = document.getElementById("przycisk5");
    if (przycisk5) {
        let count = 0;
        przycisk5.addEventListener("mousemove", () => {
            count++;
            przycisk5.textContent = `Ruchów kursorem: ${count}`;
        });
    }

  
    const formularz1 = document.getElementById("formularz1");
    const wynik = document.getElementById("wynik");

    if (formularz1) {
        formularz1.addEventListener("submit", (e) => {
            e.preventDefault(); // Powstrzymuje przeładowanie strony

            const imie = document.forms["formularz1"].elements["imie"].value;
            const nazwisko = document.forms["formularz1"].nazwisko.value;
            const wiek = document.forms.formularz1.wiek.value;
            const adres = document.forms.formularz1.elements["adres"].value;
            const wzrost = document.querySelector('#formularz1 input[name="wzrost"]').value;

            wynik.innerHTML = `Nazywasz się <strong>${imie} ${nazwisko}</strong>, masz <strong>${wiek}</strong> lat, <strong>${wzrost} cm</strong> wzrostu i mieszkasz pod adresem: <strong>${adres}</strong>.`;
        });
    }

    // Checkbox - change event
    const formularzChange = document.getElementById("formularzchange");
    const wypisz = document.getElementById("wypisz");

    if (formularzChange) {
        formularzChange.addEventListener("change", () => {
            const wybraneKoty = [];
            const checkboxes = formularzChange.querySelectorAll('input[name="koty"]:checked');

            checkboxes.forEach((cb) => {
                wybraneKoty.push(cb.value);
            });

            if (wybraneKoty.length > 0) {
                wypisz.textContent = "Wybrane rasy: " + wybraneKoty.join(", ");
            } else {
                wypisz.textContent = "Tu pojawi się wynik: Brak zaznaczonych kotów.";
            }
        });
    }


    const testFocus = document.getElementById("testfocus");
    const btnFocus = document.getElementById("btnfocus");

    if (btnFocus && testFocus) {
        btnFocus.addEventListener("click", () => {
            testFocus.focus();
        });

        testFocus.addEventListener("focus", () => {
            testFocus.style.borderColor = "#1abc9c";
            testFocus.style.backgroundColor = "#e8f8f5";
        });

        testFocus.addEventListener("blur", () => {
            testFocus.style.borderColor = "#ccc";
            testFocus.style.backgroundColor = "#ffffff";
        });
    }
});

 HTML: onchange="mojafunkcja()"
function mojafunkcja() {
    const mojwybor = document.getElementById("mojwybor");
    const wynik2 = document.getElementById("wynik2");

    if (mojwybor && wynik2) {
        wynik2.textContent = "Tu pojawi się wynik: Wybrana marka to " + mojwybor.value;
    }
}