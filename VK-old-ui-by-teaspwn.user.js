// ==UserScript==
// @name         VK By Teaspwn 2016-2020
// @namespace    https://github.com/teaspwn/vk-old-ui-2016-2020
// @version      2.8
// @description  Скрипт старого дизайна https://userstyles.world/style/6702/vk-2016-2020-by-teaspwn
// @author       Teaspwn
// @match        *://*.vk.com/*
// @match        *://*.vk.ru/*
// @updateURL    https://github.com/teaspwn/vk-old-ui-2016-2020/raw/main/VK-old-ui-by-teaspwn.user.js
// @downloadURL  https://github.com/teaspwn/vk-old-ui-2016-2020/raw/main/VK-old-ui-by-teaspwn.user.js
// @icon         https://vk.com/images/faviconnew.ico?6
// @license MIT
// ==/UserScript==
window.onload = function () {
    initial()
};
function initial() {
    console.log('VK By Teaspwn 2016-2020 Загружен');
    fix_name();
    }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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
// Лучше дома
const besthomelogolink = document.querySelector("#top_nav > li.HeaderNav__item.HeaderNav__item--logo > a.TopHomeLink")
if (document.querySelector('a#top_profile_link[aria-label="Настройки страницы"]')) {
besthomelogolink.setAttribute("onmouseover", `this.className.indexOf(\'bugtracker_logo\') === -1 && bodyNode.className.indexOf(\'WideScreenAppPage\') === -1 && showTooltip(this,\r\n{\r\n  text: \"<div class=\\\"CovidTooltip__logo\\\"><\\\/div><div class=\\\"CovidTooltip__title\\\">\u041E\u0441\u0442\u0430\u0432\u0430\u0439\u0442\u0435\u0441\u044C \u0434\u043E\u043C\u0430<\\\/div><div class=\\\"CovidTooltip__text\\\">\u041C\u043E\u0439\u0442\u0435 \u0440\u0443\u043A\u0438, \u0438\u0437\u0431\u0435\u0433\u0430\u0439\u0442\u0435 \u0441\u043A\u043E\u043F\u043B\u0435\u043D\u0438\u044F \u043B\u044E\u0434\u0435\u0439, \u043F\u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u043D\u0435 \u0432\u044B\u0445\u043E\u0434\u0438\u0442\u0435 \u0438\u0437 \u0434\u043E\u043C\u0430 \u0438 \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u0435 <a href=\\\"\\\/feed?section=stayhome\\\" onclick=\\\"return typeof window.statlogsValueEvent !== &#39;undefined&#39; &amp;&amp; window.statlogsValueEvent(&#39;coronavirus_tooltip_click&#39;, 1) || nav.go(this, event)\\\">\u0432\u0440\u0435\u043C\u044F \u0441 \u043F\u043E\u043B\u044C\u0437\u043E\u0439<\\\/a>.<\\\/div>\",\r\n  className: \'CovidTooltip\',\r\n  width: 356,\r\n  dir: \'top\',\r\n  shift: [0, 0, 6],\r\n  hidedt: 60, showdt: 600,\r\n  hasover: true,\r\n  onShowStart: function() {window.statlogsValueEvent !== \'undefined\' && window.statlogsValueEvent(\'coronavirus_tooltip_show\', 1)}\r\n})
`);
}
if (document.querySelector('a#top_profile_link[aria-label="Profile settings"]')) {
besthomelogolink.setAttribute("onmouseover", `this.className.indexOf(\'bugtracker_logo\') === -1 && bodyNode.className.indexOf(\'WideScreenAppPage\') === -1 && showTooltip(this,\r\n{\r\n  text: \"<div class=\\\"CovidTooltip__logo\\\"><\\\/div><div class=\\\"CovidTooltip__title\\\">Stay home<\\\/div><div class=\\\"CovidTooltip__text\\\">Wash your hands, maintain social distancing, stay at home if you can, and <a href=\\\"\\\/feed?section=stayhome\\\" onclick=\\\"return typeof window.statlogsValueEvent !== &#39;undefined&#39; &amp;&amp; window.statlogsValueEvent(&#39;coronavirus_tooltip_click&#39;, 1) || nav.go(this, event)\\\">keep busy<\\\/a>.<\\\/div>\",\r\n  className: \'CovidTooltip\',\r\n  width: 356,\r\n  dir: \'top\',\r\n  shift: [0, 0, 6],\r\n  hidedt: 60, showdt: 600,\r\n  hasover: true,\r\n  onShowStart: function() {window.statlogsValueEvent !== \'undefined\' && window.statlogsValueEvent(\'coronavirus_tooltip_show\', 1)}\r\n})
`);
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
    var s = document.querySelector('a#top_profile_link');
    var q = document.createElement('div');
    var w = document.createElement('a');
    var ruprofiletext = document.createTextNode("Моя страница");
    var enprofiletext = document.createTextNode("My profile");
    var n = document.createElement('a');
    var ruedittext = document.createTextNode("Редактировать");
    var enedittext = document.createTextNode("Edit");
    var deftext = document.createTextNode("top_myprofile_link");
    var def1text = document.createTextNode("top_edit_link");
    var u = document.createElement('div');
    var k = document.createElement('div');
    let langtest;
    var b1
w.classList.add("top_profile_mrow");
n.classList.add("top_profile_mrow");
w.setAttribute("id", "top_myprofile_link");
n.setAttribute("id", "top_edit_link");
n.href = ("https://vk.com/edit");
u.classList.add("top_profile_sep");
k.classList.add("top_profile_sep");
q.classList.add("top_profile_name");
document.getElementById("top_profile_menu").classList.remove('top_profile_menu_new');
document.getElementById("top_profile_menu").classList.add('top_profile_menu');
 if (document.querySelector('a#top_profile_link[aria-label="Настройки страницы"]')) {
w.appendChild(ruprofiletext);
n.appendChild(ruedittext);
langtest = true;
 }
 if (document.querySelector('a#top_profile_link[aria-label="Profile settings"]')) {
w.appendChild(enprofiletext);
n.appendChild(enedittext);
langtest = true;
 }
if (langtest) {
    console.log("User Language is supported. activaiting translation...");
} else {
    console.log("User Language is not supported. using default value...");
    w.appendChild(deftext);
    n.appendChild(def1text);
}

    q.innerHTML = `` + namealt + ``;
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



    }
    }catch(e){
    }
}
const customcss = document.createElement('style');
customcss.innerHTML = `
      .ReactionsMenuPopper,.fans_fanph_reaction,li#likes_tab_reactions_0, li#likes_tab_reactions_1, li#likes_tab_reactions_2, li#likes_tab_reactions_3, li#likes_tab_reactions_4, li#likes_tab_reactions_5,.ui_tab.ui_tab_group,.menu_item_icon,#react_rootEcosystemAccountMenuEntry {
        display: none !important;
      }
      .top_profile_name {
    padding-right: 10px;
    display: inline-block;
    vertical-align: top;
    font-weight: 500;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
}
.CovidTooltip__logo {
    width: 64px;
    height: 64px;
    background: url(data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Cpath%20fill%3D%22%234bb34b%22%20d%3D%22M0%200h64v64H0z%22%2F%3E%3Cpath%20d%3D%22M17.21%2017l12.12-4.07a11.49%2011.49%200%20012-.55%205%205%200%20011.34%200%2011.49%2011.49%200%20012%20.55L46.79%2017A1.78%201.78%200%200148%2018.64v16.59q0%2012-14.6%2018.2a3.58%203.58%200%2001-2.8%200Q16%2047.19%2016%2035.23V18.64A1.78%201.78%200%200117.21%2017z%22%20fill-rule%3D%22evenodd%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20d%3D%22M32.72%2024.34a1%201%200%2000-1.45%200l-7.66%208c-.34.35-.22.64.27.64H26v5.55a.44.44%200%2000.44.45h3.12a.44.44%200%2000.44-.44v-2.76A1.78%201.78%200%200131.78%2034h.44A1.78%201.78%200%200134%2035.78v2.78a.44.44%200%2000.44.44h3.12a.45.45%200%2000.44-.45V33h2.12c.48%200%20.6-.29.27-.64z%22%20fill-rule%3D%22evenodd%22%20fill%3D%22%234bb34b%22%2F%3E%3C%2Fsvg%3E) no-repeat 50%/contain;
    position: absolute;
    top: 14px;
    left: 15px;
    border-radius: 50%;
}
.CovidTooltip__title {
    margin-bottom: 3px;
    font-weight: 500;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
}
.CovidTooltip__text, .CovidTooltip__title {
    font-size: 13px;
    line-height: 1.3;
    padding-left: 76px;
}
/* Play button css */
.top_audio_play__button{
    position:absolute;
    display:block;
    -webkit-appearance:none;
    cursor:pointer;
    width:22px;
    top:11px;
    left: 52px;
    height:20px;
    border:none;
    border-radius:3px;
    background-color:#224b7a;
    overflow:visible
}
.top_audio_play__button:before{
    position:absolute;
    content:'';
    display:block;
    width:8px;
    height:8px;
    background-color:#224b7a;
    -webkit-transform:rotate(45deg);
    -o-transform:rotate(45deg);
    transform:rotate(45deg);
    top:6px;
    left:-2px;
    border-radius:1px
}
.top_audio_play__button:hover,.top_audio_play__button:hover:before{
    background-color:#1c416b
}
.top_audio_play__button:active{
    top:12px
}
.top_audio_play__button:after{
    display:block;
    content:'';
    position:absolute;
    width:7px;
    height:10px;
    top:5px;
    left:8px;
    background:url("data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%227%22%20height%3D%2210%22%20viewBox%3D%220%200%207%2010%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M.797%209.836c-.44.327-.797.152-.797-.41V.574C0%20.02.353-.166.797.163l5.962%204.42c.31.23.31.603%200%20.833L.797%209.836z%22%20fill%3D%22%23B4C8E0%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E") no-repeat
}
.top_audio_play.shuffle .top_audio_play__button:hover:after{
    background:url("data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2213%22%20height%3D%2212%22%20viewBox%3D%220%200%2013%2012%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10%203.6h-.524c-1.585%200-2.58%201.385-3.717%202.778C4.495%207.928%203.367%2010%20.826%2010H0V8.4h.826c1.519-.037%202.46-1.632%203.575-3C5.666%203.853%206.936%202%209.484%202H10V0l3%202.75-3%202.75V3.6zm0%204.8V6.5l3%202.75L10%2012v-2h-.516c-1.603%200-2.7-.733-3.609-1.662A57.729%2057.729%200%200%201%206.84%206.92c.76.844%201.562%201.48%202.636%201.48H10zM3.282%205.18C2.57%204.32%201.822%203.625.826%203.6H0V2h.826c1.566%200%202.595.787%203.45%201.753l-.494.706c-.168.238-.335.48-.5.722z%22%20fill%3D%22%23B4C8E0%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E") no-repeat;
    left:5px;
    top:4px;
    width:13px;
    height:13px
}
/* Dark theme fixes */
[scheme="vkcom_dark"] .top_audio_play__button,[scheme="vkcom_dark"] .top_audio_play__button:before {
    background-color:#2d2d31;
}
/* Убрать раздел главное в музыке */
._audio_section_tab__general {display:none}
    `;
