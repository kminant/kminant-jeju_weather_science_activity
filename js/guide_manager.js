/* ==========================================
   guide_manager.js
   전시물 관리자
========================================== */

const guideManager = {

    guides: {},

    order: [

        "timeline",
        "amosmap",
        "volcano",
        "tornado",
        "earthquake",
        "forecast",
        "climatechange",
        "history100",
        "oldequipment",
        "surfaceobs",
        "gongsinjeong",
        "cheugugi"

    ],

    /* -----------------------------
       전시 등록
    ----------------------------- */

    add(guide){

        this.guides[guide.id] = guide;

    },

    /* -----------------------------
       전시 가져오기
    ----------------------------- */

    get(id){

        return this.guides[id];

    },

    /* -----------------------------
       이전 전시
    ----------------------------- */

    getPrev(id){

        const index = this.order.indexOf(id);

        if(index <= 0){

            return null;

        }

        return this.order[index - 1];

    },

    /* -----------------------------
       다음 전시
    ----------------------------- */

    getNext(id){

        const index = this.order.indexOf(id);

        if(index < 0){

            return null;

        }

        if(index >= this.order.length - 1){

            return null;

        }

        return this.order[index + 1];

    },

    /* -----------------------------
       전체 개수
    ----------------------------- */

    getCount(){

        return this.order.length;

    },

    /* -----------------------------
       현재 번호 (1부터 시작)
    ----------------------------- */

    getCurrentIndex(id){

        return this.order.indexOf(id) + 1;

    }

};
