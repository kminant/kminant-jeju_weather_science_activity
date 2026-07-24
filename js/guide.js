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
    displayQuiz(guide);

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

/* ==========================================
   퀴즈 표시
========================================== */

function displayQuiz(guide) {

    const quizArea = document.getElementById("quiz");

    // 퀴즈가 없으면 종료
    if (!guide.quiz || guide.quiz.length === 0) {

        quizArea.innerHTML = "<p>준비 중입니다.</p>";

        return;

    }

    currentQuiz = guide.quiz[0];

    const quiz = currentQuiz;

    let html = "";

    html += `
        <div class="quiz-question">
            ${quiz.question}
        </div>
    `;

    quiz.choices.forEach((choice, index) => {

        html += `
            <button class="quiz-choice"
                onclick="checkAnswer(${index})">
                ${choice}
            </button>
        `;

    });

    html += `
        <div id="quizResult"></div>
    `;

    quizArea.innerHTML = html;

}

/* ==========================================
   현재 퀴즈 저장
========================================== */

let currentQuiz = null;

/* ==========================================
   정답 확인
========================================== */

function checkAnswer(index){

    const result = document.getElementById("quizResult");

    if(index === currentQuiz.answer){

        result.innerHTML =
        `
        <div class="quiz-correct">

        🎉 정답입니다!

        <br><br>

        ${currentQuiz.explanation}

        </div>
        `;

    }

    else{

        result.innerHTML =
        `
        <div class="quiz-wrong">

        ❌ 다시 생각해보세요.

        </div>
        `;

    }

}

/* ==========================================
   이전 전시
========================================== */

function movePrev(){

    const id = getGuideId();

    const index = exhibitOrder.indexOf(id);

    if(index <= 0){

        alert("첫 번째 전시입니다.");

        return;

    }

    location.href =
    "guide.html?id=" +
    exhibitOrder[index - 1];

}

/* ==========================================
   다음 전시
========================================== */

function moveNext(){

    const id = getGuideId();

    const index = exhibitOrder.indexOf(id);

    if(index >= exhibitOrder.length - 1){

        alert("모든 전시를 관람했습니다.");

        return;

    }

    location.href =
    "guide.html?id=" +
    exhibitOrder[index + 1];

}

/* ==========================================
   버튼 연결
========================================== */

document
.getElementById("prevBtn")
.onclick = movePrev;

document
.getElementById("nextBtn")
.onclick = moveNext;

/* ==========================================
   시작
========================================== */

window.onload = function(){

    loadGuide();

};
