//1 imie 
//od 16 d0 64 +px
//color 
//3 x range rgb `rgb($red,$green,$blue)`

let formularz = document.forms.kolory
let wymik = document.getElementById("wynik")
let wymik1 = document.getElementById("wynik1")

formularz.addEventListener("change", function(){

    let imie = document.forms.kolory.name.value 
    let nazwisko = document.forms.kolory.surname.value 
    let number = document.forms.kolory.font.value 
    let color = document.forms.kolory.color.value 
    let red = document.forms.kolory.red.value 
    let green = document.forms.kolory.green.value 
    let blue = document.forms.kolory.blue.value 
    
wymik.textContent = imie
wymik1.textContent = nazwisko
wynik.style.fontSize = number+"px"
wynik1.style.fontSize = number+"px"
wynik1.style.color = color 
wynik.style.color = "rgb("+red+","+green+","+blue+")"
})
