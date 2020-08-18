// ------------ Listing page left Accordions  ------------ ///
$(document).on('click', '.panel-heading span.clickable', function(e){
    var $this = $(this);
  if(!$this.hasClass('panel-collapsed')) {
    $this.parents('.panel').find('.panel-body').slideUp();
    $this.addClass('panel-collapsed');
    $this.find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
  } else {
    $this.parents('.panel').find('.panel-body').slideDown();
    $this.removeClass('panel-collapsed');
    $this.find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
  }
  });

  $( document ).ready(function() {
    // ------------ Flight Detail Box  ------------ ///
    $('.flightDtls').click(function(event){ //note here
        $(this).parents('.bookDiv').next('.flightDtlDivblw').slideToggle(500);
        event.stopPropagation();
    });
    $(window).click(function() {
        $('.flightDtlDivblw').slideUp(500);
    });

    // ------------ Modify Box  ------------ ///
    $('.modifyBtn').click(function(event){ //note here
      $('.modifyMoreBox').slideToggle(500);
      event.stopPropagation();
    });

});
