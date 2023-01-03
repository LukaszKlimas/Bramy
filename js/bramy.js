const range1 = document.querySelector('#range1');
const span1= document.querySelector('#value1');

range1.addEventListener("change", zmiana);
function zmiana(){
    span1.textContent=range1.value;
}