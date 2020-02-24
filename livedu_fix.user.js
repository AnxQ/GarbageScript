// ==UserScript==
// @name         Livedu Fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  This platform is a piece of s**t.
// @author       AnxQ
// @match        http://www.livedu.com.cn/ispace4.0/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var uid = undefined;
    var scripts = document.getElementsByTagName("script");
    var problem_script = undefined;
    function replaceAll(str, patt, replacement) {
        var res = str.replace(patt, replacement);
        while(res != str) {
            str = res;
            res = str.replace(patt, replacement);
        }
        return res;
    }
    for (var i = 0; i < scripts.length; ++i) {
        if(scripts[i].innerText && scripts[i].innerText.match(/"user": "(.*?),"/g)) {
            var res = scripts[i].innerText.match(/"user": "(.*?),"/)[1];
            uid = res.substr(0, res.length - 1);
            problem_script = scripts[i].innerText;
        }
    }
    console.log(uid);
    if(window.location.href.indexOf('moocxsxx') > -1) {
        var fixed_script = replaceAll(problem_script, uid, uid.replace('"', '\\"'));
        var fixed_script_element = document.createElement('script');
        fixed_script_element.innerHTML = fixed_script;
        document.body.appendChild(fixed_script_element);
    }
})();