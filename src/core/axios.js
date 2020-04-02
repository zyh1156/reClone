import axios from 'axios'
// 使用weui
import "weui"
import weui from "weui.js"
export default {
    post(url, data) {
        let loading = weui.loading("获取中");
        return axios.post(url, data, {
            headers: {
                "XX-Token": "f4f8922c7eb0b4db5a82d94036b0822e1f7e36e32407b9f7d2910d5fab1bbc44",
                "XX-Device-Type": "mobile",

                // "XX-Api-Version": "1.0.0"
            },
            timeout:5000
        }).then(res => {
            loading.hide();
            return res
        }, res => {
            loading.hide();
            return res
        })
    }
}