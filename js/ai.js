/* ==========================================
   ai.js
   AI 추천 및 관람 포인트
========================================== */

function updateAI(){

    const weather =
    JSON.parse(localStorage.getItem("weather"));

    if(!weather){

        return;

    }

    let recommend = "";
    let tip = "";
    let course = "";

    // ===========================
    // 강수
    // ===========================

    if(weather.rain > 0){

        recommend =
        "☔ 현재 비가 내리고 있습니다.";

        tip =
        "우량계를 관찰하며 실제 강수량을 확인해보세요.";

        course =
        "🌧 지상기상관측장비를 먼저 추천합니다.";

    }

    // ===========================
    // 강풍
    // ===========================

    else if(weather.wind >= 5){

        recommend =
        "🌬 오늘은 바람이 강하게 불고 있습니다.";

        tip =
        "풍향계와 풍속계가 어떻게 움직이는지 살펴보세요.";

        course =
        "🌳 지상기상관측장비를 먼저 추천합니다.";

    }

    // ===========================
    // 더위
    // ===========================

    else if(weather.feel - weather.temp >= 2){

        recommend =
        "🥵 체감온도가 실제 기온보다 높습니다.";

        tip =
        "체감온도 계산기를 체험해보세요.";

        course =
        "🏢 제주기상과학홍보관을 먼저 추천합니다.";

    }

    // ===========================
    // 기본
    // ===========================

    else{

        recommend =
        "😊 오늘은 기상관측을 체험하기 좋은 날씨입니다.";

        tip =
        "홍보관에서 기상관측 과정을 먼저 살펴보세요.";

        course =
        "🏢 제주기상과학홍보관을 먼저 추천합니다.";

    }

    // 출력

    document.getElementById("recommend").innerHTML =
    recommend;

    document.getElementById("todayTip").innerHTML =
    tip;

    document.getElementById("courseRecommend").innerHTML =
    course;

}

// 시작

updateAI();
