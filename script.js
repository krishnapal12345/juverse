burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
juverse = document.querySelector('.juverse');
JuVerse1 = document.querySelector('.JuVerse1');
navcontent = document.querySelector('.navcontent');





burger.addEventListener('click',()=>{
    JuVerse1.classList.toggle('v-class-resp');
    juverse.classList.toggle('v-class-resp');
    navcontent.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');

})
