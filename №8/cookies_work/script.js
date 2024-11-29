const colorsContain = document.getElementById('colors')
const thisName = document.getElementById('name')
const color = document.getElementById('color')
const save = document.getElementById('save')
const clear = document.getElementById('clear')

save.addEventListener('click', function(){
    colorsContain.innerHTML += `
    <div class='color' style='background-color: ${color.value}'>
        <div class="line">
            <h3>${thisName.value}</h3>
            <h5>${color.value}</h5>
        </div>
    </div>`
    
})

clear.addEventListener('click', function() {
    colorsContain.innerHTML = "";
})

thisName.addEventListener('change', function() {
    Cookies.set("name_text", thisName.value)
    alert(document.cookie)
})

color.addEventListener('change', function() {
    Cookies.set("name_color", color.value)
    alert(document.cookie)
})

document.addEventListener('DOMContentLoaded', function() {
    thisName.value = Cookies.get("name_text")
    color.value = Cookies.get("name_color")
})