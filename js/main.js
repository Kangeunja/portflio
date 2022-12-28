$(document).ready(function () {


  $('#fullpage').fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    navigationPosition: "right",
    navigationTooltips: ['main', 'about', 'design', 'portfolio', 'contact'],
    anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4'],
  });




  setInterval(function () {

    castle_move();

  }, 1000);


  function castle_move() {
    $('#castle').animate({
      left: 150,
    }, 1000);
    $('#castle').animate({
      left: 160,
    }, 1000);
  }

  castle_move();

  //sub click




}); //end


//main3-menu tab


$(document).ready(function () {
  $("#menu-1").click(function () {
    $("#main3-content1").css({
      display: "block",
    });

    $("#main3-content2,  #main3-conten3,  #main3-conten4,  #main3-content5").css({
      display: "none"
    });
    $("#menu-2, #menu-3, #menu-4, #menu-5").removeClass("menu-on");
    $("#menu-1").addClass("menu-on");
  });

  $("#menu-2").click(function () {
    $("#main3-content2").css({
      display: "block",
    });

    $("#main3-content1, #main3-content3, #main3-content4, #main3-content5").css({
      display: "none"
    });

    $("#menu-1, #menu-3, #menu-4, #menu-5").removeClass("menu-on");
    $("#menu-2").addClass("menu-on");
  });


  $("#menu-3").click(function () {
    $("#main3-content3").css({
      display: "block",
    });

    $("#main3-content1, #main3-content2, #main3-content4,  #main3-content5").css({
      display: "none"
    });

    $("#menu-1, #menu-2, #menu-4, #menu-5").removeClass("menu-on");
    $("#menu-3").addClass("menu-on");
  });


  $("#menu-4").click(function () {
    $("#main3-content4").css({
      display: "block",
    });

    $("#main3-content1, #main3-content2, #main3-content3,  #main3-content5").css({
      display: "none"
    });

    $("#menu-1, #menu-2, #menu-3, #menu-5").removeClass("menu-on");
    $("#menu-4").addClass("menu-on");
  });

  $("#menu-5").click(function () {
    $("#main3-content5").css({
      display: "block",
    });

    $("#main3-content1, #main3-content2, #main3-content3,  #main3-content4").css({
      display: "none"
    });

    $("#menu-1, #menu-2, #menu-4, #menu-3").removeClass("menu-on");
    $("#menu-5").addClass("menu-on");
  });




  //main3-box7 팝업
  $("#main3-box7").click(function () {
    $(".main3-con-pop-wrap").fadeIn();
  });
  $(".main3-con-pop-close").click(function () {
    $(".main3-con-pop-wrap").fadeOut();
  });


  //main3-box7 슬라이드
  var $dot = $(".dots-wrap li");
  var slideIndex = 0;

  $dot.on("click", function () {
    $("#main3-con-box-wrap").animate({ marginLeft: -809 * $(this).index() });
    $dot.css({ "background": "gray" });
    $(this).css({ "background": "orange" });
    slideIndex = $(this).index(); console.log(slideIndex);
  });


  //main3-box8 팝업
  $("#main3-box8").click(function () {
    $(".main3-con-pop-wrap2").fadeIn();
  });
  $(".main3-con-pop-close2").click(function () {
    $(".main3-con-pop-wrap2").fadeOut();
  });


  //main3-box8 슬라이드
  var $dot2 = $(".dots-wrap2 li");
  var slideIndex2 = 0;
  // var len = $(".sec16_sub_img_wrap1 figure").length;

  $dot2.on("click", function () {
    $("#main3-con-box-wrap2").animate({ marginLeft: -930 * $(this).index() });
    $dot2.css({ "background": "gray" });
    $(this).css({ "background": "orange" });
    slideIndex2 = $(this).index(); console.log(slideIndex2);
  });
  

  //main3-box9 팝업
  $("#main3-box9").click(function () {
    $(".main3-con-pop-wrap3").fadeIn();
  });
  $(".main3-con-pop-close3").click(function () {
    $(".main3-con-pop-wrap3").fadeOut();
  });

    

  //main3-box9 슬라이드
  var $dot3 = $(".dots-wrap3 li");
  var slideIndex3 = 0;

  $dot3.on("click", function () {
    $("#main3-con-box-wrap3").animate({ marginLeft: -930 * $(this).index() });
    $dot3.css({ "background": "gray" });
    $(this).css({ "background": "orange" });
    slideIndex3 = $(this).index(); console.log(slideIndex3);
  });
  

  
  //main3-box10 팝업
  $("#main3-box10").click(function () {
    $(".main3-con-pop-wrap4").fadeIn();
  });
  $(".main3-con-pop-close4").click(function () {
    $(".main3-con-pop-wrap4").fadeOut();
  });

    

  //main3-box10 슬라이드
  var $dot4 = $(".dots-wrap4 li");
  var slideIndex4 = 0;

  $dot4.on("click", function () {
    $("#main3-con-box-wrap4").animate({ marginLeft: -772 * $(this).index() });
    $dot4.css({ "background": "gray" });
    $(this).css({ "background": "orange" });
    slideIndex4 = $(this).index(); console.log(slideIndex4);
  });
  

  
  //main3-box11 팝업
  $("#main3-box11").click(function () {
    $(".main3-con-pop-wrap5").fadeIn();
  });
  $(".main3-con-pop-close5").click(function () {
    $(".main3-con-pop-wrap5").fadeOut();
  });

    

  //main3-box11 슬라이드
  var $dot5 = $(".dots-wrap5 li");
  var slideIndex5 = 0;

  $dot5.on("click", function () {
    $("#main3-con-box-wrap5").animate({ marginLeft: -772 * $(this).index() });
    $dot5.css({ "background": "gray" });
    $(this).css({ "background": "orange" });
    slideIndex5 = $(this).index(); console.log(slideIndex5);
  });
  
});



//main3-content3 팝업
$(document).ready(function () {
  $("#main3-content3").click(function () {
    $("#main3-con-pop-wrap6").fadeIn();
  });

  $("#main3-con-pop-close6").click(function () {
    $("#main3-con-pop-wrap6").fadeOut();
  });

});

$(document).ready(function(){

  var typingBool = false; 
  var typingIdx=0; 
  var liIndex = 0;
  var liLength = $("#main-text>ul>li").length;
  
  // 타이핑될 텍스트를 가져온다 
  var typingTxt = $("#main-text>ul>li").eq(liIndex).text(); 
  typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
  if(typingBool==false){ // 타이핑이 진행되지 않았다면 
      typingBool=true; 
      var tyInt = setInterval(typing,100); // 반복동작 
  } 
       
  function typing(){ 
    $("#typing ul li").removeClass("on");
     $("#typing ul li").eq(liIndex).addClass("on");
    if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
       $("#typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
       typingIdx++; 
     } else{ if(liIndex<liLength-1){
       //다음문장으로  가기위해 인덱스를 1증가
         liIndex++; 
       //다음문장을 타이핑하기위한 셋팅
          typingIdx=0;
          typingBool = false; 
          typingTxt = $("#main-text>ul>li").eq(liIndex).text(); 
         
       //다음문장 타이핑전 1초 쉰다
           clearInterval(tyInt);
            //타이핑종료
       
           setTimeout(function(){
             //1초후에 다시 타이핑 반복 시작
             tyInt = setInterval(typing,100);
           },1000);
          } else if(liIndex==liLength-1){
            
           //마지막 문장까지 써지면 반복종료
             clearInterval(tyInt);
          }
      } 
  }  
  
















});