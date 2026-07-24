/* ==========================================
   ai.js
   AI 스마트 도슨트
========================================== */

/* ==========================================
   질문 처리
========================================== */

async function askGuide(question){

    const id = getGuideId();

    const guide = guideManager.get(id);

    if(!guide){

        return "전시 정보를 찾을 수 없습니다.";

    }

    // 빈 질문 체크
    if(question.trim() === ""){

        return "질문을 입력해 주세요.";

    }

    // FAQ 먼저 검색
    const faq = searchFAQ(guide, question);

    if(faq){

        return faq.answer;

    }

    // FAQ에 없으면 AI 호출
    const answer = await askAI(question);

    return answer;

}

/* ==========================================
   FAQ 검색
========================================== */

function searchFAQ(guide, question){

    if(!guide.faq){

        return null;

    }

    const text = question.replace(/\s/g,"");

    for(const item of guide.faq){

        const q = item.question.replace(/\s/g,"");

        if(text.includes(q) || q.includes(text)){

            return item;

        }

    }

    return null;

}

/* ==========================================
   OpenAI 호출 (임시)
========================================== */

async function askAI(question){

    /*
        나중에 Cloudflare Worker 주소로 변경

        const response = await fetch(
            "https://xxxxx.workers.dev",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    guide:getGuideId(),
                    level:loadLevel(),
                    weather:loadWeather(),
                    question:question
                })
            }
        );

        const result = await response.json();

        return result.answer;
    */

    return "🤖 아직 OpenAI가 연결되지 않았습니다.";

}

/* ==========================================
   질문 버튼
========================================== */

document
.getElementById("askBtn")
.onclick = async ()=>{

    const q =
    document
    .getElementById("question")
    .value;

    document
    .getElementById("answer")
    .innerHTML =
    "🤖 AI가 생각하고 있습니다...";

    const answer =
    await askGuide(q);

    document
    .getElementById("answer")
    .innerHTML =
    answer;

};
