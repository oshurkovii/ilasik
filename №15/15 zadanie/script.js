const currentSrc = document.currentScript.src;

fetch(new URL('config.json', currentSrc))
.then(response => {
    return response.json();
})
.then((config) => {
    if (config.removeDefaultCursor) {
        document.body.style.cursor = 'none'; 
    }
    console.log(config);
    const cursor = document.getElementById('cool-cursor');
    
    document.addEventListener('mousemove', (event) => {
        cursor.style.left = event.clientX - (cursor.offsetWidth / 2) + 'px';
        cursor.style.top = event.clientY - (cursor.offsetHeight / 2) + 'px';
    });
    
    function updateCursorProperties(config) {
        if (config.width) {
            cursor.style.width = config.width + 'px';
            cursor.style.height = config.width + 'px'; 
        }
        if (config.color) {
            cursor.style.backgroundColor = config.color;
        }
    }
})


