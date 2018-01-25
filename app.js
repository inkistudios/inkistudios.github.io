(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready

  window.scrollToBottom = function() {
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
  }
})(jQuery); // end of jQuery name space
