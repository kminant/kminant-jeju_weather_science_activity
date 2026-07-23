// 관람코스

const courseButtons = document.querySelectorAll(".course");

courseButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        btn.classList.toggle("selected");

        saveCourses();

    });

});

function saveCourses(){

    const selected = [];

    document.querySelectorAll(".course.selected").forEach(btn=>{

        selected.push(btn.dataset.course);

    });

    localStorage.setItem("courses", JSON.stringify(selected));

}

// 참여자

const levels=document.querySelectorAll(".level");

levels.forEach(btn=>{

btn.onclick=()=>{

levels.forEach(b=>b.classList.remove("selected"));

btn.classList.add("selected");

localStorage.setItem("level",btn.dataset.level);

}

});

// 체험 시작

document
.getElementById("start")
.onclick=()=>{

location.href="earth.html";

};
