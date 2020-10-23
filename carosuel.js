
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



/*


 <Card header = 'JavaScript' title = 'Programming Language' cover = { javaS } />
                <Card header = 'Html' title = 'Markup Language' cover = { Htm } />
                <Card header = 'Css' title = 'Cascading style sheet' cover = { css } />
                <Card header = 'Sass' title = 'Preprocessor' cover = { sass } />
                <Card header = 'BootStrap' title = 'Css Library' cover = { bootStrap} />
                <Card header = 'React' title = 'JavaScript Library' cover = { react } />
                <Card header = 'Angular' title = 'JavaScript Framework' cover = { angular } />
                <Card header = 'Vue' title = 'JavaScript Library' cover = { vue } />
                <Card header = 'NodeJs' title = 'JavaScript Library' cover = { nodejs } />
                <Card header = 'Express' title = 'Programming Language' cover = { express } />
                <Card header = 'AI' title = 'ARTIFICIAL INTELLIGENCE' cover = { ai } />
                <Card header = 'AI' title = 'ARTIFICIAL INTELLIGENCE' cover = { ai2 } />
                <Card header = 'Machine Learning' title = 'Programming Language' cover = { algo } />
                <Card header = 'Machine Learning' title = 'Programming Language' cover = { mani } />
                <Card header = 'Java' title = 'Programming Language' cover = { java } />
                <Card header = 'Git' title = 'Control Tools' cover = { git } />
                <Card header = 'GitHub' title = 'Control Tools' cover = { gitHub }  />
                <Card header = 'Python' title = 'Programming Language' cover = { python } />
                <Card header = 'PostgreSQL' title = 'DataBase' cover = { postgresql } />
                <Card header = 'Data' title = 'AI' cover = { data } />
                <Card header = 'Structure' title = 'AI' cover = { structure } />
                
                */
