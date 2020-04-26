import axios from 'axios'
// 使用weui
import "weui"
import weui from "weui.js"
import {
    setCookie,
    getCookie
} from "./cookie"
export default {
    post(url, data, call, nolo, noto) {
        url = "http://t3.lcqingshu.com" + url;
        // url = "http://192.168.1.92" + url;
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
            timeout: 10 * 1000
        }).then(res => {
            if (nolo) {} else {
                loading.hide();
            }
            if (res.data.code == 1) {
                call(res);
            } else if (res.data.code == 10001) {
                setCookie("userid", "", -1);
                location.href = "/user/login"
            } else {
                if (noto) {
                    weui.alert(res.data.msg);
                    call(res);
                } else {
                    location.href = "/error"
                }
            }
        }, res => {
            // this.weui.alert(JSON.stringify(res));
            loading.hide();
            weui.alert("请求错误。");
        })
    }
}