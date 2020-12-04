$(function() {

//page scroll
  $('top-page').click(function() {
    $('html,body').animate({
      'scrollTop': 0
    }, 'slow');
  });

//close top offer
  $('#close-top').click(function() {
    $(this).css('color','red');
    $('.top-ads').slideUp('fast');
  });

//hover "can" and close top offer
  $('.close-top').hover(
    function() {
      $(this).css('color','red');
      $(this).css('cursor','pointer');
    },
    function() {
      $(this).css('color','#A14E26');
    }
  );

  $('.close-top').click(function() {
    $('.top-ads').slideUp('fast');
  });

//strikethrough text
  $('.strike').hover(
    function() {
      $(this).addClass('strike-through');
    },
    function() {
      $(this).removeClass('strike-through');
    }
  );

//sign-in complex
  $('#sign-in').click(function(){
    $('#signin-modal').show(100);
  });

  $('.close-modal').click(function(){
    $('#signin-modal').hide(100);
    $('#login-modal').hide(100);

  });


  $('#login-btn').click(function() {
    var userName = $('#user-input').val();
    var passWord = $('#user-password').val();

    function execute() {
      $('#error-message').text('');
      $('#signin-modal').hide(100);
      $('.welcomeName').hide();
      $('.welcomeOut').show();
      $('#userName').text(userName);
    }

    if (userName == '' || passWord == '') {
      $('#error-message').text('Invalid username or password');
    } else {
      execute();
    }
  });

  $('.welcomeOut').click(function() {
    var userName = $('#user-input').val();
    var userMail = $('#inputMail').val();
    $('#userInfo').text(userName);
    $('#login-modal').show();

    if (userMail == '') {
      $('#userEmail').text('[input Email to validate]').css('color','red').css('font-size','13px');
    } else {
      $('#userEmail').text(userMail);
    }

  });

  $('#logout-btn').click(function() {
    $('#login-modal').hide();
    $('#signin-modal').show();
    $('.welcomeName').show();
    $('.welcomeOut').hide();
  });


//help yourself
  $('#help').hover(
    function() {
      $('.help').slideDown();
    },
    function() {
      $('.help').slideUp();
    }
  );

//contact scroll
  $('.contacts').click(function() {
    var id = $(this).attr('id');
    var position = $(id).offset().top;

    $('html,body').animate({
      'scrollTop':position
    }, 500);

  });

//animate "Shop Now"
  var shopNow = $('h4');
  shopNow.hover(
    function(){
      $(this).css("background-color","#A14E26");
      $(this).css("color","#ffffff");
    },
    function(){
      $(this).css("background","none");
      $(this).css("color","#A14E26");
    }
  );

//display scent text
  $('.scent').hover(
    function() {
      $(this).find('.scent-desc').show();
    },
    function() {
      $(this).find('.scent-desc').hide();
    }
  );

//product carousel
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  });

//subscribe button

  $('.fa-angle-right').click(function() {
    $('.email-form input').hide();
    $('.email-form button').hide();
    $('.email-form p').show();
  });

// simple responsive on small device
  $('.x-responsive').click(function() {
    $(this).fadeToggle(100);
    $('.y-responsive').fadeToggle(100);
  });

  $('.y-responsive').click(function() {
    $(this).fadeToggle(100);
    $('.x-responsive').fadeToggle(100);
  });

});
