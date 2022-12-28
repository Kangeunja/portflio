$(document).ready(function () {


  $('.fullsection').on('mousewheel', function (event, delta) {
    if (delta > 0) {
        var prev = $(this).prev().offset().top;
        $('html, body').stop().animate({
            scrollTop: prev
        }, 1000);
    } else if (delta < 0) {
        var next = $(this).next().offset().top;
        $('html, body').stop().animate({
            scrollTop: next
        }, 1000);
    }
  });

  $(window).resize(function () {

    ww = $(window).width();
    wh = $(window).height();
    layout();
  });
  

  $('.but').click(function () {
    var ht = $(window).height();
    var s = $(this).index();
    var nowtop = s * ht;
    $('body, html').stop().animate({
        scrollTop: nowtop,
    }, 1000);
  });
  
    
    $(window).scroll(function () {
      var ht = $(window).height();
      var scroll = $(window).scrollTop();
  
      for (s= 0; s <5; s++) {
          if (scroll >= ht * s && scroll < ht * (s + 1)) {
              $('.but').removeClass('main_on');
              $('.but').eq(s).addClass('main_on');
          };
      }
  });
  


  $("#tab_1").click(function(){
    $("#sec1_con_wrap").css({
      display:"block",
    });

    $("#sec2_con_wrap").css({
      display:"none"
    });

  });


  $("#tab_2").click(function(){
    $("#sec2_con_wrap").css({
      display:"block",
    });

    $("#sec1_con_wrap").css({
      display:"none"
    });

  
  });


  
  $("#tab_3").click(function(){
    $("#sec1_con_wrap").css({
      display:"block",
    });

    $("#sec2_con_wrap").css({
      display:"none"
    });

    
    $('#tab_2').removeClass('on');
    $('#tab_1').addClass('on');
  });


  
  $("#tab_4").click(function(){
    $("#sec2_con_wrap").css({
      display:"block",
    });

    $("#sec1_con_wrap").css({
      display:"none"
    });
    
    $('#tab_3').removeClass('on');
    $('#tab_4').addClass('on');
  });



  
  var $win = $(window); //브라우저
  var $top = $("#top_btn"); //top버튼
  var tpos = 500; //스크롤 위치
  var et = 600; //효과 시간
  var at = 300; //애니메이션 시간

  //top 버튼 숨기기
  $top.hide();

  //스크롤시 top버튼 페이딩
  $win.scroll(function () {
    if ($(this).scrollTop() > tpos) {
      $top.fadeIn(et);
    } else {
      $top.fadeOut(et);
    }

  });

  //top버튼 클리시 scrollTop: 0 으로
  $top.click(function () {
    $("html, body").animate({ scrollTop: 0 }, at);
  });























});
