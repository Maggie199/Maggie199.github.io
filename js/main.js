$(window).load(function() {
    $(".preloader").fadeOut("slow", function(){
      	$(".preloader-left").addClass("slide-left");
      	$(".preloader-right").addClass("slide-right");
      	$("#portfolio-case").addClass("full-portfolio");
      	$('#projects').isotope('reLayout');
    });
});

(function(){
	
    //Portfolio masonry
    var $container = $('#projects');
    $container.isotope({
      masonry: {
       columnWidth: 0
      },
      itemSelector: '.project'
    });

    //Portfolio filters
    $('#filters').on( 'click', 'li', function() {
      $('#filters li').removeClass('active');
      $(this).addClass('active');
      var filterValue = $(this).attr('data-filter');
      $container.isotope({ filter: filterValue });
    });	
	
})();
	
	//Portfolio Modal
	$('.open-project').on('click', function(){     
		var projectUrl = $(this).attr("href");
		project = renderModal(projectUrl)

		$(project).modal({
		  remote: projectUrl + ' #project'
		})
		
		return false;
	  
	});

	
	$(".next").on('click', function () {
        $('#project-modal').modal('hide');
        var projectUrl = $(this).attr("href");
		project = renderModal(projectUrl)

		$(project).modal({
		  remote: projectUrl + ' #project'
		})
		
		return false;
	});
	
	//On Click Open Menu Items
	$('.menu-item').on( 'click', function() {
      $('.name-block').addClass('reverse');
	  $('.name-block-container').addClass('reverse');
	  $('.menu-blocks').addClass('hidex');
	  $('.inline-menu-container').removeClass('hidex');
	  $('.inline-menu-container').addClass('showx');	  
    });
	//On Click Open About/Resume Block
	$('.about').on( 'click', function() {
	  $('.content-blocks').removeClass('showx');
	  $('.content-blocks').addClass('hidex');	
	  $('.content-blocks.about').removeClass('hidex');
	  $('.content-blocks.about').addClass('showx');
	  $('.menu-item').removeClass('active');
	  $('.menu-item.about').addClass('active');
    });	
	//On Click Open Portfolio Block
	$('.portfolio').on( 'click', function() { 
	  $('.content-blocks').removeClass('showx');	
	  $('.content-blocks').addClass('hidex');	
	  $('.content-blocks.portfolio').removeClass('hidex');
	  $('.content-blocks.portfolio').addClass('showx');
	  $('.menu-item').removeClass('active');
	  $('.menu-item.portfolio').addClass('active');
    });	
	//On Click Open Resume Block
	$('.resume').on( 'click', function() { 
	  $('.content-blocks').removeClass('showx');	
	  $('.content-blocks').addClass('hidex');	
	  $('.content-blocks.resume').removeClass('hidex');
	  $('.content-blocks.resume').addClass('showx');
	  $('.menu-item').removeClass('active');
	  $('.menu-item.resume').addClass('active');
    });	
	//On Click Open Contact Block
	$('.contact').on( 'click', function() { 
	  $('.content-blocks').removeClass('showx');	
	  $('.content-blocks').addClass('hidex');	
	  $('.content-blocks.contact').removeClass('hidex');
	  $('.content-blocks.contact').addClass('showx');
	  $('.menu-item').removeClass('active');
	  $('.menu-item.contact').addClass('active');
    });
	
	//On Click Close Blocks
	$('.back').on( 'click', function() {
	  $('.name-block').removeClass('reverse');
	  $('.name-block-container').removeClass('reverse');
	  $('.menu-blocks').removeClass('hidex');
      $('.content-blocks').removeClass('showx');
	  $('.content-blocks').addClass('hidex');
	  $('.inline-menu-container').removeClass('showx');
	  $('.inline-menu-container').addClass('hidex');
	  $('.menu-item').removeClass('active');	
    });	
	
	
	//Placeholder
    $('input,textarea').on( 'focus', function(){
       $(this).data('placeholder',$(this).attr('placeholder'))
       $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
       $(this).attr('placeholder',$(this).data('placeholder'));
    });
	
	$('input, textarea').placeholder();


/* ----------------------------- 
Scroll into viewPort Animation
----------------------------- */
$(document).ready(function() {	
	'use strict';
	$('.animated').appear(function() {
		var element = $(this),
			animation = element.data('animation'),
			animationDelay = element.data('animation-delay');
			if ( animationDelay ) {

				setTimeout(function(){
					element.addClass( animation + " visible");
				}, animationDelay);

			} else {
				element.addClass( animation + " visible");
			}
	});
});
	
var renderModal = function(projectUrl) {
	var projectList = ["bio-rad.html", "epiclogue.html", "yelp-ux.html", "cornell-dining.html", "actually.html", "sara.html"]
	var project = '<div class="modal fade" id="project-modal"><div class="inline-menu-container">'
	project += '<a id="modal-close" class="close" c><span class="icon fa fa-th color-scheme"></span></a>'
	if(projectUrl !="sara.html") {
		nextProj = projectList[projectList.indexOf(projectUrl)+1];
		project += '<a class="next" href="'+nextProj+'">></a>';
	} else {
		project = project + '<span class="next disabled">></span>';
	}

	if(projectUrl != "bio-rad.html"){
		prevProj = projectList[projectList.indexOf(projectUrl)-1];
		project += '<a data-dismiss="modal" class="open-project" href="'+nextProj+'"><</span></a>';
	} else {
		project += '<span class="prev disabled"><</span>';
	}

	project += '</div><div class="modal-dialog"><div class="modal-content"></div></div></div>';
	return project;
}
  