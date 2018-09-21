/*
* REMARK - A premium portfolio template from designova
* Author: Designova, http://www.designova.net
* Copyright (C) 2015 Designova
* This is a premium product. For licensing queries please contact info@designova.net
*/

(function(){
  "use strict"; // Start of use strict


//Detecting viewpot dimension
    var vH = $(window).height();
    var vW = $(window).width();


//Adjusting Intro Components Spacing based on detected screen resolution
    $('.fullwidth').css('width',vW);
    $('.fullheight').css('height',vH);
    $('.halfwidth').css('width',vW/2);
    $('.halfheight').css('height',vH/2);
    $('.onethirdheight').css('height',vH-vH/4);

//PRELOADER
        $('div#preloader.fluidview').css('width', vW);
        $('div#preloader.fluidview').css('height', vH);
        $('body, html').addClass('preloader-running');
        $('#mastwrap').css('visibility', 'hidden');
        $(window).load(function() {
            $("#status").delay(800).fadeOut();
            $("#preloader").delay(1000).fadeOut(1000);
            $('body, html').removeClass('preloader-running');
            $('body, html').addClass('preloader-done');
            $("#mastwrap").delay(1000).css('visibility', 'visible');
});

//Equal Heights Trigger
        $('.equal-height').setAllToMaxHeight();
        $('.team-01-image, .team-01-info').setAllToMaxHeight();

//Featured Side Panel View
            $('.cd-btn').on('click', function(event) {
                event.preventDefault();
                $('.cd-panel').addClass('is-visible');
            });
            //close the lateral panel
            $('.cd-panel').on('click', function(event) {
                if ($(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close')) {
                    $('.cd-panel').removeClass('is-visible');
                    event.preventDefault();
                }
            });
             //close the lateral panel on close-btn click
            $('.menu-close-trigger').on('click', function(event) {
                event.preventDefault();
                    $('.cd-panel').removeClass('is-visible');
            });



        //Mobile Only Navigation (SLIMMENU JS with multi level menu support)
                $('ul.slimmenu').slimmenu({
                    resizeWidth: '992',
                    collapserTitle: '',
                    easingEffect: 'easeInOutQuint',
                    animSpeed: 'medium',
                });

                $('.slimmenu li a:not(.sub-collapser)').on('click',function(){
                            $('ul.slimmenu').removeClass('expanded').slideUp();
                });

//Sub Menu Trigger
        $('.overlay nav ul > li').on('click', function(){
            $('.overlay nav ul > li').find('.sub-menu').stop().slideUp();
            $(this).find('.sub-menu').stop().slideDown();
        });


//Inner Sticky Navigation
        $('.mastwrap section:nth-child(2)').waypoint(function (direction) {
              if (direction === 'down') {
                 $('header.masthead').addClass('header-highlighted');
                 $('div#preloader').css('top',50);
              } 
              else {
                 $('header.masthead').removeClass('header-highlighted');
                 $('div#preloader').css('top',120);
              }
        }, { offset: 50 });


//Misc UX
        $('.rev_slider_wrapper').waypoint(function (direction) {
              if (direction === 'down') {
                $('.tp-bullets').fadeOut('slow');
              } 
              else {
                $('.tp-bullets').fadeIn('slow');
              }
        }, { offset: 50 });

       $('.filter-trigger, .menu-trigger-wrap').on('click',function(){
            var activeFilterList;
            var oldFilterType=this._filterType
            if ($(this).hasClass("menu-trigger-wrap")) {
                activeFilterList=$(".works-filter_color")
                this._filterType="color"
            }else {
                activeFilterList=$(".works-filter_category")
                this._filterType="category"
            }
            if (oldFilterType===this._filterType && $('.works-filter-panel').is(":visible") ){
                $('.works-filter-panel').slideUp()

            }else {
                $('.works-filter-panel').slideDown();
            }
            console.log(activeFilterList)
            activeFilterList.show().siblings(".works-filter").hide()
        });
        
        if ( $( "#works-container" ).length ) {
            $( ".filter-trigger-wrap" ).fadeIn();
        }


        

//Filter Panel Trigger
        $('.works-container').waypoint(function (direction) {
              if (direction === 'down') {
                 $('.filter-notification').fadeIn();
              } 
              else {
                 $('.filter-notification').fadeOut();
              }
        }, { offset: 200 });
        $('.filter-notification a').on('click', function(){
            $('.works-filter-panel').slideDown();
        });


 //PARALLAX
        //Initialize Each Parallax Layer  
        function parallaxInit() {
            $.stellar({
                positionProperty: 'transform'
            });
        }

        if (!device.tablet() && !device.mobile()) {

            //Activating Parallax effect if non-mobile device is detected
            $(window).bind('load', function() {
                parallaxInit();
            });


        } else {

            //Dectivate Parallax effect if mobile device is detected (bg image is displayed)
            $('.parallax, .parallax-layer').addClass('no-parallax');

        }

//ISOTOPE
        
        //ISOTOPE GLOBALS
        var $container1 = $('.works-container');


        //ISOTOPE INIT
        $(window).load(function() {
            $container1.isotope({
                // options
                itemSelector: '.works-item',
                layoutMode: 'masonry',
                transitionDuration: '0.8s'
            });
            //forcing a perfect masonry layout after initial load
            setTimeout(function() {
            $container1.isotope('layout');
            }, 100);
            // filtering
            $('.works-filter li a').on('click', function() {
                $('.works-filter li a').removeClass('active');
                $(this).addClass('active');

                var selector = $(this).attr('data-filter');
                $('.works-container').isotope({
                    filter: selector
                });
                return false;
            });



                //forcing a perfect masonry layout after initial load
                setTimeout(function() {
                $container1.isotope('layout');
                }, 100);


                //Isotope ReLayout on Window Resize event.
                $(window).on('resize', function() {
                    $container1.isotope('layout');
                });

                //Isotope ReLayout on device orientation changes
                window.addEventListener("orientationchange", function() {
                    $container1.isotope('layout');
                }, false);

        });



//CAROUSEL
        $(".team-carousel").owlCarousel({
                    loop:true,
                    margin:0,
                    dots:true,
                    nav:false,
                    navText: false,
                    navSpeed: 3000,
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:2
                        },
                        1000:{
                            items:3
                        }
                    }
                });

//VENOBOX
    $('.venobox, .image-lightbox-link').venobox({
        numeratio: true,
        infinigall: true
    });   
        
   
})();
//  Outer wrapper $(function ($)  : ends









  

