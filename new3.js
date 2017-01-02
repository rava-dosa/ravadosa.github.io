var menu = document.querySelector('.menu');
console.log(menu);
var menuPosition = menu.getBoundingClientRect().top;
window.addEventListener('scroll', function() {
    if (window.pageYOffset >= menuPosition) {
        menu.style.position = 'fixed';
        menu.style.top = '0px';
    } else {
        menu.style.position = 'static';
        menu.style.top = '';
    }
});

var menu1 = document.querySelector('.menu1');
console.log(menu1);
var menu1Position = menu1.getBoundingClientRect().top;
window.addEventListener('scroll', function() {
    if (window.pageYOffset >= menu1Position) {
        menu1.style.position = 'fixed';
        menu1.style.left = '0px';
		menu1.style.marginTop = '2%' ;
		menu1.style.marginBottom = '10%' ;
		
    } else {
        menu1.style.position = 'static';
        menu1.style.left = '0px';
		menu1.style.marginTop = '2%' ;
		menu1.style.marginBottom = '' ;
    }
});

var menu2 = document.querySelector('.menu1');
console.log(menu2);
var menu1Position = menu2.getBoundingClientRect().top;
window.addEventListener('scroll', function() {
    if (window.pageYOffset >= menu2Position) {
        menu2.style.position = 'fixed';
        menu2.style.left = '0px';
		menu2.style.marginTop = '80%' ;
		menu2.style.marginBottom = '10%' ;
		
    } else {
        menu2.style.position = 'static';
        menu2.style.left = '0px';
		menu2.style.marginTop = '80%' ;
		menu2.style.marginBottom = '' ;
    }
});