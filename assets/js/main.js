function menuHandle() {
    let header = document.querySelector('header')
    function fixedHeader() {
        let headerHeight = header.offsetHeight;
        let scrollingPosition = window.scrollY;
        if (scrollingPosition >= headerHeight) {
            header.classList.add('isFixed')
        }
        else {
            header.classList.remove('isFixed')
        }
    }

    function scrollSpy() {
        let navLinks = document.querySelectorAll('.nav-link')
        let anchors = document.querySelectorAll('.scrollSpy')
        let scrollPos = window.scrollY || document.body.scrollTop;
        for (let anchor in anchors) {
            if (anchors.hasOwnProperty(anchor) && anchors[anchor].offsetTop - 250 <= scrollPos) {
                let id = anchors[anchor].id
                let navItem = document.querySelector(`.nav-item[href*=${id}]`)
                navLinks.forEach(item => {
                    item.classList.remove('active');

                });
                navItem.parentNode.classList.add('active');
            }
        }
    }

    function menuReszie() {
        if (window.matchMedia("(max-width: 768px)").matches) {
            header.classList.add('isMobile')
        } else {
            header.classList.remove('isMobile')
        }
    }

    function openSidebarMenu() {
        const openSidebarBtn = document.querySelector('.open-nav-btn')
        const navigation = document.querySelector('nav')
        const navItems = document.querySelectorAll('.nav-item')
        let isSidebarOpen = false;
        openSidebarBtn.addEventListener('click', function () {
            switch (isSidebarOpen) {
                case false:
                    this.classList.add('active')
                    navigation.classList.add('isOpen')
                    isSidebarOpen = true
                    break;
                default:
                    this.classList.remove('active')
                    isSidebarOpen = false
                    navigation.classList.remove('isOpen')
                    break;
            }

        })

    }

    menuReszie()
    fixedHeader()
    scrollSpy()
    openSidebarMenu()

    window.addEventListener('scroll', fixedHeader)
    window.addEventListener('scroll', scrollSpy)
    window.addEventListener('resize', menuReszie)
}

function progress() {
    let skillCircle = document.querySelectorAll('.skill-circle');

    skillCircle.forEach(function (item) {
        item.addEventListener('mouseover', function (e) {
            let circle = this.getElementsByClassName('circle')[0];
            let percent = this.getAttribute('data-percent');
            let percentCal = 1000 - percent;
            circle.style.strokeDashoffset = percentCal;
            this.addEventListener('mouseout', function (e) {
                circle.style.strokeDashoffset = 1000;
            })
        })
    })
}

function isotope() {
    let filterBtn = document.querySelectorAll('.filter-button-group a');

    const iso = new Isotope('.grid', {
        itemSelector: '.element-item',
        stagger: 30,
    });

    filterBtn.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault()
            let filterValue = this.getAttribute('data-filter');
            filterBtn.forEach(function (item) {
                item.classList.remove('active')
            })
            this.classList.add('active')
            iso.arrange({ filter: filterValue });

        })
    })
}

function slickSlider() {
    let arrowConfig = {
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-chevron-right"></i></button>'
    }
    $('.skill-cards').slick({
        ...arrowConfig,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            }
        ]
    })

    $('.skill-circle_group').slick({
        ...arrowConfig,
        slidesToShow: 1,
        infinite: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    })
}

document.addEventListener('DOMContentLoaded', function () {
    menuHandle()
    progress()
    isotope()
    slickSlider()
})