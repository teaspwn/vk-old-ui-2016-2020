// ==UserScript==
// @name         VK By Tresha 2019
// @namespace    https://github.com/RemoteCaller-Exiled/vk-old-2021
// @version      0.9
// @description  Дизайн вк за 2019 год
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
/*  https://web.archive.org/web/20201109120604/https://vk.com/wd_games  */
  body
  {
    font-family: var(--palette-vk-font),"Noto Sans Armenian","Noto Sans Bengali","Noto Sans Cherokee","Noto Sans Devanagari","Noto Sans Ethiopic","Noto Sans Georgian","Noto Sans Hebrew","Noto Sans Kannada","Noto Sans Khmer","Noto Sans Lao","Noto Sans Osmanya","Noto Sans Tamil","Noto Sans Telugu","Noto Sans Thai";
  }

  [dir] body.new_header_design #page_header_cont
  {
    background-color: var(--blue_420);
    border-bottom: 1px solid var(--blue_420);
  }

  [dir=ltr] #page_header_wrap
  {
    background-color: var(--blue_420);
    border-bottom: 1px solid var(--blue_420);
  }

  [dir] body.new_header_design .p_head_l0 .top_home_link .top_home_logo, [dir] body.new_header_design .p_head_l97 .top_home_link .top_home_logo, [dir] body.new_header_design .p_head_l114 .top_home_link .top_home_logo, [dir] body.new_header_design .p_head_l1 .top_home_link .top_home_logo, [dir] body.new_header_design.ny_2020_logo .p_head_l0 .top_home_link .top_home_logo, [dir] body.new_header_design.ny_2020_logo .p_head_l97 .top_home_link .top_home_logo, [dir] body.new_header_design.ny_2020_logo .p_head_l114 .top_home_link .top_home_logo, [dir] body.new_header_design.ny_2020_logo .p_head_l1 .top_home_link .top_home_logo:active
  {
    background-position-y: 10px;
  }



  [dir] .TopHomeLink--logoWithText:active
  {
    margin-top: 3px;
  }

  [dir] .TopHomeLink--ny2021logo:not(.TopHomeLink--logoWithText), [dir] body.WideScreenAppPage .TopHomeLink--ny2021logo:active
  {
    margin-top: 3px;
  }

  body.new_header_design #page_header .lamp
  {
    display: none;
  }

  [dir]  a.TopHomeLink svg
  {
    background: url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE5IiB2aWV3Qm94PSIwIDAgMzQgMTkiIHdpZHRoPSIzNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMzEuNTU4NDk4MiAxLjI4NjU1NTI3Yy4yMjIzOTEyLS43NDE2MTIzLjAwMDAwMDItMS4yODY1NTUyNy0xLjA1ODQzNzItMS4yODY1NTUyN2gtMy41Yy0uODg5OTM0NyAwLTEuMzAwMjA3NC40NzA3NTA4OC0xLjUyMjcyMTkuOTg5ODQ4NjMgMCAwLTEuNzc5ODY5NiA0LjMzODM4NTY5LTQuMzAxMjg5NyA3LjE1NjQ1MDcyLS44MTU3NDI2LjgxNTc0MjY3LTEuMTg2NTc5NyAxLjA3NTI5MTU1LTEuNjMxNTQ3IDEuMDc1MjkxNTUtLjIyMjQ1MjkgMC0uNTU2MTkzOC0uMjU5NTQ4ODgtLjU1NjE5MzgtMS4wMDEwOTk0NnYtNi45MzM5MzYxN2MwLS44ODk5MzQ3Ni0uMjQ2NTczNS0xLjI4NjU1NTI3LS45ODgyNDc2LTEuMjg2NTU1MjdoLTUuNWMtLjU1NjEzMiAwLS44OTA1OTQzLjQxMzAzOTA2LS44OTA1OTQzLjgwNDQ5MTg0IDAgLjg0MzY0MTg3IDEuMjYwNjQ4NCAxLjAzODE5NTUxIDEuMzkwNTk0MyAzLjQxMTM1NDg4djUuMTU0MTI4MzZjMCAxLjEzMDAyNDkyLS4yMDQwNzYzIDEuMzM0OTAyMTItLjY0OTA0MzcgMS4zMzQ5MDIxMi0xLjE4NjUxNzkgMC00LjA3MjcyNjE0LTQuMzU3NzY2OTUtNS43ODQ1MTQyNC05LjM0NDE5MTU2LS4zMzU0NjkyMy0uOTY5MTg4MjEtLjY3MTkzOTY5LTEuMzYwNjg1NjQtMS41NjY0NDIwMi0xLjM2MDY4NTY0aC0zLjVjLTEgMC0xLjIwMDAxMjIxLjQ3MDc1MDg4LTEuMjAwMDEyMjEuOTg5ODQ4NjMgMCAuOTI3MDMwODEgMS4xODY1Nzk2OSA1LjUyNDk2NTM3IDUuNTI0OTAzNjUgMTEuNjA2MDYyODcgMi44OTIxOTU0IDQuMTUyOTA1NCA2Ljk2NzEwODcyIDYuNDA0MDg4NSAxMC42NzUxMDg1MiA2LjQwNDA4ODUgMi4yMjQ3NzUyIDAgMi41LS41IDIuNS0xLjM2MTI0ODN2LTMuMTM4NzUxN2MwLTEgLjIxMDc2MjEtMS4xOTk1NzIzLjkxNTI3ODQtMS4xOTk1NzIzLjUxOTA5NzcgMCAxLjQwOTAzMjUuMjU5NTQ4OSAzLjQ4NTU0NjkgMi4yNjE4NzEyIDIuMzczMDk3NyAyLjM3MzA5NzcgMi43NjQzMzQzIDMuNDM3NzAxMSA0LjA5OTE3NDcgMy40Mzc3MDExaDMuNWMxIDAgMS41LS41IDEuMjExNTU3OC0xLjQ4NjcyMi0uMzE1NjQyMy0uOTgzNDI1My0xLjQ0ODY2ODMtMi40MTAyNDQ0LTIuOTUyMDg3OC00LjEwMTYyMzktLjgxNTgwNDQtLjk2NDA2NTEtMi4wMzk0MTg0LTIuMDAyMjYwNi0yLjQxMDI1NTUtMi41MjE0ODE4LS41MTkwOTc3LS42NjczNTg1LS4zNzA3NzUyLS45NjQwNjUxNCAwLTEuNTU3MjkzMjYgMCAwIDQuMjY0MjU1NC02LjAwNjk2NzA4IDQuNzA5MjIyNy04LjA0NjMyMzc3eiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+") no-repeat;
  }
/* Фикс лого */
a.TopHomeLink rect {
	display: none !important;
}
  [dir] .HeaderNav__item.HeaderNav__item--logo path, .TopNavBtn.TopNavBtn__audio .TopNavBtn__icon path, .TopNavBtn.TopNavBtn__notify .TopNavBtn__icon path, .top_audio_player_btn svg path
  {
    display: none;
  }
.video_showcase .TopHomeLink {
    display: flex;
}

  body.new_header_design .top_home_link .top_home_logo, body.new_header_design.WideScreenAppPage .top_home_link .top_home_logo
  {
    width: 34px;
    height: 19px;
  }

  body.new_header_design
  {
    --header-height: 42px;
    --left-menu-row-height: 32px;
  }

  [dir] body.new_header_design .TopSearch__input
  {
    background-color: var(--blue_640);
    border-radius: 20px;
    background-image: url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE0IiB2aWV3Qm94PSIwIDAgMTQgMTQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtOS45NTg1NjA4OCA4LjcyMTEyNDAxIDMuNjYwMTU3NTIgMy42NjAxNTc1OWMuMzQxNzA4OC4zNDE3MDg3LjM0MTcwODguODk1NzI4MSAwIDEuMjM3NDM2OC0uMzQxNzA4Ny4zNDE3MDg4LS44OTU3MjgxLjM0MTcwODgtMS4yMzc0MzY4IDBsLTMuNjYwMTU3NTktMy42NjAxNTc1MmMtLjkwNTM0NDM3LjY1NTIxNDcyLTIuMDE4MTMwNDIgMS4wNDE0MzkxMi0zLjIyMTEyNDAxIDEuMDQxNDM5MTItMy4wMzc1NjYxMiAwLTUuNS0yLjQ2MjQzMzg4LTUuNS01LjVzMi40NjI0MzM4OC01LjUgNS41LTUuNSA1LjUgMi40NjI0MzM4OCA1LjUgNS41YzAgMS4yMDI5OTM1OS0uMzg2MjI0NCAyLjMxNTc3OTY0LTEuMDQxNDM5MTIgMy4yMjExMjQwMXptLTQuNDU4NTYwODguNTI4ODc1OTljMi4wNzEwNjc4MSAwIDMuNzUtMS42Nzg5MzIxOSAzLjc1LTMuNzVzLTEuNjc4OTMyMTktMy43NS0zLjc1LTMuNzUtMy43NSAxLjY3ODkzMjE5LTMuNzUgMy43NSAxLjY3ODkzMjE5IDMuNzUgMy43NSAzLjc1eiIgZmlsbD0iIzg2YTFiZiIvPjwvc3ZnPg==");
    height: 28px;
    width: 230px;
    padding: 6px 6px 6px 33px;
    font-size: 13px;
    color: rgb(141, 171, 199) !important;
  }

  body.new_header_design .TopSearch__input::placeholder, body.new_header_design .TopSearch .input_back_content
  {
    color: rgb(141, 171, 199);
  }

  #ts_wrap div, #ts_wrap input
  {
    color: rgb(141, 171, 199) !important;
  }

  [dir] body.new_header_design .TopSearch__input #text
  {
    font-size: 13px;
    color: #000 /* qualified */ !important;
  }
  .top_notify_btn.TopNavBtn.TopNavBtn__notify.has_notify
  {
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LDE4IEM2LjY0NTgzMzMzLDE4IDUuNSwxNy4zIDUuNSwxNiBMMTAuNSwxNiBDMTAuNSwxNy4zIDkuMzU0MTY2NjcsMTggOCwxOCBaIE0xMy45OTU2OTMzLDExIEMxMy45OTU2OTMzLDEyLjUgMTYsMTIuNSAxNiwxMy41IEMxNiwxNCAxNiwxNSAxMy44OTU1OTg0LDE1IEwxLjk4NDMwOTg1LDE1IEMtNi4xOTA2MDM1OWUtMTMsMTUgLTEuNjI1MzY2NTFlLTEzLDE0IC0xLjYzNDI0ODI5ZS0xMywxMy41IEMtMS42MzM2OTMxOGUtMTMsMTIuNSAxLjk4NDMwOTg1LDEyLjUgMiwxMSBMMiw4IEMyLDQgNC4wOTcyNDkwMSwxLjUgNywxLjEgTDcsMSBDNywwLjQgNy41LDUuNzQwNTMxODdlLTE3IDgsMCBDOC41LDAgOSwwLjQgOSwxIEw5LDEuMSBDMTEuOTAyNzUxLDEuNSAxMy45OTU2OTMzLDQgMTMuOTk1NjkzMyw4IEwxMy45OTU2OTMzLDExIFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMSkiLz48L3N2Zz4=') !important;
    width: 20px;
    height: 20px;
  }

  .top_notify_btn.TopNavBtn.TopNavBtn__notify
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAByElEQVQ4T9XUMUgbYRQH8P+7JMacFqooGtSLxalESt0MiZtQnAQlOJlIcREc2qlrxo5dBAlaehmNgrgooku5kCkU6qageGoi4iLSi5LcvZJI4tUk5wW6+I3fve9333t87xH+86LnvZgghU52AbCqvPkAxAyrMw3B/kDYQ862z8Q8BcZIGSH8AmHDKGrfztPJfD24LtgfiPQJAu2AMNzgNgeGzhPn6cTF0+81oN8fbrntEPcAjFmWg/CzW3OPZzLxgjmuBhwYi0wS0+bztQWYMXmWkrcsQSkYXQdh2g4IYE1V5JnGYDjskHLiFYBOm+C16tV6kUzqlfh/Uu4Kfnwlkn4JQLQJaho7eq9T32/rgoPv514b7ZwF4LEHct6Zb/UeZ+I3LxT0jc6+NZz0m0BOOykzuOgC/MdK4rAmZSkUGQdoGcCQHcwUcwQdC2pa3n/ozodFUihaaiNvk1glPKcqcl9pgFSfjS80t8TgKAChSVQHaFVVfnwy37Bs9LybbfMIDlcVdKGVXA63+Qdc0O9RwF1lr+j5c2+ePJbz0BeMLBpEX82gAHw5VeSlRllYD9hSK2bFFRAmwGViW01p88Bjqz2FbUzs5ir6FzXDmxXhx2BfAAAAAElFTkSuQmCC") !important;
    color: #1e3c5f;
    width: 20px;
    height: 20px;
    margin: 5px;
  }

  [dir] .TopNavBtn__notifyCount
  {
    background-color: var(--orange_prominent);
    height: 10px;
  }

  [dir] .TopNavBtn .TopNavBtn__notifyCount
  {
    border: none;
    /* padding: 3px; */
    padding: 3px 5px;
    font-size: 9px;
    margin-top: -10px;
    margin-left: -10px;
  }


