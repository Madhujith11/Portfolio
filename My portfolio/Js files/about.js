let nav =  document.querySelector("header nav")

import {sidebar_arr,about_arr} from "../Public/Data/data.js"

import {sidebar,boxrender,textrender,showheaders} from "../Public/Js/main.js"

sidebar(nav,sidebar_arr)

let main = document.querySelector("main")

let render = Promise.resolve(boxrender(main,about_arr))

render.then(()=>{
  about_arr.map((obj)=>{
    let text = document.getElementById(`${obj.id}`)
    textrender(text,obj.text)
  })
})

let bar = document.querySelector("footer i")

bar.addEventListener("click",showheaders)