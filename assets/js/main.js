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

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text, .cv__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img, .cv__actions',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
sr.reveal('.section',{opacity: 0, distance: '20px', interval: 120}); 

/*===== HOME NAME TYPE/ERASE =====*/
const typedName = document.querySelector('.home__title-typed')
if (typedName) {
    const fullText = typedName.dataset.text || typedName.textContent.trim()
    let index = fullText.length
    let direction = -1
    const speed = 80
    const pause = 1200

    const tick = () => {
        if (direction === -1) {
            if (index > 0) {
                index -= 1
                typedName.textContent = fullText.slice(0, index)
                setTimeout(tick, speed)
            } else {
                direction = 1
                setTimeout(tick, pause)
            }
        } else {
            if (index < fullText.length) {
                index += 1
                typedName.textContent = fullText.slice(0, index)
                setTimeout(tick, speed)
            } else {
                direction = -1
                setTimeout(tick, pause)
            }
        }
    }

    setTimeout(tick, pause)
}
