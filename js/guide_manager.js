/* ==========================================
   guide_manager.js
   전시물 관리
========================================== */

const guideManager = {

    exhibits: {},

    register(exhibit) {

        this.exhibits[exhibit.id] = exhibit;

    },

    get(id) {

        return this.exhibits[id];

    },

    getAll() {

        return Object.values(this.exhibits);

    }

};
