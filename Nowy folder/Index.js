let kliknij = document.forms.buttons.kliknij
let kliknij1 = document.forms.buttons.hover
let kliknij2 = document.forms.buttons.clicks
let kliknij3 = document.forms.buttons.hold
let kliknij4 = document.forms.buttons.over

kliknij.addEventListener("click",function(){
    kliknij.style.backgroundColor = "red"

    setTimeout(() => {
        kliknij.style.backgroundColor = "green"
    }, 100);
})
kliknij1.addEventListener("mouseover",function(){
    kliknij1.style.backgroundColor = "red"
    setTimeout(() => {
        kliknij1.style.backgroundColor = "green"
    }, 10);
    
})
kliknij2.addEventListener("dblclick",function(){
    kliknij2.style.backgroundColor = "red"
    setTimeout(() => {
        kliknij2.style.backgroundColor = "green"
    }, 100);
})
kliknij3.addEventListener("mousedown",function(){
    kliknij3.style.backgroundColor = "red"
    setTimeout(() => {
        kliknij3.style.backgroundColor = "green"
    }, 100);

})
kliknij4.addEventListener("mousemove",function(){
    kliknij4.style.backgroundColor = "red"
    setTimeout(() => {
        kliknij4.style.backgroundColor = "green"
    }, 10);
})
let formularz = document.forms.formularz1

formularz.submit.addEventListener("click", function(){
    let imie = formularz.imie.value
    let nazwisko = formularz.nazwisko.value
    let wiek = formularz.wiek.value
    let adres = formularz.adres.value
    let wzrost = formularz.wzrost.value

    wynik.textContent= "Nazywasz się "+imie+ " "+nazwisko+" masz "+wiek +" lat "+"twój wzrost to "+wzrost + " mieszkasz pod adresem "+ adres
})

function auta(){
    let wynik1 = document.getElementById("wynik1")
    let lista = document.getElementById("wybur")
    wynik1.textContent = lista.value
}

// let zmiana = document.forms.formlurzchange
// let wynik2 = document.getElementById("wypisz")

// zmiana.addEventListener("change", function(){
//     let kotki = document.forms.formlurzchange.koty
// for(let i = 0; i < kotki.value.length; i++){
//     if(kotki[i].checked)
//     wynik2.textContent = kotki[i].value
// }

// })
