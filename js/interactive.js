$(function() {

  //page scroll
  $('top-page').click(function() {
    $('html,body').animate({
      'scrollTop': 0
    }, 'slow');
  });

  //close top offer
  $('#close-top').click(function() {
    $(this).css('color', 'red');
    $('.top-ads').slideUp('fast');
    $('.overlay-text-container').css('top', '115px');
  });

  //hover "can" and close top offer
  $('.close-top').hover(
    function() {
      $(this).css('color', 'red');
      $(this).css('cursor', 'pointer');
    },
    function() {
      $(this).css('color', '#A14E26');
    }
  );

  $('.close-top').click(function() {
    $('.top-ads').slideUp('fast');
    $('.overlay-text-container').css('top', '115px');
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

  //log-in complex
  $('#sign-in').click(function() {
    $('#signin-modal').show(100);
  });
  // closing modal
  $('.close-modal').click(function() {
    $('#signin-modal').hide(100);
    $('#login-modal').hide(100);
  });

  //login and show
  $('#login-btn').click(function() {
    var userName = $('#user-input').val();
    var passWord = $('#user-password').val();

    // error message modal
    function execute() {
      $('#error-message').text('');
      $('#signin-modal').hide(100);
      $('.welcomeName').hide();
      $('.welcomeOut').show();
      $('#userName').text(userName);
      $('#hint-password').text('');
    }

    function invalid() {
      $('#error-message').text('Invalid username or password');
    }

    if (userName == '' || passWord == '') {
      invalid();
      $('#hint-password').text('');
    } else if (userName == '' || passWord != '123456') {
      invalid();
      $('#hint-password').html('<b><em>Hint Password: 123456</em></b>').css('font-size', '13px').css('color', 'black');
    } else {
      execute();
    }
  });
  //user modal for logging out
  $('.welcomeOut').click(function() {
    var userName = $('#user-input').val();
    var userMail = $('#inputMail').val();
    $('#userInfo').text(userName);
    $('#login-modal').show();

    //checking subscribe
    if (userMail == '') {
      $('#userEmail').text('[input Email to validate]').css('color', 'red').css('font-size', '13px');
    } else {
      $('#userEmail').text(userMail).css('color', 'rgb(160, 33, 96)').css('font-size', '16px');
    }
  });

  //logout user
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
      'scrollTop': position
    }, 500);
  });

  // text-transform on hover
  $('#text-transform').hover(
    function() {
      $(this).css('color', 'rgb(187, 129, 51)');
      $(this).addClass('bg-added');
      $(this).addClass('bg-removed');
      $(this).toggleClass('bg-removed');
    },
    function() {
      $(this).css('color', 'rgb(255,255,255)');
      $(this).addClass('bg-removed');
    }
  );

  //animate "Shop Now"
  var shopNow = $('h4');
  shopNow.hover(
    function() {
      $(this).css("background-color", "#A14E26");
      $(this).css("color", "#ffffff");
    },
    function() {
      $(this).css("background", "none");
      $(this).css("color", "#A14E26");
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
    loop: true,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
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
  var $navResponsive = $('.responsive-container ul li').css('transition', 'transform .7s ease-out');
  $('.x-responsive').click(function() {
    $(this).toggle().css('transform', 'scale(0,0)');
    $('.y-responsive').toggle().css('transform', 'scale(1,1)');
    $navResponsive.css('transform', 'translateX(0%)');
  });

  $('.y-responsive').click(function() {
    $(this).toggle().css('transform', 'scale(0,0)');
    $('.x-responsive').toggle().css('transform', 'scale(1,1)');
    $navResponsive.css('transform', 'translateX(-100%)');
  });

  //toggle dark-light mode
  $('#checkbox').click(function() {
    $('body').toggleClass('darkToggle');
    $('.responsive').toggleClass('darkToggle');
    $('header').toggleClass('line-change');
  });

});
