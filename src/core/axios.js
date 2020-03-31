import axios from 'axios'
// 使用weui
import "weui"
import weui from "weui.js"
export default {
    post(url, data) {
        let loading = weui.loading("获取中");
        return axios.post(url, data, {
            headers: {
                "XX-Token": "80b225ce8cd0942a0b05125d404c788076fe03014803ad0e1e6ffcad88c65aed",
                "XX-Device-Type": "mobile",
                "XX-Api-Version": "1.0.0"
            }
        }).then(res => {
            loading.hide();
            return res
        }, res => {
            loading.hide();
            return res
        })
    }
}