

let stringToSort = document.querySelector(".sort");
let addSorteado = document.querySelector(".add");
let resSorteado = document.querySelector(".result");
let confirmarSort = document.querySelector(".confirm");
const clear = document.querySelector('.clear');
let listSorteado = [];

// funciones para el sorteado

function add(){
    if (stringToSort.value!==''){
        listSorteado.push(stringToSort.value);
    } else {}
    stringToSort.value='';
}

function randomPick(listSorteado){
    let random = Math.floor(Math.random()*listSorteado.length);
    if (listSorteado.length==0||listSorteado.length==1) return resSorteado.textContent = 'add something';
    else return resSorteado.textContent = listSorteado[random];
};

function reset(){
    location.reload();
}