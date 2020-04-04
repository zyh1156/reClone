import axios from 'axios'
// 使用weui
import "weui"
import weui from "weui.js"
import {
    getCookie
} from "./cookie"
export default {
    post(url, data, call) {
        let loading = weui.loading("获取中"),
            token;
        token = getCookie("token");
        return axios.post(url, data, {
            headers: {
                "XX-Token": token,
                "XX-Device-Type": "mobile",
                // "XX-Api-Version": "1.0.0"
            },
            timeout: 5000
        }).then(res => {
            loading.hide();
            if (res.data.code == 1) {
                call(res);
            } else {
                weui.alert(res.data.msg);
            }
        }, res => {
            loading.hide();
            weui.alert("请求错误。");
        })
    }
}