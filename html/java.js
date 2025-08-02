//? ------------ [ Index Page Code ] -------------

const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', ()=>{
        navbar.classList.add('active')
    })
}

if(close){
    close.addEventListener('click', ()=>{
        navbar.classList.remove('active')
    })
}


//? ------------- [ Single Product Code] --------------

let mainImg = document.getElementById("main-img");
let smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function(){
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    mainImg.src = smallImg[3].src;
}
smallImg[4].onclick = function(){
    mainImg.src = smallImg[4].src;
}
