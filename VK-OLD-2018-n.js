// ==UserScript==
// @name         VK By Tresha 2018 classic
// @namespace    https://github.com/RemoteCaller-Exiled/vk-old-2021
// @version      0.1
// @description  Дизайн вк за 2018 год
// @author       Tresha
// @match        *://*.vk.com/*
// @match        *://*.vk.ru/*
// @icon         https://www.google.com/s2/favicons?domain=vk.com
// @license MIT
// ==/UserScript==
function GM_addStyle (cssStr) {
    var D               = document;
    var newNode         = D.createElement ('style');
    newNode.textContent = cssStr;

    var targ    = D.getElementsByTagName ('head')[0] || D.body || D.documentElement;
    targ.appendChild (newNode);
}

GM_addStyle ( `

` );

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
        login_btn.setAttribute("onclick",`return location.href = "https://vk.com/login?classic_flow=1"`),
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
    var c = setInterval(check, 1000);
    clearInterval(a);
    clearInterval(c);
}


window.onfocus = function () {
    var ad_n = parseInt(localStorage.getItem("ad"));

    setInterval(title, 2000);
    setInterval(check, 1000);
    //fix_name();
}

function initial() {
    var ad_n = parseInt(localStorage.getItem("ad"));
    var settings_n = parseInt(localStorage.getItem("settings"));

    console.log('Скрипт запущен');
    setInterval(title, 2000);
    setInterval(check, 1000);
    fix_name();
   document.body.appendChild(styleNode2);
    }

// Проверка
function check() {
    check_vid();
    feed_check();
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
    if (lnk) {
        w.href = lnk.href
    }
    if (namealt != null) {

        s.insertBefore(q, s.firstChild)
        setlnk.insertAdjacentElement('beforeBegin', w);
        var home = document.querySelector('a#top_home_link')
        parentlnk.insertBefore(u, setlnk)
        parentlnk.insertBefore(k, loglnk)
        parentlnk.insertBefore(n, setlnk)
        parentlnk.insertBefore(k2, home)



    }
    }catch(e){
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
