/* ==========================================
   ai.js
========================================== */

function askGuide(question){

    const id = getGuideId();

    const guide = guideManager.get(id);

    if(!guide){

        return "전시 정보를 찾을 수 없습니다.";

    }

    // FAQ 먼저 검색

    const faq = searchFAQ(guide, question);

    if(faq){

        return faq.answer;

    }

    // FAQ에 없으면

    return "이 질문은 AI에게 전달됩니다.";

}

function searchFAQ(guide, question){

    const text = question.replace(/\s/g,"");

    for(const item of guide.faq){

        const q = item.question.replace(/\s/g,"");

        if(text.includes(q) || q.includes(text)){

            return item;

        }

    }

    return null;

}

document
.getElementById("askBtn")
.onclick=()=>{

    const q = document
        .getElementById("question")
        .value;

    const answer = askGuide(q);

    document
        .getElementById("answer")
        .innerHTML = answer;

}
