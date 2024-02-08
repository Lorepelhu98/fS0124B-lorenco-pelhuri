const generateBoard = function (){
    const boardo = document.querySelector('.container')
    for (let i = 0; i < 76; i++){
        boardo.innerHTML += `<div class='tabelle'>${i + 1}</div>`
    }
}

const array = function (){
    const arr = []
    for (let i = 0; i < 76; i++){
    arr.push(i + 1) 
    }
    return arr
}

const num = function (spazio){
    const spazio = Math.floor(Math.random() * spazio.length)
    const randomica = spazio.splice(spazio, 1)[0]
    return randomica
}