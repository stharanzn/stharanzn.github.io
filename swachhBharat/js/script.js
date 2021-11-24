const btnhamburger = document.querySelector('#btnhamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('#mobile_menu');
const body = document.querySelector('body');

const toggle = document.querySelector('#toggling');
const toggleClass = document.querySelector('.header__logo');

const buttons =  document.querySelectorAll('.invite');

toggle.addEventListener('click',function(){
    if(body.classList.contains('light') & body.classList.contains('light__lightBody')){
        body.classList.remove('light');
        body.classList.remove('light__body');
        toggleClass.classList.add('dark__toggle');
        body.classList.add('dark');
        body.classList.add('dark__darkBody');
    }else{
        body.classList.remove('dark');
        body.classList.remove('dark__darkBody');
        toggleClass.classList.add('light++toggle');
        body.classList.add('light');
        body.classList.add('light__lightBody');
    }
});

function toggleMode(){
    if(body.classList.contains('light') & body.classList.contains('light__lightBody')){
        body.classList.remove('light');
        body.classList.remove('light__body');
        toggleClass.classList.add('dark__toggle');
        body.classList.add('dark');
        body.classList.add('dark__darkBody');
    }else{
        body.classList.remove('dark');
        body.classList.remove('dark__darkBody');
        toggleClass.classList.add('light++toggle');
        body.classList.add('light');
        body.classList.add('light__lightBody');
    }
}

btnhamburger.addEventListener('click',function(){
    if(header.classList.contains('open')){
        body.classList.remove('noscroll');
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        menu.classList.add('fade-out');
        menu.classList.remove('fade-in');

        
    }
    else{
        body.classList.add('noscroll');
        header.classList.add('open');
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out');
        menu.classList.add('fade-in');
        menu.classList.remove('fade-out');
        if(overlay.classList.contains('hide_overlay')){
            overlay.classList.remove('hide_overlay');
            menu.classList.remove('hide_overlay');
        }

    }

    
});

