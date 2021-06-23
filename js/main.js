$(document).ready(function(){

  $(".popin button").on("click",function() {
    console.log("play")
    $(".pop").fadeOut();
    $(".popin").fadeOut();
  })

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    effect: 'fade',
    loop: true,
    speed: 300,
    mousewheel: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  
  $('#fullpage').fullpage({})
  
      const slider = $(".pcsection");
      slider
        .slick({
          dots: true,
          centerMode : false,
          infinite: false,
          speed: 1000,
          vertical : false,
          arrows:false,
          dots: true,
          dotsClass : "ddots",
          customPaging : function(slider, i) {
          var thumb = $(slider.$slides[i]).data();
          if (i=='0'){
            i = "Main";
          } else if (i=='1'){
            i = "Profile";
          } else if (i=='2'){
            i = "Stack";
          } else if (i=='3'){
            i = "Project";
          }
          return '<a class="dot">'+i+'</a>';
          },
        });

        /*모바일 슬릭제거*/ 
        $(window).on('load resize', function() {
          if($(window).width() < 767) {
            slider.slick('unslick');
          }else{
            slider.slick({
              dots: true,
              centerMode : false,
              infinite: false,
              speed: 1000,
              vertical : false,
              arrows:false,
              dots: true,
              dotsClass : "ddots",
              customPaging : function(slider, i) {
              var thumb = $(slider.$slides[i]).data();
              if (i=='0'){
                i = "Main";
              } else if (i=='1'){
                i = "Profile";
              } else if (i=='2'){
                i = "Stack";
              } else if (i=='3'){
                i = "Project";
              }
              return '<a class="dot">'+i+'</a>';
              },
            });
          }
        });
        /*슬릭 스크롤*/ 
        slider.on('wheel', (function(e) {
        e.preventDefault();
        if (e.originalEvent.deltaY > 0) {
          $(this).stop().slick('slickNext');
        } else {
          $(this).stop().slick('slickPrev');
        }
  }));
  var typingBool = false; 
  var typingIdx=0; 
  var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다 
  typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
  if(typingBool==false){ // 타이핑이 진행되지 않았다면 
     typingBool=true; 
     
     var tyInt = setInterval(typing,100); // 반복동작 
   } 
   
   function typing(){ 
     if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
       $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
       typingIdx++; 
     } else{ 
       clearInterval(tyInt); //끝나면 반복종료 
     } 
   }  
    
})