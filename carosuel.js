
const items = document.getElementsByClassName('item');
const btnRight = document.getElementById('btn-right');
const btnLeft = document.getElementById('btn-left');
const home = document.getElementById('stack');
const holder = document.getElementById('holder');

let i = 200, counter = 0;

function controlFlowRight() {
  
  new Promise(resolve => {
    const lastElement = items[items.length -1];
    const elementCopy = items[items.length -1];
    elementCopy.style.marginLeft = '-205px';
    items[items.length -1].remove();
    resolve(lastElement);
  })
  .then(newElement => {
   home.insertAdjacentElement('afterbegin', newElement);
  })
  .then(() => {
    setTimeout(() => {
      items[0].style.marginLeft = '5px';
    }, 100);
  })
  .catch(err => alert(err.message));
}

btnRight.onclick = controlFlowRight;



function controlFlowLeft() {

  new Promise(resolve => {
    const firstElement = items[0].cloneNode(true);
    items[0].style.marginLeft = '-205px';
    resolve(firstElement);
  })
  .then(first => {
    setTimeout(() => {
      items[0].remove();
      home.insertAdjacentElement('beforeend', first);
    }, 500);
  

 })
}


btnLeft.onclick = controlFlowLeft;