/* ИКОНКИ ФИКС 2021 ----------------------------------------------------------------------*/
  [dir] .TopNavBtn.TopNavBtn__audio .TopNavBtn__icon
  {
    background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgMjAiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeD0iMCIgeT0iMCIKICAgIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBTUFBQUM2ViswL0FBQUJmV2xEUTFCcFkyTUFBQ2lSZlpFOVNNTkFITVZmClU3VWlWUWM3aUloa3FFNFdSRVhFU2FwWUJBdWxyZENxZzhtbEgwS1RoaVRGeFZGd0xUajRzVmgxY0hIVzFjRlZFQVEvUU56Y25CUmQKcE1UL0pZVVdNUjRjOStQZHZjZmRPMENvbFpocXRvMEJxbVlaeVZoVXpHUlh4TUFyT2pDRUhzekFKekZUajZjVzB2QWNYL2Z3OGZVdQp3ck84ei8wNXVwV2N5UUNmU0R6TGRNTWlYaWVlMnJSMHp2dkVJVmFVRk9KejRsR0RMa2o4eUhYWjVUZk9CWWNGbmhreTBzazU0aEN4CldHaGh1WVZaMFZDSko0bkRpcXBSdnBCeFdlRzh4Vmt0VlZqam52eUZ3Wnkybk9JNnpVSEVzSWc0RWhBaG80SU5sR0FoUXF0R2lva2sKN1VjOS9BT09QMEV1bVZ3YllPU1lSeGtxSk1jUC9nZS91elh6RStOdVVqQUt0TC9ZOXNjd0VOZ0Y2bFhiL2o2Mjdmb0o0SDhHcnJTbQp2MXdEcGo5SnJ6YTE4QkhRdXcxY1hEYzFlUSs0M0FINm4zVEprQnpKVDFQSTU0SDNNL3FtTE5CM0MzU3R1cjAxOW5INkFLU3BxNlViCjRPQVFHQ2xROXBySHV6dGJlL3YzVEtPL0g1MkFjcmg4Z0lEVUFBQUFJR05JVWswQUFIb21BQUNBaEFBQStnQUFBSURvQUFCMU1BQUEKNm1BQUFEcVlBQUFYY0p5NlVUd0FBQUJwVUV4VVJmLy8vL3o5L2U3eDlkN203TnprNi83Ly8vVDIrZVhyOE5iZjZNalY0T2p0OHRuaQo2Y3JYNGRMZDVjdlg0dHZqNnNmVTMrSG83dkQwOXY3Ky91dnY5UHY4L1AvLy8ranQ4dExkNXMzWjQrUHA3c3ZYNGVEbjdmZjUrdGZnCjZNdlg0Yy9hNU1mVTMvLy8vK2VUNzE0QUFBQWhkRkpPVXdBUFVaZWhBek4zdS9sb3J2RE02NlQ5aUVRRVd4UUJhY3ZqaE8yUEpMYnMKMjJBOXExb0FBQUFCWWt0SFJBQ0lCUjFJQUFBQUNYQklXWE1BQUEzWEFBQU4xd0ZDS0p0NEFBQUFCM1JKVFVVSDVRWWVFaFlNdjFkNwpmd0FBQUdwSlJFRlVHTk9WMEVjT2dEQU1CTUJRUXVpOWQvLy9rd2lDSENkSUlQWmtqZlpnbTdIUFdMYmphc0E5NFFjQVFDcGhGSU9NCndnUXdDdUVGMDh6QVBDbktpdWxZTi9kQTBSeitZOXYxd3dOSHNpY1dwdE5paVZpNGJwMGxZbUZadDExdzhvelorQ3d0dk9RQWpFVVAKMGR0SUl6VUFBQUFsZEVWWWRHUmhkR1U2WTNKbFlYUmxBREl3TWpFdE1EWXRNekJVTVRnNk1qSTZNVElyTURNNk1EQUg1N2NiQUFBQQpKWFJGV0hSa1lYUmxPbTF2WkdsbWVRQXlNREl4TFRBMkxUTXdWREU0T2pJeU9qRXlLekF6T2pBd2Ryb1Bwd0FBQUJ0MFJWaDBhV05qCk9tTnZjSGx5YVdkb2RBQlFkV0pzYVdNZ1JHOXRZV2x1dHBFeFd3QUFBQ0owUlZoMGFXTmpPbVJsYzJOeWFYQjBhVzl1QUVkSlRWQWcKWW5WcGJIUXRhVzRnYzFKSFFreG5RUk1BQUFBVmRFVllkR2xqWXpwdFlXNTFabUZqZEhWeVpYSUFSMGxOVUV5ZWtNb0FBQUFPZEVWWQpkR2xqWXpwdGIyUmxiQUJ6VWtkQ1cyQkpRd0FBQUFCSlJVNUVya0pnZ2c9PSIgLz4KPC9zdmc+Cg==") no-repeat;
    position: absolute;
    margin-left: -10px;
    margin-top: -10px;
  }

  [dir] button.top_audio_player_btn.top_audio_player_next
  {
    background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m0%200h24v24h-24z%22%20opacity%3D%22.2%22%2F%3E%3Cpath%20d%3D%22m13%2012.625v3.8653505c0%20.2819967.2259549.5096495.5046844.5096495h.9906312c.2906494%200%20.5046844-.2281779.5046844-.5096495v-8.98070098c0-.28199673-.2259549-.50964952-.5046844-.50964952h-.9906312c-.2906494%200-.5046844.22817786-.5046844.50964952v3.86535048l-6.56988525-4.10617828c-.23754582-.14846614-.43011475-.04116893-.43011475.2408278v8.98070098c0%20.2814716.19775391.3860533.43011475.2408278z%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E);
    height: 15%;
    opacity: 0.7;
  }

  [dir] button.top_audio_player_btn.top_audio_player_prev
  {
    background-image: url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im0wIDBoMjR2MjRoLTI0eiIgb3BhY2l0eT0iLjIiLz48cGF0aCBkPSJtMTYgMTIuNjI1djMuODY1MzUwNWMwIC4yODE5OTY3LjIyNTk1NDkuNTA5NjQ5NS41MDQ2ODQ0LjUwOTY0OTVoLjk5MDYzMTJjLjI5MDY0OTQgMCAuNTA0Njg0NC0uMjI4MTc3OS41MDQ2ODQ0LS41MDk2NDk1di04Ljk4MDcwMDk4YzAtLjI4MTk5NjczLS4yMjU5NTQ5LS41MDk2NDk1Mi0uNTA0Njg0NC0uNTA5NjQ5NTJoLS45OTA2MzEyYy0uMjkwNjQ5NCAwLS41MDQ2ODQ0LjIyODE3Nzg2LS41MDQ2ODQ0LjUwOTY0OTUydjMuODY1MzUwNDhsLTYuNTY5ODg1MjUtNC4xMDYxNzgyOGMtLjIzNzU0NTgyLS4xNDg0NjYxNC0uNDMwMTE0NzUtLjA0MTE2ODkzLS40MzAxMTQ3NS4yNDA4Mjc4djguOTgwNzAwOThjMCAuMjgxNDcxNi4xOTc3NTM5MS4zODYwNTMzLjQzMDExNDc1LjI0MDgyNzh6IiBmaWxsPSIjZmZmIiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAyNyAwKSIvPjwvZz48L3N2Zz4=");
    height: 15%;
    opacity: 0.7;
  }

  [dir] button.top_audio_player_btn.top_audio_player_play
  {
    background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m0%200h24v24h-24z%22%20opacity%3D%22.2%22%2F%3E%3Cpath%20d%3D%22m7%204.7081449c0-.39109763.31387329-.7081449.69674683-.7081449h2.60650637c.3848026%200%20.6967468.30533409.6967468.7081449v14.5837102c0%20.3910976-.3138733.7081449-.6967468.7081449h-2.60650637c-.38480265%200-.69674683-.3053341-.69674683-.7081449zm6%200c0-.39109763.3138733-.7081449.6967468-.7081449h2.6065064c.3848026%200%20.6967468.30533409.6967468.7081449v14.5837102c0%20.3910976-.3138733.7081449-.6967468.7081449h-2.6065064c-.3848026%200-.6967468-.3053341-.6967468-.7081449z%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E);
    height: 15%;
    opacity: 0.7;
  }

  [dir] .top_audio_player_playing button.top_audio_player_btn.top_audio_player_play
  {
    background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m0%200h24v24h-24z%22%20opacity%3D%22.2%22%2F%3E%3Cpath%20d%3D%22m7%204.7081449c0-.39109763.31387329-.7081449.69674683-.7081449h2.60650637c.3848026%200%20.6967468.30533409.6967468.7081449v14.5837102c0%20.3910976-.3138733.7081449-.6967468.7081449h-2.60650637c-.38480265%200-.69674683-.3053341-.69674683-.7081449zm6%200c0-.39109763.3138733-.7081449.6967468-.7081449h2.6065064c.3848026%200%20.6967468.30533409.6967468.7081449v14.5837102c0%20.3910976-.3138733.7081449-.6967468.7081449h-2.6065064c-.3848026%200-.6967468-.3053341-.6967468-.7081449z%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E);
    height: 15%;
    opacity: 0.66;
  }

  [dir] button.top_audio_player_btn.top_audio_player_play
  {
    background-image: url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im0wIDBoMjR2MjRoLTI0eiIgb3BhY2l0eT0iLjIiLz48cGF0aCBkPSJtNyAxOC45OTkxMjgzYzAgLjU1Mjc2NjIuMzcyMjk0OS43NTI2NzUxLjgyNDgwODYuNDUwOTk5M2wxMC4zNTAzODI4LTYuOTAwMjU1MmMuNDU1NTI5Mi0uMzAzNjg2MS40NTI1MTM3LS43OTgwNjkgMC0xLjA5OTc0NDhsLTEwLjM1MDM4MjgtNi45MDAyNTUyYy0uNDU1NTI5MjEtLjMwMzY4NjE0LS44MjQ4MDg2LS4xMDUyNDE1NC0uODI0ODA4Ni40NTA5OTkyNnoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+");
    height: 15%;
    opacity: 0.66;
  }
  [dir] body.new_header_design .top_nav_btn#top_notify_btn .top_nav_btn_icon svg
  {
    color: #1e3c5f;
  }

  [dir] body.new_header_design .top_nav_btn#top_notify_btn:hover
  {
    background-color: var(--blue_980_alpha12);
  }

  [dir] body.new_header_design .top_nav_btn#top_notify_btn.active
  {
    background-color: var(--blue_600);
  }

  [dir] body.new_header_design .top_nav_btn .top_notify_count
  {
    border: #4a76a8;
  }

  [dir] body.new_header_design .top_nav_btn .top_notify_count:hover
  {
    border: #4a76a8;
  }

  body.new_header_design .top_nav_btn
  {
    width: 46px;
  }

  [dir] body.new_header_design .top_nav_btn#top_audio .top_nav_btn_icon
  {
    background-image: url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjAgMjAiIHdpZHRoPSIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTQgMTEuMTU1MjMyMnYtNS42NTUyMzIybC03IDJ2Ny43OTk5ODc4cy0uMDAwNzYwMjEtLjAwMDExNC0uMDAyMjUwOTktLjAwMDM0NTFjLS4wMDQ2OTQ3OCAxLjE1MDAyOTMtMS4wMTU3MzI5IDIuMjUyOTIwNy0yLjQ1OTM0NjkyIDIuNTg2MjA1Mi0xLjYzMDUzMzA2LjM3NjQzODMtMy4xOTU0NjQyNi0uMzcxNDc5Ny0zLjQ5NTM3MTY4LTEuNjcwNTIxNC0uMjk5OTA3NDEtMS4yOTkwNDE3Ljc3ODc3NzgtMi42NTcyODY2IDIuNDA5MzEwODYtMy4wMzM3MjQ4LjUzNzMxNzM1LS4xMjQwNDk1IDEuMDY3NTEwNzktLjEyNjAwMTYgMS41NDc2NTg3My0uMDI2MzY5NXYtOS4xNTk2NTQ3YzAtLjU1MDc0MDUzLjQyODQzNDQyLTEuMTEyNDIzMjUuOTU2OTM1MDYtMS4yNTY1NTk3OWw5LjA4NjEyOTg0LTIuNDc4MDM1NDJjLjUyNTcyMjEtLjE0MzM3ODczLjk1NjkzNTEuMTg2NTgxMDYuOTU2OTM1MS43Mzg2Nzg0NHYxMi4zMDAzMjcwN2MtLjAwMDc0Ny0uMDAwMTE2LS4wMDE0OTczLS4wMDAyMzUtLjAwMjI1MDktLjAwMDM1NjktLjAwNDY4NzkgMS4xNTAwMzM1LTEuMDE1NzI4IDIuMjUyOTMxMy0yLjQ1OTM0NyAyLjU4NjIxNy0xLjYzMDUzMzEuMzc2NDM4My0zLjE5NTQ2NDMtLjM3MTQ3OTctMy40OTUzNzE3LTEuNjcwNTIxNHMuNzc4Nzc3OC0yLjY1NzI4NjYgMi40MDkzMTA5LTMuMDMzNzI0OGMuNTM3MzE3My0uMTI0MDQ5NSAxLjA2NzUxMDgtLjEyNjAwMTYgMS41NDc2NTg3LS4wMjYzNjk1eiIgZmlsbD0iIzFlM2M1ZiIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIi8+PC9zdmc+");
    width: 20px;
  }
  [dir] .TopNavBtn.TopNavBtn__audio .TopNavBtn__icon
  {
    background: url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjAgMjAiIHdpZHRoPSIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTQgMTEuMTU1MjMyMnYtNS42NTUyMzIybC03IDJ2Ny43OTk5ODc4cy0uMDAwNzYwMjEtLjAwMDExNC0uMDAyMjUwOTktLjAwMDM0NTFjLS4wMDQ2OTQ3OCAxLjE1MDAyOTMtMS4wMTU3MzI5IDIuMjUyOTIwNy0yLjQ1OTM0NjkyIDIuNTg2MjA1Mi0xLjYzMDUzMzA2LjM3NjQzODMtMy4xOTU0NjQyNi0uMzcxNDc5Ny0zLjQ5NTM3MTY4LTEuNjcwNTIxNC0uMjk5OTA3NDEtMS4yOTkwNDE3Ljc3ODc3NzgtMi42NTcyODY2IDIuNDA5MzEwODYtMy4wMzM3MjQ4LjUzNzMxNzM1LS4xMjQwNDk1IDEuMDY3NTEwNzktLjEyNjAwMTYgMS41NDc2NTg3My0uMDI2MzY5NXYtOS4xNTk2NTQ3YzAtLjU1MDc0MDUzLjQyODQzNDQyLTEuMTEyNDIzMjUuOTU2OTM1MDYtMS4yNTY1NTk3OWw5LjA4NjEyOTg0LTIuNDc4MDM1NDJjLjUyNTcyMjEtLjE0MzM3ODczLjk1NjkzNTEuMTg2NTgxMDYuOTU2OTM1MS43Mzg2Nzg0NHYxMi4zMDAzMjcwN2MtLjAwMDc0Ny0uMDAwMTE2LS4wMDE0OTczLS4wMDAyMzUtLjAwMjI1MDktLjAwMDM1NjktLjAwNDY4NzkgMS4xNTAwMzM1LTEuMDE1NzI4IDIuMjUyOTMxMy0yLjQ1OTM0NyAyLjU4NjIxNy0xLjYzMDUzMzEuMzc2NDM4My0zLjE5NTQ2NDMtLjM3MTQ3OTctMy40OTUzNzE3LTEuNjcwNTIxNHMuNzc4Nzc3OC0yLjY1NzI4NjYgMi40MDkzMTA5LTMuMDMzNzI0OGMuNTM3MzE3My0uMTI0MDQ5NSAxLjA2NzUxMDgtLjEyNjAwMTYgMS41NDc2NTg3LS4wMjYzNjk1eiIgZmlsbD0iIzFlM2M1ZiIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIi8+PC9zdmc+") no-repeat;
    width: 20px;
    margin-top: 3px;
  }

  body.new_header_design .top_audio_player_title
  {
    color: var(--light_blue_100);
    line-height: 24px;
    font-size: 13px;
    position: initial;
    padding-top: 1px;
  }

  body.new_header_design .top_audio_player_title:hover
  {
    color: var(--light_blue_100);
  }

  body.new_header_design .top_audio_player:hover .top_audio_player_title
  {
    color: var(--light_blue_100);
  }

  [dir] body.new_header_design .top_audio_player:hover
  {
    background-color: var(--blue_980_alpha12);
  }

  [dir] body.new_header_design .top_audio_player
  {
    width: 300px;
  }

  [dir] body.new_header_design .top_audio_player_play .top_audio_player_btn_icon
  {
    background-image: url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im0wIDBoMjR2MjRoLTI0eiIgb3BhY2l0eT0iLjIiLz48cGF0aCBkPSJtNyAxOC45OTkxMjgzYzAgLjU1Mjc2NjIuMzcyMjk0OS43NTI2NzUxLjgyNDgwODYuNDUwOTk5M2wxMC4zNTAzODI4LTYuOTAwMjU1MmMuNDU1NTI5Mi0uMzAzNjg2MS40NTI1MTM3LS43OTgwNjkgMC0xLjA5OTc0NDhsLTEwLjM1MDM4MjgtNi45MDAyNTUyYy0uNDU1NTI5MjEtLjMwMzY4NjE0LS44MjQ4MDg2LS4xMDUyNDE1NC0uODI0ODA4Ni40NTA5OTkyNnoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+");
  }

  [dir] body.new_header_design .top_audio_player_next .top_audio_player_btn_icon
  {
    background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m0%200h24v24h-24z%22%20opacity%3D%22.2%22%2F%3E%3Cpath%20d%3D%22m13%2012.625v3.8653505c0%20.2819967.2259549.5096495.5046844.5096495h.9906312c.2906494%200%20.5046844-.2281779.5046844-.5096495v-8.98070098c0-.28199673-.2259549-.50964952-.5046844-.50964952h-.9906312c-.2906494%200-.5046844.22817786-.5046844.50964952v3.86535048l-6.56988525-4.10617828c-.23754582-.14846614-.43011475-.04116893-.43011475.2408278v8.98070098c0%20.2814716.19775391.3860533.43011475.2408278z%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E);
  }

  [dir] body.new_header_design .top_audio_player_prev .top_audio_player_btn_icon
  {
    background-image: url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im0wIDBoMjR2MjRoLTI0eiIgb3BhY2l0eT0iLjIiLz48cGF0aCBkPSJtNyAxOC45OTkxMjgzYzAgLjU1Mjc2NjIuMzcyMjk0OS43NTI2NzUxLjgyNDgwODYuNDUwOTk5M2wxMC4zNTAzODI4LTYuOTAwMjU1MmMuNDU1NTI5Mi0uMzAzNjg2MS40NTI1MTM3LS43OTgwNjkgMC0xLjA5OTc0NDhsLTEwLjM1MDM4MjgtNi45MDAyNTUyYy0uNDU1NTI5MjEtLjMwMzY4NjE0LS44MjQ4MDg2LS4xMDUyNDE1NC0uODI0ODA4Ni40NTA5OTkyNnoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+");
  }

  [dir] body.new_header_design .top_audio_player_playing .top_audio_player_play .top_audio_player_btn_icon
  {
    background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m0%200h24v24h-24z%22%20opacity%3D%22.2%22%2F%3E%3Cpath%20d%3D%22m7%204.7081449c0-.39109763.31387329-.7081449.69674683-.7081449h2.60650637c.3848026%200%20.6967468.30533409.6967468.7081449v14.5837102c0%20.3910976-.3138733.7081449-.6967468.7081449h-2.60650637c-.38480265%200-.69674683-.3053341-.69674683-.7081449zm6%200c0-.39109763.3138733-.7081449.6967468-.7081449h2.6065064c.3848026%200%20.6967468.30533409.6967468.7081449v14.5837102c0%20.3910976-.3138733.7081449-.6967468.7081449h-2.6065064c-.3848026%200-.6967468-.3053341-.6967468-.7081449z%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E);
  }

  [dir=ltr] body.new_header_design .top_audio_player>button:not(:last-child), [dir=ltr] body.new_header_design .top_audio_player>div:not(:last-child)
  {
    margin: 0px;
  }

  body.new_header_design .top_audio_player
  {
    gap: 0px;
  }

  body.new_header_design .top_nav_link
  {
    color: #fff;
    padding-top: 1px;
    font-size: 13px;
  }

  body.new_header_design .top_profile_img
  {
    height: 28px;
    width: 28px;
  }

  body.new_header_design .top_nav_link.top_profile_link.active
  {
    background-color: var(--blue_600);
  }

  body.new_header_design .top_nav_link.top_profile_link:hover
  {
    background-color: var(--blue_980_alpha12);
  }

  [dir=ltr] .TopNavBtn__profileName
  {
    margin-right: 10px;
    color: #fff;
  }

  [dir] .top_profile_mrow
  {
    padding: 0 15px;
    color: #2a5885;
  }

  [dir=ltr] .left_settings_inner
  {
    left: 0;
    right: 0;
    margin-top: 12px;
  }

  [dir] body.new_header_design #side_bar #l_pr .left_icon
  {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABIklEQVR42qyQzUoCcRTFf/c/M7luE4FESLRo064XSEKLpEcIIpnoCQINBCt6gqISo0VPkEZDiK/QrqWQRZu+1o4zt02JyUzfZ3W593cOhyvEaGOvNjyUsGuqBH6nu7S7vvgcxUmc2UnYHsoMgMKVHfhzJTf38GVAad8b6Tp6KTA9cLoOAtI7bva+f2k+mI/ro11HGxFmgCnLolk4OUtGNihUvTETagOY5HO1VCW9lc+0eg0Klfq4CbX5DTNASkSbxYPzCQApHnkpEW0AKX6mtgWzRkRPf2EGSAZQ7f1gs3KhA0A9dHzX6VgSiDkE5vuP5dWsANhx8ZaGa+Xl3N3bg10T6k0UZ+ICSvmF2/d5eyXTjuMMf9S/Brz0zY8R7FMU+zoAUbpdUO5QwDcAAAAASUVORK5CYII=") no-repeat;
    background-position: center;
    margin-left: 1px;
  }

  [dir] body.new_header_design #side_bar li#l_pr .left_row .LeftMenu__icon>svg
  {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABIklEQVR42qyQzUoCcRTFf/c/M7luE4FESLRo064XSEKLpEcIIpnoCQINBCt6gqISo0VPkEZDiK/QrqWQRZu+1o4zt02JyUzfZ3W593cOhyvEaGOvNjyUsGuqBH6nu7S7vvgcxUmc2UnYHsoMgMKVHfhzJTf38GVAad8b6Tp6KTA9cLoOAtI7bva+f2k+mI/ro11HGxFmgCnLolk4OUtGNihUvTETagOY5HO1VCW9lc+0eg0Klfq4CbX5DTNASkSbxYPzCQApHnkpEW0AKX6mtgWzRkRPf2EGSAZQ7f1gs3KhA0A9dHzX6VgSiDkE5vuP5dWsANhx8ZaGa+Xl3N3bg10T6k0UZ+ICSvmF2/d5eyXTjuMMf9S/Brz0zY8R7FMU+zoAUbpdUO5QwDcAAAAASUVORK5CYII=") no-repeat;
    background-position: center;
    margin-left: 1px;
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar li#l_pr .left_row .LeftMenu__icon>svg path
  {
    fill: #0000;
  }


  [dir] body.new_header_design #side_bar #l_pr
  {
    margin-left: -1px;
  }

  [dir] body.new_header_design #side_bar #l_nwsf .left_icon
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAAuElEQVR42qSRTQrCMBCF3ySeoD1DewldS68h5BKCgULdeYUB8RQGcZlT1DPUvT9pXAk1phjs2+ULH5M3IQyi+WgBmiMhBFgRoCQRADywEJiQ2diFBPJaVdchq9lkDujeZ6HZeM3Gh3IoxtikZ4/KNZssZOvDOU/q7IBOs/mEj2fawrwU5Xa1vAzZZn8qyPXtT5lc335Ndn28c9hHAkWjKmpURV6KMjog9k2Tt52QmyDA/iHeAdq9BgBnYzjVz3v7nQAAAABJRU5ErkJggg==");
    height: 14px;
    background-position: center;
    margin-left: -1px;
  }

  [dir] body.new_header_design #side_bar li#l_nwsf .left_row .LeftMenu__icon>svg
  {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAAuElEQVR42qSRTQrCMBCF3ySeoD1DewldS68h5BKCgULdeYUB8RQGcZlT1DPUvT9pXAk1phjs2+ULH5M3IQyi+WgBmiMhBFgRoCQRADywEJiQ2diFBPJaVdchq9lkDujeZ6HZeM3Gh3IoxtikZ4/KNZssZOvDOU/q7IBOs/mEj2fawrwU5Xa1vAzZZn8qyPXtT5lc335Ndn28c9hHAkWjKmpURV6KMjog9k2Tt52QmyDA/iHeAdq9BgBnYzjVz3v7nQAAAABJRU5ErkJggg==") no-repeat;
    height: 14px;
    background-position: center;
    margin-left: -1px;
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar li#l_nwsf .left_row .LeftMenu__icon>svg path
  {
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar #l_msg .left_icon
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABX0lEQVR42pSRvyvEcRjHX8/nDpmYxWIyKFlIYjLc+ZHEQJTBr8V/4E7ne+IPkAF3i2xkoXPfWyQDA0qxoRSZviilrr7fz2O4E4Nwr+V5hve75937EYok0rkaqzpr0T6BegCFO4Ps+YGuLM1EnvgBAZhPZXsUtoBqfuZVVUcXp6KZuVS2xZaFb5fHuzwAiacyzWBOgXJ+J4/QGrLWC4w5Fxh2JiKHBjHOP8wAFShOYqr7AeVClYPEmttgUDr4P52FoVdARRC2SQP4lIiISHHrNMBxCd6j4ncaC0EwEk9nm7BygmjlXyWGVFtAnwMxd0AZsGuSE5FLMQwC3i/mFxEZuK56uw7ErBbN7yHVBflUxDbcIRHdBgIgX0jKjcC+r+GV8seQ59flN0UZATyxOupMR93wVzE6JugZlpgzHXW/n4+ncu221t8Rpa2gZeZTI6W0H1t3e8XoInCfnIz0A3wMAMqFhCaYz44+AAAAAElFTkSuQmCC");
    height: 12px;
    background-position: center;
  }

  [dir] body.new_header_design #side_bar li#l_msg .left_row .LeftMenu__icon>svg
  {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABX0lEQVR42pSRvyvEcRjHX8/nDpmYxWIyKFlIYjLc+ZHEQJTBr8V/4E7ne+IPkAF3i2xkoXPfWyQDA0qxoRSZviilrr7fz2O4E4Nwr+V5hve75937EYok0rkaqzpr0T6BegCFO4Ps+YGuLM1EnvgBAZhPZXsUtoBqfuZVVUcXp6KZuVS2xZaFb5fHuzwAiacyzWBOgXJ+J4/QGrLWC4w5Fxh2JiKHBjHOP8wAFShOYqr7AeVClYPEmttgUDr4P52FoVdARRC2SQP4lIiISHHrNMBxCd6j4ncaC0EwEk9nm7BygmjlXyWGVFtAnwMxd0AZsGuSE5FLMQwC3i/mFxEZuK56uw7ErBbN7yHVBflUxDbcIRHdBgIgX0jKjcC+r+GV8seQ59flN0UZATyxOupMR93wVzE6JugZlpgzHXW/n4+ncu221t8Rpa2gZeZTI6W0H1t3e8XoInCfnIz0A3wMAMqFhCaYz44+AAAAAElFTkSuQmCC") no-repeat;
    height: 12px;
    background-position: center;
    margin-left: -1px;
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar li#l_msg .left_row .LeftMenu__icon>svg path
  {
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar #l_fr .left_icon
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAANCAYAAACdKY9CAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAA8klEQVR42qSQMUtCURiGn++ci4pxr7XHXVoc+g0Nd2lodyhpam0yanARRBBUgraGaLB+QBAtQf+hraEpas8rIYinr8HE6xVU8N3e93ufc853hIROr56yWxumoUp5nGjXBv1qrVQaTjpeEtjMmwtVKtNEzka9IAbqk8Qwq6OURwyHSZ8GttMASrgI+JwDhI9FwP3cBb9yl/QzS9sgbrrY90HKAKLStYVei3UkAOc3D35GcyeCHgC7QOF//o3wivI4yMht+3j/R2rXz6Gz7gXYWXL0mxsRGWfd5dLy+HuLxqNjgL2V369ERpB3wK3QV1W+/gYAk0M+r0rQleoAAAAASUVORK5CYII=");
    height: 13px;
    background-position: center;
  }

  [dir] body.new_header_design #side_bar li#l_fr .left_row .LeftMenu__icon>svg
  {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAANCAYAAACdKY9CAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAA8klEQVR42qSQMUtCURiGn++ci4pxr7XHXVoc+g0Nd2lodyhpam0yanARRBBUgraGaLB+QBAtQf+hraEpas8rIYinr8HE6xVU8N3e93ufc853hIROr56yWxumoUp5nGjXBv1qrVQaTjpeEtjMmwtVKtNEzka9IAbqk8Qwq6OURwyHSZ8GttMASrgI+JwDhI9FwP3cBb9yl/QzS9sgbrrY90HKAKLStYVei3UkAOc3D35GcyeCHgC7QOF//o3wivI4yMht+3j/R2rXz6Gz7gXYWXL0mxsRGWfd5dLy+HuLxqNjgL2V369ERpB3wK3QV1W+/gYAk0M+r0rQleoAAAAASUVORK5CYII=") no-repeat;
    height: 13px;
    background-position: center;
    margin-left: -1px;
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar li#l_fr .left_row .LeftMenu__icon>svg path
  {
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar #l_gr .left_icon, [dir] body.new_header_design #side_bar .l_comm .left_icon
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAA9UlEQVR42qyRTytEcRSGn/d3ZWsxO92VP5+B1YjUfAHZKsVO1Gxd3ULJyqz9KSsfgGRKlnwGCWnExsbCQrn3tVGuuTV3Ft7VOU+dp96OKGR9vz0j+RjA1sLWUuOqFwcIRQFyC4iBWLBXybsFskYL61gVLwks3xfmuypermCtAh2gE8RaJf+PCCA5Op8iDytYk8g1LCO/YW5yq7W93LhODtqbmCbyi9BlCNFuujj7oOTwYh5zUqrzm8xobuB58CyLP5+A4R/+Htn1gNnocQwQCadpOv0ldFrgQ5m0E7BG+qg6DpD77weAiWD5tg/BI4ACH1389XsAdU1jh7qonysAAAAASUVORK5CYII=");
    height: 11px;
    background-position: center;
  }

  [dir] body.new_header_design #side_bar li#l_gr .left_row .LeftMenu__icon>svg
  {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAA9UlEQVR42qyRTytEcRSGn/d3ZWsxO92VP5+B1YjUfAHZKsVO1Gxd3ULJyqz9KSsfgGRKlnwGCWnExsbCQrn3tVGuuTV3Ft7VOU+dp96OKGR9vz0j+RjA1sLWUuOqFwcIRQFyC4iBWLBXybsFskYL61gVLwks3xfmuypermCtAh2gE8RaJf+PCCA5Op8iDytYk8g1LCO/YW5yq7W93LhODtqbmCbyi9BlCNFuujj7oOTwYh5zUqrzm8xobuB58CyLP5+A4R/+Htn1gNnocQwQCadpOv0ldFrgQ5m0E7BG+qg6DpD77weAiWD5tg/BI4ACH1389XsAdU1jh7qonysAAAAASUVORK5CYII=") no-repeat;
    height: 11px;
    background-position: center;
    margin-left: -1px;
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar li#l_gr .left_row .LeftMenu__icon>svg path
  {
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar #l_ph .left_icon
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAANCAYAAACgu+4kAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABSElEQVR42pyRvUoDURCFv7m7d5MgGFJG1NjbJCDoIxhBsDAQfADttVUI1ipWksJaNA+g+AhW+gjaaGkV3WT33rFS1k38PeWZMx/zI2TU6XSMn168UWSB8boPXDLf2Vp9eTdMtupmlta/aQaYc6HdzBqye3q9JugxMAmU89Av9AzEiB4YQU+AGlDJND+KSnsgg8mg6Mui0gaeMoAKUEVlPwSqOfpjany94I2LNNpIY0iTpFcUW3dW73L54si4orJd8MY5uBWkK0jXRuFtrEkiqjv5/AjAlNxViraA2Yxds9a2Bj68/BHwV40A/GvQTIeuBzx8+n8Y9QomXcnnw7yhokdFsY14mDSstS2AIIx6xMNIrRz+ZoUpZ/UussFyUHLnQ28ufBo3x3zgY4I+MJHzqypy5mIhChyKfHWCvlFkD3j5x/36KrL7NgDV03PBqvwXiwAAAABJRU5ErkJggg==");
    height: 13px;
    background-position: center;
  }

  [dir] body.new_header_design #side_bar li#l_ph .left_row .LeftMenu__icon>svg
  {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAANCAYAAACgu+4kAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABSElEQVR42pyRvUoDURCFv7m7d5MgGFJG1NjbJCDoIxhBsDAQfADttVUI1ipWksJaNA+g+AhW+gjaaGkV3WT33rFS1k38PeWZMx/zI2TU6XSMn168UWSB8boPXDLf2Vp9eTdMtupmlta/aQaYc6HdzBqye3q9JugxMAmU89Av9AzEiB4YQU+AGlDJND+KSnsgg8mg6Mui0gaeMoAKUEVlPwSqOfpjany94I2LNNpIY0iTpFcUW3dW73L54si4orJd8MY5uBWkK0jXRuFtrEkiqjv5/AjAlNxViraA2Yxds9a2Bj68/BHwV40A/GvQTIeuBzx8+n8Y9QomXcnnw7yhokdFsY14mDSstS2AIIx6xMNIrRz+ZoUpZ/UussFyUHLnQ28ufBo3x3zgY4I+MJHzqypy5mIhChyKfHWCvlFkD3j5x/36KrL7NgDV03PBqvwXiwAAAABJRU5ErkJggg==") no-repeat;
    height: 13px;
    background-position: center;
    margin-left: -1px;
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar li#l_ph .left_row .LeftMenu__icon>svg path
  {
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar #l_aud .left_icon
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQCAYAAADNo/U5AAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABBklEQVR42ryRMUvEQBCFv9ndWAiCoJ2Fnc0VlmKlCHKiF6wsr4ly/0FFSBR/g0a0OLSKZZorrrazvR9hYeF1xmStDBvJkYDgdG/mvZk3M0KLOEoSvTZd2NRWehZ8mUU8HY6XvCzbKRBfwAcWf2oV0cXDaB04wNIDNgBV19BUkOUV0E12VYuVJmJtpFXRqZ9UJT4rbZMw2J+U9u9Hs0VXJ3udv9r7Z1EYp8tNhyjjfJiuqMx7ymG79SSVzd3hCIB3E8bpfK5NBHJY/1i76iKBG/OlvVuBvpP/cElFIQMlNkLQCMll0I2NwNav1mMXXA+6L8BumTgGJSJnCG/A1MLjZ66Dpj2/BwBh7UI236vGdwAAAABJRU5ErkJggg==");
    height: 16px;
    background-position: center;
    margin-left: -1px;
  }

  [dir] body.new_header_design #side_bar li#l_aud .left_row .LeftMenu__icon>svg
  {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQCAYAAADNo/U5AAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABBklEQVR42ryRMUvEQBCFv9ndWAiCoJ2Fnc0VlmKlCHKiF6wsr4ly/0FFSBR/g0a0OLSKZZorrrazvR9hYeF1xmStDBvJkYDgdG/mvZk3M0KLOEoSvTZd2NRWehZ8mUU8HY6XvCzbKRBfwAcWf2oV0cXDaB04wNIDNgBV19BUkOUV0E12VYuVJmJtpFXRqZ9UJT4rbZMw2J+U9u9Hs0VXJ3udv9r7Z1EYp8tNhyjjfJiuqMx7ymG79SSVzd3hCIB3E8bpfK5NBHJY/1i76iKBG/OlvVuBvpP/cElFIQMlNkLQCMll0I2NwNav1mMXXA+6L8BumTgGJSJnCG/A1MLjZ66Dpj2/BwBh7UI236vGdwAAAABJRU5ErkJggg==") no-repeat;
    height: 16px;
    background-position: center;
    margin-left: -1px;
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar li#l_aud .left_row .LeftMenu__icon>svg path
  {
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar #l_vid .left_icon
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAAV0lEQVR42mKsm7vj6P//DFbNKR6MDAwMDLVzdvxnwAKQ5RkZGI4w/f/PYMVAIvjPwGDDiMsGQoCJgUzAhOwHmD9w+RFZnmwbR/04uPzIyMBwhAwLDwMGAJGuKVnYVTjyAAAAAElFTkSuQmCC");
    height: 14px;
    background-position: center;
  }

  [dir] body.new_header_design #side_bar li#l_vid .left_row .LeftMenu__icon>svg
  {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAAV0lEQVR42mKsm7vj6P//DFbNKR6MDAwMDLVzdvxnwAKQ5RkZGI4w/f/PYMVAIvjPwGDDiMsGQoCJgUzAhOwHmD9w+RFZnmwbR/04uPzIyMBwhAwLDwMGAJGuKVnYVTjyAAAAAElFTkSuQmCC") no-repeat;
    height: 14px;
    background-position: center;
    margin-left: -1px;
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar li#l_vid .left_row .LeftMenu__icon>svg path
  {
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar .genre10 .left_icon, [dir] body.new_header_design #side_bar #l_ap .left_icon
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABTklEQVR42oyQzytEcRTFP/f7nec1C8qGDdEspvwDVlNM8WSm8AdoahZIKaWUknqL2SgLUkosrSwshKyxQmwnCotnQZQfUZg310aMX/XO5tbpnHPPvcIHJhY2ah0nNovQC1wquiIiW2XFFZFuVPsEmlRlLRYPx/z+zAOAAPirq1Xlh5pdhVYiQGDPBG7a99MlA1B6rB6NagZQSJUaX4cBZHDx0Km3N2dAA4Bak5SwfBIh5qxY85g0dfY2W2ku5L1TtSb5S66arZwgiZa76g6ZWt6eB0Y+hZEbgMCcUUh9IyOaAcrQZgQSf0QfgEnZwHWsdeMq2guc/9GgOQbEf5A7z45kZnLe0wdVAtb9pa2jUMwu0Pz1GHENcFHhP34Jbc9Mruvp5zZ/IBOoNR5w9bVNi0bQSYRrYNOGb970UOf9fzcX8t6pDaVdYB8IBB1/HwA+bHTFpEL19AAAAABJRU5ErkJggg==");
    height: 11px;
    background-position: center;
  }

  [dir] body.new_header_design #side_bar li#l_svd .left_row .LeftMenu__icon>svg
  {
    background: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzdjOWNiOCI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi42OTcgNS4yOWMuMDc3LjMwNS41MTMuMzAxLjU4NC0uMDA2bC45OC00LjI1YTEuMzMzIDEuMzMzIDAgMDEyLjYyOS40MDFMMTAuNSA2LjVoLjEyOWEzLjM3MSAzLjM3MSAwIDAxMy4zNjggMy41NjNsLTEuMjQzLS43MjNDMTEuMDggOC4zNjcgOSA5LjU4NCA5IDExLjUwNHYzLjQ5MmMwIC4zMS4wNTQuNjAyLjE1My44N0E2LjE1MSA2LjE1MSAwIDAxNy44NyAxNkg3Yy0zLjcwNSAwLTUuNS0zLTUuNS01di0uMTg4QTMuMDYyIDMuMDYyIDAgMDE0LjU2MiA3Ljc1aC40MjRhMS4wMzcgMS4wMzcgMCAwMS4zMjggMi4wMjFsLS4wNTEuMDE3YS43NS43NSAwIDEwLjQ3NCAxLjQyM2wuMDUxLS4wMTdhMi41MzcgMi41MzcgMCAwMC0uODAyLTQuOTQ0aC0uNDI0Yy0uMzgyIDAtLjc1NC4wNDctMS4xMS4xMzZsLS4zNC00LjQ0YTEuMzQ0IDEuMzQ0IDAgMDEyLjY0Mi0uNDI4em03LjA0MiA2LjM1OGE2LjE0NSA2LjE0NSAwIDAxLTMuMTY3IDMuNzI2IDEuMDA3IDEuMDA3IDAgMDEtLjA3Mi0uMzc4di0zLjQ5MmEuOTk5Ljk5OSAwIDAxMS41LS44Njd6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBkPSJNMTUuMDAyIDEyLjM4M2ExLjAwNCAxLjAwNCAwIDAxMCAxLjczNEwxMiAxNS44NjNhLjk5OS45OTkgMCAwMS0xLjUtLjg2N3YtMy40OTJhLjk5OS45OTkgMCAwMTEuNS0uODY3eiIvPjwvZz48L3N2Zz4=") no-repeat;
    height: 16px;
    background-position: center;
    margin-left: -1px;
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar li#l_svd .left_row .LeftMenu__icon>svg path
  {
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar li#l_ap .left_row .LeftMenu__icon>svg
  {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABTklEQVR42oyQzytEcRTFP/f7nec1C8qGDdEspvwDVlNM8WSm8AdoahZIKaWUknqL2SgLUkosrSwshKyxQmwnCotnQZQfUZg310aMX/XO5tbpnHPPvcIHJhY2ah0nNovQC1wquiIiW2XFFZFuVPsEmlRlLRYPx/z+zAOAAPirq1Xlh5pdhVYiQGDPBG7a99MlA1B6rB6NagZQSJUaX4cBZHDx0Km3N2dAA4Bak5SwfBIh5qxY85g0dfY2W2ku5L1TtSb5S66arZwgiZa76g6ZWt6eB0Y+hZEbgMCcUUh9IyOaAcrQZgQSf0QfgEnZwHWsdeMq2guc/9GgOQbEf5A7z45kZnLe0wdVAtb9pa2jUMwu0Pz1GHENcFHhP34Jbc9Mruvp5zZ/IBOoNR5w9bVNi0bQSYRrYNOGb970UOf9fzcX8t6pDaVdYB8IBB1/HwA+bHTFpEL19AAAAABJRU5ErkJggg==") no-repeat;
    height: 11px;
    background-position: center;
    margin-left: -1px;
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar li#l_ap .left_row .LeftMenu__icon>svg path
  {
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar li#l_stickers .left_row .LeftMenu__icon>svg
  {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAAK4SURBVHjafJPPixVHEMc7eBVXBE9e/B9yzCknvYh4lk0iCLkFEsGT8/PNe29nag6BENzgdE93v1vIKt66qsSDN/cfEA/eVhASY3Rx16wz3TnMzNMVScNAM3R95lufrhHikzW/c//svKV7W5r2wNK7ylJfW3oDhh+D4Zv59s6G+L8Fmr+tLb9eaApR40LUuBA3LiTShUxhXxoKS01vQPM1sPTFZwCYgeUwa7GPR8DnnkQ6P28pgMbFMRBovlpbDoXCo0SijxoXMoW+aIf9lOijvS8NBdD8nRBCiPTX30/Wlv+aqSFBIl2/0PisaHE/Vx+AW4a6hcYuHiFx4zxYfpnf/uOUAMM/LjWFVLo1pFzxZbD45QTJFfra8g/1ii9kCt+P57pcYQDDPwkw/CiRQ4p4/Cqs+FzUOJFK5+PGhVS6vjYPztcGTybSvR/d9LF0fal5Vyw07sfSrXvPFXqweBGMu5RK56ebqS1frwx/lSvcT8bzceN80eKBSBX6+MPLSVyXKfw3V+iTAeQnD9FxwSFT6EUiXTdGC5l0fabwbSpdn8rjBYl0IZXuXabwMJXOx3Kd/Egk0h1mCrsxtq9WdAcs3QRLL0pDb5NBuC8NHVaGNitLv6QfOVxqeiqWmpYzhWFM5Jca/6ksfV0bugIregiWnpSGdmFF5ypDJ8DQbiyHoastBzB8S8y2754uDb2Kx95T6TxYOgDDNViajamq2tL3YKlb6CFF0WJXW/47397ZEFHjRKX5WqYwxI3rM4V9obBPJR5kCl/mCv+ct/h60eLRvMV+El0ZDqB5M2rcMPZR48RWiz+nEsNMYR8Ns+GnvuP1P4N9aairLQfQmK8BEyRqnMglqqLFg1mLYRS6vp10dFBbfgWav5lqjq01aHtnAwzfmCl8HkvXj566QuEeGL5V/HbvzKfF/w0A4FC1zdIq2T4AAAAASUVORK5CYII=") no-repeat;
    height: 17px;
    background-position: center;
    margin-left: -1px;
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar li#l_stickers .left_row .LeftMenu__icon>svg path
  {
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar li#l_mini_apps .left_row .LeftMenu__icon>svg
  {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAA5UlEQVR42rSRT0rDQBhH38wXSCk2eAtb6iWyEUHwz8LZCQ102xu0EOgNXIciLlvcCMrQaxSqvYUkUoJYx42L1sZYCP1t3zy+gafYYb3bZ/+wrkcOxBO/E0dhDqAGiZ0DrV/vF8PuaXNNfADOfpgV8a/iKMzVILGu6NprkHptkFUaTIDzTeqm70F2qcu++5kFd9sigDo5yBr3mgorlb1G2gEet4mbiq7daOClwFtMjFnFxny8Lb8M8LTGrEjtIo7CXFVJVWn/du4ndqbguIjrAhHg6Ho8FgBVwveXau/yn50BXAn/HgB/cVBGac74bAAAAABJRU5ErkJggg==") no-repeat;
    height: 15px;
    background-position: center;
    margin-left: -1px;
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar li#l_mini_apps .left_row .LeftMenu__icon>svg path
  {
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar #l_mk .left_icon
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAPCAYAAADQ4S5JAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAArklEQVR42uSRQQqCUBRFz/tuIJq3msxwHSFuIZBApGm0AMOpSwjJxjnMYXPX8V8DFUIhc9wZfS7nPt7jCx9EWbEyVs+A10V3Fd0fd/6rd8xAfgJLUQ1FNQQWovKIsmI1KnSTa6ep3CTw8yTwc6ep1kBtLKdRAfBENY3j2PZB905Bt30mh8u1ANkAwncU9GZA3B9kWkdcM1hrCjNHHh39VwU7w7cGtGx/cRIFLd8DAAL8PBYrQ8lXAAAAAElFTkSuQmCC");
    height: 15px;
    background-position: center;
  }

  [dir] body.new_header_design #side_bar li#l_mk .left_row .LeftMenu__icon>svg
  {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAPCAYAAADQ4S5JAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAArklEQVR42uSRQQqCUBRFz/tuIJq3msxwHSFuIZBApGm0AMOpSwjJxjnMYXPX8V8DFUIhc9wZfS7nPt7jCx9EWbEyVs+A10V3Fd0fd/6rd8xAfgJLUQ1FNQQWovKIsmI1KnSTa6ep3CTw8yTwc6ep1kBtLKdRAfBENY3j2PZB905Bt30mh8u1ANkAwncU9GZA3B9kWkdcM1hrCjNHHh39VwU7w7cGtGx/cRIFLd8DAAL8PBYrQ8lXAAAAAElFTkSuQmCC") no-repeat;
    height: 15px;
    background-position: center;
    margin-left: -1px;
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar li#l_mk .left_row .LeftMenu__icon>svg path
  {
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar #l_fav .left_icon
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAANCAYAAACZ3F9/AAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABSklEQVR42oRRPUsDQRSctxuDQT3UNAGJaGljI0IgpLCIeD/AKwwWksRUFmIpgYPDWmwlqbS6/AETLCwUbLWxszGKleKJGNTdZ+FdyMcdvmaXYebNMI8QNsxUrTfvAQjZvp63bVsPUkSYbr/eygGYAzCrZjLZME6oUJAuBH8iKoRxaBCwXTeuPOMJQNKHXqXhpWzL+uoTVmtNB9AbPdAIgPTAvgeAv7sMxkkMoDOASgBSiJ50T7hnJfhcOKXVqx+hFwFu4f+5kCSWDormZXfNuuvKhbeJQybaiSjj6M7w9hqWpfpabViW0kSPUVYMageioXMQkI9OqfOh59h13cS4Z7wAGPWrO/6zom3//ZSx+LS9tdLpcxx7n8z5og6AslM0K07RrIB5E8AHiBNadbJDUYVWSQZuJWjZKa3VAtwpm6cSlAFwo1lMBfjvAPc7ZOe/CKgiAAAAAElFTkSuQmCC");
    height: 13px;
    background-position: center;
  }

  [dir] body.new_header_design #side_bar li#l_fav .left_row .LeftMenu__icon>svg
  {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAANCAYAAACZ3F9/AAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABSklEQVR42oRRPUsDQRSctxuDQT3UNAGJaGljI0IgpLCIeD/AKwwWksRUFmIpgYPDWmwlqbS6/AETLCwUbLWxszGKleKJGNTdZ+FdyMcdvmaXYebNMI8QNsxUrTfvAQjZvp63bVsPUkSYbr/eygGYAzCrZjLZME6oUJAuBH8iKoRxaBCwXTeuPOMJQNKHXqXhpWzL+uoTVmtNB9AbPdAIgPTAvgeAv7sMxkkMoDOASgBSiJ50T7hnJfhcOKXVqx+hFwFu4f+5kCSWDormZXfNuuvKhbeJQybaiSjj6M7w9hqWpfpabViW0kSPUVYMageioXMQkI9OqfOh59h13cS4Z7wAGPWrO/6zom3//ZSx+LS9tdLpcxx7n8z5og6AslM0K07RrIB5E8AHiBNadbJDUYVWSQZuJWjZKa3VAtwpm6cSlAFwo1lMBfjvAPc7ZOe/CKgiAAAAAElFTkSuQmCC") no-repeat;
    height: 13px;
    background-position: center;
    margin-left: -1px;
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar li#l_fav .left_row .LeftMenu__icon>svg path
  {
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar #l_doc .left_icon
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOCAYAAAAbvf3sAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAAl0lEQVR42mKsnbN9JwMDoysDAwMjAxJoTvFgrJu9vaEp1bMBWZyJgYHRBV0xDPxnZKyvm70dXQMDEwMe8J+Rsb5uzo4OZA0EwX8GhnKYJsbaOTv+Y1PE/OQE818Zi1cMDAzCMDHG//8bWXCZ+kfWyqUlyVWUgZERxUCcNuACTAwkguGi4R8J6v8xMTD83wOJTGIi/P8ewADAJytGY2g1awAAAABJRU5ErkJggg==");
    height: 14px;
    background-position: center;
  }

  [dir] body.new_header_design #side_bar li#l_doc .left_row .LeftMenu__icon>svg
  {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOCAYAAAAbvf3sAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAAl0lEQVR42mKsnbN9JwMDoysDAwMjAxJoTvFgrJu9vaEp1bMBWZyJgYHRBV0xDPxnZKyvm70dXQMDEwMe8J+Rsb5uzo4OZA0EwX8GhnKYJsbaOTv+Y1PE/OQE818Zi1cMDAzCMDHG//8bWXCZ+kfWyqUlyVWUgZERxUCcNuACTAwkguGi4R8J6v8xMTD83wOJTGIi/P8ewADAJytGY2g1awAAAABJRU5ErkJggg==") no-repeat;
    height: 14px;
    background-position: center;
    margin-left: -1px;
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar li#l_doc .left_row .LeftMenu__icon>svg path
  {
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar .left_icon, [dir] body.new_header_design #l_frb_rgstr .left_icon
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABcUlEQVR42oySz0uUURSGn/d+KUoYSGLUqkX7Nm3ColVQ+i+YIkMUiIvsBy1mhhsDZbtqEerMh4MIgRtzNZ/t0oV/QJtaRwtp5zL7zmkx3+AwKtO7fO/7nHPuuVf0KG5uDtrhyJKjB4W1fpCPvVx9dOOoO3euF8wPL7wBnnRZi5eS3wY8786FXhAxDWCmCZPfbnua6Y2dBDtKLASTAHCsP+g0AYJrD7Hb7ujNvuBBPlYWvD0e3ZeSn0MV/leVRuaVRuZnnQeAapo9LNdbk/2KVes7d6tpqwQQnq3vnHfnlaSN2MiunQXFtdZVl39y9PpFuj0Shv/4U+AyMJqj9zHGE/eOMYY810fgIs74IEOLwQaOUuBzsdLvMUY7BTScH+2ItsySZbUX8WUCbA8Q0DS3laCwD2BuNyU9FpoFDPmtWun+vjpVy/VsXuLdad+w0F/EQq10b5miw/ETpNl1Ny1Ifge4Uti/gK8k+Yfa3NS3TvbfADapgLJvII32AAAAAElFTkSuQmCC");
    height: 15px;
    background-position: center;
  }

  [dir] body.new_header_design #side_bar #l_svd .left_icon
  {
    background-image: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE2IiB3aWR0aD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzdjOWNiOCI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi42OTcgNS4yOWMuMDc3LjMwNS41MTMuMzAxLjU4NC0uMDA2bC45OC00LjI1YTEuMzMzIDEuMzMzIDAgMDEyLjYyOS40MDFMMTAuNSA2LjVoLjEyOWEzLjM3MSAzLjM3MSAwIDAxMy4zNjggMy41NjNsLTEuMjQzLS43MjNDMTEuMDggOC4zNjcgOSA5LjU4NCA5IDExLjUwNHYzLjQ5MmMwIC4zMS4wNTQuNjAyLjE1My44N0E2LjE1MSA2LjE1MSAwIDAxNy44NyAxNkg3Yy0zLjcwNSAwLTUuNS0zLTUuNS01di0uMTg4QTMuMDYyIDMuMDYyIDAgMDE0LjU2MiA3Ljc1aC40MjRhMS4wMzcgMS4wMzcgMCAwMS4zMjggMi4wMjFsLS4wNTEuMDE3YS43NS43NSAwIDEwLjQ3NCAxLjQyM2wuMDUxLS4wMTdhMi41MzcgMi41MzcgMCAwMC0uODAyLTQuOTQ0aC0uNDI0Yy0uMzgyIDAtLjc1NC4wNDctMS4xMS4xMzZsLS4zNC00LjQ0YTEuMzQ0IDEuMzQ0IDAgMDEyLjY0Mi0uNDI4em03LjA0MiA2LjM1OGE2LjE0NSA2LjE0NSAwIDAxLTMuMTY3IDMuNzI2IDEuMDA3IDEuMDA3IDAgMDEtLjA3Mi0uMzc4di0zLjQ5MmEuOTk5Ljk5OSAwIDAxMS41LS44Njd6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBkPSJNMTUuMDAyIDEyLjM4M2ExLjAwNCAxLjAwNCAwIDAxMCAxLjczNEwxMiAxNS44NjNhLjk5OS45OTkgMCAwMS0xLjUtLjg2N3YtMy40OTJhLjk5OS45OTkgMCAwMTEuNS0uODY3eiIvPjwvZz48L3N2Zz4=");
    height: 16px;
    background-position: center;
  }

  [dir] body.new_header_design #side_bar #l_vkp .left_icon
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABr0lEQVR42oyTMWhTURSGv3NuIBhIqFhHURwqWOOioI5aQmvAweW5OTQPg0OX4vrgSWdRgkIJkY4dnVqjrY5ugkIp6KQ4BTo9tzT3HgebksSY5kyXe/9zzn/uf35hJJKNrTIhF2O2AFw4uv4hsKtIK40X9wbx0j+sNLbzpwv63KAOKOPDi7CuxWw1jaLucYGVxnZ+pqBvgdtME2IfXfH33TSKugowc0pfTJ0MYHLHZ6VnAJpsbJURHo1inD88uxYviStleYeUTdgcgTxOmu35nHhXszEzp/V7B0mrbT6jB/aVXniA04vAjX4PUaupQeUEwjngmjh3X7BPgw8BqShw7oQCPeCzef/GkJsjEp4fK5cL/hLAWrwkHT9bcBoeovIUuDWO3i/g8pDY6r4BkrTaBgf4oIiMEQN+qsDOJAbmdO5/sym2I2nr3RWPfQHcUHWnc+LD9wl/452Gq5rGi3sirP+zbJOTQeRVulzdVwAtZqvAh+k3kd1O78wT+qZJo6jrSlkVeAn4SbQRaXTCbLVZv3445MZjOzfb86JWC0hFjuxsf+383ml4nS5X9wfxfwYAGvaPBRNBSuMAAAAASUVORK5CYII=");
    height: 16px;
    background-position: center;
  }

  [dir] body.new_header_design #side_bar li#l_vkp .left_row .LeftMenu__icon>svg
  {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABr0lEQVR42oyTMWhTURSGv3NuIBhIqFhHURwqWOOioI5aQmvAweW5OTQPg0OX4vrgSWdRgkIJkY4dnVqjrY5ugkIp6KQ4BTo9tzT3HgebksSY5kyXe/9zzn/uf35hJJKNrTIhF2O2AFw4uv4hsKtIK40X9wbx0j+sNLbzpwv63KAOKOPDi7CuxWw1jaLucYGVxnZ+pqBvgdtME2IfXfH33TSKugowc0pfTJ0MYHLHZ6VnAJpsbJURHo1inD88uxYviStleYeUTdgcgTxOmu35nHhXszEzp/V7B0mrbT6jB/aVXniA04vAjX4PUaupQeUEwjngmjh3X7BPgw8BqShw7oQCPeCzef/GkJsjEp4fK5cL/hLAWrwkHT9bcBoeovIUuDWO3i/g8pDY6r4BkrTaBgf4oIiMEQN+qsDOJAbmdO5/sym2I2nr3RWPfQHcUHWnc+LD9wl/452Gq5rGi3sirP+zbJOTQeRVulzdVwAtZqvAh+k3kd1O78wT+qZJo6jrSlkVeAn4SbQRaXTCbLVZv3445MZjOzfb86JWC0hFjuxsf+383ml4nS5X9wfxfwYAGvaPBRNBSuMAAAAASUVORK5CYII=") no-repeat;
    height: 16px;
    background-position: center;
    margin-left: -1px;
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar li#l_vkp .left_row .LeftMenu__icon>svg path
  {
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar #l_job .left_icon
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAANCAYAAAB2HjRBAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAAeUlEQVR42sSROwqEQBAF64m30kAzvYfeYo3cW+g9NFNw7tUmGwx+EHcEK+t+VEPzxIamHycgY8/cVkXuL+QPn27IJE1mln/rcr7aq+kHB0q4icBF/4gABmlEAEFyEPrVY9ugrQp59R3m8dnVI+HRn1+WBe6mtwCsAwDlgCZ7IKgULwAAAABJRU5ErkJggg==");
    height: 13px;
    background-position: center;
  }

  [dir] body.new_header_design #side_bar li#l_job .left_row .LeftMenu__icon>svg
  {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAANCAYAAAB2HjRBAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAAeUlEQVR42sSROwqEQBAF64m30kAzvYfeYo3cW+g9NFNw7tUmGwx+EHcEK+t+VEPzxIamHycgY8/cVkXuL+QPn27IJE1mln/rcr7aq+kHB0q4icBF/4gABmlEAEFyEPrVY9ugrQp59R3m8dnVI+HRn1+WBe6mtwCsAwDlgCZ7IKgULwAAAABJRU5ErkJggg==") no-repeat;
    height: 13px;
    background-position: center;
    margin-left: -1px;
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar li#l_job .left_row .LeftMenu__icon>svg path
  {
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar #l_fortune .left_icon
  {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAA4UlEQVQ4EZWSzwqCQBDG98V7k7x06tIlCjwUQR7ag5ZopGHaH6GkSHqDyU+YZdNN6jDsODO//WZ2FM/yRSabu3uCmXKICVMizQvq9e3a4JtqjOBo4SsQ/k9gkOQKYlXEmnBLsbiXFGfXD0OsE8TNXnSi+FiBmsltRk1VpXi5PciayFab3C5yqGFlBcow/QoBHtguoaYFcsA0I+f0s1YcOwHBHP9AmCesZtUNMeSwmuFsXasKLzp3tsgz6icYYa92f4HWVBIY9Tj4tbA/PMByk6jL4PNe9X0qUB8cPrfWjPP3GyNippiA3oLWAAAAAElFTkSuQmCC") no-repeat center;
  }

  [dir] body.new_header_design #side_bar #l_fortune .left_icon:hover
  {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAA20lEQVQ4EZWSTQuCQBCG94/3T/LSqUuXKPBQBHloD1qikYYfJYbUr5h8hVk2naQOLzvO7DMfO6q8akjS1r8SJMXgU1KgqJ80mbqdYEt3RHCxCw0I+ycwymoDcVX4+vCgYvV4UVo2H4JvFETmILlTemtBS/pcUr+qqYiszkoP2uR2EbMrG1DHxVcI8Mz1CXe4ZQOyQ5qRY/bZgUsvIsgLc8I8cTurLfgQw2rmm2NXVQVJNdoiz2ifYJR7uPwFOmtNYMyM+LWwPzzA/pSZZLB5r+Kr2oPD5tb6fv5+A+PwmFwJcV7mAAAAAElFTkSuQmCC") no-repeat center;
  }

  [dir] body.new_header_design #side_bar #l_ads .left_icon
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAANCAYAAACZ3F9/AAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAAz0lEQVR42pyRvY4BYRiFn/fLRDm9ViHcg8hKSMZF0DC3oFmxYihcg59G5wboEBI3sKvVbW8a1c6roPAzi5lTnuQ55yRHiKjmYPYhImN5F/gczXImkC+EIoDVnk4Tf77tARUgGQZ5dUeMypqrGivw7Q7QiDrZKFSJIQNoLFBgEgs0tt8S6AO/UcCHO1rD+Uohj5L3XGf93x0mJOznkpm9Nnu18sZznZKqFoC9dU8p7ABEgkzYxK5bXgKph0ZV/T4HSPrVHTc6HHULLID5M/A0AF+eOcxtx9YgAAAAAElFTkSuQmCC");
    height: 13px;
    background-position: center;
  }

  [dir] body.new_header_design #side_bar li#l_ads .left_row .LeftMenu__icon>svg
  {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAANCAYAAACZ3F9/AAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAAz0lEQVR42pyRvY4BYRiFn/fLRDm9ViHcg8hKSMZF0DC3oFmxYihcg59G5wboEBI3sKvVbW8a1c6roPAzi5lTnuQ55yRHiKjmYPYhImN5F/gczXImkC+EIoDVnk4Tf77tARUgGQZ5dUeMypqrGivw7Q7QiDrZKFSJIQNoLFBgEgs0tt8S6AO/UcCHO1rD+Uohj5L3XGf93x0mJOznkpm9Nnu18sZznZKqFoC9dU8p7ABEgkzYxK5bXgKph0ZV/T4HSPrVHTc6HHULLID5M/A0AF+eOcxtx9YgAAAAAElFTkSuQmCC") no-repeat;
    background-position: center;
    margin-left: -1px;
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar li#l_ads .left_row .LeftMenu__icon>svg path
  {
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar .l_comm .left_row .LeftMenu__icon>svg
  {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAA9UlEQVR42qyRTytEcRSGn/d3ZWsxO92VP5+B1YjUfAHZKsVO1Gxd3ULJyqz9KSsfgGRKlnwGCWnExsbCQrn3tVGuuTV3Ft7VOU+dp96OKGR9vz0j+RjA1sLWUuOqFwcIRQFyC4iBWLBXybsFskYL61gVLwks3xfmuypermCtAh2gE8RaJf+PCCA5Op8iDytYk8g1LCO/YW5yq7W93LhODtqbmCbyi9BlCNFuujj7oOTwYh5zUqrzm8xobuB58CyLP5+A4R/+Htn1gNnocQwQCadpOv0ldFrgQ5m0E7BG+qg6DpD77weAiWD5tg/BI4ACH1389XsAdU1jh7qonysAAAAASUVORK5CYII=") no-repeat;
    height: 11px;
    background-position: center;
    margin-left: -1px;
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar .l_comm .left_row .LeftMenu__icon>svg path
  {
    fill: #0000;
  }

  [dir] body.new_header_design #side_bar #l_covid19 .left_icon
  {
    background-image: url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE4IiB3aWR0aD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkgMS41Yy41NTIzIDAgMSAuNDQ3NyAxIDFhLjk5ODUuOTk4NSAwIDAxLS4zOTk5LjhsLS4wMDA1LjczNTZjLjQ3ODQuMDU3Mi45MzYuMTgxOSAxLjM2MzEuMzY0M2wuMzY3MS0uNjM3NGEuOTk4NS45OTg1IDAgMDEuMDU0Mi0uODkxN2MuMjc2MS0uNDc4My44ODc3LS42NDIxIDEuMzY2LS4zNjYuNDc4My4yNzYyLjY0MjIuODg3Ny4zNjYgMS4zNjZhLjk5ODUuOTk4NSAwIDAxLS43NDYzLjQ5MjlsLS4zNjc1LjYzNzZjLjM3NzIuMjgzNi43MTI5LjYxOTMuOTk2NS45OTY1bC42Mzc3LS4zNjg3YS45OTg1Ljk5ODUgMCAwMS40OTI4LS43NDUxYy40NzgzLS4yNzYyIDEuMDg5OC0uMTEyMyAxLjM2Ni4zNjYuMjc2MS40NzgzLjExMjMgMS4wODk5LS4zNjYgMS4zNjZhLjk5ODUuOTk4NSAwIDAxLS44OTI4LjA1MzdsLS42MzYzLjM2NzZjLjE4MjMuNDI2OC4zMDcuODg0LjM2NDIgMS4zNjJsLjczNjQtLjAwMDRBLjk5ODUuOTk4NSAwIDAxMTUuNSA4Yy41NTIzIDAgMSAuNDQ3NyAxIDFzLS40NDc3IDEtMSAxYS45OTg1Ljk5ODUgMCAwMS0uOC0uMzk5OWwtLjczNTYtLjAwMDVhNC45NjY1IDQuOTY2NSAwIDAxLS4zNjQzIDEuMzYzMWwuNjM3NC4zNjcxYS45OTg1Ljk5ODUgMCAwMS44OTE3LjA1NDJjLjQ3ODMuMjc2MS42NDIxLjg4NzcuMzY2IDEuMzY2LS4yNzYyLjQ3ODMtLjg4NzcuNjQyMi0xLjM2Ni4zNjZhLjk5ODUuOTk4NSAwIDAxLS40OTI5LS43NDYzbC0uNjM3Ni0uMzY3NWE1LjAyOTMgNS4wMjkzIDAgMDEtLjk5NjUuOTk2NWwuMzY4Ny42Mzc3YS45OTg1Ljk5ODUgMCAwMS43NDUxLjQ5MjhjLjI3NjIuNDc4My4xMTIzIDEuMDg5OC0uMzY2IDEuMzY2LS40NzgzLjI3NjEtMS4wODk5LjExMjMtMS4zNjYtLjM2NmEuOTk4NS45OTg1IDAgMDEtLjA1MzctLjg5MjhsLS4zNjc2LS42MzYzYTQuOTY2NSA0Ljk2NjUgMCAwMS0xLjM2Mi4zNjQybC4wMDA0LjczNjRBLjk5ODUuOTk4NSAwIDAxMTAgMTUuNWMwIC41NTIzLS40NDc3IDEtMSAxcy0xLS40NDc3LTEtMWMwLS4zMjcxLjE1Ny0uNjE3NS4zOTk5LS44bC4wMDA1LS43MzU2YTQuOTY2NSA0Ljk2NjUgMCAwMS0xLjM2MzEtLjM2NDNsLS4zNjcxLjYzNzRhLjk5ODUuOTk4NSAwIDAxLS4wNTQyLjg5MTdjLS4yNzYxLjQ3ODMtLjg4NzcuNjQyMS0xLjM2Ni4zNjYtLjQ3ODMtLjI3NjItLjY0MjItLjg4NzctLjM2Ni0xLjM2NmEuOTk4NS45OTg1IDAgMDEuNzQ2My0uNDkyOWwuMzY3NS0uNjM3NmE1LjAyOTMgNS4wMjkzIDAgMDEtLjk5NjUtLjk5NjVsLS42Mzc3LjM2ODdhLjk5ODUuOTk4NSAwIDAxLS40OTI4Ljc0NTFjLS40NzgzLjI3NjItMS4wODk4LjExMjMtMS4zNjYtLjM2Ni0uMjc2MS0uNDc4My0uMTEyMy0xLjA4OTkuMzY2LTEuMzY2YS45OTg1Ljk5ODUgMCAwMS44OTI4LS4wNTM3bC42MzYzLS4zNjc2YTQuOTY2NSA0Ljk2NjUgMCAwMS0uMzY0Mi0xLjM2MmwtLjczNjQuMDAwNEEuOTk4NS45OTg1IDAgMDEyLjUgMTBjLS41NTIzIDAtMS0uNDQ3Ny0xLTFzLjQ0NzctMSAxLTFjLjMyNzEgMCAuNjE3NS4xNTcuOC4zOTk5bC43MzU2LjAwMDVhNC45NjY1IDQuOTY2NSAwIDAxLjM2NDMtMS4zNjMxbC0uNjM3NC0uMzY3MWEuOTk4NS45OTg1IDAgMDEtLjg5MTctLjA1NDJjLS40NzgzLS4yNzYxLS42NDIxLS44ODc3LS4zNjYtMS4zNjYuMjc2Mi0uNDc4My44ODc3LS42NDIyIDEuMzY2LS4zNjZhLjk5ODUuOTk4NSAwIDAxLjQ5MjkuNzQ2M2wuNjM3Ni4zNjc1YTUuMDI5MyA1LjAyOTMgMCAwMS45OTY1LS45OTY1bC0uMzY4Ny0uNjM3N2EuOTk4NS45OTg1IDAgMDEtLjc0NTEtLjQ5MjhjLS4yNzYyLS40NzgzLS4xMTIzLTEuMDg5OC4zNjYtMS4zNjYuNDc4My0uMjc2MSAxLjA4OTktLjExMjMgMS4zNjYuMzY2YS45OTg1Ljk5ODUgMCAwMS4wNTM3Ljg5MjhsLjM2NzYuNjM2M2E0Ljk2NjUgNC45NjY1IDAgMDExLjM2Mi0uMzY0MmwtLjAwMDQtLjczNjRBLjk5ODUuOTk4NSAwIDAxOCAyLjVjMC0uNTUyMy40NDc3LTEgMS0xeiIgZmlsbD0iIzdkOWNiOCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
    height: 16px;
    background-position: center;
  }

  [dir] body.new_header_design #side_bar ol li .left_row
  {
    border-radius: 2px;
    padding: 0 6px;
    height: 28px;
    width: 145px;
  }

  [dir] body.new_header_design #side_bar .genre10 .left_icon, [dir] body.new_header_design #side_bar .genre11 .left_icon, [dir] body.new_header_design #side_bar .genre12 .left_icon, [dir] body.new_header_design #side_bar .genre14 .left_icon, [dir] body.new_header_design #side_bar .genre15 .left_icon, [dir] body.new_header_design #side_bar .genre16 .left_icon, [dir] body.new_header_design #side_bar .genre17 .left_icon, [dir] body.new_header_design #side_bar .genre18 .left_icon, [dir] body.new_header_design #side_bar .genre19 .left_icon, [dir] body.new_header_design #side_bar .genre20 .left_icon, [dir] body.new_header_design #side_bar .genre21 .left_icon, [dir] body.new_header_design #side_bar .genre22 .left_icon, [dir] body.new_header_design #side_bar .genre23 .left_icon, [dir] body.new_header_design #side_bar #l_ap .left_icon
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABTklEQVR42oyQzytEcRTFP/f7nec1C8qGDdEspvwDVlNM8WSm8AdoahZIKaWUknqL2SgLUkosrSwshKyxQmwnCotnQZQfUZg310aMX/XO5tbpnHPPvcIHJhY2ah0nNovQC1wquiIiW2XFFZFuVPsEmlRlLRYPx/z+zAOAAPirq1Xlh5pdhVYiQGDPBG7a99MlA1B6rB6NagZQSJUaX4cBZHDx0Km3N2dAA4Bak5SwfBIh5qxY85g0dfY2W2ku5L1TtSb5S66arZwgiZa76g6ZWt6eB0Y+hZEbgMCcUUh9IyOaAcrQZgQSf0QfgEnZwHWsdeMq2guc/9GgOQbEf5A7z45kZnLe0wdVAtb9pa2jUMwu0Pz1GHENcFHhP34Jbc9Mruvp5zZ/IBOoNR5w9bVNi0bQSYRrYNOGb970UOf9fzcX8t6pDaVdYB8IBB1/HwA+bHTFpEL19AAAAABJRU5ErkJggg==");
    height: 11px;
  }

  [dir] body.new_header_design #side_bar #l_apm .left_icon, [dir] body.new_header_design #side_bar #l_mini_apps .left_icon
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAA5UlEQVR42rSRT0rDQBhH38wXSCk2eAtb6iWyEUHwz8LZCQ102xu0EOgNXIciLlvcCMrQaxSqvYUkUoJYx42L1sZYCP1t3zy+gafYYb3bZ/+wrkcOxBO/E0dhDqAGiZ0DrV/vF8PuaXNNfADOfpgV8a/iKMzVILGu6NprkHptkFUaTIDzTeqm70F2qcu++5kFd9sigDo5yBr3mgorlb1G2gEet4mbiq7daOClwFtMjFnFxny8Lb8M8LTGrEjtIo7CXFVJVWn/du4ndqbguIjrAhHg6Ho8FgBVwveXau/yn50BXAn/HgB/cVBGac74bAAAAABJRU5ErkJggg==");
    height: 15px;
  }

  body.new_header_design #side_bar .left_label
  {
    color: #2a5885;
    font-size: 12.5px;
    margin-left: -1px;
  }

  [dir] body.new_header_design #side_bar .left_icon
  {
    margin-bottom: 2px;
  }

  body.new_header_design .side_bar_inner
  {
    width: 164px;
    margin-top: 41px;
    margin-left: -2px;
  }
  [dir] body.new_header_design #side_bar .left_count_wrap .left_count
  {
    color: #2a5885 !important;
    padding: 3px 6px;
  }

  .left_row .left_count_wrap, body.new_header_design #side_bar_inner .left_row:hover .left_count_wrap, #side_bar_inner .left_row .left_count_wrap
  {
    background: #d3d9de !important;
    height: 24px;
    border-radius: 3px!important;
  }

  [dir=ltr] body.new_header_design #side_bar .more_div
  {
    margin: 9px 0 0 9px;
  }

  [dir] body.new_header_design .left_count_wrap
  {
    border-radius: 2px;
    background-color: #d3d9de;
    padding: 0;
  }

  [dir] .post_settings .checkbox_pic
  {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABoElEQVR42pySsWtTYRTFf+f1k5RAcW7HrApBSxbpmECWzoFiWuiioIlk8m/IFBoJtB0Ctip07hJIxmxFJYNrxziXQrD45R2H5KUiTj3T5XLu5dxzrvgPOieDzZAPU4A4i1utV9Wf/3KSrDg6G+51zwdFAK2H7ayf1d3zQfHobLi36mdDifQJE7GPLZ4hFQGwJzLfkV4jQmq/fLdf+RIApPkPHCIiIr3VcuFitXaMX0jc4SU3k9qsVyfYx7ZzCxW+wT7FPgXfSEps57CPm/XqBECdk8Gm1sN2Ir+XtAO+ib/1vHVYvgbo9EeF8MjfQI9tj1Or7V/xaxLyYbqWcHl/ExfZEEDrsHyNuVjKLq4lXIZ8mCY8EEmcxa15yi72ZOlzrdMfFVaZ9kcFRC1zeJ6yG2dxa+Xeh4/DrsUbScnCnEweteV9qUyvcVBprnLsng+KcrhCRNu5xfA9bKeS7jDBiqVmvTpZEsJTRMAEmZ7tseHWcGt7LOhhAiLYa0/+yrH82VC3YqlxUGmmVluwIdhIrXZjv9K0Yin7mpXUhzz5nwEAZwvPlvysB68AAAAASUVORK5CYII=") center no-repeat;
  }

  [dir] .media_selector .ms_item.ms_item_photo:before
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAANCAYAAACgu+4kAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABSElEQVR42pyRvUoDURCFv7m7d5MgGFJG1NjbJCDoIxhBsDAQfADttVUI1ipWksJaNA+g+AhW+gjaaGkV3WT33rFS1k38PeWZMx/zI2TU6XSMn168UWSB8boPXDLf2Vp9eTdMtupmlta/aQaYc6HdzBqye3q9JugxMAmU89Av9AzEiB4YQU+AGlDJND+KSnsgg8mg6Mui0gaeMoAKUEVlPwSqOfpjany94I2LNNpIY0iTpFcUW3dW73L54si4orJd8MY5uBWkK0jXRuFtrEkiqjv5/AjAlNxViraA2Yxds9a2Bj68/BHwV40A/GvQTIeuBzx8+n8Y9QomXcnnw7yhokdFsY14mDSstS2AIIx6xMNIrRz+ZoUpZ/UussFyUHLnQ28ufBo3x3zgY4I+MJHzqypy5mIhChyKfHWCvlFkD3j5x/36KrL7NgDV03PBqvwXiwAAAABJRU5ErkJggg==");
  }

  [dir] .media_selector .ms_item.ms_item_video:before
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAAV0lEQVR42mKsm7vj6P//DFbNKR6MDAwMDLVzdvxnwAKQ5RkZGI4w/f/PYMVAIvjPwGDDiMsGQoCJgUzAhOwHmD9w+RFZnmwbR/04uPzIyMBwhAwLDwMGAJGuKVnYVTjyAAAAAElFTkSuQmCC");
  }

  [dir] .media_selector .ms_item.ms_item_audio:before
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQCAYAAADNo/U5AAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABBklEQVR42ryRMUvEQBCFv9ndWAiCoJ2Fnc0VlmKlCHKiF6wsr4ly/0FFSBR/g0a0OLSKZZorrrazvR9hYeF1xmStDBvJkYDgdG/mvZk3M0KLOEoSvTZd2NRWehZ8mUU8HY6XvCzbKRBfwAcWf2oV0cXDaB04wNIDNgBV19BUkOUV0E12VYuVJmJtpFXRqZ9UJT4rbZMw2J+U9u9Hs0VXJ3udv9r7Z1EYp8tNhyjjfJiuqMx7ymG79SSVzd3hCIB3E8bpfK5NBHJY/1i76iKBG/OlvVuBvpP/cElFIQMlNkLQCMll0I2NwNav1mMXXA+6L8BumTgGJSJnCG/A1MLjZ66Dpj2/BwBh7UI236vGdwAAAABJRU5ErkJggg==");
  }

  [dir] .media_selector .ms_item.ms_item_doc:before
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOCAYAAAAbvf3sAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAAl0lEQVR42mKsnbN9JwMDoysDAwMjAxJoTvFgrJu9vaEp1bMBWZyJgYHRBV0xDPxnZKyvm70dXQMDEwMe8J+Rsb5uzo4OZA0EwX8GhnKYJsbaOTv+Y1PE/OQE818Zi1cMDAzCMDHG//8bWXCZ+kfWyqUlyVWUgZERxUCcNuACTAwkguGi4R8J6v8xMTD83wOJTGIi/P8ewADAJytGY2g1awAAAABJRU5ErkJggg==");
  }

  [dir] .media_selector .ms_item.ms_item_map:before
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAOCAYAAAD5YeaVAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABdUlEQVR42nSRu0sccRCAv/ntxvN1IocI2noIuu2JQjzbIGhl0onVpVGLKDaCaCEItr4gmD7/gahYpRAVRMytEXa1SGVhobJGF73bsYi3LqLTfcw3D2bk07cBAHqc8UwQ6gyieVTaEfUEflmSnj/2F68BDICTHe0NwsgFnUDJgTag5FSZLEXBHyc72gsgc+ubmf8iLbxECbATfGGbdKcJQp2piCJ4FlYuPd6fEsv6CPx9lltK0e2sQTRfKTfGFH6fLx/uTQxGrre8aywpxL1F8wbFqXBtlDpKjMak6vdjUDoNcFnhfybsScrl8LYvgZc2sAV8BYjK+sPJjhXsmvp9vQ/y5UjX4y1EtmTq+0Zb9MAp8IH349FU0WGlszdXzZmuJqD7PVOEFddb+2kA6qobpxGKb5sUW5sbp+MPHpws3InYQ8DNK/VaxB7a3l24j2UA11/yEfn8/D2AkrHki+sv+fEpk21OzlZ3EBkBLhAZLnqrO8n80wA/in9V3TVO9QAAAABJRU5ErkJggg==");
  }

  [dir] .media_selector .ms_item.ms_item_poll:before
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAAYElEQVR42mJkwAJq5+y4xsDAoMnAwHC9OcVDC12eiQE70ESjidKEF7AQqxDZyaTYBHcyWc4jz0+1c3bcYmBgUGVgYLjdnOKhRqxNqlC2Kk2dR19NF6Hsi0ji19FoFDHAACdpE7Fa8imzAAAAAElFTkSuQmCC");
  }

  [dir] .media_selector .ms_item.ms_item_market:before
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAPCAYAAADQ4S5JAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAArklEQVR42uSRQQqCUBRFz/tuIJq3msxwHSFuIZBApGm0AMOpSwjJxjnMYXPX8V8DFUIhc9wZfS7nPt7jCx9EWbEyVs+A10V3Fd0fd/6rd8xAfgJLUQ1FNQQWovKIsmI1KnSTa6ep3CTw8yTwc6ep1kBtLKdRAfBENY3j2PZB905Bt30mh8u1ANkAwncU9GZA3B9kWkdcM1hrCjNHHh39VwU7w7cGtGx/cRIFLd8DAAL8PBYrQ8lXAAAAAElFTkSuQmCC");
  }

  [dir] .media_selector .ms_item.ms_item_graffiti:before
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAAoUlEQVR42pTSMQ6CQBCF4f+tW9J7JQoL72BLQYSEAq00dhQGbLyGCXAhY+0FGAsjjdGF6Sb5XiaZGTGh8qZNB8gFV4Xwtm5L4AiAuP8NZE23M7PDpxcu9ZOxXFkl8Vkz8Ok9ZQb+CoQwwGLcxqXfE8AAbgTDEIUwgM8v3cZMyyqJi6xuQe75CwN4M1ub2SpreqokLkKH9KBI4ibjMeVNXgMAfEdQn50ZJDwAAAAASUVORK5CYII=");
  }

  [dir] .media_selector .ms_item.ms_item_money:before
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABr0lEQVR42oyTMWhTURSGv3NuIBhIqFhHURwqWOOioI5aQmvAweW5OTQPg0OX4vrgSWdRgkIJkY4dnVqjrY5ugkIp6KQ4BTo9tzT3HgebksSY5kyXe/9zzn/uf35hJJKNrTIhF2O2AFw4uv4hsKtIK40X9wbx0j+sNLbzpwv63KAOKOPDi7CuxWw1jaLucYGVxnZ+pqBvgdtME2IfXfH33TSKugowc0pfTJ0MYHLHZ6VnAJpsbJURHo1inD88uxYviStleYeUTdgcgTxOmu35nHhXszEzp/V7B0mrbT6jB/aVXniA04vAjX4PUaupQeUEwjngmjh3X7BPgw8BqShw7oQCPeCzef/GkJsjEp4fK5cL/hLAWrwkHT9bcBoeovIUuDWO3i/g8pDY6r4BkrTaBgf4oIiMEQN+qsDOJAbmdO5/sym2I2nr3RWPfQHcUHWnc+LD9wl/452Gq5rGi3sirP+zbJOTQeRVulzdVwAtZqvAh+k3kd1O78wT+qZJo6jrSlkVeAn4SbQRaXTCbLVZv3445MZjOzfb86JWC0hFjuxsf+383ml4nS5X9wfxfwYAGvaPBRNBSuMAAAAASUVORK5CYII=");
  }

  [dir] .emoji_smile_icon_vector
  {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAABN0lEQVR4AZySJVBEQRjH9yLeO0S80wcy0iuWaRR0X8T9XBIOu9uHitWjIZGC6/5wns7cd/fsb2ufcNfwdKFSxk2fvYyT0BcyoR948g0OL8JKrpkuJ2Gu7PVmzScyrhbsc/TreQIOjy4gQA19iYrOmmrz04DDo0PvnQFEXOelVBUipODRocf3swdfSyiGBriC0OPDL9gsUv8uQcb1DhfvQRh6fPgJMWzaXwMkVxSGD7/g+Cw5HzJqCKYW8JP2wDGKEgoffkESiS4+FuCL+c7EvSeTCd3OtMfnTc2/Tp7fKnfiOiNXVY97TzynM7mq62TCXFvB2WRcD8o104HGBpxa3e1YfLfZfTq+fTK2tF9rTQcWe0X4JT6S8b0Gvz4J7diJ5Y0qO2Lr+xrmrxfAlWIpzjvUzsWUlycAW66IKlUnn/sAAAAASUVORK5CYII=") no-repeat 4px 4px;
  }

  [dir] .emoji_smile_icon
  {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAABN0lEQVR4AZySJVBEQRjH9yLeO0S80wcy0iuWaRR0X8T9XBIOu9uHitWjIZGC6/5wns7cd/fsb2ufcNfwdKFSxk2fvYyT0BcyoR948g0OL8JKrpkuJ2Gu7PVmzScyrhbsc/TreQIOjy4gQA19iYrOmmrz04DDo0PvnQFEXOelVBUipODRocf3swdfSyiGBriC0OPDL9gsUv8uQcb1DhfvQRh6fPgJMWzaXwMkVxSGD7/g+Cw5HzJqCKYW8JP2wDGKEgoffkESiS4+FuCL+c7EvSeTCd3OtMfnTc2/Tp7fKnfiOiNXVY97TzynM7mq62TCXFvB2WRcD8o104HGBpxa3e1YfLfZfTq+fTK2tF9rTQcWe0X4JT6S8b0Gvz4J7diJ5Y0qO2Lr+xrmrxfAlWIpzjvUzsWUlycAW66IKlUnn/sAAAAASUVORK5CYII=") no-repeat 4px 4px;
  }

  [dir] .media_selector .ms_item.ms_item_postpone:before
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABn0lEQVR42pySP2iTURTFf/e9NqWt0dbGz12TVEhEAgkG0VCKIILo5iJddLMgRSFL/fOBugSKiwnOLhVXxS4dQuhgodChCWLlm7qUUiglxaLw3nX4jGgQB89yh3MO957DlStz1+ghl71bwEsVtIKSQtgFaWG01tlsrPd0Nl3OUr7xYOCYKzzC8xo4ByQB+3PmUW4HEyVz/czjlfWtRTUA3c7hPEoIGIGaWFtMynBSrC0K1ACDEn7cWXoIIPcbHwo4VmODXG5H9WY+cy+Dd7faUT0EyJ+enVJ0GfBYzps4A4MCC+2o3gRQ7ycVfdLL0I7qTYEFYBAvVQNaidPZt/wLv3itGJQUwBGf+Nyvy6VnF+9ceGcB7NDIZuwhZeJa4cB8n+yJO9HL9yZBGuXi6s5SDcB9+5oFQNg1IC0AnLv5+5aNT43IJHTKDMiLP3lp/bW9/jP727NHM/vbwUTJANPAzMnjpdHgRHnv1Pil7liqeDYYK84pvAIswtPOl8YbA5DMDT9HCAGvUFXn1rp62FXn1hSqgEcIy8HVZwDyP7/3YwBe/qFizRMJ/AAAAABJRU5ErkJggg==");
  }

  [dir] .media_selector .ms_item.ms_item_gift:before
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABLklEQVR42ryOPyiEcRjHP8/7uyMLRnUG9RbDnVKWC2VQjpxB2SwW0aE7bBYlw6VuuO7Pcm5URhNludF0We5K3C2XFCWZpPd+PQZlOBQ3+NR3+f7peSSSiBIa3AyptQVgGJGLDvWtXNXTTyND8T6v2SyCTgpcY8xq5SZTdgDU2hPgWRziKBOeeEkAzzaToOMCh4q8qrXHAA4fDIgxmcptvojokSqL02O7XSgLQKFSz+8jZIF+AB8AIim1thh0108FDSj03j++rIF2CwSCbiwNuoRI8vNStZbbwzCHcKeKH2iosgw0FOlB5MGImarWcgcAsp05uwRGaSG1Mdu5kz1/4ytlBwgD/lbNbM3rdz4QdmgDiSSifx75AIJuTFuDaj0vP/ltvff/o9Iv+yWA9wEA769psQODdJ8AAAAASUVORK5CYII=");
  }

  [dir] .wall_module .reply_box_photo
  {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAANCAYAAACgu+4kAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABSElEQVR42pyRvUoDURCFv7m7d5MgGFJG1NjbJCDoIxhBsDAQfADttVUI1ipWksJaNA+g+AhW+gjaaGkV3WT33rFS1k38PeWZMx/zI2TU6XSMn168UWSB8boPXDLf2Vp9eTdMtupmlta/aQaYc6HdzBqye3q9JugxMAmU89Av9AzEiB4YQU+AGlDJND+KSnsgg8mg6Mui0gaeMoAKUEVlPwSqOfpjany94I2LNNpIY0iTpFcUW3dW73L54si4orJd8MY5uBWkK0jXRuFtrEkiqjv5/AjAlNxViraA2Yxds9a2Bj68/BHwV40A/GvQTIeuBzx8+n8Y9QomXcnnw7yhokdFsY14mDSstS2AIIx6xMNIrRz+ZoUpZ/UussFyUHLnQ28ufBo3x3zgY4I+MJHzqypy5mIhChyKfHWCvlFkD3j5x/36KrL7NgDV03PBqvwXiwAAAABJRU5ErkJggg==") center no-repeat;
    background-size: 16px;
    cursor: pointer;
    border: 0;
    box-shadow: none;
  }

  [dir] .wall_module .emoji_smile_icon_vector
  {
    background-repeat: no-repeat;
    background-size: 16px;
    background-position: 2px 4px;
  }
  .im-chat-input .im-chat-input--smile-wrap .emoji_smile_icon_vector
  {
    opacity: 0.7;
    background: url(http://svgur.com/i/SRX.svg);
  }

  body.new_header_design .audio_page_player2.audio_page_player_fixed
  {
    top: 0px;
  }

  [dir] .im-action_invite::before
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAIElEQVQoz2NgwAI6F+/7D8IMxIKhpgEmSSwmXcNIDFYA9+SADQNO6ykAAAAASUVORK5CYII=");
  }

  [dir] .im-action_media::before
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAACgklEQVR42nzSSUjUcRQH8O/395/GzLTI0BaDGlqIyoKoDlGWZc5YEXmK8FIQMswEkdNiebBDSTHjwS2kBTx07CDVjNqMtpKniAraoIWQtkO76Pyd37dDGGHS9/R4hw/vPR7xV+rPd037nuZ62Ewxad451uk/vb/sEf4TjhaR5q7dopok5YPIQHAAgGRHbs7EA/V7Nn4ZDzAAEGlLVFnYSwIeeuBZtWhCQbYHntmkOS5h1/cfQ/eOnUsWjgvUtiTzZdVEMhUL+TdlaFc8T3/qsMZujYbKG2iwWUTR8JDbGznbXfDPCjWtiUpZXXZoVlrZtQKaSLyXMANkeyzkD0Zae9ZBNi7iddYkbWzYW/HpzwQCloHI5CzJegiyksSDWLhiJolTkKojrd3nc0Nb7hDYBmje8CBSNe190/8AFAcgOO5TW0jwicTFkebEhli44jgM6yW791tLV8fqQv9tD802CPPhDqVqW5L5vwGH/SA1PJLeN3ki6gi9sNS1SHNiQ2MocMKQxwBV9X9IXDwT8veB3C5pQVru9aZ4PMtEg+WPCVwQVDs4jOXeHJRSeDmKRMOBBsIcIFAEAI3hQMoxplLEijcvWUcAONJ+fYrrurcp+mDg92brWfonekX4jLg1uj9wY+z1a1oSnZB8BgBOV5d9NY6zGcBbSHF30PF5c1AK8JWAq4fa4iXjvMBnELn8u3O4uWfWCDM3IU2HB6UGzoDN2F4Kc0XsaAwHUgBwtC3pc617X8IVjmUPtnbPgewtAndj4UBV5Gx3gc1kkhSWiOwk8E3CTgAj2R5vsRkLNIbK35o8s5R5phoAosHyj0UFU9cAPANgoYASEp3ZHm/xyeCmgV8DAGBCFKYCy6TxAAAAAElFTkSuQmCC");
  }

  [dir] .im-action_search::before
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABdklEQVR42pSSsW4TQRRFzx2h3YBEY4lIRC7oXfALIQ3+hihdDEjQGktQuaIwFBRABDgoRRR+AMFaiSx+gcL5Ait0aShYb8xcCnuMBYlEbjnvnbl69z0xl209fjNo2XHbqAEgPJLC7vOHd/uSzJIE8PRtcXNSxX3DBudIMMyzsPXsQfN7egu2lSChsYI2V7KwtpKFNQVtCo0NG5Mq7tvW4rP26+JejPGd0Pj6Vd3utpqny27dflH78dPfjOshhPsvHjXfzx3j9sybzt8QQLfVPCXQmeUw7wVCCiK/oq9coFRLvTOfS0i4XIDCI4DJ1OsXAUu14z+gwi4AkV63X9T+mbFf1Ij0AOSwt3C3rfarL0dpHQQ6aabJ1OtEesZ1QZVn4VbaZZDkPAtbgqFx3dEHZRVPyiqeOPogQYasPPPhkw+fbywu57yTmwdxLIe9LKMoz3yI3UAa5dd8R/+baHtnsBp/xSF2Q+ijLrOO9s5g1dP4UujT7wEAXjm30frn2D4AAAAASUVORK5CYII=");
  }

  [dir] .im-action_unread::before
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABiElEQVR42pySP0sbcBiEn/v5S0FoCK6ZMkTcunVzkSLEDH6IdhCSCG0NCeiga0LTFhorDvZDZEhDgrhkcxC6xkKn7mIgQ/5cBxsRa5fcevdw8L4nHqhy1k9OR8MyzLaNsgDC1xBaS8vPP9TfrN/Os7qHjjsbE/sbdgbJwgMAo1VsIf2K0ut6MXcBEB5A57LTQdpPJOJKo5Rfa5Tya4lEXAnSvuz0xD6vHHc2AFQ56ycno9sfstMErTeKW5c8ob3j7y+ZuW/pd1xOvgjT0bCMnSHo8H8QQKO4dSnpCDszHQ3LAWbbSI4xnjzZ9KVd22u2rwCWEvErkmG2HYyywoPazubNY+h9s/PJUMF0AWo7mzfCA6Ns/Keh2b7CdK3wDM/eovC5UcpV7wNGkh2Er41Wq6e91F+je9dyB30s5d7NmeppL2UpC/wMEFrYmo4nBYDGbr4qhQMpHDyEAKbjSQFbEFoLv0OPBjAm6DDGeDI/VvW0l5qOJwXbR5YSUXpVL+YuFp6cFh35nwEA63/iRyKVv8QAAAAASUVORK5CYII=");
  }

  [dir] .im-action_mute::before
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABTUlEQVR42oySvUoDQRSFz51ooYRYWAiCLyA2loKFqSSWgo1vYDQWmRGxMRMQ8SciZHbfQAv3AXa2kWCZF9AHEIsQLIwBReJcq43rZgmeau6d+Wa45wwAQJloW5qwgn9KAADDzTLQVMbqeIOZSfnRiTT2KQ1RvFDGageuCVB9fm7m/KXzdsPgTQAo7JVymsiNQEmQiJ6ZeSHuF5amJnWxOIjrCQDQfivfF1/TjZ11rYyFY66NnUl64UPPfby7wXdHefaoUSlpAaonDy121/ivEYzVuHDMp8oLD9Pg4xZ4xL2kHONMefYgCfa96DgF/bqSePGiakIVgw5cS8YhQLgFqJcx76X0I5kFDi0PAs61u9EKHJoMXh5mIqh6tVu6HsYB7FP6eu238j3+vAPzRjonacIKQbxSVg5BwLl2J2oyuJz1I8ZK+rYsTXif7v8MAEABoPVJ2zlQAAAAAElFTkSuQmCC");
  }

  [dir] .im-action_unmute::before
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAANCAYAAACgu+4kAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABy0lEQVR42pSSPWhTYRSGn3NT0UJbCp0cKpJBrOgmIjopoiaQxU0bBHWrjYMJEUTILRTB0jh4SUVFxB90FjFpRO1SgkiH4iIoKNi5UNJCqvZ+r4O516SD4pkO33fOc17ec6AdhWD2TD6o5vjP6IkS4YYEtwpBbWg6l/Lzleoo4rZkwlgyeJtQ4tFU7vhCJ8CipHh/vn+j1VxEJD1sYjqX8gtBzXeo1N1gz/r7to35546sxIDLlfowCuuIkagwgly9M7v9+09lJN0ABgHM+CRLHLt58cSS+ZW5vqZaDcS+9ojQ8B5K7nwEASjOVA9uOOYRiXbdxwHrPeCt0pqMm39LfFkeP3nBzBoOlQpBzQeYGku/A6vzx7SRVa1f95Blu33VZwBJewA6IQbPuyrFqAc87e633W0pb6KnCFIeT931sIlYrafHkQfvYwON0CNxeEcyXPz21bIOb83k9kq61rUdI7MzqUPxFkzha4ldbfiKmV3ZusVe/HAW4lzGOQVAbwTxn1QH/Gy6Gd+B/2BucHVtfUbo9L+ur3M7tvmzGLzaH1p4VnAUMQxymH1BangJu0fIKYdKBpfKuXTQsxnQPtWFvwj4kA+qy4a3DPBrAEl91e7iWS4WAAAAAElFTkSuQmCC");
  }

  [dir] .im-action_pin_hide::before
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAYAAAC5tzfZAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABSElEQVR42oSSsUtCURjFv/MkxCRvIF6JJ/gvNDtVTg9xlZYWx7CGZ0uBVDS4mEM5OwWF6wucxCbn/oXAN3gl6BX2kNCvxSvvkdjd7sd37u+cwwWtOc3OIDYcfXwbhOvGiXWl58Y60VB5NSKiOfHl2X13KUK11b0jopQpRdku5fwlQXk1Yj4PPqKJqLa6j8x8CKBnSlH8nEyjXxP/lZmyq+hGBEeGKUUZQI+Z867ynEQ8Ot2IYA+gt9A2UM+ktzcbx9YDtB1XeQ4z5zVRvXvpnxm/MFOWgHqzYl2EirBLOd+UogigvyA+y6QYaWJGiptwtuAFICIiZj5wlefIpBhtxWO7uqCQSNubzef7EcPoB4hOIh6d/imDiMhVXlvn2UklCqYUhWA5zc4gtsreGMCTKUXRLuX8QEYtbIeK/O8bLQTj24p1que/AwAtpKJa4fIgYAAAAABJRU5ErkJggg==");
  }

  [dir] .im-action_clear::before
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOCAYAAAAbvf3sAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAAUElEQVR42mJkQANFk7e/ZWD4LwThMb7ry/UURpZnRFVACDC+Y2KgNWDEdDdu5/TlegpDnUSMHyBqSPbDqAaiNTAyMh4nGMOMjGcZGBgYAAMAj+oUfTbQxL8AAAAASUVORK5CYII=");
  }

  [dir] .im-action_leave::before
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAAyUlEQVR42pSPMY7CUBBD7bkGF4q4SBoiIqI0hO02NFFQUNiCPQj6F+IaY6q/+mw+SLgbjf08w91P+IK8pGwYq+KMjJo5bEVvQbsa5CWEleBTcwn7hfkS9oJPEFaQl0bZEJeS92loN986yfs4UzYwLgB8/y1oXQQkZYdTte6Z0tLQPx1O1boHAC7ufaaCtG7cFMc4Gz4U39FzLcyZc0/HEJs5bAWfcrQFCFab6O2rB8dNcYxtACB6awR+QdwJq1PzUwhWg7iDdn0MAMv2dHfIhXiPAAAAAElFTkSuQmCC");
  }

  [dir] .im-page--redesigned-menu .ui_actions_menu_sep
  {
    margin: 4px 4px;
  }

  [dir] .friends_only_pic
  {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOCAYAAAAbvf3sAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAAu0lEQVR42tyPMQrCQBREZzbLbp9OMGfwCqYSkkpSeAO9gbW2uYFXEAQLE+30Ct4htf0K5luEldXG2DrV58+bz3wi0K4+D1vnSgHGAEDgoqxdFlnaeIYh/HD3q0Di8AjBW2TNyIeUN7rLEoOstbWJtjYheBRI3DpXeu4V8DW0MYsiS5siS5vImnnofQYGABD27WauqbjxO40vmk0nq7eftvvTQQQ5eohEpfrCACCCXOFH/UWARNUXJlE9BwD6GjvexTcxRgAAAABJRU5ErkJggg==") center no-repeat;
  }

  [dir] .friends_only_pic.on
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOCAYAAAAbvf3sAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAAq0lEQVR42tyRsQ3CQBRD7d8k9XVIZAZWoE7GAMEGZAXIDDcDFQktK7BD6tSkOVOgE5fuaHH1JT//b+kTifaXYR3C3BHaAoDAh1lx8m09RoYpLL2eEly6hMRElpsYsmiEMHcSHMHBrKzMygrkXYILYe4iZ99Tnxq04ujbevRtPRqLQ+otAgJWAJD2jXP0FoFccXe+3iQ0WTDRWy4MABKanyv9RYBEn/0Don8PABVOPN2uRj0EAAAAAElFTkSuQmCC");
  }

  [dir] .feed_lists_icon .ui_actions_menu_icons
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAIElEQVQoz2NgwAI6F+/7D8IMxIKhpgEmSSwmXcNIDFYA9+SADQNO6ykAAAAASUVORK5CYII=");
    background-size: 12px;
  }

  [dir] .im-page-action_spam
  {
    background: url(data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20width%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m4.6%2012.9c.9.7%202.1%201.1%203.4%201.1%203.3%200%206-2.7%206-6%200-1.3-.4-2.5-1.1-3.4zm-1.5-1.5%208.4-8.4c-1-.6-2.2-1-3.5-1-3.3%200-6%202.7-6%206%200%201.3.4%202.5%201.1%203.4zm4.9%204.6c-4.4%200-8-3.6-8-8s3.6-8%208-8%208%203.6%208%208-3.6%208-8%208z%22%20fill%3D%22%23828a99%22%2F%3E%3C%2Fsvg%3E) 10px 5px no-repeat;
  }

  [dir] .im-page-action_delete
  {
    background: url(data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2217%22%20viewBox%3D%220%200%2016%2017%22%20width%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m2%2015c0%201.1.9%202%202%202h8c1.1%200%202-.9%202-2v-10h-12zm8-7c0-.6.4-1%201-1s1%20.4%201%201v6c0%20.6-.4%201-1%201s-1-.4-1-1zm-3%200c0-.6.4-1%201-1s1%20.4%201%201v6c0%20.6-.4%201-1%201s-1-.4-1-1zm-3%200c0-.6.4-1%201-1s1%20.4%201%201v6c0%20.6-.4%201-1%201s-1-.4-1-1zm11-6h-5v-1c0-.6-.4-1-1-1h-2c-.6%200-1%20.4-1%201v1h-5c-.6%200-1%20.4-1%201s.4%201%201%201h14c.6%200%201-.4%201-1s-.4-1-1-1z%22%20fill%3D%22%23828a99%22%2F%3E%3C%2Fsvg%3E) center no-repeat;
  }

  [dir] .im-page-action_star
  {
    background: url(data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2217%22%20viewBox%3D%220%200%2016%2017%22%20width%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m15.3%206.4-4.7-.5-2.1-4.9c-.3-.7-.8-.7-1%200l-2.1%204.9-4.7.5c-.7.1-.9.5-.3%201l3.8%203.2-1.4%205.2c-.2.7.1.9.7.5l4.5-3.3%204.5%203.3c.6.4.9.2.7-.5l-1.4-5.2%203.8-3.2c.6-.5.5-.9-.3-1z%22%20fill%3D%22%23818C99%22%2F%3E%3C%2Fsvg%3E) center no-repeat;
  }

  [dir] .im-page--mess-actions_important .im-page-action_star
  {
    background: url(data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2217%22%20viewBox%3D%220%200%2016%2017%22%20width%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m15.3%206.4-4.7-.5-2.1-4.9c-.3-.7-.8-.7-1%200l-2.1%204.9-4.7.5c-.7.1-.9.5-.3%201l3.8%203.2-1.4%205.2c-.2.7.1.9.7.5l4.5-3.3%204.5%203.3c.6.4.9.2.7-.5l-1.4-5.2%203.8-3.2c.6-.5.5-.9-.3-1z%22%20fill%3D%22%23678dc8%22%2F%3E%3C%2Fsvg%3E) center no-repeat;
  }

  [dir=ltr] .SitpostingEntrypoint
  {
    float: left;
    padding-right: 14px;
    margin-right: 14px;
  }

  [dir=ltr] .media_selector>.ms_item>.ms_item_photo>._type_photo
  {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAANCAYAAACgu+4kAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAABSElEQVR42pyRvUoDURCFv7m7d5MgGFJG1NjbJCDoIxhBsDAQfADttVUI1ipWksJaNA+g+AhW+gjaaGkV3WT33rFS1k38PeWZMx/zI2TU6XSMn168UWSB8boPXDLf2Vp9eTdMtupmlta/aQaYc6HdzBqye3q9JugxMAmU89Av9AzEiB4YQU+AGlDJND+KSnsgg8mg6Mui0gaeMoAKUEVlPwSqOfpjany94I2LNNpIY0iTpFcUW3dW73L54si4orJd8MY5uBWkK0jXRuFtrEkiqjv5/AjAlNxViraA2Yxds9a2Bj68/BHwV40A/GvQTIeuBzx8+n8Y9QomXcnnw7yhokdFsY14mDSstS2AIIx6xMNIrRz+ZoUpZ/UussFyUHLnQ28ufBo3x3zgY4I+MJHzqypy5mIhChyKfHWCvlFkD3j5x/36KrL7NgDV03PBqvwXiwAAAABJRU5ErkJggg==");
  }

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

  [dir=ltr] .wall_module .reply .like_wrap
  {
    margin-top: -15px !important;
  }

  [dir] .wl_post_body_wrap .Post__copyright:last-child
  {
    margin-bottom: 0px !important;
  }

  [dir] .wl_post_body_wrap
  {
    padding: 15px 25px 0px !important;
  }

  [dir] .wl_post_body_wrap .page_post_sized_full_thumb_first
  {
    margin-top: 0px;
  }

  [dir] .page_post_sized_full_thumb
  {
    margin: 0px;
  }

  .wl_replies_block_wrap
  {
    border-top: 1px solid #e7e8ec !important;
  }

  [dir] .deep_active.wall_module .post_replies_header
  {
    border-top: 0px solid #e7e8ec !important;
  }

  .submit_post_box.reply_box.clear_fix._submit_post_box
  {
    margin-top: -1px !important;
  }

  [dir] .wall_module .reply .like_btn, [dir] .wcomments_post_content .like_btn
  {
    padding: 10px !important;
  }

  [dir] .wall_module .reply .reply_wrap
  {
    padding: 8px 0px 5px !important;
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

  [dir] .post--withPostBottomAction.post--withActionStatusBar .wall_post_cont .wall_signed:last-child
  {
    box-shadow: none !important;
  }

  [dir] .post--withPostBottomAction.post--withActionStatusBar .wall_post_cont .Post__copyright:last-child
  {
    box-shadow: none !important;
  }

  [dir] .post--withPostBottomAction.post--withActionStatusBar .wall_post_cont .media_desc__doc.PostMediaRowWithActionStatusBarSeparator:last-child
  {
    box-shadow: none !important;
  }

  [dir] .post--withPostBottomAction.post--withActionStatusBar .wall_post_cont .media_desc--link.PostMediaRowWithActionStatusBarSeparator:last-child
  {
    box-shadow: none !important;
    padding-bottom: 0px !important;
  }

    /* Старый дизайн календаря */
  [dir] .cal_table .day.sel:hover
  {
    background-color: var(--button_primary_background);
    color: var(--button_primary_foreground);
  }

  [dir] .cal_table > thead
  {
    background-color: var(--button_primary_background);
    border-bottom: 1px solid var(--separator_common);
    color: var(--button_primary_foreground);
  }

  .cal_month_sel
  {
    color: var(--button_primary_foreground);
  }

  .cal_table .month .year
  {
    color: var(--button_primary_foreground);
  }

  .cal_table .month_arr .arr
  {
    color: var(--button_primary_foreground);
    opacity: 0.7;
  }

  [dir] .CatalogSection--header_section
  {
    display: none;
  }

  a#ui_rmenu_business_notify
  {
    display: none;
  }

  [dir] .TopNavBtn__profileArrow
  {
    color: #93b3dc;
  }
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

/* Отключение сервисов */
div#react_rootEcosystemServicesNavigationEntry {
	display: none !important;
}

