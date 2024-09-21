$(document).ready(function(){

    $(window).on('scroll load',function(){
        $('#menu-bar').removeClass('fa-times');
        $('.navbar').removeClass('active');

        // Check if #scroll-top element exists
        let scrollTopElem = document.querySelector('#scroll-top');
        if (scrollTopElem) {
            if(window.scrollY > 200){
                scrollTopElem.classList.add('active');
            } else {
                scrollTopElem.classList.remove('active');
            }
        }

        // scroll spy of section
        $('section').each(function(){
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if(top > offset && top < offset + height){
                $('.navbar li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        }, 600, 'linear');
    });

});

// menubar nav
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let imgBtn = document.querySelectorAll('.img-btn');

// Check if menu and navbar exist
if (menu && navbar) {
    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    };
}

window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    // Check if header exists
    if (header) {
        header.classList.toggle("sticky", window.scrollY > 0);
    }
});

// change home background
if (imgBtn.length > 0) {
    imgBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.controls .active').classList.remove('active');
            btn.classList.add('active');
            let src = btn.getAttribute('data-src');
            document.querySelector('#home').style.backgroundImage = 'url("' + src + '")';
        });
    });
}

// carousel life in composey
var lifeimg = document.querySelectorAll('.lifeimg');
var len = lifeimg.length;

if (len > 0) {
    for (var i = 0; i < len; i++) {
        lifeimg[i].addEventListener('click', function() {
            document.getElementById('curimg').src = this.src;
        });
    }
}

const slideLeft = document.getElementById('prev');
const slideRight = document.getElementById('next');
const lifeimgGallery = document.getElementById('lifeimg-gallery');

// Check if prev, next, and gallery exist
if (slideLeft && slideRight && lifeimgGallery) {
    slideLeft.addEventListener('click', function(){
        lifeimgGallery.scrollLeft -= 150;
    });

    slideRight.addEventListener('click', function(){
        lifeimgGallery.scrollLeft += 150;
    });
}

// map 
function initMap() {
    const coord = { lat: 28.7041, lng: 77.1025 };

    const mapElem = document.getElementById("map");
    if (mapElem) {
        const map = new google.maps.Map(mapElem, {
            zoom: 14,
            center: coord,
            mapId: "efffb52a8e985f64",
        });
        const marker = new google.maps.Marker({
            position: coord,
            map: map,
        });
    }
}
