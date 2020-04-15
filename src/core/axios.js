import axios from 'axios'
// 使用weui
import "weui"
import weui from "weui.js"
import {
    getCookie
} from "./cookie"
export default {
    post(url, data, call, nolo) {
        let loading, token = getCookie("token");
        if (nolo) {} else {
            loading = weui.loading("获取中");
        }
        axios.post(url, data, {
            headers: {
                "XX-Token": token,
                "XX-Device-Type": "mobile",
                // "XX-Api-Version": "1.0.0"
            },
            timeout: 5000
        }).then(res => {
            if (nolo) {} else {
                loading.hide();
            }
            if (res.data.code == 1) {
                call(res);
            } else if (res.data.code == 10001) {
                // return
                location.href = "/user/login";
            } else {
                // return
                location.href = "/error404";
            }
        }, res => {
            loading.hide();
            weui.alert("请求错误。");
        })
    }
}