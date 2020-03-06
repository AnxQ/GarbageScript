// ==UserScript==
// @name         Superstar Fix
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  允许课程放后台/鼠标移出窗口/调整进度/快速翻页/下载课件。
// @author       AnxQ
// @match        https://mooc1-1.chaoxing.com/knowledge/cards*
// @run-at       document-body
// @require      http://libs.baidu.com/jquery/1.11.1/jquery.min.js
// @updateURL    https://github.com/AnxQ/GarbageScript/raw/master/superstar_fix.user.js

// ==/UserScript==

(function() {
    'use strict';
    String.prototype.format = function () {
        var values = arguments;
        return this.replace(/\{(\d+)\}/g, function (match, index) {
            if (values.length > index) {
                return values[index];
            } else {
                return "";
            }
        });
    };
    var card_level = document;
    var top_level = window.parent.document;

    var iframe = $('iframe');
    console.log(iframe);
    var data = iframe.attr('data');
    var filter_attrs = ['fastforward', 'switchwindow', 'retract'];
    filter_attrs.forEach((attr)=> {
        if (iframe.attr('data').indexOf(attr) > -1) {
            iframe.attr('data', data.replace(',"'+ attr +'":"true"', ''));
            console.log('Removed attribute '+ attr +' from iframe.');
        }
        iframe.removeAttr(attr);
    });

    var dl_inject = document.createElement('p');
    mArg.attachments.forEach((att) => {
        var link_elem = document.createElement('a');
        link_elem.className = "dl_link";
        link_elem.innerText = "● " + att.property.name;
        link_elem.href = "https://d0.ananas.chaoxing.com/download/{0}?_fix={1}".format(att.property.objectid, att.property.type);
        dl_inject.appendChild(link_elem);
    });
    $('.ans-cc')[0].appendChild(dl_inject);
        var css_inject = document.createElement('style');
    css_inject.innerHTML = `
    a.dl_link {
        display: block;
    }
    a.dl_link:hover {
        background-color: #666666;
        color:#ffffff;
    }
    `;
    $('head', card_level)[0].appendChild(css_inject);

    var top = $('#mainid', top_level)[0];
    var tabtags = $('.tabtags', top)[0];
    top.removeChild(tabtags);
    top.appendChild(tabtags);
})();