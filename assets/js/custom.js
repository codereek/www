/*
  Version: 1.0
  Author: BanyanTheme
  Website: https://banyanthemes.com/
*/

(function($) {
 
 	"use strict"; 
    $(document).ready(function(){

		// Page preloader
		$("#fakeloader").fakeLoader({
			timeToHide:1000,
			zIndex:"999999",//Default zIndex
			bgColor:"#ffffff",
			spinner:"spinner1"
		});	
		
		// show body after site load
		$('body').show();

		//Sticky menu
		$(".main-menu-1x").sticky({ topSpacing: 0 });


        /*mag popup*/       
        $('.video').magnificPopup({
          type: 'iframe',
          iframe: {
             markup: '<div class="mfp-iframe-scaler">'+
                        '<div class="mfp-close"></div>'+
                        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                        '<div class="mfp-title">Some caption</div>'+
                      '</div>'
          },
          callbacks: {
            markupParse: function(template, values, item) {
             values.title = item.el.attr('title');
            }
          }

        });  

		//featured-product Carousel (Slick) 		
		$('.featured-product').slick({
	    	slidesToShow: 3,
		    slidesToScroll: 1,
		    autoplay: true,
  			autoplaySpeed: 3000,
		    arrows: false,
		    dots: true,
		    focusOnSelect: true,
		    easing: 'linear',
		    responsive: [
				    {
				      breakpoint: 768,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1,
				        infinite: true
				      }
				    }
				  ]
		  });

		//featured-product Carousel (Slick) 		
		$('.featured-product-2x').slick({
	    	slidesToShow: 1,
		    slidesToScroll: 1,
		    autoplay: true,
  			autoplaySpeed: 3000,
		    arrows: false,
		    fade: true,
    		speed: 900,
		    dots: true,
		    focusOnSelect: true,
		    easing: 'linear',
		    responsive: [
				    {
				      breakpoint: 768,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1,
				        infinite: true
				      }
				    }
				  ]
		  });		   

		//Client (Slick) 
		  $('.client-slider').slick({
		    	slidesToShow: 4,
			    slidesToScroll: 1,
			    arrows: false,
			    dots: false,
			    autoplay: true,
	  			autoplaySpeed: 3000,
			    focusOnSelect: true,
			    easing: 'linear',
			    responsive: [
				    {
				      breakpoint: 768,
				      settings: {
				        slidesToShow: 3,
				        slidesToScroll: 1,
				        infinite: true
				      }
				    },
				    {
				      breakpoint: 480,
				      settings: {
				        slidesToShow: 2,
				        slidesToScroll: 1
				      }
				    },
				    {
				      breakpoint: 320,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1
				      }
				    }
				  ]
		  });

		//Banner Slidr (Slick) 
		$('.banner-slider').slick({
		    	slidesToShow: 1,
			    slidesToScroll: 1,
			    arrows: false,
			    fade: true,
    			speed: 900,
			    dots: true,
			    autoplay: true,
	  			autoplaySpeed: 3000,
			    focusOnSelect: true,
			    easing: 'linear',			    
		});

		//Featured Product 8x (Slick) 
		$('.featured-product-8').slick({
		    	slidesToShow: 1,
			    slidesToScroll: 1,
			    arrows: false,
			    fade: true,
    			speed: 900,
			    dots: false,
			    autoplay: true,
	  			autoplaySpeed: 3000,
			    focusOnSelect: true,
			    easing: 'linear',			    
		});

		//testimonial Slider 3x
		$('.testimonial-3x').slick({
		    	slidesToShow: 1,
			    slidesToScroll: 1,
			    arrows: false,
			    fade: true,
    			speed: 900,
			    dots: false,
			    autoplay: true,
	  			autoplaySpeed: 3000,
			    focusOnSelect: true,
			    easing: 'linear',			    
		}); 
		
		//Product image (Slick) 
		  $('.product-image').slick({
		    	slidesToShow: 1,
			    slidesToScroll: 1,
			    arrows: true,
			    nextArrow: '<i class="fa fa-angle-right"></i>',
  				prevArrow: '<i class="fa fa-angle-left"></i>',
			    dots: false,
			    autoplay: true,
	  			autoplaySpeed: 3000,
			    focusOnSelect: true,
			    easing: 'linear',			    
		  });
		//Testimonial Carousel (Slick)
			$('.slider-for').slick({	
			    slidesToShow: 1,
			    slidesToScroll: 1,		    
			    dots: false,
			    arrows: false,
			    fade: true,
			    easing: 'linear',
			    asNavFor: '.slider-nav'
			});

			$('.slider-nav').slick({
				slidesToShow: 3,
			    slidesToScroll: 1,
			    autoplay: true,
	  			autoplaySpeed: 3000,
			    asNavFor: '.slider-for',
			    arrows: false,
			    dots: true,
			    centerMode: true,
			    centerPadding: '0px',
			    focusOnSelect: true,
			    responsive: [
				    {
				      breakpoint: 768,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1,
				        infinite: true
				      }
				    }
				  ]		    
			}); 
        //counter
		$('.counter').counterUp({
			delay: 10,
			time: 5000
		});
                		
		// Masonry portfolio for grid
		$('#all-course-grid').mixItUp({
			selectors: {
				target: '.tile',
				filter: '.filter',
				sort: '.sort-btn'
			},		  
			animation: {
			animateResizeContainer: false,
			effects: 'fade scale'
			}
		});
		$('#all-course-grid').mixItUp();
		$('.form-control').on('change', function() {
		    $('.form-control option:selected').trigger('click'); 
		});

		// Initilize wow js
		new WOW().init();    



  }); // End load document
 
})(jQuery);