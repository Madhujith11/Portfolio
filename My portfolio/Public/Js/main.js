export function sidebar (block,array) {
  block.innerHTML = array.map((val)=>{
    return (
      `<a href="${val.link}">${val.text}</a>`
    )
  }).join("")
}

export function boxrender (block,array) {
  block.innerHTML = array.map((obj)=>{
    return (
      `
      <section class="box">
      <section class="img">
        <img src="${obj.img}" alt="">
      </section>
      <section id="${obj.id}" class="text">
      </section>
      <section>
        <a href="${obj.link}"><button>Learn More <i class="fa-solid fa-arrow-right"></i></button></a>
      </section>
      </section>`
    )
  }).join("")
}

export function textrender (block,array) {
  block.innerHTML = array.map((obj)=>{
    return (
      `
      <div>
      <h3>${obj.label}</h3>
      <p>${obj.value}</p>
      </div>`
    )
  }).join("")
}

export function media (block,array) {
  block.innerHTML = array.map((val)=>{
    return (
      `<a href="${val.link}">${val.icon}</a>`
    )
  }).join("")
}

export function review_render (block,array) {
  block.innerHTML = array.map((obj)=>{
    return (
      `<section>
      <div>
        <img src="${obj.img}" alt="">
        <h3>${obj.name}</h3>
      </div>
      <div>
        <p>${obj.text}</p>
      </div>
      <div>
        <a href="${obj.link}"><button>Learn More <i class="fa-solid fa-arrow-right"></i></button></a>
      </div>
    </section>`
    )
  }).join("")
}

export function showheaders () {
  let header = document.querySelector("header")
  header.classList.toggle("show")
}