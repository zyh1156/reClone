var loadjs = require("loadjs");
import {
    getCookie
} from "./cookie";
import axios from "axios"
import $ from "jquery";
export default (data) => {
    loadjs("http://res.wx.qq.com/open/js/jweixin-1.4.0.js", res => {
        let url = location.href,
            url2;
        if (url.indexOf("?") > -1) {
            url2 = url + "&user_pid=" + getCookie("userid");
        } else {
            url2 = url + "?user_pid=" + getCookie("userid");
        }
        axios.post(
            "http://t3.lcqingshu.com/api/home/wx_tool/share.html", {
                url: url
            }
        ).then(res => {
            res = res.data.data;
            wx.config(res.jsdk); // false：调试关闭
            // 需在用户可能点击分享按钮前就先调用
            // shareData 参数记得为字符串类型
            if (data && res.data.is_lock == 0) {
                var shareData = {
                    title: data.title,
                    desc: data.desc, //这里请特别注意是要去除html
                    link: url2, //域名必须JS安全域名
                    imgUrl: data.imgUrl
                };
            } else {
                var shareData = {
                    title: res.data.title,
                    desc: res.data.desc, //这里请特别注意是要去除html
                    link: url2, //域名必须JS安全域名
                    imgUrl: res.data.imgUrl
                };
            }
            wx.ready(function () {
                if (wx.onMenuShareAppMessage) { //微信文档中提到这两个接口即将弃用，故判断
                    wx.onMenuShareAppMessage(shareData); //1.0 分享到朋友
                    wx.onMenuShareTimeline(shareData); //1.0分享到朋友圈
                } else {
                    wx.updateAppMessageShareData(shareData); //1.4 分享到朋友
                    wx.updateTimelineShareData(shareData); //1.4分享到朋友圈
                }

            })
        });
    });
}