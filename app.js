const panels=document.querySelectorAll('.panel')
panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removeClassListActive()
        panel.classList.add('active')
    })
})

function removeClassListActive(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}