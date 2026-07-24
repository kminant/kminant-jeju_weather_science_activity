/* ==========================================
   guide.js
   AI 스마트 도슨트
========================================== */

// URL에서 id 읽기
function getGuideId(){

    const params = new URLSearchParams(location.search);

    return params.get("id");

}

// 화면 출력
function loadGuide(){

    const id = getGuideId();

    const guide = guideManager.get(id);

    if(!guide){

        return;

    }

    // 제목
    document.getElementById("title").innerHTML =
    guide.title;

    document.getElementById("subtitle").innerHTML =
    guide.subtitle;

    // 요약
    document.getElementById("summary").innerHTML =
    guide.summary;

    // 참여자 수준
    const level = loadLevel();

    document.getElementById("description").innerHTML =
    guide.levels[level];

    // 흥미로운 이야기
    document.getElementById("story").innerHTML =
    guide.story;

    // 오늘의 날씨 연결
    updateWeatherTip(guide);

}

function updateWeatherTip(guide){

    const weather = loadWeather();

    let text = "";

    if(weather.temp >= 30){

        text = guide.todayWeather.hot;

    }

    else if(weather.rain > 0){

        text = guide.todayWeather.rainy;

    }

    else if(weather.wind >= 5){

        text = guide.todayWeather.windy;

    }

    else{

        text = guide.todayWeather.normal;

    }

    document.getElementById("weatherTip").innerHTML =
    text;

}

loadGuide();
