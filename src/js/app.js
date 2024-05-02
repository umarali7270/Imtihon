let link = document.querySelectorAll('#header-link')

link.forEach(function (item , index){
    item.addEventListener('click' , function(){
        link.forEach(function (element){
            element.classList.remove('active')
        })
        item.classList.add('active')
    })
})



let MenuPng = document.querySelector('.menu-png')
let XPng = document.querySelector('.x-png')
let MenuSection = document.querySelector('.hamburger-section')

MenuPng.addEventListener('click' , function(){
    MenuSection.classList.add('actives')
})

XPng.addEventListener('click' , function(){
    MenuSection.classList.remove('actives')
})

let mainImg =document.querySelector('#mainImg')
let heroImg =document.querySelectorAll('#heroImg')


heroImg.forEach(function(item , index){
    item.addEventListener('click' , function(){
        console.log('salom');
        console.log(mainImg.style.backgroundImage);
        console.log(item.src);
        mainImg.style.backgroundImage = `url(${item.src})`
    })
})