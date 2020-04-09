 function setCookie(cname, cvalue, exdays) {
     var d = new Date();
     //  默认保存30天
     exdays = exdays || 30;
     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
     var expires = "expires=" + d.toGMTString();
     document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/";
     return ""
 }

 function getCookie(cname) {
     var name = cname + "=";
     var ca = document.cookie.split(';');
     for (var i = 0; i < ca.length; i++) {
         var c = ca[i].trim();
         if (c.indexOf(name) == 0) {
             return c.substring(name.length, c.length);
         }
     }
     return "";
 }

 function checkCookie(cname) {
     var user = getCookie("username");
     return user != "";
 }

 export {
     setCookie,
     getCookie,
     checkCookie
 }