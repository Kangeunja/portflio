
//매인메뉴 탭

$('#tab_1').click(function () {
  $('#sec2_con_wrap').css({
    display: 'block',
  });
  $('#sec1_con_wrap, #sec3_con_wrap, #sec4_con_wrap, #sec5_con_wrap, #sec6_con_wrap').css({
    display: 'none',
  });

  $('#tab_2, #tab_3, #tab_4, #tab_5').removeClass('on');
  $('#tab_1').addClass('on');
});



$('#tab_2').click(function () {
  $('#sec3_con_wrap').css({
    display: 'block',
  });

  $('#sec1_con_wrap, #sec2_con_wrap, #sec4_con_wrap, #sec5_con_wrap, #sec6_con_wrap').css({
    display: 'none',
  });

  $('#tab_1,#tab_3, #tab_4, #tab_5').removeClass('on');
  $('#tab_2').addClass('on');
});




$('#tab_3').click(function () {
  $('#sec4_con_wrap').css({
    display: 'block',
  });

  $('#sec1_con_wrap, #sec2_con_wrap, #sec3_con_wrap, #sec5_con_wrap, #sec6_con_wrap').css({
    display: 'none',
  });

  $('#tab_1, #tab_2, #tab_4, #tab_5').removeClass('on');
  $('#tab_3').addClass('on');
});




$('#tab_4').click(function () {
  $('#sec5_con_wrap').css({
    display: 'block',
  });

  $('#sec1_con_wrap, #sec2_con_wrap, #sec3_con_wrap, #sec4_con_wrap, #sec6_con_wrap').css({
    display: 'none',
  });

  $('#tab_1, #tab_2, #tab_3, #tab_5').removeClass('on');
  $('#tab_4').addClass('on');
});



$('#tab_5').click(function () {
  $('#sec6_con_wrap').css({
    display: 'block',
  });

  $('#sec1_con_wrap, #sec2_con_wrap, #sec3_con_wrap, #sec4_con_wrap, #sec5_con_wrap').css({
    display: 'none',
  });

  $('#tab_1, #tab_2, #tab_3, #tab_4').removeClass('on');
  $('#tab_5').addClass('on');
});


$('#tab_6').click(function () {
  $('#sec2_con_wrap').css({
    display: 'block',
  });
  $('#sec1_con_wrap, #sec3_con_wrap, #sec4_con_wrap, #sec5_con_wrap, #sec6_con_wrap').css({
    display: 'none',
  });

  $('#tab_2, #tab_3, #tab_4, #tab_5').removeClass('on');
  $('#tab_1').addClass('on');
});


$('#tab_7').click(function () {
  $('#sec3_con_wrap').css({
    display: 'block',
  });

  $('#sec1_con_wrap, #sec2_con_wrap, #sec4_con_wrap, #sec5_con_wrap, #sec6_con_wrap').css({
    display: 'none',
  });

  $('#tab_1,#tab_3, #tab_4, #tab_5').removeClass('on');
  $('#tab_2').addClass('on');
});



$('#tab_8').click(function () {
  $('#sec4_con_wrap').css({
    display: 'block',
  });

  $('#sec1_con_wrap, #sec2_con_wrap, #sec3_con_wrap, #sec5_con_wrap, #sec6_con_wrap').css({
    display: 'none',
  });

  $('#tab_1, #tab_2, #tab_4, #tab_5').removeClass('on');
  $('#tab_3').addClass('on');
});



$('#tab_9').click(function () {
  $('#sec5_con_wrap').css({
    display: 'block',
  });

  $('#sec1_con_wrap, #sec2_con_wrap, #sec3_con_wrap, #sec4_con_wrap, #sec6_con_wrap').css({
    display: 'none',
  });

  $('#tab_1, #tab_2, #tab_3, #tab_5').removeClass('on');
  $('#tab_4').addClass('on');
});


