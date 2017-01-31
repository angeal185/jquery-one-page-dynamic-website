wow = new WOW(
  {
	animateClass: 'animated',
	offset:       100
  }
);
wow.init();

$(window).load(function(){
  var $container = $('.portfolioContainer'),
      $body = $('body'),
      colW = 375,
      columns = null;
  $container.isotope({
    resizable: true,
    masonry: {
      columnWidth: colW
    }
  });
  
  $(window).smartresize(function(){
    var currentColumns = Math.floor( ( $body.width() -30 ) / colW );
    if ( currentColumns !== columns ) {
      columns = currentColumns;
      $container.width( columns * colW )
        .isotope('reLayout');
    }
    
  }).smartresize(); 
  $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
			
            filter: selector,
         });
         return false;
    });
  
});
