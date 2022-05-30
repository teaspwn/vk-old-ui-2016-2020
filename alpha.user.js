// ==UserScript==
// @name         VK By RAM
// @namespace    https://github.com/891-2/vk-old-rad/
// @version      3.8.4
// @description  Вернём старый дизайн вместе
// @author       RAM
// @match        *://*.vk.com/*
// @icon         https://www.google.com/s2/favicons?domain=vk.com
// @grant        GM_webRequest
// @webRequest   [{"selector":"*://stats.vk-portal.net/web-stats/*","action":"cancel"}]
// @webRequest   [{"selector":"*://ad.mail.ru/static/admanhtml/rbadman-html5.min.js","action":"cancel"}]
// @webRequest   [{"selector":"*://www.tns-counter.ru/*","action":"cancel"}]
// @webRequest   [{"selector":"*://r3.mail.ru/k?*","action":"cancel"}]
// @webRequest   [{"selector":"https://vk.com/js/lib/px.js","action":"cancel"}]
// @webRequest   [{"selector":"https://top-fwz1.mail.ru/js/code.js","action":"cancel"}]
// @webRequest   [{"selector":"*://trk.mail.ru/i/*","action":"cancel"}]
// @webRequest   [{"selector":"*://ad.mail.ru/*","action":"cancel"}]
// @webRequest   [{"selector":"https://vk.com/ads_rotate.php?act=al_update_ad","action":"cancel"}]
// @require http://code.jquery.com/jquery-3.4.1.min.js
// @license MIT
// ==/UserScript==
var i, i2, vd, theme_hash_number, theme,j
var styleNode = document.createElement("style");
styleNode.id = 'Style'
styleNode.classList = 'old_style'
var styleNode2 = document.createElement("style");
styleNode2.id = 'Style'
var wait = setInterval(wait_form,500)

class_add(`
`);


function class_add(css) {
    //console.log(css)
    css!==undefined||null?styleNode.innerHTML = css:console.log('null')
    document.body.appendChild(styleNode);
}


document.addEventListener('DOMContentLoaded', function () {
    var l = document.querySelector('button.FCPanel__add')
    l.addEventListener("click", chat, false);
}, false);


i = 0
i2 = 0
vd = 0
document.addEventListener('DOMContentLoaded', function () {
    chat();
}, false);

window.onload = function () {
    var login = document.querySelector('.VkIdForm')
    var login_btn = document.querySelector("button.FlatButton.FlatButton--primary.FlatButton--size-l.FlatButton--wide.VkIdForm__button.VkIdForm__signInButton")
    login==null||undefined?(
    initial(),
    styleNode = null
    ):(
        login_btn.outerHTML = login_btn.outerHTML,
        login_btn = document.querySelector("button.FlatButton.FlatButton--primary.FlatButton--size-l.FlatButton--wide.VkIdForm__button.VkIdForm__signInButton"),
        login_btn.setAttribute("onclick",`return location.href = "https://oauth.vk.com/authorize?client_id=6287487&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=friends&response_type=token&v=5.131&state=123456"`),
        wait
    )
};

function wait_form(){
     var form =document.querySelector('form#login_submit')
     var acess =document.querySelector('img.oauth_app_photo')
     if (form!==null||undefined&&acess==null){
         console.log("form")
     }else if (acess!==null||undefined&&form==null){
         location.href = "https://vk.com/feed"
         clearInterval(wait_form)
         acess.classList = "test"
     }
}

window.onblur = function () {
    var a = setInterval(title, 2000);
    var b = setInterval(ads, 2000);
    var c = setInterval(check, 1000);
    clearInterval(a);
    clearInterval(b);
    clearInterval(c);
}

window.onfocus = function () {
    var ad_n = parseInt(localStorage.getItem("ad"));

    setInterval(title, 2000);
    setInterval(ads, 2000);
    setInterval(check, 1000);
    //fix_name();
}

function initial() {
    var ad_n = parseInt(localStorage.getItem("ad"));
    var settings_n = parseInt(localStorage.getItem("settings"));

    console.log('Скрипт запущен');
    setInterval(title, 2000);
    setInterval(ads, 2000);
    setInterval(check, 1000);
    fix_name();
   document.body.appendChild(styleNode2);
    }

// Проверка
function check() {
    check_vid();
    dot_check();
    feed_check();
    icon_check();
}

function feed_check() {
    if ((window.location.href.includes('feed'))) {
        _class();
        _class2();
    }
    var k = document.querySelector('.like_cont.PostBottomActionLikeBtns.PostBottomActionLikeBtns--withBgButtons')
    if (k) {
        _class();
        _class2();
    }
}

function icon_check() {
    if (!window.location.href.includes('im')) {
        var list = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
        list.forEach(function (element) {
            element.setAttribute('href', 'https://dl.dropbox.com/s/srxnp2eunc3q3fa/fav_logo.icoraw=1');
        });
    }
}

