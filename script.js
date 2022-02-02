

var input = document.getElementById('input')
var button = document.getElementById('button')
var list = document.getElementById('list')
var listName = document.getElementById('listName')

function addToDo() {
    var listElement = document.createElement('li')
    listElement.innerHTML = input.value
    list.appendChild(listElement)
    input.value = ''

}

button.onclick = function () {
    addToDo()
}

input.onkeyup = function (event) {

    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        addToDo()
    }
}

list.onclick = function completedToDo(event) {
    event.target.classList.toggle("done");

}

list.onmousedown = function (event){
    event.preventDefault()
    if (event.which === 3) {
        event.target.classList.add('hide')
    }
}

listName.onkeydown = function editListName(event) {
    if (event.keyCode === 13) {    
        event.preventDefault()
        listName.blur()
        listName.style.color = '#7d5505'
    }

}