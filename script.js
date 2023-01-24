// Designed and coded by Rohit Girdhar
$(document).ready(function() {
    console.clear()
    console.log('Well, if you are reading this... you are not an average visitor!');
    console.log('You have my respect!');
    Barba.Pjax.start();

    var FadeTransition = Barba.BaseTransition.extend({

    start: function() {
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
      var fadeOutPromise = new Promise(function(resolve) {
          var tl = new TimelineMax();

          tl
          .to(".content-section", 0.1, {autoAlpha: 0 ,onComplete: function() {resolve();}})
          .to(".EXP", 1, {autoAlpha: 0, delay:0,onComplete: function() {resolve();}})
      })

    return fadeOutPromise;
  },

  fadeIn: function() {
    var _this = this;
    var $el = $(this.newContainer);

    TweenMax.set($(this.oldContainer), {display: 'none'});
    TweenMax.to($el,0.1, {opacity: 1, onComplete: function() {_this.done(); window.scrollTo(0, 0);}})

    TweenMax.from(".heading", 0.4, {y: 30, autoAlpha: 0})

    TweenMax.from(".resume-quote-holder p", 0.4, {y: 30, autoAlpha: 0, delay:0.15})
    TweenMax.from(".resume-quote-holder #by-line", 0.4, {y: 20, autoAlpha: 0, delay:0.25})
    TweenMax.from(".button-holder", 0.4, {y: 20, autoAlpha: 0, delay:0.35})
    TweenMax.to(".underline", 0.4, {width: "100%", delay:0.55})
    TweenMax.to("#reveal-block", 0.1, {x: 200, delay:0})

    TweenMax.from(".contact-top-container p", 0.5, {y: 30, autoAlpha: 0, delay:0.15})
    TweenMax.from(".contact-top-container #email-text", 0.5, {y: 30, autoAlpha: 0, delay:0.25})
    TweenMax.from(".contact-top-container .contact-link-container", 0.4, {y: 30, autoAlpha: 0, delay:0.35})

    TweenMax.from(".c-first-heading", 0.3, {y: 30, autoAlpha: 0, delay:0.1})
    TweenMax.from(".c-subsequent-headings", 0.6, {y: 20, autoAlpha: 0, delay:0.75})

    TweenMax.from(".experience-detail-heading", 0.4, {y: 20, autoAlpha: 0, delay:0.15})

    TweenMax.staggerFrom($('.certificate-holder h3'), 0.9, {y: 3, autoAlpha: 0,delay:0.25}, 0.07)
    TweenMax.staggerFrom($('.company'), 0.5, {y: 20, autoAlpha: 0,delay:0.25}, 0.05)
    TweenMax.staggerFrom($('.time-duration'), 0.5, {y: 20, autoAlpha: 0,delay:0.25}, 0.05)
    TweenMax.staggerFrom($('.experience-detail-list-container li'), 0.7, {y: 2, autoAlpha: 0,delay:0.35}, 0.05)

},
});

Barba.Pjax.getTransition = function() {

return FadeTransition;
};

$('#dell_1').on('click', function() {
    TweenMax.staggerTo($('.company'), 0.3, {y: -20, autoAlpha: 0,delay:0.25}, 0.05)
    TweenMax.staggerTo($('.time-duration'), 0.3, {y: -20, autoAlpha: 0,delay:0.25}, 0.05)
    // TweenMax.to(".block-slider", 0.5, {visibility: 'visible', autoAlpha: 1, delay:20.3})

});


// setInterval(function(){
//     $('#waving').addClass('wave').delay(300).queue(function(next){
//             $(this).removeClass('wave');
//             next();
//        });
// }, 700);






});

path = window.location.href.split("/")[3];
if (path.includes("index")) {
    TweenMax.staggerFrom($('.menu--adsila a'), 0.6, {y: 0, autoAlpha: 0,delay:0.35}, 0.05)
}



