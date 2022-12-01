let heroImg = document.querySelector('.hero__box img');
let imgs = document.querySelectorAll('.hero__img img');

for(let img of imgs){
    img.addEventListener(`click`,function(){
        heroImg.setAttribute(`src`,img.getAttribute(`src`))
        playOn(img.getAttribute(`audiourl`))
    })
}
let playOn = (name)=> new Audio(name).play();