/* Отключение "карты" */
.top_profile_vkconnect_card_wrapper {
	display: none !important;
}

/* Отключение блока "Возможные друзья" */
div#friends_possible_block.page_block.friends_possible_block {
	display: none !important;
}
/* Старый дизайн ошибок и выбора файлов в сообщениях */
[dir] .box_title_wrap {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background: #5b88bd;
    color: #fff;
    font-size: 14px;
}
.box_title {
color: #fff;
}
.box_x_button > svg > path {
    d: path('m1.7071 0.29289 4.2929 4.2921 4.2929-4.2921c0.36048-0.36048 0.92772-0.38821 1.32-0.083189l0.094207 0.083189c0.39052 0.39052 0.39052 1.0237 0 1.4142l-4.2921 4.2929 4.2921 4.2929c0.39052 0.39052 0.39052 1.0237 0 1.4142s-1.0237 0.39052-1.4142 0l-4.2929-4.2921-4.2929 4.2921c-0.36048 0.36048-0.92772 0.38821-1.32 0.083189l-0.094207-0.083189c-0.39052-0.39052-0.39052-1.0237 0-1.4142l4.2921-4.2929-4.2921-4.2929c-0.39052-0.39052-0.39052-1.0237 0-1.4142s1.0237-0.39052 1.4142 0z') !important;
fill: rgb(255, 255, 255) !important;
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
