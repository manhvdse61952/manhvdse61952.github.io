$('#bar-menu-first-click').click(function(){       
    $('.line1').css({
        'transform': 'rotate(45deg)',
        'top': '10px'
    });
    $('.line2').css({
        'transform': 'rotate(45deg)',
        'top': '10px'
    });
    $('.line3').css({
        'transform': 'rotate(-45deg)',
        'top': '10px'
    });
    $('#bar-menu-click-again').css({
        'display': 'block',
        'z-index': 999
    });
}); 

$('#bar-menu-click-again').click(function(){
    $('.line1').css({
        'transform': 'rotate(0)',
        'top': '0px'
    });
    $('.line2').css({
        'transform': 'rotate(0)',
        'top': '10px'
    });
    $('.line3').css({
        'transform': 'rotate(0)',
        'top': '20px'
    });
    $('#bar-menu-click-again').css({
        'display': 'none',
        'z-index': 0
    });
});

$(document).on('click','.bol-check-click-1',function(){
    var element = document.getElementById('bol-img-1'),
    style = window.getComputedStyle(element),
    height = style.getPropertyValue('height');

    if(height === '0px'){
        $('.bol-check-click-1 img').css({
           'transform': 'translateY(0)',
           'height' : '86%'
        });
        $('.bol-check-click-1').css({
           'background-color': 'rgba(0,0,0,0.5)' 
        });
    }
    else{
      $('.bol-check-click-1 img').css({
         'transform': 'translateY(-12px)',
         'height' : 0    
      });
        $('.bol-check-click-1').css({
           'background-color': 'rgba(0,0,0,0)' 
        });
    }
});

$(document).on('click','.bol-check-click-2',function(){
    var element = document.getElementById('bol-img-2'),
    style = window.getComputedStyle(element),
    height = style.getPropertyValue('height');

    if(height === '0px'){
      $('.bol-check-click-2 img').css({
         'transform': 'translateY(0)',
         'height' : '86%'
      });
        $('.bol-check-click-2').css({
           'background-color': 'rgba(0,0,0,0.5)' 
        });
    }
    else{
      $('.bol-check-click-2 img').css({
         'transform': 'translateY(-12px)',
         'height' : 0    
      });
        $('.bol-check-click-2').css({
           'background-color': 'rgba(0,0,0,0)' 
        });
    }
});

$(document).on('click','.bol-check-click-3',function(){
    var element = document.getElementById('bol-img-3'),
    style = window.getComputedStyle(element),
    height = style.getPropertyValue('height');

    if(height === '0px'){
      $('.bol-check-click-3 img').css({
         'transform': 'translateY(0)',
         'height' : '86%'
      });
        $('.bol-check-click-3').css({
           'background-color': 'rgba(0,0,0,0.5)' 
        });
    }
    else{
      $('.bol-check-click-3 img').css({
         'transform': 'translateY(-12px)',
         'height' : 0    
      });
        $('.bol-check-click-3').css({
           'background-color': 'rgba(0,0,0,0)' 
        });
    }
});

$(document).on('click','.bol-check-click-4',function(){
    var element = document.getElementById('bol-img-4'),
    style = window.getComputedStyle(element),
    height = style.getPropertyValue('height');

    if(height === '0px'){
      $('.bol-check-click-4 img').css({
         'transform': 'translateY(0)',
         'height' : '86%'
      });
        $('.bol-check-click-4').css({
           'background-color': 'rgba(0,0,0,0.5)' 
        });
    }
    else{
      $('.bol-check-click-4 img').css({
         'transform': 'translateY(-12px)',
         'height' : 0    
      });
        $('.bol-check-click-4').css({
           'background-color': 'rgba(0,0,0,0)' 
        });
    }
});



function Scroller(options) {
  this.options = options;
  this.button = null;
  this.stop = false;
}

Scroller.prototype.constructor = Scroller;

Scroller.prototype.createButton = function() {

  this.button = document.createElement('button');
  this.button.classList.add('scroll-button');
  this.button.classList.add('scroll-button--hidden');
  this.button.textContent = "^";
  document.body.appendChild(this.button);
}
  
Scroller.prototype.init = function() {
  this.createButton();
  this.checkPosition();
  this.click();
  this.stopListener();
}

Scroller.prototype.scroll = function() {
    this.scrollAnimate();
}
Scroller.prototype.scrollNoAnimate = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
Scroller.prototype.scrollAnimate = function() {
  if (this.scrollTop() > 0 && this.stop == false) {
    setTimeout(function() {
      this.scrollAnimate();
      window.scrollBy(0, (-Math.abs(this.scrollTop())/this.options.normal['steps']));
    }.bind(this), (this.options.normal['ms']));
  }
}


Scroller.prototype.click = function() {
  
  this.button.addEventListener("click", function(e) {
    e.stopPropagation();
      this.scroll();
  }.bind(this), false);
  
  this.button.addEventListener("dblclick", function(e) {
    e.stopPropagation();
      this.scrollNoAnimate();
  }.bind(this), false);
  
}

Scroller.prototype.hide = function() {
  this.button.classList.add("scroll-button--hidden");
}

Scroller.prototype.show = function() {
  this.button.classList.remove("scroll-button--hidden");
}

Scroller.prototype.checkPosition = function() {
  window.addEventListener("scroll", function(e) {
    if (this.scrollTop() > this.options.showButtonAfter) {
      this.show();
    } else {
      this.hide();
    }
  }.bind(this), false);
}

Scroller.prototype.stopListener = function() {
  
  // stop animation on slider drag
  var position = this.scrollTop();
  window.addEventListener("scroll", function(e) {
    if (this.scrollTop() > position) {
      this.stopTimeout(200);
    }
    position = this.scrollTop();
  }.bind(this, position), false);

  // stop animation on wheel scroll down
  window.addEventListener("wheel", function(e) {
    if(e.deltaY > 0) this.stopTimeout(200);
  }.bind(this), false);
}

Scroller.prototype.stopTimeout = function(ms){
   this.stop = true;
   setTimeout(function() {
     this.stop = false;
           console.log(this.stop); //
   }.bind(this), ms);
}

Scroller.prototype.scrollTop = function(){
   var curentScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  return curentScrollTop;
}



// ------------------- USE EXAMPLE ---------------------
// *Set options
var options = {
  'showButtonAfter': 400, // show button after scroling down this amount of px
  'animate': "normal",
  'normal': { 
    'steps': 15, 
    'ms': 1000/60
  },
};
// *Create new Scroller and run it.
var scroll = new Scroller(options);
scroll.init();


//---------------------- MENU -----------------
$(document).ready(function (){
            $("#our-history-scroll").click(function (){
                $('html, body').animate({
                    scrollTop: $("#our-history").offset().top
                }, 2000);
            });
        });
$(document).ready(function (){
            $("#our-land-scroll").click(function (){
                $('html, body').animate({
                    scrollTop: $("#our-land").offset().top
                }, 2000);
            });
        });
$(document).ready(function (){
            $("#our-culture-scroll").click(function (){
                $('html, body').animate({
                    scrollTop: $("#our-culture").offset().top
                }, 2000);
            });
        });