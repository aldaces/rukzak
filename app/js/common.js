$('.call-back').magnificPopup({
    type: 'inline',
    closeOnContentClick: false
});
 $('.services-item-popup').magnificPopup({
      type: 'inline',
      closeOnContentClick: false,
      callbacks: {
        afterClose: function() {
          $("html").css('overflow', 'visible'); 
        }
      }
    });
  $('.predict-link').magnificPopup({
      type: 'inline',
      closeOnContentClick: false,
      callbacks: {
        afterClose: function() {
          $("html").css('overflow', 'visible'); 
        }
      }
    });
$("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
    }).done(function() {
        alert("Спасибо за Вашу заявку. Очень скоро мы свяжемся с Вами.");
        setTimeout(function() {
            // Done Functions
            th.trigger("reset");
        }, 1000);
    });
    return false;
});
$(document).ready(function() {
    $('input,textarea').focus(function() {
        $(this).data('placeholder', $(this).attr('placeholder'))
        $(this).attr('placeholder', '');
    });
    $('input,textarea').blur(function() {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true
    });
});