$('#tab_10').click(function () {
  $('#sec6_con_wrap').css({
    display: 'block',
  });

  $('#sec1_con_wrap, #sec2_con_wrap, #sec3_con_wrap, #sec4_con_wrap, #sec5_con_wrap').css({
    display: 'none',
  });

  $('#tab_1, #tab_2, #tab_3, #tab_4').removeClass('on');
  $('#tab_5').addClass('on');
});


//매인메뉴 탭 end



//스튜디오 슬라이드

//  var studioSlides = document.querySelector(".sec5_studio_con_wrap"),
//      studioSlide = document.querySelectorAll(".sec5_studio_con_wrap li"),
//      studioCurrentIdx = 0,
//      studioSlideCount = studioSlide.length,
//      studioPrevBtn = document.querySelector("#sec5_left"),
//      studioNextBtn = document.querySelector("#sec5_right"),
//      studioSlideWidth = 800,
//      studioSlideMargin = 80;

//슬라이드 가로 배치
//  studioSlides.style.width = (studioSlideWidth + studioSlideMargin) * studioSlideCount - studioSlideMargin + "px";

//슬라이드 이동
// function studioMoveSlide(num){
//   studioSlides.style.left = -num *880 + "px";
//   studioCurrentIdx = num;
// }

//다음버튼
// studioNextBtn.addEventListener("click",function(){
//   if(studioCurrentIdx < studioSlideCount -5){
//     studioMoveSlide(studioCurrentIdx + 1);
//   }else{
//     studioMoveSlide(0)
//   }
// });


//이전버튼
// studioPrevBtn.addEventListener("click",function(){
//   if(studioCurrentIdx > 0){
//     studioMoveSlide(studioCurrentIdx - 1);

//   }else{
//     studioMoveSlide(studioSlideCount -5);
//   }
// });













//스튜디오 슬라이드  end




//웨딩매인탭

$("#sec6_wrap1").click(function () {
  $("#sec6_bottom_wrap2").css({
    display: "block",
  })
  $("#sec6_bottom_wrap1, #sec6_bottom_wrap3, #sec6_bottom_wrap4").css({
    display: "none"
  });
});


$("#sec6_wrap2").click(function () {
  $("#sec6_bottom_wrap3").css({
    display: "block",
  })
  $("#sec6_bottom_wrap1, #sec6_bottom_wrap2, #sec6_bottom_wrap4").css({
    display: "none"
  });
});


$("#sec6_wrap3").click(function () {
  $("#sec6_bottom_wrap4").css({
    display: "block",
  })
  $("#sec6_bottom_wrap1, #sec6_bottom_wrap2, #sec6_bottom_wrap3").css({
    display: "none"
  });
});


$("#sec6_wrap4").click(function () {
  $("#sec6_bottom_wrap1").css({
    display: "block",
  })
  $("#sec6_bottom_wrap2, #sec6_bottom_wrap3, #sec6_bottom_wrap4").css({
    display: "none"
  });
});


$("#sec6_wrap7").click(function () {
  $("#sec6_bottom_wrap2").css({
    display: "block",
  })
  $("#sec6_bottom_wrap1, #sec6_bottom_wrap3, #sec6_bottom_wrap4").css({
    display: "none"
  });
});


$("#sec6_wrap8").click(function () {
  $("#sec6_bottom_wrap3").css({
    display: "block",
  })
  $("#sec6_bottom_wrap1, #sec6_bottom_wrap2, #sec6_bottom_wrap4").css({
    display: "none"
  });
});


$("#sec6_wrap5").click(function () {
  $("#sec6_bottom_wrap4").css({
    display: "block",
  })
  $("#sec6_bottom_wrap1, #sec6_bottom_wrap2, #sec6om_wrap_bott3").css({
    display: "none"
  });
});

$("#sec6_wrap6").click(function () {
  $("#sec6_bottom_wrap1").css({
    display: "block",
  })
  $("#sec6_bottom_wrap2, #sec6_bottom_wrap3, #sec6om_wrap_bott4").css({
    display: "none"
  });
});


//웨딩매인 end


//웨딩탭매인 이미지 


$("#sec6_wrap1").click(function () {
  $("#sec6_right_img2").css({
    display: "block",
  })
  $("#sec6_right_img1, #sec6_right_img3, #sec6_right_img4").css({
    display: "none"
  });
});


