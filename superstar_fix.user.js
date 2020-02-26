// ==UserScript==
// @name         Superstar Fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  允许课程放后台/鼠标移出窗口/调整进度
// @author       AnxQ
// @match        https://mooc1-1.chaoxing.com/knowledge/cards*
// @run-at       document-body
// @require      http://libs.baidu.com/jquery/2.0.0/jquery.min.js
// @updateURL    https://github.com/AnxQ/GarbageScript/raw/master/superstar_fix.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var iframe = $('iframe');
    var data = iframe.attr('data');
    iframe.attr('data', data.replace(',"fastforward":"true","switchwindow":"true","retract":"true"', ''));
    iframe.removeAttr('fastforward');
    iframe.removeAttr('switchwindow');
})();