document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    var currentPage = ""

    if (e.keyCode == '38') {
        // up arrow
        path = window.location.href.split("/")[3];
        if (path.includes("index")) {currentPage = "Home"}
        if (path.includes("experience")) {currentPage = "Experience"}
        if (path.includes("certification")) {currentPage = "Certifications"}
        if (path.includes("resume")) {currentPage = "Resume"}
        if (path.includes("contact")) {currentPage = "Contact"}
        if (path.includes("one")) {currentPage = "Experience One"}
        if (path.includes("two")) {currentPage = "Experience Two"}
        if (path.includes("three")) {currentPage = "Experience Three"}
        if (path.includes("four")) {currentPage = "Experience Four"}

        if (currentPage == "Home") { $("ul a")[4].click() }
        if (currentPage == "Experience") { $("ul a")[0].click() }
        if (currentPage == "Certifications") { $("ul a")[1].click() }
        if (currentPage == "Resume") { $("ul a")[2].click() }
        if (currentPage == "Contact") { $("ul a")[3].click() }
        if (currentPage == "Experience One") { $("ul a")[1].click() }
        if (currentPage == "Experience Two") { $("ul a")[1].click() }
        if (currentPage == "Experience Three") { $("ul a")[1].click() }
        if (currentPage == "Experience Four") { $("ul a")[1].click() }

    }
    else if (e.keyCode == '40') {
        // down arrow
        path = window.location.href.split("/")[3];
        if (path.includes("index")) {currentPage = "Home"}
        if (path.includes("experience")) {currentPage = "Experience"}
        if (path.includes("certification")) {currentPage = "Certifications"}
        if (path.includes("resume")) {currentPage = "Resume"}
        if (path.includes("contact")) {currentPage = "Contact"}

        if (currentPage == "Home") { $("ul a")[1].click() }
        if (currentPage == "Experience") { $("ul a")[2].click() }
        if (currentPage == "Certifications") { $("ul a")[3].click() }
        if (currentPage == "Resume") { $("ul a")[4].click() }
        if (currentPage == "Contact") { $("ul a")[0].click() }
    }
    else if (e.keyCode == '37') {
       // left arrow
       path = window.location.href.split("/")[3];
       if (path.includes("index")) {currentPage = "Home"}
       if (path.includes("experience")) {currentPage = "Experience"}
       if (path.includes("certification")) {currentPage = "Certifications"}
       if (path.includes("resume")) {currentPage = "Resume"}
       if (path.includes("contact")) {currentPage = "Contact"}
       if (path.includes("one")) {currentPage = "Experience One"}
       if (path.includes("two")) {currentPage = "Experience Two"}
       if (path.includes("three")) {currentPage = "Experience Three"}
       if (path.includes("four")) {currentPage = "Experience Four"}

       if (currentPage == "Home") { $("ul a")[4].click() }
       if (currentPage == "Experience") { $("ul a")[0].click() }
       if (currentPage == "Certifications") { $("ul a")[1].click() }
       if (currentPage == "Resume") { $("ul a")[2].click() }
       if (currentPage == "Contact") { $("ul a")[3].click() }
       if (currentPage == "Experience One") { $("ul a")[1].click() }
       if (currentPage == "Experience Two") { $("ul a")[1].click() }
       if (currentPage == "Experience Three") { $("ul a")[1].click() }
       if (currentPage == "Experience Four") { $("ul a")[1].click() }
    }
    else if (e.keyCode == '39') {
       // right arrow
       path = window.location.href.split("/")[3];
       if (path.includes("index")) {currentPage = "Home"}
       if (path.includes("experience")) {currentPage = "Experience"}
       if (path.includes("certification")) {currentPage = "Certifications"}
       if (path.includes("resume")) {currentPage = "Resume"}
       if (path.includes("contact")) {currentPage = "Contact"}

       if (currentPage == "Home") { $("ul a")[1].click() }
       if (currentPage == "Experience") { $("ul a")[2].click() }
       if (currentPage == "Certifications") { $("ul a")[3].click() }
       if (currentPage == "Resume") { $("ul a")[4].click() }
       if (currentPage == "Contact") { $("ul a")[0].click() }
    }

}






$(function() {
  var text = $(".text");
  var marathonImage = $('#marathon-img')
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    // console.log(scroll);

    if (scroll >= 800) {
      text.removeClass("hidden");
    } else {
      text.addClass("hidden");
    }

    if (scroll >= 350) {
      TweenMax.from($("#marathon-img"), 2, {y: 30, autoAlpha: 0})
      // alert('Yes')
    }
    // else {
    //   text.addClass("hidden");
    // }


  });
});
