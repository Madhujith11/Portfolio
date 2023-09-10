let nav =  document.querySelector("header nav")

import {sidebar_arr,media_arr} from "../common/code/data.js"

import {sidebar,media,showheaders} from "../common/code/common.js"

sidebar(nav,sidebar_arr)

let medialinks = document.querySelector(".medialinks")

media(medialinks,media_arr)

let bar = document.querySelector("footer i")

bar.addEventListener("click",showheaders)