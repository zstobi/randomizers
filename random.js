// letiables para el proyecto general

const sort = document.querySelector('.sorteado');
const bn = document.querySelector('.betnumbers');
const hxr = document.querySelector('.randomh');
let content = document.querySelector('.content');
let section = document.querySelector('.padre');

// eventos en los botones del aside

// evento para sort proyect

sort.addEventListener('click',()=>{
    content.classList.add('sortdesign');
    if (content.classList.contains('hxrdesign')||content.classList.contains('content')){
        content.classList.remove('hxrdesign');
        content.classList.remove('content');
    } else {};
    content.innerHTML = `
    <h3 class="title">Random Pick</h3>
    <div autocomplete="off" class="contenedor">
        <input type="text" class="inputs sort" placeholder="add to list...">
        <button class="inputs add rs">Confirm</button>
    </div>
    <div class="contenedor2">
        <button class="inputs rs clear">Reset</button>
        <button class="inputs result"></button>
        <button type="reset" class="inputs confirm rs random">Randomize</button>
    </div>
    `;

    let stringToSort = document.querySelector(".sort");
    let addSorteado = document.querySelector(".add");
    let resSorteado = document.querySelector(".result");
    let confirmarSort = document.querySelector(".confirm");
    const clear = document.querySelector('.clear');
    let listSorteado = [];

    addSorteado.addEventListener('click',()=>{
        if (stringToSort.value!==''){
            listSorteado.push(stringToSort.value);
        } else {}
        stringToSort.value='';
    });

    clear.addEventListener('click',()=>{
        location.reload();
    });

    confirmarSort.addEventListener('click',()=>{
        let random = Math.floor(Math.random()*listSorteado.length);
        if (listSorteado.length==0||listSorteado.length==1) return resSorteado.textContent = 'add something';
        else return resSorteado.textContent = listSorteado[random];
    });
});

// evento para numbersort proyect

bn.addEventListener('click',()=>{
    content.classList.add('sortdesign');
    if (content.classList.contains('hxrdesign')||content.classList.contains('content')){
        content.classList.remove('hxrdesign');
        content.classList.remove('content');
    } else {};
    content.innerHTML = `
    <h3 class="title">Random Between Numbers</h3>
    <div autocomplete="off" class="contenedor">
        <input type="number" class="inputs sort number" placeholder="numbers">
        <button class="inputs add rs">Confirm</button>
    </div>
    <div class="contenedor2">
        <button class="inputs rs clear">Reset</button>
        <button class="inputs result"></button>
        <button class="inputs confirm rs random">Randomize</button>
    </div>
    `;

    let number = document.querySelector('.number');
    let sum = document.querySelector('.add');
    let confirm = document.querySelector('.confirm');
    let ready = document.querySelector('.result');
    const clear = document.querySelector('.clear');
    let list = [];

    sum.addEventListener('click',()=>{
        if (number.value!==''){
            list.push(number.value);
        } else {}
        number.value='';
    });
    
    clear.addEventListener('click',()=>{
        location.reload();
    });

    function random(list){
        let random = parseInt(list[0]) + Math.floor(Math.random()*parseInt(list[1]));
        while (random > parseInt(list[1])){
            random = parseInt(list[0]) + Math.floor(Math.random()*parseInt(list[1]));
        }
        if (list.length==0) return ready.textContent = 'pick numbers!';
        else if (list.length==1) return ready.textContent = 'pick one more!';
        else return ready.textContent = random;
    }

    confirm.addEventListener('click',()=>{
        random(list);
    });
});

// evento para color randomizer proyect

hxr.addEventListener('click',()=>{
    content.classList.add('hxrdesign');
    if (content.classList.contains('bndesign')||content.classList.contains('sortdesign')||content.classList.contains('content')){
        content.classList.remove('bndesign');
        content.classList.remove('sortdesign');
        content.classList.remove('content');
    } else {};
    content.innerHTML = `
    <h3 class="title">Hex Color Randomizer</h3>
    <span class="color">#000411</span>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 copy" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path class="copy" stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
    <button class="inputs rs rdz">Randomize!</button>
    <div class="background"></div>
    `;

    let hexColor = document.querySelector('.color');
    let cyp = document.querySelector('.copy');
    let btn = document.querySelector('.rdz');
    let background = document.querySelector('.background');

    btn.addEventListener("click",()=>{
        let color = Math.random().toString(16).substring(2, 8);
        color.toString;
        color.toUpperCase;
        color = "#" + color;
        hexColor.textContent = color;
        background.style.backgroundColor = color;
        hexColor.style.borderBottom = "2px solid" + color;
        hexColor.style.fontStyle = "normal";
        hexColor.style.fontWeight = "500";
        hexColor.style.color = "#000";
    });

    cyp.addEventListener("click",function copy(){
        navigator.clipboard.writeText(hexColor.textContent);
        hexColor.textContent = "copied to clipboard!";
        hexColor.style.fontStyle = "italic";
        hexColor.style.fontWeight = "300";
        hexColor.style.borderBottom = "none";
        hexColor.style.color = "#644903";
    });
});

























































// FORMA QUE FUNCIONA HASTA AHORA

// let newContent = document.createElement('MAIN');
// newContent.classList.add('sortdesign');

// let h3sort = document.createElement('H3');
// h3sort.classList.add('title');
// h3sortext = document.createTextNode('Random Pick');
// h3sort.appendChild(h3sortext);

// let divuno = document.createElement('DIV');
// divuno.classList.add('contenedor');

// let stringToSort = document.createElement('INPUT');
// stringToSort.classList.add('inputs','sort');
// stringToSort.autocomplete == 'off';
// stringToSort.type == 'text';
// divuno.appendChild(stringToSort);

// let addSorteado = document.createElement('BUTTON');
// addSorteadotext = document.createTextNode('Confirm');
// addSorteado.appendChild(addSorteadotext);
// addSorteado.classList.add('inputs','add','rs');
// divuno.appendChild(addSorteado);

// let divdos = document.createElement('DIV');
// divdos.classList.add('contenedor2');

// let clear = document.createElement('BUTTON');
// cleartext = document.createTextNode('Reset');
// clear.appendChild(cleartext);
// clear.classList.add('inputs','rs','clear');

// let sortRes = document.createElement('BUTTON');
// sortRes.classList.add('inputs','result');

// let sortConfirm = document.createElement('BUTTON');
// sortConfirmtext = document.createTextNode('Randomize');
// sortConfirm.appendChild(sortConfirmtext);
// sortConfirm.classList.add('inputs','confirm','rs','random');

// divdos.appendChild(clear);
// divdos.appendChild(sortRes);
// divdos.appendChild(sortConfirm);
// newContent.appendChild(h3sort);
// newContent.appendChild(divuno);
// newContent.appendChild(divdos);

// let listSorteado = [];

// addSorteado.addEventListener('click',()=>{
//     if (stringToSort.value!==''){
//         listSorteado.push(stringToSort.value);
//     } else {}
//     stringToSort.value='';
// });

// clear.addEventListener('click',()=>{
//     location.reload();
// });

// sortConfirm.addEventListener('click',()=>{
//     let random = Math.floor(Math.random()*listSorteado.length);
//     if (listSorteado.length==0||listSorteado.length==1) return sortRes.textContent = 'add something';
//     else return sortRes.textContent = listSorteado[random];
// });

// luego de todo eso, agregar dentro de sort.addeventlistener:
// section.replaceChild(newContent,content);
// pero ya descubrimos una forma mas eficiente de hacerlo