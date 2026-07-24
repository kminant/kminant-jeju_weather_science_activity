/* ==========================================
   guide.js
   전시물 화면 제어
========================================== */

function loadGuide(id){

    const exhibit = guideManager.get(id);

    if(!exhibit){

        return;

    }

    document.getElementById("title").innerHTML =
    exhibit.title;

    document.getElementById("subtitle").innerHTML =
    exhibit.subtitle;

    document.getElementById("summary").innerHTML =
    exhibit.summary;

    document.getElementById("description").innerHTML =
    guideManager.getDescription(id);

}