$("#sec6_wrap2").click(function () {
  $("#sec6_right_img3").css({
    display: "block",
  })
  $("#sec6_right_img1, #sec6_right_img2, #sec6_right_img4").css({
    display: "none"
  });
});


$("#sec6_wrap3").click(function () {
  $("#sec6_right_img4").css({
    display: "block",
  })
  $("#sec6_right_img1, #sec6_right_img2, #sec6_right_img3").css({
    display: "none"
  });
});


$("#sec6_wrap4").click(function () {
  $("#sec6_right_img1").css({
    display: "block",
  })
  $("#sec6_right_img2, #sec6_right_img3, #sec6_right_img4").css({
    display: "none"
  });
});


$("#sec6_wrap5").click(function () {
  $("#sec6_right_img4").css({
    display: "block",
  })
  $("#sec6_right_img1, #sec6_right_img2, #sec6_right_img3").css({
    display: "none"
  });
});


$("#sec6_wrap6").click(function () {
  $("#sec6_right_img1").css({
    display: "block",
  })
  $("#sec6_right_img2, #sec6_right_img3, #sec6_right_img4").css({
    display: "none"
  });
});


$("#sec6_wrap7").click(function () {
  $("#sec6_right_img2").css({
    display: "block",
  })
  $("#sec6_right_img1, #sec6_right_img3, #sec6_right_img4").css({
    display: "none"
  });
});


$("#sec6_wrap8").click(function () {
  $("#sec6_right_img3").css({
    display: "block",
  })
  $("#sec6_right_img2, #sec6_right_img1, #sec6_right_img4").css({
    display: "none"
  });
});












//웨딩 스냅탭

$("#sec7_tab1").click(function () {
  $("#sec7_sub_wrap1").css({
    display: "block",
  });

  $("#sec7_sub_wrap2, #sec7_sub_wrap3, #sec7_sub_wrap4").css({
    display: "none",
  });

  $('#sec7_tab2, #sec7_tab3, #sec7_tab4').removeClass('on_7');
  $('#sec7_tab1').addClass('on_7');

});


$("#sec7_tab2").click(function () {
  $("#sec7_sub_wrap2").css({
    display: "block",
  });

  $("#sec7_sub_wrap1, #sec7_sub_wrap3, #sec7_sub_wrap4").css({
    display: "none",
  });

  $('#sec7_tab3, #sec7_tab4, #sec7_tab1').removeClass('on_7');
  $('#sec7_tab2').addClass('on_7');

});


$("#sec7_tab3").click(function () {
  $("#sec7_sub_wrap3").css({
    display: "block",
  });

  $("#sec7_sub_wrap2, #sec7_sub_wrap1, #sec7_sub_wrap4").css({
    display: "none",
  });

  $('#sec7_tab1, #sec7_tab2, #sec7_tab4').removeClass('on_7');
  $('#sec7_tab3').addClass('on_7');

});



$("#sec7_tab4").click(function () {
  $("#sec7_sub_wrap4").css({
    display: "block",
  });

  $("#sec7_sub_wrap2, #sec7_sub_wrap3, #sec7_sub_wrap1").css({
    display: "none",
  });

  $('#sec7_tab1, #sec7_tab2, #sec7_tab3').removeClass('on_7');
  $('#sec7_tab4').addClass('on_7');

});

//웨딩 스냅탭 end



//웨딩드래스 탭

$("#sec7_tab5").click(function () {
  $("#sec7_sub_wrap5").css({
    display: "block",
  });

  $("#sec7_sub_wrap6, #sec7_sub_wrap7, #sec7_sub_wrap8").css({
    display: "none",
  });

  $('#sec7_tab6, #sec7_tab7, #sec7_tab8').removeClass('on_7');
  $('#sec7_tab5').addClass('on_7');

});


