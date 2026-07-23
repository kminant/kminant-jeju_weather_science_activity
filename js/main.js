// 관람코스

const options=document.querySelectorAll(".option");

options.forEach(btn=>{

btn.onclick=()=>{

options.forEach(b=>b.classList.remove("selected"));

btn.classList.add("selected");

localStorage.setItem("course",btn.dataset.course);

}

});

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
