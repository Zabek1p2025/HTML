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