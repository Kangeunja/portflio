$(document).ready(function () {


  $(window).resize(function () {

    ww = $(window).width();
    wh = $(window).height();
    layout();
  });
  


  //해더 반응형


  var $window = $(window),
    $mainHeader = $("#main_header"),
    $logoWhite = "img/logo/logo_white.png",
    $logoColor = "img/logo/logo_color.png";

  $window.scroll(function () {
    if ($(this).scrollTop() > 0) {
      if (!$mainHeader.hasClass("shrink")) {
        $mainHeader.addClass("shrink");
        switchImages($logoColor);
      }
    } else {
      if ($mainHeader.hasClass("shrink")) {
        $mainHeader.removeClass("shrink")
        switchImages($logoWhite);
      }
    }
  });

  //해더 반응형 end



  //swichImages 함수

  function switchImages(newPath) {
    var $logo = $("#logo");
    $logo.fadeOut(100, function () {
      $logo.attr("src", newPath);
      $logo.fadeIn(100);
    }); //jquery fadeOut
  }


  //상단 메인 탭 


  $("#main_logo").click(function () {
    $("#main_wrap").css({
      display: "block",
    });

    $("#main_wrap1, #main_wrap2, #main_wrap3, #main_wrap4").css({
      display: "none"
    });

  });


  //상단 메인 탭 end



  //메인 이미지슬라이드

  $(".main_slide").slick({
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnDotsHover:false
    });


    $(".main_stop").show();
    $(".main_play").hide();
  

    
    $(".main_play").on("click",function(){
      $(".main_slide").slick("slickPlay");
      $(".main_stop").show();
      $(".main_play").hide();
   
    });
   
   
    $(".main_stop").on("click",function(){
      $(".main_slide").slick("slickPause");
      $(".main_stop").hide();
      $(".main_play").show();
    });
   


  //메인 이미지슬라이드 end


  //메인이미지

  click = 0;

  $('#right,#right2, #right3, #right4').click(function () {
    click++;
    if (click > 2) {
      click = 0;
    }

    $('#img_wrap, #img_wrap2, #img_wrap3, #img_wrap4').css({
      left: -1920 * click,
    }, 3000);
  });


  $('#left, #left2, #left3, #left4').click(function () {
    click--;
    if (click < 0) {
      click = 2;
    }
    $('#img_wrap, #img_wrap2, #img_wrap3, #img_wrap4').css({
      left: -1920 * click,
    }, 3000);
  });

  setInterval(function () {

    $('#right, #right2, #right3, #right4').trigger('click');

  }, 3000);



  


  //메인이미지 end




  //몇월 탭버튼

  $('#tab_1').click(function () {
    $('#sec1_con1, #sec1_con13').css({
      display: 'block',
    });

    $('#sec1_con2, #sec1_con3, #sec1_con4, #sec1_con5, #sec1_con6, #sec1_con7, #sec1_con8, #sec1_con9, #sec1_con10, #sec1_con11, #sec1_con12').css({
      display: 'none',
    });

    $('#sec1_con14, #sec1_con15, #sec1_con16, #sec1_con17, #sec1_con18, #sec1_con19, #sec1_con20, #sec1_con21, #sec1_con22, #sec1_con23, #sec1_con24').css({
      display: 'none',
    });

    $('#tab_2,#tab_3,#tab_4,#tab_5,#tab_6,#tab_7,#tab_8,#tab_9,#tab_10,#tab_11,#tab_12').removeClass('on_2');
    $('#tab_1').addClass('on_2');

  });

  $('#tab_2').click(function () {
    $('#sec1_con2, #sec1_con14').css({
      display: 'block',
    });

    $('#sec1_con1, #sec1_con3,  #sec1_con4, #sec1_con5, #sec1_con6, #sec1_con7, #sec1_con8, #sec1_con9, #sec1_con10, #sec1_con11, #sec1_con12').css({
      display: 'none',
    });

    $('#sec1_con13, #sec1_con15, #sec1_con16, #sec1_con17, #sec1_con18, #sec1_con19, #sec1_con20, #sec1_con21, #sec1_con22, #sec1_con23, #sec1_con24').css({
      display: 'none',
    });


    $('#tab_1,#tab_3,#tab_4,#tab_5,#tab_6,#tab_7,#tab_8,#tab_9,#tab_10,#tab_11,#tab_12').removeClass('on_2');
    $('#tab_2').addClass('on_2');

  });



  $("#tab_3").click(function () {
    $("#sec1_con3, #sec1_con15").css({
      display: "block",
    });
    $("#sec1_con1, #sec1_con2,  #sec1_con4, #sec1_con5, #sec1_con6, #sec1_con7, #sec1_con8, #sec1_con9, #sec1_con10, #sec1_con11, #sec1_con12").css({
      display: "none",
    });

    $('#sec1_con13, #sec1_con14, #sec1_con16, #sec1_con17, #sec1_con18, #sec1_con19, #sec1_con20, #sec1_con21, #sec1_con22, #sec1_con23, #sec1_con24').css({
      display: 'none',
    });


    $('#tab_1,#tab_2,#tab_4,#tab_5,#tab_6,#tab_7,#tab_8,#tab_9,#tab_10,#tab_11,#tab_12').removeClass('on_2');
    $('#tab_3').addClass('on_2');
  });



  $('#tab_4').click(function () {
    $('#sec1_con4, #sec1_con16').css({
      display: 'block',
    });
    $('#sec1_con1, #sec1_con2, #sec1_con3, #sec1_con5, #sec1_con6, #sec1_con7, #sec1_con8, #sec1_con9, #sec1_con10, #sec1_con11, #sec1_con12').css({
      display: 'none',
    });
    $("#sec1_con12, #sec1_con14, #sec1_con15, #sec1_con13, #sec1_con17, #sec1_con18, #sec1_con19, #sec1_con20, #sec1_con21, #sec1_con22, #sec1_con23, #sec1_con24").css({
      display: "none"
    });

    $('#tab_1,#tab_2,#tab_3,#tab_5,#tab_6,#tab_7,#tab_8,#tab_9,#tab_10,#tab_11,#tab_12').removeClass('on_2');
    $('#tab_4').addClass('on_2');

  });

  $('#tab_5').click(function () {
    $('#sec1_con5,  #sec1_con17').css({
      display: 'block',
    });
    $('#sec1_con1, #sec1_con2, #sec1_con3, #sec1_con4, #sec1_con6,  #sec1_con7, #sec1_con8, #sec1_con9, #sec1_con10, #sec1_con11, #sec1_con12').css({
      display: 'none',
    });
    $(" #sec1_con14, #sec1_con15, #sec1_con16, #sec1_con13, #sec1_con18, #sec1_con19, #sec1_con20, #sec1_con21, #sec1_con22, #sec1_con23, #sec1_con24").css({
      display: "none"
    });

    $('#tab_1,#tab_2,#tab_4,#tab_3,#tab_6,#tab_7,#tab_8,#tab_9,#tab_10,#tab_11,#tab_12').removeClass('on_2');
    $('#tab_5').addClass('on_2');

  });


  $('#tab_6').click(function () {
    $('#sec1_con6,  #sec1_con18').css({
      display: 'block',
    });
    $('#sec1_con1, #sec1_con2, #sec1_con3, #sec1_con4, #sec1_con5,  #sec1_con7,  #sec1_con8, #sec1_con9, #sec1_con10, #sec1_con11, #sec1_con12').css({
      display: 'none',
    });
    $("#sec1_con12, #sec1_con14, #sec1_con15, #sec1_con13, #sec1_con17, #sec1_con16, #sec1_con19, #sec1_con20, #sec1_con21, #sec1_con22, #sec1_con23, #sec1_con24").css({
      display: "none"
    });

    $('#tab_1,#tab_2,#tab_4,#tab_5,#tab_3,#tab_7,#tab_8,#tab_9,#tab_10,#tab_11,#tab_12').removeClass('on_2');
    $('#tab_6').addClass('on_2');

  });


  $('#tab_7').click(function () {
    $('#sec1_con7,  #sec1_con19').css({
      display: 'block',
    });
    $('#sec1_con1, #sec1_con2, #sec1_con3, #sec1_con4, #sec1_con5,  #sec1_con6, #sec1_con8, #sec1_con9, #sec1_con10, #sec1_con11, #sec1_con12').css({
      display: 'none',
    });
    $("#sec1_con12, #sec1_con14, #sec1_con15, #sec1_con13, #sec1_con17, #sec1_con16, #sec1_con18, #sec1_con20, #sec1_con21, #sec1_con22, #sec1_con23, #sec1_con24").css({
      display: "none"
    });

    $('#tab_1,#tab_2,#tab_4,#tab_5,#tab_6,#tab_3,#tab_8,#tab_9,#tab_10,#tab_11,#tab_12').removeClass('on_2');
    $('#tab_7').addClass('on_2');

  });

  $('#tab_8').click(function () {
    $('#sec1_con8,  #sec1_con20').css({
      display: 'block',
    });
    $('#sec1_con1, #sec1_con2, #sec1_con3, #sec1_con4, #sec1_con5,  #sec1_con6,  #sec1_con7, #sec1_con9, #sec1_con10, #sec1_con11, #sec1_con12').css({
      display: 'none',
    });
    $("#sec1_con12, #sec1_con14, #sec1_con15, #sec1_con13, #sec1_con17, #sec1_con16, #sec1_con19, #sec1_con18, #sec1_con21, #sec1_con22, #sec1_con23, #sec1_con24").css({
      display: "none"
    });

    $('#tab_1,#tab_2,#tab_4,#tab_5,#tab_6,#tab_7,#tab_3,#tab_9,#tab_10,#tab_11,#tab_12').removeClass('on_2');
    $('#tab_8').addClass('on_2');
  });

  $('#tab_9').click(function () {
    $('#sec1_con9,  #sec1_con21').css({
      display: 'block',
    });
    $('#sec1_con1, #sec1_con2, #sec1_con3, #sec1_con4, #sec1_con5,  #sec1_con6,  #sec1_con7, #sec1_con8, #sec1_con10, #sec1_con11, #sec1_con12').css({
      display: 'none',
    });
    $("#sec1_con12, #sec1_con14, #sec1_con15, #sec1_con13, #sec1_con17, #sec1_con16, #sec1_con19, #sec1_con18, #sec1_con20, #sec1_con22, #sec1_con23, #sec1_con24").css({
      display: "none"
    });

    $('#tab_1,#tab_2,#tab_4,#tab_5,#tab_6,#tab_7,#tab_8,#tab_3,#tab_10,#tab_11,#tab_12').removeClass('on_2');
    $('#tab_9').addClass('on_2');

  });

  $('#tab_10').click(function () {
    $('#sec1_con10,  #sec1_con22').css({
      display: 'block',
    });
    $('#sec1_con1, #sec1_con2, #sec1_con3, #sec1_con4, #sec1_con5,  #sec1_con6,  #sec1_con7, #sec1_con8, #sec1_con9, #sec1_con11, #sec1_con12').css({
      display: 'none',
    });
    $("#sec1_con12, #sec1_con14, #sec1_con15, #sec1_con13, #sec1_con17, #sec1_con16, #sec1_con19, #sec1_con18, #sec1_con21, #sec1_con20, #sec1_con23, #sec1_con24").css({
      display: "none"
    });

    $('#tab_1,#tab_2,#tab_4,#tab_5,#tab_6,#tab_7,#tab_8,#tab_9,#tab_3,#tab_11,#tab_12').removeClass('on_2');
    $('#tab_10').addClass('on_2');

  });


  $('#tab_11').click(function () {
    $('#sec1_con11,  #sec1_con23').css({
      display: 'block',
    });
    $('#sec1_con1, #sec1_con2, #sec1_con3, #sec1_con4, #sec1_con5,  #sec1_con6,  #sec1_con7, #sec1_con8, #sec1_con9, #sec1_con10, #sec1_con12').css({
      display: 'none',
    });
    $("#sec1_con12, #sec1_con14, #sec1_con15, #sec1_con13, #sec1_con17, #sec1_con16, #sec1_con19, #sec1_con18, #sec1_con21, #sec1_con22, #sec1_con20, #sec1_con24").css({
      display: "none"
    });

    $('#tab_1,#tab_2,#tab_4,#tab_5,#tab_6,#tab_7,#tab_8,#tab_9,#tab_10,#tab_3,#tab_12').removeClass('on_2');
    $('#tab_11').addClass('on_2');

  });


  $('#tab_12').click(function () {
    $('#sec1_con12,  #sec1_con24').css({
      display: 'block',
    });
    $('#sec1_con1, #sec1_con2, #sec1_con3, #sec1_con4, #sec1_con5,  #sec1_con6,  #sec1_con7, #sec1_con8, #sec1_con9, #sec1_con10, #sec1_con11').css({
      display: 'none',
    });
    $("#sec1_con14, #sec1_con15, #sec1_con13, #sec1_con17, #sec1_con16, #sec1_con19, #sec1_con18, #sec1_con21, #sec1_con22, #sec1_con20, #sec1_con23").css({
      display: "none"
    });

    $('#tab_1,#tab_2,#tab_4,#tab_5,#tab_6,#tab_7,#tab_8,#tab_9,#tab_10,#tab_3,#tab_11').removeClass('on_2');
    $('#tab_12').addClass('on_2');

  });

  //몇월 탭버튼 end



  //제주도 축제기간

  sec3_width = $('.sec3_con_d_wrap').width();

  $('.btn').each(function (index) {
    $(this).attr('data-index', index);
  }).click(function () {
    var i = $(this).attr('data-index');
    img_move(i);

  });

  function img_move(a) {
    $('#sec3_box_wrap').animate({
      left: -sec3_width * a,
    });

    $('.btn').removeClass('active');
    $('.btn').eq(a).addClass('active');

  }


  var i = 0;

  setInterval(function () {
    i++;
    if (i > 2) {
      i = 0;
    }
    img_move(i);
  }, 3000);


  //제주도 축제기간 end






  //bottom_tab
  $("#bottom_tab1").click(function () {
    $("#sub_wrap1").css({
      display: "block",
    });

    $("#sub_wrap2, #sub_wrap3").css({
      display: "none"
    });
  });

  $("#bottom_tab2").click(function () {
    $("#sub_wrap2").css({
      display: "block",
    });

    $("#sub_wrap1, #sub_wrap3").css({
      display: "none"
    });
  });

  $("#bottom_tab3").click(function () {
    $("#sub_wrap3").css({
      display: "block",
    });

    $("#sub_wrap2, #sub_wrap1").css({
      display: "none"
    });
  });

  $("#bottom_tab4").click(function () {
    $("#sub_wrap4").css({
      display: "block",
    });
    
    $("#sub_wrap5, #sub_wrap6").css({
      display: "none"
    });
  });

  $("#bottom_tab5").click(function () {
    $("#sub_wrap5").css({
      display: "block",
    });
    $("#sub_wrap4, #sub_wrap6").css({
      display: "none"
    });
  });

  $("#bottom_tab6").click(function () {
    $("#sub_wrap6").css({
      display: "block",
    });
    $("#sub_wrap4, #sub_wrap5").css({
      display: "none"
    });
  });

  //bottom tab end





  //여행 라이프 페이지 바로가기 슬라이드

  var $menu1 = $(".bottom_menu li"),
    $contents1 = $("#contents section");

  $menu1.click(function (x) {
    x.preventDefault();
    $menu1.removeClass("menu_on");
    $(this).addClass("menu_on");
    var idx = $(this).index();
    var section = $contents1.eq(idx);
    var sectionDistance = section.offset().top;

    $("html").stop().animate({ scrollTop: sectionDistance });
  });

  $(window).scroll(function () {
    $contents1.each(function () {
      if ($(this).offset().top <= $(window).scrollTop()) {
        var idx = $(this).index();
        $menu1.removeClass("menu_on");
        $menu1.eq(idx).addClass("menu_on");
      }
    });
  });


  var $menu = $(".bottom_menu2 li"),
    $contents = $("#contents1 section");

  $menu.click(function (x) {
    x.preventDefault();
    $menu.removeClass(".menu_on1");
    $(this).addClass(".menu_on1");
    var idx = $(this).index();
    var section = $contents.eq(idx);
    var sectionDistance = section.offset().top;

    $("html").stop().animate({ scrollTop: sectionDistance });
  });

  $(window).scroll(function () {
    $contents.each(function () {
      if ($(this).offset().top <= $(window).scrollTop()) {
        var idx = $(this).index();
        $menu.removeClass(".menu_on1");
        $menu.eq(idx).addClass(".menu_on1");
      }
    });
  });

  //여행 라이프 페이지 바로가기 슬라이드 end



  //safe_wrap tab
  $("#sec11_con1").click(function () {
    $("#safe_wraps1").css({
      display: "block",
    });
    $("#safe_wraps2, #safe_wraps3, #safe_wraps4").css({
      display: "none",
    });

    $('#sec11_con2, #sec11_con3, #sec11_con4').removeClass('sec11_on');
    $('#sec11_con1').addClass('sec11_on');

  });

  $("#sec11_con2").click(function () {
    $("#safe_wraps2").css({
      display: "block",
    });
    $("#safe_wraps1, #safe_wraps3, #safe_wraps4").css({
      display: "none"
    });

    $('#sec11_con1, #sec11_con3, #sec11_con4').removeClass('sec11_on');
    $('#sec11_con2').addClass('sec11_on');

  });

  $("#sec11_con3").click(function () {
    $("#safe_wraps3").css({
      display: "block",
    });
    $("#safe_wraps2, #safe_wraps1, #safe_wraps4").css({
      display: "none"
    });

    $('#sec11_con2, #sec11_con1, #sec11_con4').removeClass('sec11_on');
    $('#sec11_con3').addClass('sec11_on');
  });

  $("#sec11_con4").click(function () {
    $("#safe_wraps4").css({
      display: "block",
    });
    $("#safe_wraps2, #safe_wraps3, #safe_wraps1").css({
      display: "none"
    });

    $('#sec11_con2, #sec11_con3, #sec11_con1').removeClass('sec11_on');
    $('#sec11_con4').addClass('sec11_on');
  });

  //safe_wrap tab end


  //여행 브이로그 슬라이드

  $("#sec7-next").click(function () {
    $(".flex_slides li").last().prependTo(".flex_slides")
  });


  $("#sec7-prev").click(function () {
    $(".flex_slides li").first().appendTo(".flex_slides")
  });


  //여행 브이로그 슬라이드 end



  //음식 슬라이드1

  sec16_width = $(".sec16_sub_img_wrap figure").width();

  $(".sub_btn").each(function (index) {
    $(this).attr("data-index", index);
  }).click(function () {
    var k = $(this).attr("data-index");
    sec16_move(k);
  });

  function sec16_move(d) {
    $(".sec16_sub_img_wrap").animate({
      left: -sec16_width * d,
    });
    $(".sub_btn").removeClass("active1");
    $(".sub_btn").eq(d).addClass("active1");
  }


  // 음식슬라이드2

  var $dot = $(".dots-wrap li");
  var slideIndex = 0;
  // var len = $(".sec16_sub_img_wrap1 figure").length;

  $dot.on("click", function () {
    $(".sec16_sub_img_wrap1").animate({ marginLeft: -323.5 * $(this).index() });
    $dot.css({ "background": "gray" });
    $(this).css({ "background": "orange" });
    slideIndex = $(this).index(); console.log(slideIndex);
  });

  // 음식슬라이드3
  var $dot1 = $(".dots-wrap1 li");
  var slideIndex1 = 0;
  // var len = $(".sec16_sub_img_wrap1 figure").length;

  $dot1.on("click", function () {
    $(".sec16_sub_img_wrap2").animate({ marginLeft: -323.5 * $(this).index() });
    $dot1.css({ "background": "gray" });
    $(this).css({ "background": "orange" });
    slideIndex1 = $(this).index(); console.log(slideIndex1);
  });


  // 음식슬라이드4
  var $dot2 = $(".dots-wrap2 li");
  var slideIndex2 = 0;
  // var len = $(".sec16_sub_img_wrap1 figure").length;

  $dot2.on("click", function () {
    $(".sec16_sub_img_wrap3").animate({ marginLeft: -323.5 * $(this).index() });
    $dot2.css({ "background": "gray" });
    $(this).css({ "background": "orange" });
    slideIndex2 = $(this).index(); console.log(slideIndex2);
  });



  //음식 슬라이드 end







  //배너 모음

  var banner_con_img_wrap = document.querySelector(".banner_con_img_wrap"),
    ban_img = document.querySelectorAll(".ban_img"),
    currentIdx = 0,
    slideCount = ban_img.length,
    banner_left = document.querySelector("#banner_left"),
    banner_right = document.querySelector("#banner_right"),
    slideWidth = 185,
    slideMargin = 100;
 

  banner_con_img_wrap.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + "px";


  function moveSlide(num) {
    banner_con_img_wrap.style.left = -num * 285 + "px";
    currentIdx = num;
  }
  banner_right.addEventListener("click", function () {
    if (currentIdx < slideCount - 5) {
      moveSlide(currentIdx + 1);
    } else {
      moveSlide(0);
    }
  });

  banner_left.addEventListener("click", function () {
    if (currentIdx < slideCount - 5) {
      moveSlide(currentIdx + 1);
    } else {
      moveSlide(0);
    }
  });


  var b = 0;

  setInterval(function () {
    b++;
    if (b > 5) {
      b = 0;
    }
    moveSlide(b);
  }, 3000);

  //배너 모음 end




  //top 버튼동작 

  var $win = $(window); //브라우저
  var $top = $("#top"); //top버튼
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


  //top 버튼동작 end






//배너 슬라이드






$(".main_section3_sub_bottom_right").slick({
  autoplay: true,
  autoplaySpeed: 2000
});


 $(".stop").show();
 $(".play").hide();



 $(".play").on("click",function(){
   $(".main_section3_sub_bottom_right").slick("slickPlay");
   $(".stop").show();
   $(".play").hide();

 });


 $(".stop").on("click",function(){
   $(".main_section3_sub_bottom_right").slick("slickPause");
   $(".stop").hide();
   $(".play").show();
 });




//팝업 

document.querySelectorAll("#main_section3_sub_right_curcle").forEach(element => element.addEventListener("click", () => {
  document.querySelector(".main_pop").style.display = "flex";
}));
document.querySelectorAll(".main_pop").forEach(element => element.addEventListener("click", () => {
  document.querySelector(".main_pop").style.display = "none";
}));







}); //end























