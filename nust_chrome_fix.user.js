// ==UserScript==
// @name         NJUST Chrome fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Living comfortably without anybody's help.
// @author       AnxQ
// @match        http://202.119.81.112:9080/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    unsafeWindow.showModalDialog = function (url, wind, style) {
        window.open(url, wind, style);
    }
    if (window.location.href.indexOf("xskb_list") > -1) {
        GM_addStyle(`.Nsb_layout_r {margin-right: 180px; padding-right: 24px; } `);
    }
})();