function menuHandle() {
    function fixedNav() {
        let nav = document.getElementsByTagName('header')[0];
        let navHeight = nav.offsetHeight;
        let scrollingPosition = window.scrollY;
        if (scrollingPosition >= navHeight) {
            nav.classList.add('isFixed')
        }
        else {
            nav.classList.remove('isFixed')
        }
    }

    function scrollSpy() {
        let navLinks = document.querySelectorAll('.nav-link')
        let anchors = document.querySelectorAll('.scrollSpy')
        let scrollPos = window.scrollY || document.body.scrollTop;
        for ( let anchor in anchors ) {
            if(anchors.hasOwnProperty(anchor) &&  anchors[anchor].offsetTop <= scrollPos) {                
                let id = anchors[anchor].id
                let navItem = document.querySelector(`.nav-item[href*=${ id }]`)
                navLinks.forEach(item => {
                    item.classList.remove('active');
                        
                });
                navItem.parentNode.classList.add('active');
            }
        }
    }


    fixedNav()
    scrollSpy()
    window.addEventListener('scroll', fixedNav)
    window.addEventListener('scroll', scrollSpy)
}

document.addEventListener('DOMContentLoaded', function(e){
    menuHandle()
})