customcss.classList = 'VKByTeaspwnCSS';
document.head.appendChild(customcss);
// Кнопка быстрого воизпроизведение музыки
var audioplace = document.querySelector("#top_audio_btn_group")
let audiofbtn = document.createElement("button");
audiofbtn.classList.add("top_audio_play__button");
audiofbtn.setAttribute("onclick", "getAudioPlayer().instantPlay(this)");
if(audioplace) {
audioplace.appendChild(audiofbtn);
}
// Кнопка музыки в левом меню
var leftaudiobutton = document.querySelector("#l_aud > a")
if(leftaudiobutton) {
leftaudiobutton.setAttribute('href', '/audio?section=all');
}
function check_vid() {
    var h2;
    var myvd = document.querySelector('li#l_pr a.left_row');
    if (myvd) {
        var h = myvd.href;
    }
    if (h) {
        h2 = h.split('vk.com/')[1];
    }

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

function handleDOMChanges(mutationsList) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const body = document.body;
            if (body.classList.contains('video_showcase')) {
                check_vid();
                //console.log("video page")
                break;
            }
        }
    }
}

const observervid = new MutationObserver(handleDOMChanges);
const targetNode = document.body;
const observerOptions = { attributes: true };
observervid.observe(targetNode, observerOptions);
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
// Constants
const dictionary = {
  "Messenger": "Messages",
  "Мессенджер": "Сообщения",
  "VK Видео — смотреть онлайн бесплатно": "Видеокаталог"
}
// Function to replace the webpage title
function replacePageTitle() {
  const title = document.title;
  const changeTo = dictionary[title];
  if (changeTo) {
    document.title = changeTo;
  }
}

// Create a MutationObserver instance
const titleEl = document.getElementsByTagName("title")[0];
const observer = new MutationObserver(function(mutationsList) {
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList') {
      // Check if the title element has been added or modified
      const titleElement = document.querySelector('title');
      if (titleElement && titleElement.textContent === titleEl.textContent) {
        replacePageTitle();
        break;
      }
    }
  }
});

// Start observing changes in the document
observer.observe(document.documentElement, { childList: true, subtree: true });
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
