
let themes = document.querySelector(".themes")
let selection = document.querySelector(".selection")

let selectedTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"

document.body.className = selectedTheme
selection.textContent = selectedTheme


Array.from(themes.children).forEach( theme =>{
    
    let color = theme.dataset.color
    
    theme.addEventListener("click" , e=>{
        document.body.className = color
        selection.textContent = color
        localStorage.setItem("theme" , color)
    })
})