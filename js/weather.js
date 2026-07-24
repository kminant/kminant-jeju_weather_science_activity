/* ==========================================
   weather.js
========================================== */

// API 준비
const SERVICE_KEY = "...";

const NX = 52;
const NY = 38;

// API용(아직 구현 전)
async function fetchWeather(){

    console.log("기상청 API 준비중");

}

// 테스트 데이터
function getWeather(){

    return{

        station:"제주(184)",

        temp:31.4,

        feel:34.8,

        humid:73,

        wind:4.2,

        dir:"남동",

        rain:0,

        sky:"맑음",

        obsTime:"2026-07-24 14:00"

    };

}

// 화면 출력
function displayWeather(){

    const weather=getWeather();

    document.getElementById("temp").innerHTML=
    weather.temp+"℃";

    document.getElementById("feel").innerHTML=
    weather.feel+"℃";

    document.getElementById("humid").innerHTML=
    weather.humid+"%";

    document.getElementById("wind").innerHTML=
    weather.wind+"m/s";

    document.getElementById("dir").innerHTML=
    weather.dir;

    document.getElementById("rain").innerHTML=
    weather.rain+"mm";

    document.getElementById("obsTime").innerHTML=
    weather.obsTime;

}

// 저장
function saveWeather(){

    const weather=getWeather();

    localStorage.setItem(
        "weather",
        JSON.stringify(weather)
    );

}

// 시작
displayWeather();

saveWeather();
