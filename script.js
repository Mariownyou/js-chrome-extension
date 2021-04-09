// let response = await fetch('https://swapi.dev/api/people/1/');
// let text = await response.text(); // прочитать тело ответа как текст

let content = document.getElementById('content')
const button = document.getElementById('find')

button.addEventListener('click', () => {
    let value = document.getElementById('searchField').value
    console.log(value)
    content.innerText = value
})