/* ==========================================
   guide_manager.js
   전시물 관리
========================================== */

const guideManager = {

    exhibits:{},

    register(exhibit){

        this.exhibits[exhibit.id]=exhibit;

    },

    get(id){

        return this.exhibits[id];

    },

    getDescription(id){

        const exhibit=this.get(id);

        if(!exhibit){

            return null;

        }

        const level=loadLevel();

        return exhibit.levels[level];

    },

    getAll(){

        return Object.values(this.exhibits);

    }

};
