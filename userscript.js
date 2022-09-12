// ==UserScript==
// @name         VK By Tresha
// @namespace    https://github.com/RemoteCaller-Exiled/vk-old-2021
// @version      0.8
// @description  Дизайн вк за 2021 год
// @author       Tresha
// @match        *://*.vk.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vk.com
// @grant        GM_webRequest
// @downloadURL  https://github.com/RemoteCaller-Exiled/vk-old-2021/raw/main/userscript.js
// @updateURL    https://github.com/RemoteCaller-Exiled/vk-old-2021/raw/main/userscript.js
// ==/UserScript==
function GM_addStyle (cssStr) {
    var D               = document;
    var newNode         = D.createElement ('style');
    newNode.textContent = cssStr;

    var targ    = D.getElementsByTagName ('head')[0] || D.body || D.documentElement;
    targ.appendChild (newNode);
}

GM_addStyle ( `
/* Старый раздел видео */
a.VKVideoLogo,
[dir=ltr] .video_showcase .PortalNavigation,
.VideoLayout__aside {
	display: none !important;
}

.VideoGrid {
	grid-template-columns: [col-start] repeat(auto-fill, minmax(max(220px, (100% - (var(--max-grid-column))*12px)/var(--max-grid-column)), 1fr)) [col-end]
}

[dir] .VideoLayout__mainContent.page_block {
	width: 796px;
	right: 4px;
	top: -2px;
}

.ui_search_new.ui_search.video_search_input.ui_search_btn_large._wrap {
	min-width: 604px;
	width: auto !important
}

[dir] .OwnerChooser__dropdownItem {
	color: black;
}

.VideoCard__thumb.js-video-item-thumb,
.VideoCard__thumbWrapper.video_item_thumb_wrap {
	border-radius: 2px;
}

div#side_bar {
	display: block !important;
}

div#side_bar.side_bar.fl_l.sticky_top_force {
	display: none !important;
}

.video_search_input .ui_search_custom_ctrl {
	opacity: 0;
}

[dir=ltr] .video_showcase #page_header {
	padding: 0;
	margin: 0 auto;
}

.video_showcase {
	--layout-width: 960px !important;
	--layout-min-width: unset !important;
	--layout-max-width: unset !important;
}

div.ui_gallery.VideoTabsSlider {
	display: block !important;
	overflow: visible;
	z-index: 100
}

.ui_gallery__arrow.ui_gallery__arrow_left.ui_gallery__arrow_visible,
.ui_gallery__arrow.ui_gallery__arrow_right.ui_gallery__arrow_visible {
	visibility: visible;
	z-index: 2
}

.ui_gallery__arrow.ui_gallery__arrow_left,
.ui_gallery__arrow.ui_gallery__arrow_right {
	visibility: hidden;
	z-index: 2
}

#video_content_section>div.ui_gallery.VideoTabsSlider>div.ui_gallery__arrow.ui_gallery__arrow_left,
#video_content_section>div.ui_gallery.VideoTabsSlider>div.ui_gallery__arrow.ui_gallery__arrow_right {
	margin-top: 120px !important;
	height: 55px;
	z-index: 2
}

div.VideoCard__additionalInfo.video_item_add_info {
	font-size: 12px;
}
.video_showcase .TopHomeLink {
    display: flex;
}
.top_profile_vkconnect_card_wrapper {
    display: none;
}
.TopProfileItem--appearance.top_profile_mrow {
    display: none;
}
#l_msg .left_label
  {
    visibility: hidden;
  }

  #l_msg .left_label:before
  {
    content: 'Сообщения' !important;
    visibility: visible;
  }

  #l_gr .left_label
  {
    visibility: hidden;
  }

  #l_gr .left_label:before
  {
    content: 'Группы' !important;
    visibility: visible;
  }

  [dir] .ui_rmenu_item._ui_item_likes.feed_section_likes span
  {
    visibility: hidden;
  }

  [dir] .ui_rmenu_item._ui_item_likes.feed_section_likes:before
  {
    content: 'Понравилось';
    visibility: visible;
  }
/* Старые иконки */
[dir] .like_wrap.lite .like_btn.like .like_button_icon {
    background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%229%22%20width%3D%2211%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M7.9%200C9.612%200%2011%201.36%2011%203.039c0%201.688-.69%202.534-3.597%204.75L6.063%208.81a.931.931%200%2001-1.126%200l-1.34-1.022C.69%205.573%200%204.727%200%203.039%200%201.36%201.388%200%203.1%200c.904%200%202.4.9%202.4%202.25C5.5.9%206.996%200%207.9%200z%22%20fill%3D%22%23828a99%22%2F%3E%3C%2Fsvg%3E);
}
.like_wrap.lite .like_btn.like .like_button_icon {
    opacity: .48;
}
.like_wrap.lite .like_button_icon {
    width: 11px;
    height: 9px;
}

#l_vid > .left_row > .LeftMenu__icon > svg path {
    d: path('M12.06 1.5c.65 0 1.23 0 1.7.04.51.04 1.04.13 1.56.4a4 4 0 011.74 1.74c.27.52.36 1.05.4 1.56.04.47.04 1.05.04 1.7v6.12c0 .65 0 1.23-.04 1.7a4.07 4.07 0 01-.4 1.56 4 4 0 01-1.74 1.74c-.52.27-1.05.36-1.56.4-.47.04-1.05.04-1.7.04H7.94c-.65 0-1.23 0-1.7-.04a4.06 4.06 0 01-1.56-.4 4 4 0 01-1.74-1.74 4.06 4.06 0 01-.4-1.56c-.04-.47-.04-1.05-.04-1.7V6.94c0-.65 0-1.23.04-1.7.04-.51.13-1.04.4-1.56a4 4 0 011.74-1.74 4.06 4.06 0 011.56-.4c.47-.04 1.05-.04 1.7-.04zM4.27 4.37C4 4.9 4 5.6 4 7v6c0 1.4 0 2.1.27 2.63.24.48.62.86 1.1 1.1C5.9 17 6.6 17 8 17h4c1.4 0 2.1 0 2.63-.27a2.5 2.5 0 001.1-1.1C16 15.1 16 14.4 16 13V7c0-1.4 0-2.1-.27-2.63a2.5 2.5 0 00-1.1-1.1C14.1 3 13.4 3 12 3H8c-1.4 0-2.1 0-2.63.27a2.5 2.5 0 00-1.1 1.1zM6 14c0-.33 0-.49.06-.62a.65.65 0 01.32-.32c.13-.06.3-.06.62-.06s.49 0 .62.06c.14.06.26.18.32.32.06.13.06.3.06.62s0 .49-.06.62a.65.65 0 01-.32.32c-.13.06-.3.06-.62.06s-.49 0-.62-.06a.65.65 0 01-.32-.32C6 14.49 6 14.32 6 14zm.06-4.62C6 9.51 6 9.68 6 10c0 .33 0 .49.06.62.06.14.18.26.32.32.13.06.3.06.62.06s.49 0 .62-.06a.65.65 0 00.32-.32c.06-.13.06-.3.06-.62 0-.33 0-.49-.06-.62a.65.65 0 00-.32-.32C7.49 9 7.32 9 7 9s-.49 0-.62.06a.65.65 0 00-.32.32zM12 6c0-.33 0-.49.06-.62a.65.65 0 01.32-.32c.13-.06.3-.06.62-.06s.49 0 .62.06c.14.06.26.18.32.32.06.13.06.3.06.62s0 .49-.06.62a.65.65 0 01-.32.32c-.13.06-.3.06-.62.06s-.49 0-.62-.06a.65.65 0 01-.32-.32C12 6.49 12 6.32 12 6zm.06 7.38c-.06.13-.06.3-.06.62s0 .49.06.62c.06.14.18.26.32.32.13.06.3.06.62.06s.49 0 .62-.06a.65.65 0 00.32-.32c.06-.13.06-.3.06-.62s0-.49-.06-.62a.65.65 0 00-.32-.32c-.13-.06-.3-.06-.62-.06s-.49 0-.62.06a.65.65 0 00-.32.32zM12 10c0-.33 0-.49.06-.62a.65.65 0 01.32-.32c.13-.06.3-.06.62-.06s.49 0 .62.06c.14.06.26.18.32.32.06.13.06.3.06.62 0 .33 0 .49-.06.62a.65.65 0 01-.32.32c-.13.06-.3.06-.62.06s-.49 0-.62-.06a.65.65 0 01-.32-.32c-.06-.13-.06-.3-.06-.62zM6.06 5.38C6 5.51 6 5.68 6 6s0 .49.06.62c.06.14.18.26.32.32.13.06.3.06.62.06s.49 0 .62-.06a.65.65 0 00.32-.32C8 6.49 8 6.32 8 6s0-.49-.06-.62a.65.65 0 00-.32-.32C7.49 5 7.32 5 7 5s-.49 0-.62.06a.65.65 0 00-.32.32z') !important;
}
#l_aud > .left_row > .LeftMenu__icon > svg path {
    d: path('M14.73 2.05a2.28 2.28 0 012.75 2.23v7.99c0 3.57-3.5 5.4-5.39 3.51-1.9-1.9-.06-5.38 3.52-5.38h.37V6.76L8 8.43v5.82c0 3.5-3.35 5.34-5.27 3.62l-.11-.1c-1.9-1.9-.06-5.4 3.51-5.4h.37V6.24c0-.64.05-1 .19-1.36l.05-.13c.17-.38.43-.7.76-.93.36-.26.7-.4 1.41-.54zM6.5 13.88h-.37c-2.32 0-3.34 1.94-2.45 2.82.88.89 2.82-.13 2.82-2.45v-.37zm9.48-1.98h-.37c-2.32 0-3.34 1.94-2.46 2.82.89.89 2.83-.13 2.83-2.45v-.37zm-.02-7.78a.78.78 0 00-.92-.6L9.06 4.77c-.4.09-.54.15-.68.25a.8.8 0 00-.27.33c-.08.18-.1.35-.1.88v.67l7.97-1.67v-.95-.08z') !important;
}
.TopHomeLink > svg {
    visibility: hidden;
}
.TopHomeLink {
background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAABZVBMVEUAAABAgP8zmf8nhvYmiPcmhvcliPcpifQoh/QoiPQmiPUmhvUliPUohvUniPYmh/Yoh/QniPQnh/Unh/UnhvUnh/Unh/UniPUoh/UniPUnh/Ynh/Qnh/Qmh/UnhvUnh/UniPUnh/Unh/Unh/UniPUnh/Unh/Unh/Unh/Unh/Unh/Unh/Unh/Unh/Uoh/UpiPUqiPUqifUxjfU0jvY1j/Y4kPY6kfY6kvY8k/Y/lPZAlfZDl/ZFl/ZGmPZImfdLm/dPnfdSn/dVoPdWofdXovdfpvhgp/hhp/hnq/hsrvh4tPl5tfl8tvmBufmDuvmEu/mIvfqMv/qOwPqax/qdyPqjzPukzPumzvupz/uu0vu01vy/2/zC3fzN4/3Q5f3V5/3X6f3b6/3d7P3h7/7j7/7k8P7m8f7o8v7p8/7q8/7s9P7u9v7v9v7w9/71+f/2+v/3+v/3+//6/P/7/f/8/v/+///////g0zmvAAAALXRSTlMABAU7PD0+RUZHSUpLTIuMjo+2t7i5zM3Oz9jZ2tvc3d7f4O7v8Pf5+vv8/f7pN1BTAAAAAWJLR0R2MWPJQQAAAWZJREFUGBl9wftfS3Ecx/HPqYlCF602FTa1TrVeERFzSSWU3HLp5JLrwRCm9v77fc/Z9PBD+z6f5rQd68vmiyX2lYr5bG9XYKmO0xxoJGNOR0gLYcas7RQtDQd2HI9O68OjxwbwyNpJPHJ2Fo+ClXDWo+gxsBZF0SNgZiOK1nHGLMR5LWkJHkj6BKxKeo4zbhM4DyVtwexvKYZzb6XdGzihTeFcrkm1eYilGO5LekZi0qZJvJC0CbEUU/khxRdIlI1UpSbtLhJL1bltqb5Cg9HwRNLHK98l/ZL0iiabJjX7TtKemnYWSJVtioZbP5Wqv/kjqXqdxKRN0HRvT4kvLH+V9OEiTmgh/9z5JieGymdJL3HGrcS++ac70nvgZlWqXwXGrMh/zl+7fQlnbuXuMs4Zy+MxaAN4ZK0Xj247isdhC0ZoaSgwOxTSQthuTmaYAw21Wyro7OnPFUbLNJVHC7kT3UcCM/sLJGy55tgVVwkAAAAASUVORK5CYII=");
background-repeat: no-repeat;
background-position: left;
}
.TopHomeLink {
    width: 165px;
    height: 100%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    color: var(--text_primary);
}

/* Реакции */
.ReactionsMenu, .ReactionsMenu--extraHoverArea, .ReactionsMenu--extraHoverAreaToTop, div.ReactionsPreview__items
  {
    display: none;
  }

  .PostBottomAction
  {
    --post-bottom-action-background-color: transparent !important;
  }

  [dir=ltr] .PostButtonReactions--post .PostButtonReactions__title--textual
  {
    display: none;
  }

  [dir=ltr] .like_tt_reacted-count
  {
    display: none;
  }

  div.ReactionsPreview.ReactionsPreview--active .ReactionsPreview__count._counter_anim_container
  {
    color: #e64646 !important;
  }

  [dir] .ReactionsPreview
  {
    position: absolute !important;
    margin-top: 28px;
    margin-left: 30px;
    width: 50px;
    z-index: 100;
  }

  .PostBottomAction__count, .PostBottomAction__label, [dir=ltr] .ReactionsPreview__count
  {
    font-weight: 500 !important;
    font-size: 14px !important;
    color: #5e6c77;
  }

  .fans_fanph_reaction
  {
    display: none !important;
  }

  li#likes_tab_reactions_0, li#likes_tab_reactions_1, li#likes_tab_reactions_2, li#likes_tab_reactions_3, li#likes_tab_reactions_4, li#likes_tab_reactions_5,.ui_tab.ui_tab_group
  {
    display: none;
  }

  .like_tt_reaction
  {
    display: none !important;
  }

  .PostButtonReactionsContainer
  {
    width: auto !important;
  }

  [dir] .PostActionStatusBar--inPost
  {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }

  div.like_cont.PostBottomActionLikeBtns
  {
    border-top: 1px solid #e7e8ec !important;
  }

  [dir] .wl_post_actions_wrap .like_wrap .PostButtonReactionsContainer
  {
    width: 90px !important;
  }

  .PostButtonReactionsContainer
  {
    width: auto !important;
  }

  .PostButtonReactions__icon.PostButtonReactions__icon--custom
  {
    background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m0%200h24v24h-24z%22%20fill%3D%22none%22%2F%3E%3Cpath%20d%3D%22m17%202.9a6.43%206.43%200%200%201%206.4%206.43c0%203.57-1.43%205.36-7.45%2010l-2.78%202.16a1.9%201.9%200%200%201%20-2.33%200l-2.79-2.12c-6.05-4.68-7.45-6.47-7.45-10.04a6.43%206.43%200%200%201%206.4-6.43%205.7%205.7%200%200%201%205%203.1%205.7%205.7%200%200%201%205-3.1z%22%20fill%3D%22%23ff3347%22%2F%3E%3C%2Fsvg%3E) !important;
  }

  div.PostButtonReactions__icon.PostButtonReactions__icon--custom.PostButtonReactions__icon--animationActive
  {
    background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m0%200h24v24h-24z%22%20fill%3D%22none%22%2F%3E%3Cpath%20d%3D%22m17%202.9a6.43%206.43%200%200%201%206.4%206.43c0%203.57-1.43%205.36-7.45%2010l-2.78%202.16a1.9%201.9%200%200%201%20-2.33%200l-2.79-2.12c-6.05-4.68-7.45-6.47-7.45-10.04a6.43%206.43%200%200%201%206.4-6.43%205.7%205.7%200%200%201%205%203.1%205.7%205.7%200%200%201%205-3.1z%22%20fill%3D%22%23ff3347%22%2F%3E%3C%2Fsvg%3E) !important;
  }

  [dir=ltr] .PostButtonReactions__iconAnimation
  {
    visibility: hidden;
  }

  div.PostButtonReactions__icon.PostButtonReactions__icon--custom.PostButtonReactions__icon--animationActive::after
  {
    background: url(data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m0%200h24v24h-24z%22%20fill%3D%22none%22%2F%3E%3Cpath%20d%3D%22m17%202.9a6.43%206.43%200%200%201%206.4%206.43c0%203.57-1.43%205.36-7.45%2010l-2.78%202.16a1.9%201.9%200%200%201%20-2.33%200l-2.79-2.12c-6.05-4.68-7.45-6.47-7.45-10.04a6.43%206.43%200%200%201%206.4-6.43%205.7%205.7%200%200%201%205%203.1%205.7%205.7%200%200%201%205-3.1z%22%20fill%3D%22%23ff3347%22%2F%3E%3C%2Fsvg%3E) !important;
    visibility: visible;
  }

  div.PostButtonReactions__icon.PostButtonReactions__icon--custom.PostButtonReactions__icon--animationActive
  {
    background: url(data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m0%200h24v24h-24z%22%20fill%3D%22none%22%2F%3E%3Cpath%20d%3D%22m17%202.9a6.43%206.43%200%200%201%206.4%206.43c0%203.57-1.43%205.36-7.45%2010l-2.78%202.16a1.9%201.9%200%200%201%20-2.33%200l-2.79-2.12c-6.05-4.68-7.45-6.47-7.45-10.04a6.43%206.43%200%200%201%206.4-6.43%205.7%205.7%200%200%201%205%203.1%205.7%205.7%200%200%201%205-3.1z%22%20fill%3D%22%23ff3347%22%2F%3E%3C%2Fsvg%3E)!important;
  }

  [dir=ltr] .post--withPostBottomAction .PostBottomActionLikeBtns .like_btns
  {
    margin-top: 5px !important;
  }

  [dir] .PostBottomAction::before
  {
    background-image: none!important;
  }

  div.tt_w.like_tt.likes_tt_share.tt_down
  {
    display: none !important;
  }

  [dir] .like_cont
  {
    padding: 0px !important;
  }

  [dir] .PostBottomActionLikeBtns.like_cont
  {
    margin: 10px 4px 0px 4px !important;
  }

  [dir] .PostBottomActionLikeBtns.like_cont
  {
    padding: 3px 0px 0px 0px !important;
  }

  [dir=ltr] .post--withPostBottomAction .PostBottomActionLikeBtns .like_btns
  {
    margin-top: 5px !important;
  }

  .like_btns
  {
    margin-top: 15px !important;
  }

  [dir] .like_wrap
  {
    padding: 0px 20px 8px 20px !important;
  }

  .like_views
  {
    margin-top: 4px !important;
  }
  /* Убирает шторку в новых сообщениях */
ul.ConvoRecommendList {
display: none;
}
/* Кнопка Сервисы VK */
#react_rootEcosystemServicesNavigationEntry {
display: none;
}
/* Фикс лого */
a.TopHomeLink rect {
	display: none !important;
}
/* Убираем закругления (спасибо vk next за код) */
.audio_search .ui_search_input_block, .like_share_text, .cal_table, .im-create.im-create_chat, .photos_photo_edit_row, .StickerProductsGift__messageInput, .im-create.im-create_classic .im-create--table, #faq_search_form, .AppsCatalogSelectMenu, .bordered-thumb:after, .bordered-thumb, .RecommendedNarrativesBlockItem__background:after, .RecommendedNarrativesBlockItem__background, .ape_pl_input, .video_thumb_video, .video_external_link, #stickerWord, ._sticker_hints, .videocat_live_icon, .video_box_wrap, .photos_edit_actions, #current_info .my_current_info, #profile_groups_link, #submit_post_box, #top_profile_menu, #vkwidget2, #wk_box, #wk_content, .BaseModal__content, .Button--secondary, .Button--size-m:not(.Button--link), .Button--size-s, .Call, .CallsDropdown, .CatalogBlock:before, .CatalogBlock:not(:first-of-type), .CatalogSection:not(.CatalogSection__user_playlists):not(.CatalogSection__my):not(.CatalogSection__friends_updates):not(.CatalogSection__artist):not(.CatalogSection__user_list), .ChatSettings, .DonutCatalogPromo, .GamesCatalog--downloaded_games>*>*>.ui_tabs, .GamesCatalog--profile>*>*>.ui_tabs, .GamesCatalogHead:not(.GamesCatalog--search_page), .HeaderProfile__Dropdown, .MarketCatalogCategoryMenu__list, .MarketCatalogFilter__container, .MarketCatalogHeader, .MarketCatalogTabs.MarketCatalogTabs--notStacked, .MarketCatalogLocationTooltip--visible, .MessageKeyboard__button, .MusicAuthor_block:after, .MusicAuthor_block__cover, .Participant__status, .Participant:after, .PageBlock:not(:first-of-type):not(.MarketCatalogBlockBanner):not(.MarketCatalogBlockList), .PhotoCarouselImage, .PostCopyrightBox__input, .ShortVideoPost, .ShortVideoStub__link, .ShortVideoStub__qrLink, .Tooltip__in, .abx_comment, .ads_edit_link_type_card, .ap_layer__content, .ape_cover, .ape_list_header, .apps_main:not(.apps_main_with_footer), .apps_catalog_row_img_img, .article_snippet, #content>.audio_page_layout>.audio_page_player_wrap, .audio_pl_snippet2, .audio_promo, .audio_promo__items, .audio_row_content, .box_no_title.box_no_buttons, .button_blue>button, .eltt, .emoji_tt_wrap, .flat_button:not(#ui_trends_load_more):not(.ui_load_more_btn):not(.profile_btn_cut_left):not(.profile_btn_cut_right), .FlatButton, .friend_recomm_card, .gift_cell .gift_img, .gift_free, .groups_menu_item_image:after, .groups_menu_item_image_content, .groups_row.short .img a .search_item_img, .group_apps_list_row_img_img, .im-chat-input--text, .im-chat-input--txt-wrap, .im-gift--img, .im-mess--call-snippet, .im-mess_failed, .im-mess_gift, .im-mess_light, .im-mess_selected, .im-page--dialogs, .im-page--history, .im-page--center-empty, .im_sticker_bl, .im_sticker_bl_demo_background, .im_sticker_bl_demo_thumb, .im_stickers_store_wrap, .landings-expired-messages__more, .left_row, .like_share_code, .like_share_widget_input, .like_share_widget_width, .market_edit_item_box * #item_price, .market_edit_item_box>*, .market_ei_photo_add, .market_ei_photos * .market_ei_main_photo, .medadd_c_linkcon, .medadd_poll_answer, .medadd_poll_answer_add, .medadd_poll_question, .media_link, .ms_items_more, .msg, #mv_comments_header, #mv_box, .notifier_baloon, .nim-dialog--inner-text, .page_actions_wrap, .page_album_thumb_wrap, .page_album_title, .page_avatar, .page_block:not(.wall_archive_link_block):not(.search_results):not(.feed_new_posts):not(._im_page_history):not(.im-page--dialogs):not(.audio_page_player_wrap):not(.search_filters_minimized):not(.ui_filters_block):not(.GamesCatalogHead):not(.feed_search_wrap), .page_media_place_img_wrap, .page_post_thumb_unsized, .page_post_thumb_wrap:not(.page_post_thumb_short_video), .page_square_photo, .page_status_editor .editor, .page_status_input, .page_top #inner_status, .page_video_thumb, .payments_money_transfer_link_copy_input, .photos_album_thumb, .photos_choose_row, .photos_row, .pretty-card, .pretty-card_placeholder_yes, .post_from_tt_row, .poster-uploader__view .poster .poster__image, .profile_more_info_link, .profile_msg_side_only #profile_send_gift_btn .profile_btn_cut_right, .pv_box, .pv_comments_header, .search_filters_minimized:not(.ui_rmenu_item_expanded), .submit_post_field, .thumbed_link--market, .token, .top_notify_wrap, .ts_cont_wrap, .tt_w, .ui_actions_menu, .ui_search_sugg_list, .video_item_thumb, .video_item_thumb_wrap, .selector_container>table, .Select, .Select>.Select__control, .error, .StickerStylesMenuItem__add, .StickerStylesMenuItem__gift, .text, img.preview, .VideoPreview__thumb, .thumb_doc_wrap .draggable_thumb, #payments_box, .ProfileEditorVkconnect__notice, .pedit_content>*>*>*, .GoalsListItem, .GoalRecommendations, .group_edit>*>*>*:not(.group_edit_field):not(.group_edit_invite_link_row), .group_edit_field>*, #group_edit_obscene_stopwords, .DonutGroupCopyLink, .selected_items .token .token_inner, .im-mess_fav, .wdd_add2, .wdd.clear_fix.wdd_no_sub:not(.wdd_focused), .medadd_c_linkimg_big, .GoalsFilterList__item, .ui_search_fltr, [dir] .MiniAppsSnippet:after, [dir] .vk_mini_app_preview .medadd_c_linkcon:before, [dir] .vk_mini_app_preview .medadd_c_linkcon:not(.medadd_c_linkimg_big):before, [dir] .vk_mini_app_preview .medadd_c_linkimg_big .medadd_c_linkimg_container:before, [dir] .payments_getvotes_ps_row:hover, [dir] .payments_getvotes_ps_row.payments_getvotes_active_row, .GridStoryPreview__inner, .GridStoryPreview, .MetaStory__rec-items, #side_bar_inner, .MassMentionWarning, #mail_box_editable, .draggable_thumb, [dir] .im_msg_audiomsg .audio-msg-track:not(.audio-msg-player):hover, .PhotoTagCard, [dir] .audio_page__shuffle_all .audio_page__shuffle_all_button:hover, .ui_search_input_block:not(.market_search_wrap), .result_list, .MarketCatalogPhoto__img, .MarketCatalogPriceRangeField__priceField, .MarketServiceMigrateInitStep, .market_album_photo, .MarketItemsList__itemExtraPhoto, .ui_search_fltr_short_field, .Input, .MarketServiceCreateDescription__textarea, .MarketServiceCreatePhotos__photo, .MarketServiceCreateAddress__dropDown:not(.wdd_focused), .Select__menu, .BotCarousel__slide, .audio_shuffle_all_button:hover, .MarketCatalogBlocks, .MarketCatalogProduct__imgWrap, .dev_page_block, .apps_edit_nav_img, #apps_edit_catalog_photo, #apps_edit_photo, .apps_edit_input_borderless, .app_info_msg, .popup_box_container, .MusicAuthor_block, .MusicAuthorSnippet__info, .MusicAuthorSnippet_small, .thumbed_link--group-invitation>.thumbed_link__thumb, .round_tab, .Dropdown__in, .Dropdown, .wall_card, .PageBlock.Intro, .groups_create_box_input, .datepicker_control, #side_bar_inner, .ui_filters_block, #company, #position, .im-money-request-snippet, .im-group-online--inner, .short_video_item, .wall_tt_link_img, .market_comments_header, .market_item_bigph, .market_item_thumb.market_item_thumb_active, .wall_tt_link_img, .market_item_photo, .market_order_row, .market_shop_item_actions, .audio_pl_attach_preview, .tickets_suggests_wrap, .tickets_suggest, .market_shop_item_action._plus, .market_shop_item_action._minus, .market_item_out_of_stock, .reply_thumb_img, .page_gif_large video, .market_tr_row, .audio_page_player__cover ._audio_page_player__cover, .group_info_map, .NarrativeSnippet--base, .wke_b, blockquote, .pages_history_select_version, .pages_history_row, .tag_frame_handle.ne, .tag_frame_handle.se, .MarketServiceCreatePhotos__photoDeleteButton, .CheckBox__indicator, .market_row_controls, .market_item_thumb, .checkbox.on.fl_l._messages_enabled_chats, .MarketItemsList__itemPhoto, .page_market_item_narrow_img, .page_doc_icon, .page_cover_action, .StoryArchivePreview__wrapper, .StoryArchivePreview__linkBtn, .ymaps, #ymaps, .places_mapped_point, .VideoRecomsItem__thumb, .emoji_status_wrap, .group_messages_notify_block, .im-aside-promo, .market_row, .market_item_in_cart, .medadd_c_linkhead, .page_media_link_url, .medadd_c_linkimg_controls_btn_group, .idd_popup, .idd_items_content, .group_api_url_desc, .result_list_scrollable, .StickersPanel__preview, .back, .FiltersItem__image, .photos_album_no_cover, .photos_edit_input, .MarketItemsList__itemPhotoWrap, .limited_height, .ShortVideoTagListItem__photo, .ShortVideoPage__container--empty, .GamesCatalogFullWidthBanner, .GamesCatalogCard__image, .page_post_thumb_short_video_cover, .page_post_thumb_short_video_blur, .page_post_video_play_inline, .tu_last, .tickets_input_text, .msg_multiline, ._controls_offset, .videoplayer_action_button, .settings_app_password_name, [dir] .MarketItemsList__itemPhotoWrap:after, [dir] .MarketItemsList__itemPlaceholderWrap:after, [dir] .MarketItemsList__itemPhotoWrap, .bookmark_tag, .video_thumb_label, .VideoPlaylistItem__thumbWrap, .js-video_tc_upload_btn, .js-video_tc_item, .videocat_featured_0, .videocat_featured_1, .videocat_featured_2, .video_thumb_label_live_icon, .chat_tab_wrap, .chat_tab_icon, .fc_editable, .popup_box_container, .EditableLabel:hover .EditableLabel__text, .audio_row__cover, .ReportFormSnippet__attachmentPreview--default, .ReportFormSnippet--content, .BannerItem__image, .BannerItem--viewType-slider, .media_voting_can_vote, .page_poll_export_code, ._item_thumb, .videoplayer_autoplay_timer, .CallOrator__participant, .CallSettings__camera, .BlurredBackground.Participant__main, .CallGridNew__item, .CallHeader__hands, .Participant__handIndicator, .article_snippet, .article_snippet__image_wrap, .article_snippet__fade, .im-page--error, .TextliveSnippet__in, .audio_row__cover_icon, ._audio_row__cover_icon, #like_share_text, .info_msg, .TemplatesDropDown__item:hover, .page_doc_photo, .app_widget_image, .app_widget_list_cover_gradient, .VideoCard__label, .video_thumb_actions, .MenuList__item, .MenuList__item--hideCollapsedBadge, .MenuList__item--expandable, .MenuList__item--active, .VideoActions__item--horizontal, .VideoLayout__toggle, .video_item_controls, .VideoActions__item--vertical, .page_post_thumb_short_video, .market_cart_row_img>a>img, .bt_tag_label, .BugreportCommentMeta__content, .bt_report_footer, .bt_member_activity_item_inner, .bt_member_activity_item_container, .bt_achievement_short, .BugreportComment__inLinkGo, .BugreportComment__inLink, .bt_reporter_achievements_progress__bar_total, .page_block.ui_rmenu.ui_rmenu_pr, .ClassifiedsCatalogHeader {
    border-radius: 3px!important;
}
` );

var i, i2, vd, theme_hash_number, theme,j
var styleNode = document.createElement("style");
styleNode.id = 'Style'
styleNode.classList = 'old_style'
var styleNode2 = document.createElement("style");
styleNode2.id = 'Style'
var wait = setInterval(wait_form,500)
var first_name_back = document.getElementById ("pedit_first_name");
var last_name_back = document.getElementById ("pedit_last_name");


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

    q.innerHTML = `<div style="padding-right:10px;display:inline-block;vertical-align:top;color:black;font-weight: 500;-webkit-font-smoothing: subpixel-antialiased;">` + namealt + `</div>`;
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
