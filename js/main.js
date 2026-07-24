/* ==========================================
   제주기상과학홍보관 AI 스마트 가이드
   main.js
========================================== */


/* ==========================================
   관람코스 (중복 선택)
========================================== */

const courseButtons = document.querySelectorAll(".course");

courseButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("selected");

        updateCourses();

    });

});

function updateCourses(){

    const selectedCourses = [];

    document.querySelectorAll(".course.selected").forEach(button => {

        selectedCourses.push(button.dataset.course);

    });

    saveCourses(selectedCourses);

}


/* ==========================================
   참여자 선택 (1개만 선택)
========================================== */

const levelButtons = document.querySelectorAll(".level");

levelButtons.forEach(button => {

    button.addEventListener("click", () => {

        levelButtons.forEach(btn => {

            btn.classList.remove("selected");

        });

        button.classList.add("selected");

        saveLevel(button.dataset.level);

    });

});


/* ==========================================
   저장된 선택 복원
========================================== */

window.addEventListener("load", () => {

    restoreCourses();

    restoreLevel();

});


function restoreCourses(){

    const saved = loadCourses();

    courseButtons.forEach(button => {

        if(saved.includes(button.dataset.course)){

            button.classList.add("selected");

        }

    });

}


function restoreLevel(){

    const saved = loadLevel();

    levelButtons.forEach(button => {

        button.classList.remove("selected");

        if(button.dataset.level === saved){

            button.classList.add("selected");

        }

    });

}


/* ==========================================
   AI 힌트
========================================== */

const hintBtn = document.getElementById("hintBtn");

hintBtn.addEventListener("click", () => {

    alert(`💡 AI 힌트

체감온도는
기온뿐 아니라

✔ 습도
✔ 바람

의 영향을 함께 받아 계산됩니다.

오늘의 체감온도를
현재 기온과 비교해 보세요!`);

});


/* ==========================================
   체험 시작
========================================== */

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    const courses = loadCourses();

    const level = loadLevel();

    if(courses.length === 0){

        alert("관람코스를 선택해주세요.");

        return;

    }

    if(!level){

        alert("참여자를 선택해주세요.");

        return;

    }

    // 관람 기록 초기화
    resetGuide();

    // 첫 번째 전시로 이동
    location.href = "guide.html?id=timeline";

});


/* ==========================================
   AI 추천 문구
========================================== */

const recommend = document.getElementById("recommend");

recommend.innerHTML = `
오늘은 <b>체감온도</b>와
<b>풍향</b>을 함께 살펴보면
기상을 더 재미있게 이해할 수 있습니다.
`;
