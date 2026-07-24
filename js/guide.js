/* ==========================================
   guide.js
   AI 스마트 도슨트
========================================== */

// ================================
// URL에서 전시물 ID 가져오기
// 예) guide.html?id=volcano
// ================================

function getGuideId() {

    const params = new URLSearchParams(window.location.search);

    return params.get("id");

}

// ================================
// 현재 전시물 불러오기
// ================================

function loadGuide() {

    const id = getGuideId();

    const guide = guideManager.get(id);

    if (!guide) {

        document.getElementById("title").innerHTML =
        "전시물을 찾을 수 없습니다.";

        return;

    }

    displayGuide(guide);

}

// ================================
// 화면에 출력
// ================================

function displayGuide(guide) {

    document.getElementById("zone").innerHTML =
    guide.zoneName;

    document.getElementById("title").innerHTML =
    guide.title;

    document.getElementById("subtitle").innerHTML =
    guide.subtitle;

    document.getElementById("summary").innerHTML =
    guide.summary;

    // 참여자 수준

    const level = loadLevel();

    document.getElementById("description").innerHTML =
    guide.levels[level];

    document.getElementById("story").innerHTML =
    guide.story;

    updateWeatherTip(guide);

}

// ================================
// 오늘의 날씨와 연결
// ================================

function updateWeatherTip(guide) {

    const weather = loadWeather();

    let tip = "";

    // 비가 오는 경우
    if (weather.rain > 0 && guide.todayWeather.rainy) {

        tip = guide.todayWeather.rainy;

    }

    // 기온이 높은 경우
    else if (weather.temp >= 30 && guide.todayWeather.hot) {

        tip = guide.todayWeather.hot;

    }

    // 기온이 낮은 경우
    else if (weather.temp <= 5 && guide.todayWeather.cold) {

        tip = guide.todayWeather.cold;

    }

    // 바람이 강한 경우
    else if (weather.wind >= 8 && guide.todayWeather.windy) {

        tip = guide.todayWeather.windy;

    }

    // 기본 설명
    else {

        tip = guide.todayWeather.normal;

    }

    document.getElementById("weatherTip").innerHTML = tip;

}

