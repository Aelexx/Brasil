'use restrict'
/*
const captBrasil = document.querySelector('.caption_Brasil');
const offsParent = captBrasil.offsetParent;
console.log(offsParent);
const offsLParent = captBrasil.offsetLeft;
const offsTParent = captBrasil.offsetTop;
console.log(offsLParent);
console.log(offsTParent);

const owidthcaptBrasil = captBrasil.offsetWidth;
const oheightcaptBrasil = captBrasil.offsetHeight;
console.log(owidthcaptBrasil);
console.log(oheightcaptBrasil);

const leftcaptBrasil = captBrasil.clientLeft;
const topcaptBrasil = captBrasil.clientTop;
console.log(leftcaptBrasil);
console.log(topcaptBrasil);

const clwidthcaptBrasil = captBrasil.clientWidth;
const clheicaptBrasil = captBrasil.clientHeight;
console.log(clwidthcaptBrasil);
console.log(clheicaptBrasil);

//captBrasil.scrollTop = 205;
const scrollLeftcaptBrasil = captBrasil.scrollLeft;
const scrollTopcaptBrasil = captBrasil.scrollTop = 150;
console.log(scrollLeftcaptBrasil);
console.log(scrollTopcaptBrasil);

const rioItem = document.querySelector('#mainCity');
const rioItemCoord = rioItem.getBoundingClientRect();
const rioItemCoordRight = rioItem.getBoundingClientRect().right;
console.log(rioItemCoord);
console.log(rioItemCoordRight);
const rioItemCoordTop = rioItem.getBoundingClientRect().top;
const rioItemCoordTop2 = rioItemCoordTop + window.pageYOffset;
console.log(rioItemCoordTop2);

const findByCoordinate = document.elementFromPoint(120, 120);
console.log(findByCoordinate);

const scrollWidth = window.pageXOffset;
console.log(scrollWidth);

setTimeout(function setScrollTo() {
    window.scrollTo(0, 100);
    const scrollTop = window.pageYOffset;
}, 1000);

const counts = [1,2,3,4,5,6,7,8,9,10];
counts.forEach(element => {
    const result = element * element;
    console.log(result);
});

const button = document.querySelector('.button');
    button.onclick = function(){
        console.log('Function click');
    }

const button = document.querySelector('.button');
button.addEventListener('click', function(e){
    console.log('1');
});
button.addEventListener('click', function(e){
    console.log('2');
});

const button = document.querySelector('.button');

function showMe(){
   // console.log('1');
    console.log(event.type);
};
function showMeEither(){
   // console.log('2');
    console.log(event.clientX);
    console.log(event.clientY);
};
button.addEventListener('click', showMe);
button.addEventListener('mouseenter', showMeEither);

const block = document.querySelector('.parentDiv');
const block1 = document.querySelector('.childDiv');
const block2 = document.querySelector('.greatChildDiv');

block.addEventListener('click', function(event){
    console.log('Parent');
    //console.log(event.target);
   // event.preventDefault();
});

block1.addEventListener('click', function(event){
    console.log('Child');
   // event.preventDefault();
});

block2.addEventListener('click', function Sh(event){
    console.log('Great child')
    //event.preventDefault();
    block2.removeEventListener('click', Sh);
});

const dropBtn = document.querySelector('.dropBtn');

function dropButton(){
    console.log('Yes!');
};
dropBtn.addEventListener('mouseenter', function(event){
    if(event.target.closest('.dropContent')){
        dropButton();
    }
})
const linkDef = document.querySelector('.linkPrevent');
linkDef.addEventListener('click', function(event){
    console.log('Clicked!');
    event.preventDefault();
});

const checkAll = document.querySelector('.buttonPush');
checkAll.addEventListener('click', function(event){
    console.log('Clicking!');
});

checkAll.addEventListener('mouseenter', function(event){
    console.log('Hovering!');
});

checkAll.addEventListener('mousedown', function(event){
    console.log(`Mouse down button!`);
});

checkAll.addEventListener('contextmenu', function(event){
    console.log('Context menu!');
});    

const clientXY = document.querySelector('.parentDiv');
clientXY.addEventListener('mousemove', function(event){
    clientXY.innerHTML = `x:${event.clientX} y:${event.clientY}`;
});

document.addEventListener('keydown', function(event){
    console.log(`I pushed a ${event.code} (${event.key})`);
});
document.addEventListener('keyup', function(event){
    console.log(`I take off a ${event.code} (${event.key})`);
});

const txtItem = document.querySelector('.textarea');
const txtLimit = txtItem.getAttribute('maxlength');
const txtCounter = document.querySelector('.textareaCounter');
txtCounter.innerHTML = txtLimit;

txtItem.addEventListener('keyup', counterLetters);

function counterLetters(){
    const resultTxt = txtLimit - txtItem.ariaValueMax.length;
    txtCounter.innerHTML = resultTxt;
};

window.addEventListener('scroll', function(event){
    console.log(`${this.scrollY}px`);
});
document.addEventListener('DOMContentLoaded', DOMLoad);
window.addEventListener('load', loadWin);

function DOMLoad(){
    const dLoad = document.querySelector('.imageMe');
    console.log(document.readyState);
    console.log('Loaded!');
    console.log(dLoad.offsetWidth); 
}
function loadWin(){
    const loadW = document.querySelector('.imageMe');
    console.log(document.readyState);
    console.log('WinLoaded');
    console.log(loadW.offsetWidth);
}
/*window.addEventListener('beforeunload', dont);

function dont(event){
    event.preventDefault();
    event.returnValue = "";
}

const dropSearch = document.querySelector('.dropSearch');
const txtItem = document.querySelector('.dropContent');
const txtLimit = txtItem.getAttribute('maxlength');

document.addEventListener('click', Dropdrop);
document.addEventListener('keydown', KeyDown);

function Dropdrop(event){
    if(event.target.closest('.dropBtn')){
        dropSearch.classList.toggle('show-form');
        console.log('Open');
    }
    if(!event.target.closest('.dropSearch')){
        dropSearch.classList.remove('show-form');
        console.log('Closed');

    }
};
function KeyDown(event){
    if(event.key == 'Escape'){
        dropSearch.classList.remove('show-form');
        console.log('Closed'); 
    }
}
  
const txtF = document.querySelector('.searchField');
const txtLi = txtF.getAttribute('maxlength');
const txtCt = document.querySelector('.textareaCounter span');
txtCt.innerHTML = txtLi;

txtF.addEventListener('keyup', CounterS);

function CounterS(){
        const resultTxt = txtLi - txtF.value.length;
        txtCt.innerHTML = resultTxt; 
    };
//console.log(document.forms);

const myForms = document.forms.formSI;
console.log(myForms);

//const myFormsElem = myForms.firstname;
//console.log(myFormsElem.value);
//myFormsElem.value = 'Savado';

const myForms1 = document.forms.formcities;
const myFormsElem1 = myForms1.radiobut;
console.log(myFormsElem1[0].value);
console.log(myFormsElem1[1].value);

const myFormscheckB = myForms1.One;
const myFormscheckB1 = myForms1.Two;
console.log(myFormscheckB.checked);
myFormscheckB.checked = true;
myFormscheckB1.checked = true;

const myOpt = document.getElementById('favorfood');
console.log(myOpt.options);
const myOpt1 = myOpt.selectedIndex;
console.log(myOpt1);
const myOpt2 = myOpt[1].text;
console.log(myOpt2);

let newOpt = new Option('Pasta', '5', false, false);
myOpt.append(newOpt);

const tOpt = myForms.favorfood;
console.log(tOpt); 

let twoOpt = Array.from(tOpt.options)
.filter(option => option.selected)
.map(option => option.value);
console.log(twoOpt);

const formSI12 = document.forms.formSI1;
const mainFormSI1Input = formSI1.firstname1;
const mainFormSI2Input = formSI1.lastname1;
const mainFormSI1InputPlaceholder = mainFormSI1Input.placeholder;

mainFormSI1Input.addEventListener("focus", function(e){
    mainFormSI1Input.placeholder = "";
});
mainFormSI1Input.addEventListener("blur", function(e){
    mainFormSI1Input.placeholder = mainFormSI1InputPlaceholder;
}); 

mainFormSI1Input.focus();
    setTimeout(() =>{
    mainFormSI1Input.blur()},
    3000);
 
    mainFormSI1Input.addEventListener("input", function(e){
        console.log('It works! Input');
    });
mainFormSI1Input.addEventListener("change", function(e){
    console.log('It works! Changed');
});
/*
mainFormSI1Input.addEventListener("copy", function(e){
    console.log('Copy that');
});
mainFormSI1Input.addEventListener("paste", function(e){
    if(e) e.preventDefault();{                      // It finally I did something
        console.log('Cannot paste it...');
    }
    //else {console.log('Paste it');}  
});

formSI12.addEventListener("submit", function(event){  
    if(!mainFormSI1Input.value || !mainFormSI2Input.value){
        console.log('Fill it');
        event.preventDefault();
    }
    else{console.log('Good')};
    
});*/

const widg = document.querySelector('.pict');
const popMenu = document.querySelector('.formWidget'); 

widg.addEventListener('click', function(event){
    popMenu;
    console.log('Click on');
});






    




