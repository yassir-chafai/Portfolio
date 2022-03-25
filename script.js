$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "smooth");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });


    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer","Designer", "Freelancer"],
        typeSpeed: 90,
        backSpeed: 50,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer","Designer", "Freelancer"],
        typeSpeed: 200,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    
});

let progress = document.getElementById('progressbar');
window.onscroll = function () {
    let totalHeight = document.body.scrollHeight + window.innerHeight;
    let progressHeight = (window.pageYOffset / totalHeight) * 135;
    progress.style.display = 'revert';
    progress.style.height = progressHeight + "%";
    let flowBar1 = document.getElementById('htBar');
    let flowBar2 = document.getElementById('csBar');
    let flowBar3 = document.getElementById('jsBar');
    let flowBar4 = document.getElementById('nodeBar');
    let flowBar5 = document.getElementById('expressBar');
    let flowBar6 = document.getElementById('mongodbBar');
    if (progressHeight > 5) {

        flowBar1.style.animationName = 'animateskillbar11';
        flowBar2.style.animationName = 'animateskillbar22';
        flowBar3.style.animationName = 'animateskillbar33';
        flowBar4.style.animationName = 'animateskillbar44';
        flowBar5.style.animationName = 'animateskillbar55';
        flowBar6.style.animationName = 'animateskillbar66';
    }
    else {
        flowBar1.style.animationName = 'animateskillbar1';
        flowBar2.style.animationName = 'animateskillbar2';
        flowBar3.style.animationName = 'animateskillbar3';
        flowBar4.style.animationName = 'animateskillbar4';
        flowBar5.style.animationName = 'animateskillbar5';
        flowBar6.style.animationName = 'animateskillbar6';
    }

}

// text animation 
var wrapper = document.getElementsByClassName("text-animation")[0];
wrapper.style.opacity="1";
wrapper.innerHTML = wrapper.textContent.replace(/./g,"<span>$&</span>");

var spans = wrapper.getElementsByTagName("span");

for(var i=0;i<spans.length;i++){
  spans[i].style.animationDelay = i*150+"ms";
}  

// fade away 
$(window).scroll(function(){
    $(".top").css("opacity", 1 - $(window).scrollTop() / 500);
  });


//cursor cstmz

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY - 10)+"px; left:"+(e.pageX - 10)+"px;")
})

document.addEventListener('click', ()=>{
    cursor.classList.add('expand');

    setTimeout(()=>{
        cursor.classList.remove("expand");
    }, 500);
})

