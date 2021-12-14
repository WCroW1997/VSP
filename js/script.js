let menuCatalog = document.querySelector('.burger');
let catalog = document.querySelector('.catalog')
let close = document.querySelector('.close');
let menuBtn = document.querySelector('.humburger__menu');
let headerMenu = document.querySelector('.header__menu');
let lock = document.querySelector('body');
let navigation = document.querySelector('.nav__list');
let contact = document.querySelector('.contact');
let mobileCatalog = document.querySelector('.catalog--mobile');
let logo = document.querySelector('.logo');
let closeBtn = document.querySelector('.close__burger')
let openBtn = document.querySelector('.open')

menuCatalog.addEventListener('click', function(){
	menuCatalog.classList.add('active');
	catalog.classList.add('active');
	// menuBtn.classList.toggle('active');
	// menu.classList.toggle('active');
    lock.classList.add('lock');
})

close.addEventListener('click', function(){
	menuCatalog.classList.remove('active');
	catalog.classList.remove('active');
	// menuBtn.classList.toggle('active');
	// menu.classList.toggle('active');
    lock.classList.remove('lock');
})


menuBtn.addEventListener('click', function(){
	mobileCatalog.classList.toggle('active');
	navigation.classList.toggle('active');
	contact.classList.toggle('active');
	headerMenu.classList.toggle('active');
	logo.classList.toggle('active');
	lock.classList.toggle('lock');
	openBtn.classList.toggle('active');
	closeBtn.classList.toggle('active');
	menuBtn.classList.toggle('active');
})
