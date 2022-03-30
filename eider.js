function openMenu() {
    document.getElementById("mega-menu").style.display = "block"
}
function closeMenu() {
    document.getElementById("mega-menu").style.display = "none"
}

function openSearch() {
    document.getElementById("search").style.height = 100 + "px"
}
function searchClose() {
    document.getElementById("search").style.height = 0
}

$(function(){
$(".nav .center li").hover(
  function(){
      $(this).find(".center-sub").stop().slideDown(300);
  },
  function(){
      $(this).find(".center-sub").stop().slideUp(300);
  },
)
})

$(function() {
    $(".main-slider").each(function(){
        // 변수의 준비
        let $container = $(this),
            $slideGroup = $container.find(".slider-wrap"),
            $slides = $slideGroup.find(".slide-content"),
            $indicator = $container.find(".indicator"),
            //0. 슬라이드 쇼의 각 요소의 제이쿼리 객체
            //1. 슬라이드 쇼 전체 컨테이너
            //2. 모든 슬라이드의 정리( 슬라이드 그룹 )
            //3. 각 슬라이드
            //4. 네비게이션 ( prev / next )
            //5. 인디게이터 (점)

            slideCount = $slides.length,
            indicatorHTML = "",
            currentIndex = 0,
            duration= 500,
            easing= "linear",
            interval = 4000,
            timer;

            // 슬라이드 점수
            // 인디게이터 콘텐츠
            //  현재 슬라이드의 인덱스
            // 다음 슬라이드에 애니메이션의 작동 소요시간
            // 다음 슬라이드의 애니메이션의 이징의 종류
            // 자동으로 다음 슬라이드로 옮길 때까지의 시간
            // 타이머

            // HTML 요소의 배치 생성 삽입
            //-----------------------------------------------------

            // 각 슬라이더의 위치를 결정하고,
            // 해당 인디게이터의 앵커를 생성

            $slides.each(function(i) {
                $(this).css({left:100 * i + "%"});
                indicatorHTML += "<a href='#'>" + (i+1) + "</a>";
            });

            //인디게이터에 콘텐츠를 삽입
            $indicator.html(indicatorHTML);

            //함수의 정의
            //--------------------------------------------------------------

            // 모든 슬라이드를 표시하는 함수

            function goToSlide (index) {
                // 슬라이드 그룹을 대상 위치에 맞게 이동
                $slideGroup.animate({left:-100 * index + "%"}, duration, easing);
                // 현재 슬라이드의 인덱스를 덮어쓰기
                currentIndex = index;
                // 탐색 및 표시 상태를 업데이트

                updateNav();
            }
            
            // 슬라이드의 상태에 따라 탐색 및 표시를 업데이트하는 함수

            function updateNav(){
                    // 현재 슬라이드의 표시를 해제
                    $indicator.find("a").removeClass("active").eq(currentIndex).addClass("active");

                    // 타이머를 시작하는 함수
            }
                    function startTimer(){
                        // 변수 interval에서 설정 한 시간이 경과 할 때마다 작업을 수행
                        timer = setInterval(function(){
                            // 현재 슬라이드의 인덱스에 따라 다음 표시할 슬라이드의 결정
                            // 만약에 마지막 슬라이드라면 첫 번째 슬라이드에

                            var nextIndex = (currentIndex + 1) % slideCount;
                            

                            goToSlide(nextIndex);

                        }, interval);
                    }

                    // 타이머를 중지하는 함수 
                    function stopTimer(){
                        clearInterval(timer);
                    }

                    // 네비게이션 링크를 클릭하면 해당 슬라이드를 표시하는 부분

                    

                    //인디게이터의 링크를 클릭하면 해당 슬라이드를 표시
                    $indicator.on("click","a", function(e){
                        e.preventDefault();
                        if(!$(this).hasClass("active")){
                            goToSlide($(this).index());
                        }
                    });

                // 마우스오버를 하면 타이머를 정지 그렇지 않으면 시작

                $container.on({
                    mouseenter: stopTimer,
                    mouseleave: startTimer
                });                                                
                

                // 슬라이스 쇼 시작
                //-----------------------------------------------

                goToSlide(currentIndex);

                startTimer();
                                                                

    });
});

function openTitle(event, title) {
    let i, titleBtn, frame;

    prodFrame = document.getElementsByClassName("prod-frame");
    for(i = 0; i < prodFrame.length; i++) {
        prodFrame[i].style.display = "none";
    }

    titleBtn = document.getElementsByClassName("title-tab");
    for(i = 0; i < titleBtn.length; i++) {
        titleBtn[i].className = titleBtn[i].className.replace(" current", "");
    }

    document.getElementById(title).style.display = "inherit";
    event.currentTarget.className += " current"
}
document.getElementById("defaultTitle").click()

function openElement(event, prodTab) {
    let j, prodBtn, prodElem;

    prodElem = document.getElementsByClassName("prod-wrap");
    for(j = 0; j < prodElem.length; j++) {
        prodElem[j].style.display = "";
    }

    prodBtn = document.getElementsByClassName("prod-menu");
    for(j = 0; j < prodBtn.length; j++) {
        prodBtn[j].className = prodBtn[j].className.replace(" select", "");
    }

    document.getElementById(prodTab).style.display = "block";
    event.currentTarget.className += " select"

}
document.getElementById("defaultOpen").click()

$(function(){
    $("#open-sub").click(function(){
        $(".sub-family").toggleClass("show")
    });
})