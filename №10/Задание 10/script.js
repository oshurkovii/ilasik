document.getElementById('format-button').addEventListener('click', function() {
    const input = document.getElementById('json-input').value;
    const output = document.getElementById('json-output');
    try {
        const json = JSON.parse(input);
        output.textContent = JSON.stringify(json, null, 4);
    } catch (error) {
        output.textContent = 'Ошибка: Неверный формат JSON';
    }
});