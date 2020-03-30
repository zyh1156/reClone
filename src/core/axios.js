import axios from 'axios'
export default {
    post(url, data, callback) {
        axios.post(url, data, {
            headers: {
                "XX-Token": "80b225ce8cd0942a0b05125d404c788076fe03014803ad0e1e6ffcad88c65aed",
                "XX-Device-Type": "mobile",
                "XX-Api-Version": "1.0.0"
            }
        }).then(res => {
            callback(res)
        }, res => {
            callback(res)
        })
    }
}