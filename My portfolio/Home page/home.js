let nav =  document.querySelector("header nav")

import {sidebar_arr,home_arr} from "../common/code/data.js"

import {sidebar,boxrender,textrender,showheaders} from "../common/code/common.js"

sidebar(nav,sidebar_arr)

let main = document.querySelector("main")

let render = Promise.resolve(boxrender(main,home_arr))

render.then(()=>{
  home_arr.map((obj)=>{
    let text = document.getElementById(`${obj.id}`)
    textrender(text,obj.text)
  })
})

let bar = document.querySelector("footer i")

bar.addEventListener("click",showheaders)