document
.getElementById("startBtn")
.addEventListener("click",()=>{

const course=document.querySelector(
'input[name="course"]:checked'
).value;

const level=document.querySelector(
'input[name="level"]:checked'
).value;

localStorage.setItem("course",course);

localStorage.setItem("level",level);

location.href="earth.html";

});