function _class2() {
    var g
    var k = document.querySelectorAll('.ui_actions_menu._ui_menu.ui_actions_menu--actionSheet');
    for (g = 0; g < k.length; g++) {
        k[g].className = 'ui_actions_menu _ui_menu ';
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function _class() {
    await sleep(2000)

    var u, k
    var old2 = document.querySelectorAll('.PostButtonReactions__icon.PostButtonReactions__icon--custom.PostButtonReactions__icon--animationActive')
    for (k = 0; k < old2.length; k++) {
        old2[k].style.background = `background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m0%200h24v24h-24z%22%20fill%3D%22none%22%2F%3E%3Cpath%20d%3D%22m17%202.9a6.43%206.43%200%200%201%206.4%206.43c0%203.57-1.43%205.36-7.45%2010l-2.78%202.16a1.9%201.9%200%200%201%20-2.33%200l-2.79-2.12c-6.05-4.68-7.45-6.47-7.45-10.04a6.43%206.43%200%200%201%206.4-6.43%205.7%205.7%200%200%201%205%203.1%205.7%205.7%200%200%201%205-3.1z%22%20fill%3D%22%23ff3347%22%2F%3E%3C%2Fsvg%3E);`
    }
}

function chat() {
    var a = document.querySelectorAll('.MEAvatar__online')
    console.log(a.length)
    //var b,c
    //for (b = 0; b < a.length; b++) {
    //   c = a[b].previousElementSibling.firstElementChild
    //  console.log(c.alt)
    //}
}

window.addEventListener('scroll', function () {
    KPP.add('.PostButtonReactions', function (reactions) {
        var count = reactions.dataset.reactionCounts;
        if (count && !(reactions.dataset.reactionButtonTextIsCounter)) {
            count = JSON.parse(count);
            if (!Array.isArray(count)) {
                count = Object.values(count)
            }
            var likes = count.reduce(function (previous, current) {
                return previous + current
            })
            reactions.getElementsByClassName('PostButtonReactions__title')[0].textContent = likes;
        }
        reactions.dataset.reactionButtonTextIsCounter = '1';

        var target = reactions.dataset.reactionTargetObject;
        if (target) {
            reactions.setAttribute('onmouseover', 'Likes.showLikes(this,\'' + target + '\')')
        }
    });
});

// Название
function title() {
    if (document.title == 'Мессенджер'){
        document.title = 'Сообщения'
    }else if (document.title == 'Реакции'){
        document.title = 'Понравилось'
    }else if (document.title == 'Приложения'){
        let side = document.querySelector('div#side_bar')
        side.style.setProperty("display", "none", "important")
        //console.log('test')
   }
}

// Реклама
function ads() {
    var ad_blocks, a
    ad_blocks = document.querySelectorAll('div#ads_left>div,[data-ad-view],div[data-ad-disabled-stat-impression],div#feed_filters a,.page_block.apps_feedRightAppsBlock.apps_feedRightAppsBlock_single_mini_app');
    for (a = 0; a < ad_blocks.length; a++) {
        ad_blocks[a].outerHTML = '';
    }
  let j = document.querySelectorAll('.wall_marked_as_ads')
    j.forEach(function(entry) {
        entry.closest('._post_content').remove()
        //console.log(entry)
    });

    let lj = document.querySelectorAll('a.Post__copyrightLink')
    var as = [ "appscent", "Бот", "CcCAb5" ];
    var el;
    lj.forEach(function(entry2) {
    var index, len;
    for (index = 0, len = as.length; index < len; ++index) {
            entry2.innerHTML.indexOf(as[index])?entry2.closest('._post_content').remove():console.log('1')
        //console.log(entry2)
        }
    });
}

// Три точки проверка
function dot_check() {
    let prof = document.querySelector('a#profile_edit_act[href="edit"]');
    let prof_friend = document.querySelector('div#profile_message_send')
    prof_friend!==null?dot_prof_friends():prof !== null?dot_prof():prof = null;
}

// Три точки установка
function dot_prof() {
    var aside, button, stats, stats_hash, stats_elem, stats_elem_parent, temp_a, regular_a, story_href, story
    aside = document.querySelector('.page_block.page_photo.ProfileActions>aside');
    stats = document.querySelector('[href*="/stats?"]')
    /*if (stats) {
        stats_hash = stats.href
    }*/
    stats?stats_hash = stats.href:console.log('test');


    aside.style.display = 'none';
    aside.outerHTML = '<aside aria-label="Действия со страницей" class="profile_aside"><div class="profile_aside_div">  <div class="profile_aside_div_div">      <div class="profile_aside_div_div_div">        <a href="edit" class="profile_aside_div_div_div_a">Редактировать</a>      </div>      <div class="profile_aside_div_div_div2">        <div aria-label="Действия" role="button" tabindex="0" class="profile_aside_div_div_div2_div">          <span class="profile_aside_div_div_div2_div_span">Действия</span>          <span style="display:block;">&nbsp;</span>        </div>        <div class="profile_aside_one">          <div class="profile_aside_one_two">            <span class="profile_aside_one_two_three">Действия</span>          </div>          <div class="profile_aside_four">            <a href="memories" role="link" tabindex="0" class="profile_aside_four_a">Воспоминания</a><a href="" id="aside_story_archive" role="link" class="profile_aside_four_a2" tabindex="0">Архив историй</a><a role="link" tabindex="0" class="profile_aside_four_a2" data-task-click="ProfileAction/money_transfer_box" data-from="own_profile">Денежные переводы</a>          </div>        </div>      </div>      <span style="font-size:0px;clear:both;display:block;height: 0px;line-height:0;visibility:hidden;/">.</span></div>    </div>  </aside>'
    story = document.querySelector('a#aside_story_archive')
    story.href = window.location.pathname + '?w=stories'
    // Если есть статистика добавляем элемент
    if (stats) {
        stats_elem_parent = document.querySelector('.profile_aside_four')
        stats_elem = document.createElement('a')
        stats_elem.classList = 'temp_a'
        stats_elem_parent.prepend(stats_elem)
        temp_a = document.querySelector('a.temp_a')
        temp_a.outerHTML = '<a href="" id="aside_stats" role="link" class="profile_aside_four_a2" tabindex="0">Статистика страницы</a>'
        regular_a = document.querySelector('a#aside_stats')
        regular_a.href = stats_hash
    }

    button = document.querySelector('.profile_aside_div_div_div2')
    button.onclick = function () {
        var b
        b = document.querySelector('.profile_aside_div_div_div2')
        b.classList.toggle('atv')
    };
}


// Меню и Имя возле иконки
function fix_name() {
    try {
    var parentlnk = document.querySelector('div#top_profile_menu')
    var lnk = document.querySelector('li#l_pr a')
    var setlnk = document.querySelector('a#top_settings_link');
    var suplnk = document.querySelector('a#top_support_link');
    var loglnk = document.querySelector('a#top_logout_link');
    var name = document.querySelector('img.TopNavBtn__profileImg');
    var name2 = document.querySelector('a[href*="connect.vk.com"] div[style="color: var(--text_primary);"]')
    var name3 = document.querySelector('[style="background-color: var(--content_tint_background); border-radius: 8px; width: 254px; font-family: inherit;"]')
    var remove = document.querySelector('a[href*="connect.vk.com"] ')
    var remove2 = document.querySelectorAll('div#top_profile_menu span')
    var theme_hash = document.querySelector('.idd_wrap.SettingsColorSchemeDropdown')
    var theme_elem = document.querySelector('a.top_profile_mrow.TopProfileItem--appearance')
    if (theme_hash) {
        theme_hash_number = theme_hash.getAttribute('data-hash')
        console.log(theme_hash_number)
    }
    if (theme_elem) {
        theme_elem.outerHTML = `<a class="top_profile_mrow TopProfileItem--appearance" id="" href="#" style="" onclick="return false">
  <div class="menu_item_icon"><svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M10.8 6.05a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM14.45 8.2a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM4.3 9.45a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM7.85 4.8a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"></path><path clip-rule="evenodd" d="M14.18 14.04c2.14.23 4.32-.75 4.32-4.04A8.47 8.47 0 0010 1.5 8.47 8.47 0 001.5 10a8.47 8.47 0 008.5 8.5c1.13 0 2.25-1 1.98-2.43l-.17-.68c-.25-.94-.43-1.6 1.08-1.49l1.29.14zm.16-1.5l-.25-.02-1.1-.12a3.34 3.34 0 00-1.74.27 2 2 0 00-1.1 1.68 3.8 3.8 0 00.22 1.47l.14.54c.02.13 0 .22 0 .28a.44.44 0 01-.1.17.57.57 0 01-.41.19 6.97 6.97 0 01-7-7 6.97 6.97 0 017-7 6.97 6.97 0 017 7c0 1.3-.41 1.87-.77 2.15-.42.32-1.07.48-1.9.4z" fill-rule="evenodd"></path></g></svg></div>
  <span>
    <div class="TopProfileItem__colorSchemeLabel">
  Тема:
  <div class="idd_wrap SettingsColorSchemeDropdown" id="" data-items="[[&quot;light&quot;,&quot;Светлая&quot;],[&quot;dark&quot;,&quot;Тёмная&quot;],[&quot;auto&quot;,&quot;Системная&quot;]]" data-value="light" hash="`+ theme_hash_number + `" data-inited="1"><div class="idd_selected_value " tabindex="0" role="link" onclick="var _0x1f3c4d=_0x378f;function _0x378f(_0x180bda,_0x12aab0){var _0x311094=_0x3110();return _0x378f=function(_0x378f3d,_0x18bc68){_0x378f3d=_0x378f3d-0x1c4;var _0x45cf40=_0x311094[_0x378f3d];return _0x45cf40;},_0x378f(_0x180bda,_0x12aab0);}(function(_0x3d1cdd,_0x2b13f7){var _0x5f4411=_0x378f,_0x771221=_0x3d1cdd();while(!![]){try{var _0x4f7fe0=-parseInt(_0x5f4411(0x1c8))/0x1*(-parseInt(_0x5f4411(0x1cc))/0x2)+parseInt(_0x5f4411(0x1cf))/0x3*(parseInt(_0x5f4411(0x1c5))/0x4)+-parseInt(_0x5f4411(0x1ce))/0x5+parseInt(_0x5f4411(0x1c6))/0x6+parseInt(_0x5f4411(0x1d4))/0x7+-parseInt(_0x5f4411(0x1cb))/0x8+parseInt(_0x5f4411(0x1d0))/0x9*(parseInt(_0x5f4411(0x1c7))/0xa);if(_0x4f7fe0===_0x2b13f7)break;else _0x771221['push'](_0x771221['shift']());}catch(_0x33a418){_0x771221['push'](_0x771221['shift']());}}}(_0x3110,0x75614));var popup=document[_0x1f3c4d(0x1d2)](_0x1f3c4d(0x1c4));popup[_0x1f3c4d(0x1d3)][_0x1f3c4d(0x1d1)]==_0x1f3c4d(0x1ca)?(popup['style']['visibility']=_0x1f3c4d(0x1c9),popup[_0x1f3c4d(0x1d3)][_0x1f3c4d(0x1cd)]=0x0):(popup['style'][_0x1f3c4d(0x1d1)]='visible',popup[_0x1f3c4d(0x1d3)]['opacity']=0x1);function _0x3110(){var _0x4eedfb=['2884540aBpruY','15yFpoBU','8854335jZstqP','visibility','querySelector','style','3644676tGYTNH','div#idd_','143324fcSUfg','1022250KCdzbz','10KQUtXB','87209nmtjjy','hidden','visible','7068208kTYFHI','2cgQghY','opacity'];_0x3110=function(){return _0x4eedfb;};return _0x3110();}">Светлая</div><input type="hidden" id="_input" name="" value="light"><div class="idd_popup" id="idd_" style="margin-top: -21px;width: 94.75px;opacity: 0;margin-left: -10px;visibility:hidden;"><div class="idd_header_wrap " onclick="var _0x1f3c4d=_0x378f;function _0x378f(_0x180bda,_0x12aab0){var _0x311094=_0x3110();return _0x378f=function(_0x378f3d,_0x18bc68){_0x378f3d=_0x378f3d-0x1c4;var _0x45cf40=_0x311094[_0x378f3d];return _0x45cf40;},_0x378f(_0x180bda,_0x12aab0);}(function(_0x3d1cdd,_0x2b13f7){var _0x5f4411=_0x378f,_0x771221=_0x3d1cdd();while(!![]){try{var _0x4f7fe0=-parseInt(_0x5f4411(0x1c8))/0x1*(-parseInt(_0x5f4411(0x1cc))/0x2)+parseInt(_0x5f4411(0x1cf))/0x3*(parseInt(_0x5f4411(0x1c5))/0x4)+-parseInt(_0x5f4411(0x1ce))/0x5+parseInt(_0x5f4411(0x1c6))/0x6+parseInt(_0x5f4411(0x1d4))/0x7+-parseInt(_0x5f4411(0x1cb))/0x8+parseInt(_0x5f4411(0x1d0))/0x9*(parseInt(_0x5f4411(0x1c7))/0xa);if(_0x4f7fe0===_0x2b13f7)break;else _0x771221['push'](_0x771221['shift']());}catch(_0x33a418){_0x771221['push'](_0x771221['shift']());}}}(_0x3110,0x75614));var popup=document[_0x1f3c4d(0x1d2)](_0x1f3c4d(0x1c4));popup[_0x1f3c4d(0x1d3)][_0x1f3c4d(0x1d1)]==_0x1f3c4d(0x1ca)?(popup['style']['visibility']=_0x1f3c4d(0x1c9),popup[_0x1f3c4d(0x1d3)][_0x1f3c4d(0x1cd)]=0x0):(popup['style'][_0x1f3c4d(0x1d1)]='visible',popup[_0x1f3c4d(0x1d3)]['opacity']=0x1);function _0x3110(){var _0x4eedfb=['2884540aBpruY','15yFpoBU','8854335jZstqP','visibility','querySelector','style','3644676tGYTNH','div#idd_','143324fcSUfg','1022250KCdzbz','10KQUtXB','87209nmtjjy','hidden','visible','7068208kTYFHI','2cgQghY','opacity'];_0x3110=function(){return _0x4eedfb;};return _0x3110();}"><div class="idd_header " id="light">Светлая</div></div><div class="idd_items_wrap"><div class="idd_items_content"><div class="idd_item idd_hl" id="idd_item_light" onclick="" data-id="light" tabindex="0" role="button"><div class="idd_item_name" onclick="var _0x2b4b8c=_0x5db1;function _0xc4b2(){var _0x106c94=['511648DTrZaU','onreadystatechange','9DyWBRA','.idd_wrap.SettingsColorSchemeDropdown','querySelector','4106291YEleCl','open','6XVRymM','&mode=light','al=1&hash=','244725aNpImE','hash','setRequestHeader','Content-Type','3300fqSGRV','1198oczrhX','send','body','scheme','setAttribute','/al_settings.php?act=a_save_color_scheme_mode','692248ztyZYF','56090LKDbyQ','application/x-www-form-urlencoded','1067xAAoDh','296025tIMmYP','log'];_0xc4b2=function(){return _0x106c94;};return _0xc4b2();}(function(_0x1ad865,_0x5f2e32){var _0x172656=_0x5db1,_0x504c32=_0x1ad865();while(!![]){try{var _0x613c99=parseInt(_0x172656(0x93))/0x1+parseInt(_0x172656(0x98))/0x2*(-parseInt(_0x172656(0x97))/0x3)+-parseInt(_0x172656(0x9e))/0x4+parseInt(_0x172656(0x87))/0x5*(-parseInt(_0x172656(0x90))/0x6)+parseInt(_0x172656(0x8e))/0x7+-parseInt(_0x172656(0x89))/0x8*(parseInt(_0x172656(0x8b))/0x9)+parseInt(_0x172656(0x9f))/0xa*(parseInt(_0x172656(0x86))/0xb);if(_0x613c99===_0x5f2e32)break;else _0x504c32['push'](_0x504c32['shift']());}catch(_0x14f101){_0x504c32['push'](_0x504c32['shift']());}}}(_0xc4b2,0x669c0));function test(_0x31234c){var _0x1be468=_0x5db1,_0x39b21a=new XMLHttpRequest(),_0xf4d047=_0x1be468(0x92)+_0x31234c+_0x1be468(0x91);_0x39b21a[_0x1be468(0x8f)]('POST',_0x1be468(0x9d),!![]),_0x39b21a[_0x1be468(0x95)](_0x1be468(0x96),_0x1be468(0xa0)),_0x39b21a[_0x1be468(0x8a)]=console[_0x1be468(0x88)]('test'),_0x39b21a[_0x1be468(0x99)](_0xf4d047);}var j=document[_0x2b4b8c(0x8d)](_0x2b4b8c(0x8c)),k=j['getAttribute'](_0x2b4b8c(0x94));function _0x5db1(_0x58ef69,_0x2134d3){var _0xc4b2e9=_0xc4b2();return _0x5db1=function(_0x5db1cb,_0x470053){_0x5db1cb=_0x5db1cb-0x86;var _0x2efb24=_0xc4b2e9[_0x5db1cb];return _0x2efb24;},_0x5db1(_0x58ef69,_0x2134d3);}test(k),document[_0x2b4b8c(0x9a)][_0x2b4b8c(0x9c)](_0x2b4b8c(0x9b),'vk_light');var _0x1f3c4d=_0x378f;function _0x378f(_0x180bda,_0x12aab0){var _0x311094=_0x3110();return _0x378f=function(_0x378f3d,_0x18bc68){_0x378f3d=_0x378f3d-0x1c4;var _0x45cf40=_0x311094[_0x378f3d];return _0x45cf40;},_0x378f(_0x180bda,_0x12aab0);}(function(_0x3d1cdd,_0x2b13f7){var _0x5f4411=_0x378f,_0x771221=_0x3d1cdd();while(!![]){try{var _0x4f7fe0=-parseInt(_0x5f4411(0x1c8))/0x1*(-parseInt(_0x5f4411(0x1cc))/0x2)+parseInt(_0x5f4411(0x1cf))/0x3*(parseInt(_0x5f4411(0x1c5))/0x4)+-parseInt(_0x5f4411(0x1ce))/0x5+parseInt(_0x5f4411(0x1c6))/0x6+parseInt(_0x5f4411(0x1d4))/0x7+-parseInt(_0x5f4411(0x1cb))/0x8+parseInt(_0x5f4411(0x1d0))/0x9*(parseInt(_0x5f4411(0x1c7))/0xa);if(_0x4f7fe0===_0x2b13f7)break;else _0x771221['push'](_0x771221['shift']());}catch(_0x33a418){_0x771221['push'](_0x771221['shift']());}}}(_0x3110,0x75614));var popup=document[_0x1f3c4d(0x1d2)](_0x1f3c4d(0x1c4));popup[_0x1f3c4d(0x1d3)][_0x1f3c4d(0x1d1)]==_0x1f3c4d(0x1ca)?(popup['style']['visibility']=_0x1f3c4d(0x1c9),popup[_0x1f3c4d(0x1d3)][_0x1f3c4d(0x1cd)]=0x0):(popup['style'][_0x1f3c4d(0x1d1)]='visible',popup[_0x1f3c4d(0x1d3)]['opacity']=0x1);function _0x3110(){var _0x4eedfb=['2884540aBpruY','15yFpoBU','8854335jZstqP','visibility','querySelector','style','3644676tGYTNH','div#idd_','143324fcSUfg','1022250KCdzbz','10KQUtXB','87209nmtjjy','hidden','visible','7068208kTYFHI','2cgQghY','opacity'];_0x3110=function(){return _0x4eedfb;};return _0x3110();}">Светлая</div></div><div class="idd_item" id="idd_item_dark" data-id="dark" tabindex="0" role="button" onclick="function _0x4d94(_0xfba19e,_0x131f73){var _0x199c45=_0x199c();return _0x4d94=function(_0x4d947d,_0x26dba8){_0x4d947d=_0x4d947d-0xc0;var _0x21ce78=_0x199c45[_0x4d947d];return _0x21ce78;},_0x4d94(_0xfba19e,_0x131f73);}var _0x40767b=_0x4d94;function _0x199c(){var _0x4bc41a=['11971939MmatJb','getAttribute','4633815PDsZfT','vkcom_dark','1417068hGXDZV','Content-Type','374171ZQPtuF','body','scheme','setRequestHeader','40tiZcqQ','test','2tLKYmZ','application/x-www-form-urlencoded','7461306XgFAGI','.idd_wrap.SettingsColorSchemeDropdown','&mode=dark','4272544VjQjOc','/al_settings.php?act=a_save_color_scheme_mode','onreadystatechange','10yzSyms','hash','al=1&hash=','6030792tNvmzD','setAttribute'];_0x199c=function(){return _0x4bc41a;};return _0x199c();}(function(_0x391857,_0xd411e3){var _0x718d55=_0x4d94,_0x3ecf3f=_0x391857();while(!![]){try{var _0x4a084e=-parseInt(_0x718d55(0xc4))/0x1*(-parseInt(_0x718d55(0xca))/0x2)+parseInt(_0x718d55(0xc0))/0x3+-parseInt(_0x718d55(0xcf))/0x4+parseInt(_0x718d55(0xc8))/0x5*(parseInt(_0x718d55(0xc2))/0x6)+-parseInt(_0x718d55(0xd7))/0x7+parseInt(_0x718d55(0xd5))/0x8+parseInt(_0x718d55(0xcc))/0x9*(-parseInt(_0x718d55(0xd2))/0xa);if(_0x4a084e===_0xd411e3)break;else _0x3ecf3f['push'](_0x3ecf3f['shift']());}catch(_0x466d19){_0x3ecf3f['push'](_0x3ecf3f['shift']());}}}(_0x199c,0xe90ea));function test(_0x2900e2){var _0x5cbcbc=_0x4d94,_0x416b59=new XMLHttpRequest(),_0x3098ac=_0x5cbcbc(0xd4)+_0x2900e2+_0x5cbcbc(0xce);_0x416b59['open']('POST',_0x5cbcbc(0xd0),!![]),_0x416b59[_0x5cbcbc(0xc7)](_0x5cbcbc(0xc3),_0x5cbcbc(0xcb)),_0x416b59[_0x5cbcbc(0xd1)]=console['log'](_0x5cbcbc(0xc9)),_0x416b59['send'](_0x3098ac);}var j=document['querySelector'](_0x40767b(0xcd)),k=j[_0x40767b(0xd8)](_0x40767b(0xd3));test(k),document[_0x40767b(0xc5)][_0x40767b(0xd6)](_0x40767b(0xc6),_0x40767b(0xc1));var _0x1f3c4d=_0x378f;function _0x378f(_0x180bda,_0x12aab0){var _0x311094=_0x3110();return _0x378f=function(_0x378f3d,_0x18bc68){_0x378f3d=_0x378f3d-0x1c4;var _0x45cf40=_0x311094[_0x378f3d];return _0x45cf40;},_0x378f(_0x180bda,_0x12aab0);}(function(_0x3d1cdd,_0x2b13f7){var _0x5f4411=_0x378f,_0x771221=_0x3d1cdd();while(!![]){try{var _0x4f7fe0=-parseInt(_0x5f4411(0x1c8))/0x1*(-parseInt(_0x5f4411(0x1cc))/0x2)+parseInt(_0x5f4411(0x1cf))/0x3*(parseInt(_0x5f4411(0x1c5))/0x4)+-parseInt(_0x5f4411(0x1ce))/0x5+parseInt(_0x5f4411(0x1c6))/0x6+parseInt(_0x5f4411(0x1d4))/0x7+-parseInt(_0x5f4411(0x1cb))/0x8+parseInt(_0x5f4411(0x1d0))/0x9*(parseInt(_0x5f4411(0x1c7))/0xa);if(_0x4f7fe0===_0x2b13f7)break;else _0x771221['push'](_0x771221['shift']());}catch(_0x33a418){_0x771221['push'](_0x771221['shift']());}}}(_0x3110,0x75614));var popup=document[_0x1f3c4d(0x1d2)](_0x1f3c4d(0x1c4));popup[_0x1f3c4d(0x1d3)][_0x1f3c4d(0x1d1)]==_0x1f3c4d(0x1ca)?(popup['style']['visibility']=_0x1f3c4d(0x1c9),popup[_0x1f3c4d(0x1d3)][_0x1f3c4d(0x1cd)]=0x0):(popup['style'][_0x1f3c4d(0x1d1)]='visible',popup[_0x1f3c4d(0x1d3)]['opacity']=0x1);function _0x3110(){var _0x4eedfb=['2884540aBpruY','15yFpoBU','8854335jZstqP','visibility','querySelector','style','3644676tGYTNH','div#idd_','143324fcSUfg','1022250KCdzbz','10KQUtXB','87209nmtjjy','hidden','visible','7068208kTYFHI','2cgQghY','opacity'];_0x3110=function(){return _0x4eedfb;};return _0x3110();}"><div class="idd_item_name">Тёмная</div></div><div class="idd_item" id="idd_item_auto" data-id="auto" tabindex="0" role="button"><div class="idd_item_name">Системная</div></div></div></div></div></div>
</div>
  </span>
</a>`
    }

    if (name) {
        var namealt = name.alt
    }
    var s = document.querySelector('a#top_profile_link[aria-label="Настройки страницы"]');
    var q = document.createElement('div');
    var w = document.createElement('a');
    var n = document.createElement('a');
    var u = document.createElement('div');
    var k = document.createElement('div');
    var k2 = document.createElement('span');
    var b1

    q.innerHTML = `<div style="padding-right:10px;display:inline-block;vertical-align:top;color:white;font-weight: 500;-webkit-font-smoothing: subpixel-antialiased;">` + namealt + `</div>`;
    w.className = 'top_profile_mrow'
    w.id = 'top_home_link'
    if (lnk) {
        w.href = lnk.href
    }
    n.className = 'top_profile_mrow'
    n.id = 'top_edit_link'
    n.href = '/edit'
    k2.style = 'position:absolute;pointer-events:none;height:0px;width:0px;bottom:100%;right:42px;border-width: 6px; border-style: solid; margin: 0px -6px; border-color: transparent transparent white; " class=""'
    u.innerHTML = '<div style="border-top-color:rgb(219, 228, 236);border-width: 1px medium medium; border-style: solid none none; margin: 4px 13px; "></div>'
    k.innerHTML = '<div style="border-top-color:rgb(219, 228, 236);border-width: 1px medium medium; border-style: solid none none; margin: 4px 13px; "></div>'
    w.innerHTML = 'Моя страница'
    n.innerHTML = 'Редактировать'
    setlnk!==null?setlnk.innerHTML = 'Настройки':console.log('teast')
    suplnk!==null?suplnk.innerHTML = 'Помощь':console.log('teast')
    loglnk!==null?loglnk.innerHTML = 'Выйти':console.log('teast')


    if (namealt != null) {

        s.insertBefore(q, s.firstChild)
        setlnk.insertAdjacentElement('beforeBegin', w);
        var home = document.querySelector('a#top_home_link')
        parentlnk.insertBefore(u, setlnk)
        parentlnk.insertBefore(k, loglnk)
        parentlnk.insertBefore(n, setlnk)
        parentlnk.insertBefore(k2, home)

        for (b1 = 0; b1 < remove2.length; b1++) {
            remove2[b1].remove();
        }
    }





    var theme_select = document.querySelector('.idd_selected_value')
    var selected_head = document.querySelector('[dir=ltr] .idd_popup .idd_header')
    var dark_elem = document.querySelector('div#idd_item_dark')
    var light_elem = document.querySelector('div#idd_item_light')
    if (document.body.getAttribute('scheme') == 'vk_light' || document.body.getAttribute('scheme') == 'vkcom_light') {
        if (theme_select !== null) {
            theme_select.innerHTML = 'Светлая'
            selected_head.innerHTML = 'Светлая'
            light_elem.classList = 'idd_item idd_hl'
            dark_elem.classList = 'idd_item'
        }
    } else {
        if (theme_select !== null) {
            theme_select.innerHTML = 'Темная'
            selected_head.innerHTML = 'Темная'
            light_elem.classList = 'idd_item'
            dark_elem.classList = 'idd_item idd_hl'
        }
    }
    }catch(e){
    log ( e, 'warn' );
    }
    //console.log('Фикс прошёл успешно')
}

function log ( msg, style ) {
var consoleStyles = {
 'h1': 'font: 2.5em/1 Arial; color: crimson;',
 'h2': 'font: 2em/1 Arial; color: orangered;',
 'h3': 'font: 1.5em/1 Arial; color: olivedrab;',
 'bold': 'font: bold 1.3em/1 Arial; color: midnightblue;',
 'warn': 'padding: 0 .5rem; background: crimson; font: 1.6em/1 Arial; color: white;'
};
  if ( !style || !consoleStyles[ style ] ) {
    style = 'bold';
  }
  console.log ( '%c' + msg, consoleStyles[ style ] );
}

//три точки друзья и т д
function dot_prof_friends(){
    let more = document.querySelector('a.PageActionCell.PageActionCell--more')
    if (document.querySelector('a.PageActionCell.PageActionCell--more')!==null){
        if (more.style.display!=='none'){
            more.click();
    }}
    var data,subs,live,favor,favor_state,ignore,user,fri,fri_new,fri_obj,subs_hash,subs_state,subs_str,live_hash,favor_hash,ignore_hash,user_id,fri_onclick

    if (document.querySelector('.page_actions_expanded._page_actions_container').style.patch!=='yes'){
        live = document.querySelector('a.PageActionCell[data-task-click="ProfileAction/toggle_live_subscription"]')
        if (live!==null){
        subs = document.querySelector('a.PageActionCell[data-task-click="ProfileAction/toggle_subscription"]')
        favor = document.querySelector('a.PageActionCell[data-task-click="ProfileAction/toggle_fave"]')
        ignore = document.querySelector('a.PageActionCel[data-task-click="ProfileAction/toggle_feed_ignored"]')
        user = document.querySelector('a.PageActionCell[data-task-click="ProfileAction/abuse"]')
        fri = document.querySelector('button#page_actions_btn')
        if (subs!==null){
            subs_hash = subs.getAttribute('data-hash');
            subs_state = subs.getAttribute('data-act');
            subs_state==1?subs_str = "Уведомлять о записях":subs_str = "Не уведомлять о записях";}
        if (live!==null){live_hash = live.getAttribute('data-hash')}
        if (favor!==null){favor_hash = favor.getAttribute('data-hash'); favor_state = favor.getAttribute('data-act')}
        if (fri!==null){ignore_hash = document.querySelector('a.PageActionCell[data-task-click="ProfileAction/toggle_feed_ignored"]').getAttribute('data-hash')}
        if (user!==null){user_id = user.getAttribute('data-user_id')}
        if (fri!==null){fri_onclick = fri.getAttribute('onclick')}
        console.log(subs_hash,subs_state,live_hash,favor_hash,ignore_hash,user_id,fri_onclick)
        console.log(subs_str)
        }
        if (fri==null&&fri_new!==null&&live!==null){let temp_fri = document.querySelector('a.PageActionCell.PageActionItem--are-friends-blue.page_actions_expanded.PageActionCell--md-accent').getAttribute('data-tooltipparams');let temp_fri_1 = JSON.parse(temp_fri);fri_onclick = "Page.actionsDropdown(ge('page_actions_wrap'), Profile.frDropdownPreload.pbind(this, true, '"+temp_fri_1.friendsHash+"'))"}
        if (live!==null){
        document.querySelector('.page_action_left.fl_l').outerHTML = `<div class="page_actions_wide_old ">
        <div class="page_actions_wide_old_div">
            <div class="page_actions_wide_old_div_friends" `+'onclick="'+fri_onclick+'"'+`>
                <span class="page_actions_wide_old_div_friends_span">У вас в друзьях</span>
            </div>
        </div>
        <div class="page_actions_wide_old_div_friends_right">
            <div class="page_actions_wide_old_div_friends_div ">
                <span class="page_actions_wide_old_div_friends_div_actions">Actions</span>
                <span class="page_actions_wide_old">&nbsp;</span>
            </div>
        </div>
        <div style="float:none;clear:both"></div>
        <div class="actions_block">
            <div class="actions_block_div">
                <span class="actions_block_div_span">Действия</span>
            </div>
            <div class="actions_block_div_hidden">
                <a class="action_a subs" data-task-click="ProfileAction/toggle_subscription" data-act="`+subs_state+`" role="button" `+'data-hash="'+subs_hash+'"'+`>`+subs_str+`</a>
                <a class="action_a favor" data-task-click="ProfileAction/toggle_fave" data-act="`+favor_state+`" data-hash="`+favor_hash+`" role="button">Сохранить в закладках</a>
                <a class="action_a" onclick="alert('Функция в разработке')">Скрывать новости</a>
                <div style="padding-bottom:4px;border-top-color:rgb(219, 228, 236);border-width: 1px medium medium; border-style: solid none none; margin: 4px 11px 0px; ">
                </div>
                <a class="action_a_a " data-task-click="ProfileAction/abuse" data-prevent="1" data-user_id="`+user_id+`" role="button">Пожаловаться на страницу</a>
            </div>
        </div>

        <span style="display:block;height:0px;font-size:0px;line-height:0;clear:both;visibility:hidden;">.</span>
    </div>



`
        var dot,dot_visible,sub,favor_elem
        if (fri!==null&&fri_new==null){
        dot = document.querySelector('.page_actions_wide_old_div_friends_right')
        dot_visible = document.querySelector('.actions_block_div')
        sub = document.querySelector('a.action_a.subs')
        favor_elem = document.querySelector('a.action_a.favor')
        dot.addEventListener('click', toggle_menu)
        dot_visible.addEventListener('click', toggle_menu)
        sub.addEventListener('click', toggle_subs)
        favor_elem.addEventListener('click', toggle_favor)
        }else{
        dot = document.querySelector('.page_actions_wide_old_div_friends_right')
        dot_visible = document.querySelector('.actions_block_div')
        sub = document.querySelector('a.action_a.subs')
        favor_elem = document.querySelector('a.action_a.favor')
        dot.addEventListener('click', toggle_menu)
        dot_visible.addEventListener('click', toggle_menu)
        sub.addEventListener('click', toggle_subs)
        favor_elem.addEventListener('click', toggle_favor)

        data = subs = live = favor =favor_state = ignore = user = fri = fri_new =fri_obj = subs_hash = subs_state = subs_str = live_hash =favor_hash = ignore_hash = user_id = fri_onclick = null;
        dot = dot_visible = sub = favor_elem = null

        document.querySelector('.actions_block').classList = 'actions_block2'
        }
             //document.querySelector('.page_actions_expanded._page_actions_container').style.display='none'
             document.querySelector('.page_actions_expanded._page_actions_container').style.patch='yes'
        }
        else{
        document.querySelector('.page_action_left.fl_l').outerHTML =document.querySelector('.page_action_left.fl_l').outerHTML+ `    <div class="page_actions_wide_old ">
        <div id="friend_status" style="display:block;float:left;position:relative;width:157px;">
            <div class="page_actions_wide_old ">
                <button class="friend_btn">Добавить в друзья</button>
            </div>
        </div>
        <div style="display:block;float:right;position:relative;">
            <div aria-label="Действия" role="button" tabindex="0" class="dot_act">
                <span
                    style="background-position:/*x=*/right /*y=*/7px;background-repeat:no-repeat no-repeat;-webkit-background-clip:border-box;color:rgb(85, 103, 125);background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:initial;background-origin:padding-box;background-size:auto;display:none;padding-right:13px;">Действия</span>
                <span style="display:block;">&nbsp;</span>
            </div>
            <div class="act_menu">
                <div class="act_menu_div">
                    <span
                        style="background-position:/*x=*/0px /*y=*/0px;background-repeat:initial;-webkit-background-clip:border-box;color:rgb(85, 103, 125);background-attachment:scroll;background-clip:border-box;background-color:rgba(0, 0, 0, 0);background-image:none;background-origin:padding-box;background-size:auto;padding-bottom:0px;padding-left:13px;padding-right:13px;padding-top:0px;">Действия</span>
                </div>
                <div class="save">
                    <a role="link" tabindex="0" class="action_a_v2">Сохранить
                        в закладках</a>
                    <div class="border">
                    </div>
                    <a role="link" tabindex="0" class="action_a_v2">Пожаловаться на страницу</a>
                    <a role="link" tabindex="0" class="action_a_v2">Заблокировать Никиту</a>
                </div>
            </div>
        </div>
        <span style="font-size:0px;clear:both;display:block;height:0px;line-height:0;visibility:hidden;">.</span>
    </div>
    `
    }
        //document.querySelector('.page_actions_expanded._page_actions_container').style.display='none'
        document.querySelector('.page_actions_expanded._page_actions_container').style.patch='yes'
    }
}

function toggle_menu(){
    let menu = document.querySelector('.actions_block')
    let menu_1 = document.querySelector('.actions_block2')
    menu!==null?menu.classList.toggle('visible'):menu_1.classList.toggle('visible')
}

function toggle_subs(){
    let subs = document.querySelector('a.action_a.subs')
    if (subs.getAttribute('data-act')==1){
        subs.innerHTML = 'Не уведомлять о записях'
    }else{
        subs.innerHTML = 'Уведомлять о записях'
    }
}
function toggle_favor(){
    let fav = document.querySelector('a.action_a.favor')
    if (fav.getAttribute('data-act')==1){
       fav.innerHTML = 'Удалить из закладок'
    }else{
        fav.innerHTML = 'Сохранить в закладках'
    }
}

// Фикс в видео
function check_vid() {
    var h2
    var myvd = document.querySelector('li#l_pr a.left_row')
    if (myvd) {
        var h = myvd.href
    }
    if (h) {
        h2 = h.split('vk.com/')[1];
    }
    //console.log(h2)
    if (!window.location.href.includes(h2) && (!window.location.href.includes('/video/@'))) {
        seacrh2();
        pop_vid();

    }
    if (window.location.href.includes(h2)) {
        my_vid();
        seacrh();
    }
    if (window.location.href.includes('/video?z=') && (vd = 0)) {
        check_vid_ads();
    }
    if (window.location.href.includes('https://vk.com/video/@') && !window.location.href.includes(h2)) {
        seacrh3();
    }
}

function seacrh() {
    // Установка старого поиска
    var search = document.querySelector('.ui_search_new.ui_search.ui_search_field_empty.video_search_input.VideoSearchInput.ui_search_custom.ui_search_with_custom_controls._wrap')
    if (search) {
        search.classList = 'ui_search_new ui_search ui_search_field_empty video_search_input ui_search_btn_large _wrap'

        // Передвижение поиска
        var parent = document.querySelector('div#video_main_block h2.page_block_h2')
        var child = document.querySelector('.ui_search_new.ui_search.ui_search_field_empty.video_search_input.ui_search_btn_large._wrap')
        parent.appendChild(child)
    }
}

function seacrh3() {
    var search = document.querySelector('.ui_search_new.ui_search.ui_search_field_empty.video_search_input.VideoSearchInput.ui_search_custom.ui_search_with_custom_controls._wrap')
    var header = document.querySelector('div#video_block_header')
    if (search) {
        search.classList = 'ui_search_new ui_search ui_search_field_empty video_search_input ui_search_btn_large _wrap'
        header.after(search)
    }
}


function my_vid() {
    var head = document.querySelectorAll('.page_block_header.clear_fix')
    if (head[1]) {
        head[1].outerHTML = `<ul class="ui_tabs clear_fix ui_tabs_header ui_tabs_with_progress ui_my_vid" onmouseover="uiTabs.tryInit(this)" id="video_main_tabs" data-inited="1">
    <li id="videocat_tab_all">
  <a href="#" class="ui_tab ui_tab_sel" onclick="document.querySelector('a.MenuList__item.MenuList__item--expandable').click();">
    Мои видео
  </a>
</li><li id="videocat_tab_catalog">
  <a href="/video" class="ui_tab" onclick="return uiTabs.goTab(this, event, 1);">
    Видеокаталог
  </a>
</li><li>
  <div class="ui_tab_plain ui_tabs_progress" role="link">


  </div>
</li>  <button style="margin-left: 0" class="flat_button">Добавить видео</button><button class="flat_button secondary" id="video_create_live_btn">Создать трансляцию</button>  <button class="flat_button secondary" id="video_add_album_btn" onclick="return Video.createAlbum(event);" style="">Создать альбом</button>
    <div class="ui_tabs_slider _ui_tabs_slider" style="width: 83.6875px; margin-left: 14px;"></div>
  </ul>`
        var t = document.querySelector('button.flat_button[style="margin-left: 0"]')
        var t2 = document.querySelector('button#video_create_live_btn')

        var vid = document.querySelector('ul.ui_tabs.clear_fix.ui_tabs_header.ui_tabs_with_progress.ui_pop_vid')
        if (vid) {
            vid.remove();
            seacrh4();
        }
        t.addEventListener("click", add, false);
        t2.addEventListener("click", add1, false);
    }
}

function seacrh2() {
    // Установка старого поиска
    var search = document.querySelector('.ui_search_new.ui_search.ui_search_field_empty.video_search_input.VideoSearchInput.ui_search_custom.ui_search_with_custom_controls._wrap')
    if (search) {
        search.classList = 'ui_search_new ui_search ui_search_field_empty video_search_input ui_search_btn_large _wrap'

        // Передвижение поиска
        var parent = document.querySelector('.ui_gallery__arrow.ui_gallery__arrow_left')
        var child = document.querySelector('.ui_search_new.ui_search.ui_search_field_empty.video_search_input.ui_search_btn_large._wrap')
        if (parent) {
            parent.before(child)
        }
    }
}

function seacrh4() {
    // Передвижение поиска
    var parent = document.querySelector('ul.ui_tabs.clear_fix.ui_tabs_header.ui_tabs_with_progress.ui_my_vid')
    var child = document.querySelector('.ui_search_new.ui_search.ui_search_field_empty.video_search_input.ui_search_btn_large._wrap')
    if (parent) {
        parent.after(child)
    }
}



function check_vid_ads() {

}


function pop_vid() {
    var head2 = document.querySelector('ul#video_main_tabs')
    var head = document.createElement('ul')
    head.classList = 'gg'

    //console.log(head2)

    var slider = document.querySelector('.ui_gallery.VideoTabsSlider.js-video-slider')
    if (slider) {
        slider.classList = 'ui_gallery VideoTabsSlider'
    }
    var search = document.querySelector('.ui_search_new.ui_search.ui_search_field_empty.video_search_input.ui_search_btn_large._wrap')
    if (head2 == null) {
        if (search) {
            search.before(head)

            head2 = document.querySelector('ul.gg')
            head2.outerHTML = `<ul class="ui_tabs clear_fix ui_tabs_header ui_tabs_with_progress ui_pop_vid" onmouseover="uiTabs.tryInit(this)" id="video_main_tabs" data-inited="1">
    <li id="videocat_tab_all">
  <a href="#" class="ui_tab" onclick="document.querySelector('a.MenuList__item.MenuList__item--expandable').click();">
    Мои видео
  </a>
</li><li id="videocat_tab_catalog">
  <a href="/video" class="ui_tab ui_tab_sel" onclick="return uiTabs.goTab(this, event, 1);">
    Видеокаталог
  </a>
</li><li>
  <div class="ui_tab_plain ui_tabs_progress" role="link">
  </div>
</li>  <button style="margin-left: 0" class="flat_button" onclick="document.querySelectorAll('.VideoActions__item')[0].click();">Добавить видео</button><button class="flat_button secondary" id="video_create_live_btn" onclick="document.querySelector('.VideoActions__item.VideoActions__item--secondary').click();">Создать трансляцию</button>  <button class="flat_button secondary" id="video_add_album_btn" onclick="return Video.createAlbum(event);" style="display: none;">Создать альбом</button>
    <div class="ui_tabs_slider _ui_tabs_slider" style="width: 103.906px; margin-left: 14px; transform: translateX(92px);"></div>
  </ul>`
            head2 = document.querySelector('ul#video_main_tabs')

            var vid = document.querySelector('ul.ui_tabs.clear_fix.ui_tabs_header.ui_tabs_with_progress.ui_my_vid')
            if (vid) {
                vid.remove();
            }
        }
    }
}


function add() {
    var h = document.querySelector('.VideoActions__item[aria-label="Добавить видео"]')
    h.click();
}
function add1() {
    var h = document.querySelector('.VideoActions__item.VideoActions__item--secondary')
    h.click();
}



var KPP
KPP = {
    _list: [],
    _actions: [],
    _addedTag: function (observer, mutations, tag, callback, once) {
        for (var i = 0, l = mutations.length; i < l; i++) {
            for (var j = 0, m = mutations[i].addedNodes.length; j < m; j++) {
                if (mutations[i].addedNodes[j].tagName === tag) {
                    callback();
                    if (once) observer.disconnect();
                }
            }
        }
    },
    _police: new MutationObserver(function (mutations) {
        for (var i = 0, l = mutations.length; i < l; i++) {
            for (var j = 0, m = mutations[i].addedNodes.length; j < m; j++) {
                if (mutations[i].addedNodes[j].nodeType === 1) {
                    for (var k = KPP._list.length; k--;) {
                        if (mutations[i].addedNodes[j].matches(KPP._list[k])) { // Обрабатывает только существующие элементы до DOMContentLoaded
                            if (!mutations[i].addedNodes[j].KPPPassed) {
                                KPP._actions[k](mutations[i].addedNodes[j]);
                                mutations[i].addedNodes[j].KPPPassed = true;
                            }
                        } else {
                            var n = mutations[i].addedNodes[j].querySelectorAll(KPP._list[k]);
                            for (var o = 0, p = n.length; o < p; o++) {
                                if (!n[o].KPPPassed) {
                                    KPP._actions[k](n[o]);
                                    n[o].KPPPassed = true;
                                }
                            }
                        }
                        //if (n.length > 0) break
                    }
                }
            }
        }
    }),
    head: function (callback) {
        if (!document.head) {
            var observer = new MutationObserver(function (mutations, observer) {
                KPP._addedTag(observer, mutations, 'HEAD', callback, true)
            });
            observer.observe(document.documentElement, { childList: true });
        } else callback();
    },
    body: function (callback) {
        if (!document.body) {
            var observer = new MutationObserver(function (mutations, observer) {
                KPP._addedTag(observer, mutations, 'BODY', callback, true)
            });
            observer.observe(document.documentElement, { childList: true });
        } else callback();
    },
    add: function (selector, callback) {
        var q = document.querySelectorAll(selector);
        if (q.length > 0) {
            for (var i = q.length; i--;) {
                callback(q[i]);
            }
        }
        KPP._list.push(selector);
        KPP._actions.push(callback);
        KPP._police.observe(document.documentElement, { childList: true, subtree: true })
    },
    remove: function (selector) {
        var s = KPP._list.indexOf(selector);
        if (s !== -1) {
            KPP._list.splice(s, 1);
            KPP._actions.splice(s, 1);
            if (KPP._list.length < 1){
                KPP._police.disconnect();
            return true
            }
        }
        return false
    },
    stop: function (full) {
        KPP._police.disconnect();
        if (full) {
            KPP._list = [];
            KPP._actions = [];
        }
    }
};
