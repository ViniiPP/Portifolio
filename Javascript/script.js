
/*=============Ativando o id da navbar conforme a pagina em destaque ======*/
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < (offset + height)){
            navLinks.forEach(links => {
                links.classList.remove('ativa');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('ativa');

            });
        };

    });

/* DESENVOLVER DEPOIS NA RESPONSIVIDADE */
/*+++++++++++ header2 navbar - ativando o header2 resposividade ++++++*/
    let header = document.querySelector('header');

    header.classList.toggle('header2', window.scrollY > 100);
    /*add responsividade no css*/

    
/*+++++++++++++ remove o header2 quando clica no link do menu ++++++*/
    menuIcon.classList.remove('bx-x')
    navBar.classList.remove('ativa')

};


/*================  Ativando icone navbar na responsividade =========*/

let menuIcon = document.querySelector('#menu-icones');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    /* boxicon 'x'  */
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('ativa')

};


/*====================  scroll reverse JS (animação) site ==============*/
/*Link customization.html*/

ScrollReveal({ 
    //reset: true,   //remover para cada iteração comentando o reset  
    distance: '80px',
    duration: 2000,
    delay: 100,

});

/* EFEITOS DE MOVIMENTO DAS COISAS */
ScrollReveal().reveal('.home-conteiner, .cabecalho', { origin: 'top' });
ScrollReveal().reveal('.home-img, .servicos-conteiner, portfolio-box, .contato form', { origin: 'bottom' });
ScrollReveal().reveal('.home-conteiner h1, .sobre-img', { origin: 'left' });
ScrollReveal().reveal('.home-conteiner p, .sobre-conteiner', { origin: 'right' });
ScrollReveal().reveal('.sobre_titulo, .sobre_texto', { origin: 'right' });
ScrollReveal().reveal('.img-meio', { origin: 'left' });
ScrollReveal().reveal('.my_service', { origin: 'left' });
ScrollReveal().reveal('.sobre_info', { origin: 'bottom' });
ScrollReveal().reveal('.my_habilidades', { origin: 'bottom' });


//adicionar flutuação com css 
//tag .home-img img


/*================ typed JS (Bib em JS) multiplo textos =================*/
/* https://www.mundojs.com.br/2019/01/24/conheca-o-typed-js/ */
new Typed('.texto-multiplo', {
    strings: ['Desenvolvedor Front-End!', 'ViniiPP - Dono do projeto'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1000,
    loop: true, 
});


new Typed('.texto-rapido', {
    strings: ['Desenvolvedor Front-End!', 'ViniiPP - Dono do projeto'],
    typeSpeed: 80,
    backSpeed: 30,
    backDelay: 6000,
    loop: true, 
});



/* barra de NAVEGAÇÃO */
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-67px"; // valor ajustável para definir a altura da barra de navegação
  }
  
  prevScrollpos = currentScrollPos;
}



/* FOTO DO MEIO - TROCA */
var banner = document.querySelector('.img-meio');
var banners = ['img/home.png', 'img/sobre.png'];

var bannerAtual = 0;

function trocaBanner() {
    bannerAtual++;
    if (bannerAtual == banners.length) {
        bannerAtual = 0;
    }
    
    banner.style.opacity = '0'; // Define a opacidade inicial como 0 para criar o efeito de desvanecimento
    
    setTimeout(function() {
        banner.src = banners[bannerAtual];
        banner.style.transform = 'translateX(100%)'; // Move o banner para fora da tela na direção horizontal
        banner.style.opacity = '1'; // Define a opacidade para 1 para criar o efeito de desvanecimento
    }, 2000); // Tempo para trocar o banner (1 segundo)

    setTimeout(function() {
        banner.style.transform = 'translateX(0)'; // Move o banner de volta para a posição original
    }, 1100); // Tempo para iniciar o efeito de arrastar (1.1 segundos)
}

setInterval(trocaBanner, 8000);


