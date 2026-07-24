/* ==========================================
   storage.js
   localStorage 관리
========================================== */

/* ==========================================
   참여자 수준
========================================== */

function saveLevel(level){

    localStorage.setItem("level", level);

}

function loadLevel(){

    return localStorage.getItem("level") || "elementary";

}

/* ==========================================
   관람코스
========================================== */

function saveCourses(courses){

    localStorage.setItem(

        "courses",

        JSON.stringify(courses)

    );

}

function loadCourses(){

    const data = localStorage.getItem("courses");

    if(!data){

        return [];

    }

    return JSON.parse(data);

}

/* ==========================================
   현재 전시
========================================== */

function saveCurrentGuide(id){

    localStorage.setItem(

        "currentGuide",

        id

    );

}

function loadCurrentGuide(){

    return localStorage.getItem("currentGuide");

}

/* ==========================================
   방문한 전시
========================================== */

function saveVisited(id){

    const visited = loadVisited();

    if(!visited.includes(id)){

        visited.push(id);

    }

    localStorage.setItem(

        "visited",

        JSON.stringify(visited)

    );

}

function loadVisited(){

    const data = localStorage.getItem("visited");

    if(!data){

        return [];

    }

    return JSON.parse(data);

}

/* ==========================================
   퀴즈 점수
========================================== */

function saveScore(score){

    localStorage.setItem(

        "score",

        score

    );

}

function loadScore(){

    return Number(

        localStorage.getItem("score") || 0

    );

}

function addScore(){

    saveScore(

        loadScore()+1

    );

}

/* ==========================================
   초기화
========================================== */

function resetGuide(){

    localStorage.removeItem("visited");

    localStorage.removeItem("score");

    localStorage.removeItem("currentGuide");

}
