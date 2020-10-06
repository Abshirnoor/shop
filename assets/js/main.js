/*===== MENU SHOW =====*/ 

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show') 
        })
    }
}

showMenu('nav-toggle','nav-menu')
/*===== REMOVE MENU =====*/

const navLink = document.querySelectorAll('.nav__link')
// active link
function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

// remove mobile menu
const navMenu = document.getElementById('nav-menu')
navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
/*===== SCROLL SECTIONS ACTIVE LINK =====*/


/*===== CHANGE COLOR HEADER =====*/ 