$("#sec7_tab6").click(function () {
  $("#sec7_sub_wrap6").css({
    display: "block",
  });

  $("#sec7_sub_wrap5, #sec7_sub_wrap7, #sec7_sub_wrap8").css({
    display: "none",
  });

  $('#sec7_tab5, #sec7_tab7, #sec7_tab8').removeClass('on_7');
  $('#sec7_tab6').addClass('on_7');

});



$("#sec7_tab7").click(function () {
  $("#sec7_sub_wrap7").css({
    display: "block",
  });

  $("#sec7_sub_wrap5, #sec7_sub_wrap6, #sec7_sub_wrap8").css({
    display: "none",
  });

  $('#sec7_tab5, #sec7_tab6, #sec7_tab8').removeClass('on_7');
  $('#sec7_tab7').addClass('on_7');

});



$("#sec7_tab8").click(function () {
  $("#sec7_sub_wrap8").css({
    display: "block",
  });

  $("#sec7_sub_wrap5, #sec7_sub_wrap6, #sec7_sub_wrap7").css({
    display: "none",
  });

  $('#sec7_tab5, #sec7_tab7, #sec7_tab6').removeClass('on_7');
  $('#sec7_tab8').addClass('on_7');

});

//웨딩드래스 탭 end





//웨딩플라워 탭

$("#sec7_tab9").click(function () {
  $("#sec7_sub_wrap9").css({
    display: "block",
  });

  $("#sec7_sub_wrap10, #sec7_sub_wrap11, #sec7_sub_wrap12").css({
    display: "none",
  });

  $('#sec7_tab10, #sec7_tab11, #sec7_tab12').removeClass('on_7');
  $('#sec7_tab9').addClass('on_7');

});


$("#sec7_tab10").click(function () {
  $("#sec7_sub_wrap10").css({
    display: "block",
  });

  $("#sec7_sub_wrap9, #sec7_sub_wrap11, #sec7_sub_wrap12").css({
    display: "none",
  });

  $('#sec7_tab9, #sec7_tab11, #sec7_tab12').removeClass('on_7');
  $('#sec7_tab10').addClass('on_7');

});


$("#sec7_tab11").click(function () {
  $("#sec7_sub_wrap11").css({
    display: "block",
  });

  $("#sec7_sub_wrap9, #sec7_sub_wrap10, #sec7_sub_wrap12").css({
    display: "none",
  });

  $('#sec7_tab9, #sec7_tab10, #sec7_tab12').removeClass('on_7');
  $('#sec7_tab11').addClass('on_7');

});


$("#sec7_tab12").click(function () {
  $("#sec7_sub_wrap12").css({
    display: "block",
  });

  $("#sec7_sub_wrap9, #sec7_sub_wrap10, #sec7_sub_wrap11").css({
    display: "none"
  });

  $('#sec7_tab9, #sec7_tab10, #sec7_tab11').removeClass('on_7');
  $('#sec7_tab12').addClass('on_7');

});

//웨딩플라워 탭 end





//헤어와 메이크업 탭

$("#sec7_tab13").click(function () {
  $("#sec7_sub_wrap13").css({
    display: "block",
  });

  $("#sec7_sub_wrap14, #sec7_sub_wrap15, #sec7_sub_wrap16").css({
    display: "none"
  });

  $('#sec7_tab14, #sec7_tab15, #sec7_tab16').removeClass('on_7');
  $('#sec7_tab13').addClass('on_7');

});


$("#sec7_tab14").click(function () {
  $("#sec7_sub_wrap14").css({
    display: "block",
  });

  $("#sec7_sub_wrap13, #sec7_sub_wrap15, #sec7_sub_wrap16").css({
    display: "none"
  });

  $('#sec7_tab13, #sec7_tab15, #sec7_tab16').removeClass('on_7');
  $('#sec7_tab14').addClass('on_7');

});



$("#sec7_tab15").click(function () {
  $("#sec7_sub_wrap15").css({
    display: "block",
  });

  $("#sec7_sub_wrap13, #sec7_sub_wrap14, #sec7_sub_wrap16").css({
    display: "none"
  });

  $('#sec7_tab13, #sec7_tab14, #sec7_tab16').removeClass('on_7');
  $('#sec7_tab15').addClass('on_7');

});


