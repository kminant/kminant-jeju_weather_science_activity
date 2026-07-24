/* ===========================================
   storage.js
   선택한 정보를 저장하고 불러오는 파일
=========================================== */

// 관람코스 저장
function saveCourses(courses){

    localStorage.setItem(
        "courses",
        JSON.stringify(courses)
    );

}

// 관람코스 불러오기
function loadCourses(){

    const data =
    localStorage.getItem("courses");

    if(!data){

        return [];

    }

    return JSON.parse(data);

}

// 참여자 저장
function saveLevel(level){

    localStorage.setItem(

        "level",

        level

    );

}

// 참여자 불러오기
function loadLevel(){

    return localStorage.getItem("level")
    || "elementary";

}

// 현재 날씨 저장
function saveWeather(weather){

    localStorage.setItem(

        "weather",

        JSON.stringify(weather)

    );

}

// 현재 날씨 불러오기
function loadWeather(){

    const data=

    localStorage.getItem("weather");

    if(!data){

        return null;

    }

    return JSON.parse(data);

}
