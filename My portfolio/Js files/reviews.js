let nav =  document.querySelector("header nav")

import {sidebar_arr,review_arr} from "../Data/data.js"

import {sidebar,review_render,showheaders} from "../Main files/Js/main.js"

sidebar(nav,sidebar_arr)

let reviews = document.querySelector(".reviews")

review_render(reviews,review_arr)

let leftclick = document.querySelector(".fa-angle-left")

let rightclick = document.querySelector(".fa-angle-right")

leftclick.addEventListener("click",()=>{
  reviews.scrollLeft -= 400
})

rightclick.addEventListener("click",()=>{
  reviews.scrollLeft += 400
})

let bar = document.querySelector("footer i")

bar.addEventListener("click",showheaders)