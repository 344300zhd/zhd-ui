import Vue from "vue";
import Confirm from "@/components/Confirm/index";

export default {
    init:(function(){
        Vue.prototype.$confirm = Confirm
    })()
}