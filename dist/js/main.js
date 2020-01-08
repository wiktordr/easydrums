// Tabs
$(document).ready(function(){
	
	$('ul.for-tabs-list li').click(function(){
		var tab_id = $(this).attr('data-tab');

    $('ul.for-tabs-list li').removeClass('current');
    $('ul.for-tabs-list li div').removeClass('display');
		$('.for-tabs-content').removeClass('current');

    $(this).addClass('current');
    $(this).find('div').addClass('display');
    $("#"+tab_id).addClass('current');
	})

})

// Accordion
$(function() {
	$(".schedule-accordion > .schedule-accordion-item.is-active").children(".accordion-panel").slideDown();
	$(".schedule-accordion > .schedule-accordion-item").click(function() {
		$(this).siblings(".schedule-accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
		$(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
	});
});

// Scroll
$('a').on('click', function(event){
  if (this.hash !==''){
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {scrollTop: $(hash).offset().top},
      800
    );
  }
});