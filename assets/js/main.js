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

function progress() {
    let skillCircle = document.querySelectorAll('.skill-circle');
    
    skillCircle.forEach(function(item){
        item.addEventListener('mouseover', function(e){
            let circle = this.getElementsByClassName('circle')[0];
            let percent = this.getAttribute('data-percent');
            let percentCal = 1000 - percent;
            circle.style.strokeDashoffset = percentCal;
            this.addEventListener('mouseout', function(e) {
                circle.style.strokeDashoffset = 1000;
            })
        })
    })
}

function isotope() {
    let filterBtn = document.querySelectorAll('.filter-button-group a');

    const iso = new Isotope('.grid', {
        itemSelector: '.element-item',
        // layoutMode: 'fitRows',
        stagger: 30,
    });

    filterBtn.forEach(function(btn) {
        btn.addEventListener('click', function(e){
            e.preventDefault()
            let filterValue = this.getAttribute('data-filter');
            filterBtn.forEach(function(item) {
                item.classList.remove('active')
            })
            this.classList.add('active')
            iso.arrange({ filter: filterValue });
            
        })
    })
}

document.addEventListener('DOMContentLoaded', function(e){
    menuHandle()
    progress()
    isotope()
})