import Vue from "vue";
import Confirm from "./Confirm";

let instance;
// 创建构造函数
const Instance = Vue.extend(Confirm);
// 执行构造函数并完成挂载
const initInstance = () => {
    // 实例化
    instance = new Instance();
    // $mount 挂载，从 $el 得到真实 DOM，将其添加到 body 
    document.body.appendChild(instance.$mount().$el)
}

export default option => {
    instance ? "" : initInstance();
    // 将传入的对象合并到实例下，供实例调用
    Object.assign(instance,option);
    // 显示确认框
    return instance.show(vm => {
        // 将实例对象清空
        instance = null;
    })
}