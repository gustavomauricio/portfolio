$(document).ready(function() { 
    "use strict";

    // Smooth scroll to inner links
    $('.nav-link').each(function(){
        var href = $(this).attr('href');
        if(href.charAt(0) !== "#"){
            $(this).removeClass('nav-link');
        }
    });

	if($('.nav-link').length){
		$('.nav-link').smoothScroll({
			/*offset: -55,*/
			speed: 800
		});
    }

    // Change nav when scroll
    $(function() {
        var header = $(".navbar");
        var navLink = $('.nav-link');
      
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 60) {
                header.addClass('scrolled');
                navLink.addClass('scrolled');
            }
            else {
                header.removeClass('scrolled')
                navLink.removeClass('scrolled');
            }
        });
    });

    // Insert letters with an interval
    const name = "Gustavo Mauricio";

    for(let i=0; i<=name.length; i++){
        // Slices string from 0 to current iteration 
        let nameSlice = name.slice(0, i);
        setTimeout(function(){
            $('#name').html(nameSlice);
        }, i * 150);  
    }

    // Adds class to nav items when scrolling respective section
    $(window).scroll(function() { 
    var scroll = $(window).scrollTop();
        $('.nav-link').each(function(){
        var href = $(this).attr('href');
            if(scroll > $(href).offset().top - 1 && scroll < $(href).offset().top + $(href).outerHeight()){
                $('.nav-link').removeClass('color-orange');
                $(this).addClass('color-orange');
            }
        });
    });
});

// Click handler for elements with dot class (carousel)
$(".dot").click(function(){
    $(".dot").removeClass("active");
    $(this).addClass("active");

    // Get index of the clicked dot
    var dotIndex = $(".dot").index(this);
    currentSkill(dotIndex);
})

function currentSkill(dotIndex){
    var children = $('#skills-car').children("[id]");
    children.each(function(index){
        $(this).addClass("none");
        if(index == dotIndex)
            $(this).removeClass("none");       
    });

}