$("#sec7_tab16").click(function () {
  $("#sec7_sub_wrap16").css({
    display: "block",
  });

  $("#sec7_sub_wrap13, #sec7_sub_wrap14, #sec7_sub_wrap15").css({
    display: "none"
  });

  $('#sec7_tab13, #sec7_tab14, #sec7_tab15').removeClass('on_7');
  $('#sec7_tab16').addClass('on_7');

});

//헤어와 메이크업 탭 end






//쥬얼리 메인이미지

var i = 3;

$('#sec8_main_img').click(function () {


  i--;
  /*이미지가 다없어졌을때 조건*/
  if (i == 0) {
    $('.sec8_img').fadeIn();
    i = 3;

  } else {
    $('.sec8_img').eq(i).fadeOut();
  }


});


setInterval(function () {
  $('#sec8_main_img').trigger('click');
}, 3000);


//쥬얼리 메인이미지 end









$(document).ready(function () {

  $('#logo').click(function () {
    $('#sec1_con_wrap').css({
      display: 'block',
    });
    $('#logo').click(function () {
      $('#sec2_con_wrap, #sec3_con_wrap, #sec4_con_wrap').css({
        display: 'none',
      });

      $('#tab_3, #tab_2, #tab_4').removeClass('on');
      $('#tab_1').addClass('on');
    });
  });


});//end








//베스트 웨딩브랜드 슬라이드

var slides = document.querySelector(".sec11_con_img_wrap"),
  slide = document.querySelectorAll(".sec11_con_img_wrap li"),
  currentIdx = 0,
  slideCount = slide.length,
  prevBtn = document.querySelector("#sec11_left"),
  nextBtn = document.querySelector("#sec11_right"),
  slideWidth = 300,
  slideMargin = 50;

//슬라이드 가로로 배치
slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + "px";

//슬라이드 이동
function moveSlide(num) {
  slides.style.left = -num * 350 + "px";
  currentIdx = num;
}

//다음버튼
nextBtn.addEventListener("click", function () {
  if (currentIdx < slideCount - 5) {
    moveSlide(currentIdx + 1);

  } else {
    moveSlide(0);
  }
});

//이전버튼
prevBtn.addEventListener("click", function () {
  if (currentIdx > 0) {
    moveSlide(currentIdx - 1);

  } else {
    moveSlide(slideCount - 5);
  }
});


//베스트 웨딩브랜드 슬라이드 end





//햄버거 메뉴 
$(".hamburger-button").click(function (ev) {
  ev.preventDefault();
  $(this).toggleClass("active");
  $(".overlay").toggleClass("visible");

});

$("nav ul li a").click(function (ev) {
  ev.preventDefault();
  $(".overlay").toggleClass("visible");
  $(".hamburger-button").toggleClass("active");
});




//about 스크롤 휠이벤트

// $('.fullsection').on('mousewheel', function (event, delta) {
//   if (delta > 0) {
//       var prev = $(this).prev().offset().top;
//       $('html, body').stop().animate({
//           scrollTop: prev
//       }, 1000);
//   } else if (delta < 0) {
//       var next = $(this).next().offset().top;
//       $('html, body').stop().animate({
//           scrollTop: next
//       }, 1000);
//   }
// });

// $(window).resize(function () {

//   ww = $(window).width();
//   wh = $(window).height();
//   layout();
// });


//버튼


$('.move_but').click(function () {
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

  for (s = 0; s < 4; s++) {
    if (scroll >= ht * s && scroll < ht * (s + 1)) {
      $('.move_but').removeClass('on1');
      $('.move_but').eq(s).addClass('on1');
    };
  }
});


// top_btn 버튼

var $win = $(window);
var $top = $("#top_btn");
var tpos = 500;
var et = 600;
var at = 300;

$top.hide();

$win.scroll(function () {
  if ($(this).scrollTop() > tpos) {
    $top.fadeIn(et);
  } else {
    $top.fadeOut(et);
  }
});


$top.click(function () {
  $("html, body").animate({ scrollTop: 0 }, at);
});



