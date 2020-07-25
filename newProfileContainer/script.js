"use strict";

const str = {
    aboutMe: `Experienced Quality Analyst with a demonstrated history of working in the information technology and services industry. Skilled in Network Administration, Internet Protocol Suite (TCP/IP), Cascading Style Sheets (CSS), Technical Support, and HTML. Strong quality assurance professional with a Bachelor's degree focused in Administrative computer system from higher institute of computer science and management technology in Cairo, Dev JavaScript in Codepen and Stack OverFlow.`,
};
class Search extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        const root = this.shadowRoot;
        root.innerHTML = `
        <div id = 'search-container'>
        <input type = 'search' placeholder = 'Search or jump to...' id = 'search'>
          
        </div>
        

        <style>
        #search-container {
            width: 300px;
            height: 35px;
            background-color: #3D3C3A;
            border-radius: 10px;
            display: flex;
            justifiy-content: center;
            align-items: center;
        }
        #search {
            width: 90%;
            height: 90%;
            display: flex;
            border: none;
            outline: 0;
            background-color: #3D3C3A;
            border-radius: 10px;
            color: #ffff;
            padding-left: 5px;
        }
        
        </style>
        `;
    }
}

window.customElements.define('header-search', Search);

class ProfileCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        const root = this.shadowRoot;
        root.innerHTML = `
        
        <div id = 'profile-frame'>

          <div id = 'profile-photo'>
           <img src = 'assets/images/myImage.jpg' id = 'my-image'>
          </div>

          <div id = 'profile-name' class = 'size-fix'>
           <span id = 'my-name'>Mostafa Mohamed</span>
          </div>

          <div id = 'profile-title' class = 'size-fix'>
           <slot name = 'profile-title'></slot>
           <span id = 'my-title' class = 'arman'>Front-end developer</span>
          </div>

          <div id = 'profile-globe' class = 'size-fix'>
           <slot name = 'profile-globe'></slot>
           <span id = 'my-location' class = 'arman'>Poland, Warsaw</span>
          </div>

          <div id = 'profile-email' class = 'size-fix'>
           <slot name = 'profile-email'></slot>
           <span id = 'my-email' class = 'arman'>mustafa.husseiny@gmail.com</span>
          </div>

          <div id = 'profile-mobile' class = 'size-fix'>
           <slot name = 'profile-mobile'></slot>
           <span id = 'my-mobile' class = 'arman'>+48 733-825-924</span>
          </div>

          <div id = 'profile-mobile' class = 'size-fix'>
           <slot name = 'profile-media'></slot>
          </div>

          <div id = 'profile-resume'>
           <slot name = 'profile-resume'></slot>
          </div>

        </div>



        <style>
        #profile-frame {
            position: relative;
            width: 25vw;
            height: 70vh;
            display: flex;
            flex-direction: column;
            background-color: #ffff;
            border-radius: 20px;
            box-shadow: 0px 0px 5px 5px #E5E4E2;
        }
        #profile-photo {
            width: 100%;
            height: 20vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        #my-image {
            width: 20vw;
            height: 20vh;
            border-radius: 100%;
            transition: 0.5s ease-out;
        }
        #my-image:hover {
            box-shadow: 0px 0px 5px 5px #E5E4E2;
        }
        #my-name {
            font-family: 'Alex Brush';
            font-size: 2vw;
            font-weight: bold;
        }
        #my-email {
            font-size: 1.5vw;
            cursor: pointer;
        }
        #my-mobile {
            font-size: 1.5vw;
        }
        #profile-resume {
            width: 100%;
            height: 10vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .size-fix {
            width: 100%;
            height: 5vh;
            margin-top: 2vh;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #8B8A88;
        }
        .arman {
            font-family: 'Amaranth';
            font-size: 1.5vw;
        }
        </style>
        `;
    }
    
    connectedCallback() {
        const email = this.shadowRoot.getElementById('my-email');
        const image = this.shadowRoot.getElementById('my-image');
        image.oncontextmenu = () => false;
        email.addEventListener('mousedown', this.take, false);
    }

    take(e) {
        let userCopy = document.createElement('ver');
        userCopy.textContent = 'Copied';
        let inp = document.createElement('input');
        let xt = inp.value = this.textContent;
        document.body.append(inp);
        inp.select();
        document.execCommand('copy');
        userCopy.classList.add('copy-show');
        userCopy.style.left = e.clientX + 'px';
        userCopy.style.top = e.clientY -50 + 'px';
        document.body.append(userCopy)
        this.style.color = '#ea4335';
        inp.remove();
        this.onmouseup = function() {
            setTimeout(() => {
                userCopy.remove();
                this.style.color = '';
            }, 1000);
        }
    }
    
}

window.customElements.define('profile-card', ProfileCard);

const media = document.getElementsByClassName('fa-icon-media')[0];
function openMediaLink(e) {
    if (!e) e = window.event;
    const target = e.target;

    switch(target.id) {
        case 'facebook':
            window.open('https://www.facebook.com/mostafa.elhusseiny2020', '');
            break;
        case 'twitter':
            window.open('https://twitter.com/mostafahusseiny', '');
            break;
        case 'linkedin':
            window.open('https://www.linkedin.com/in/mostafa-mohamed-33189270/', '');
            break;
        case 'github':
            window.open('https://www.facebook.com/mostafa.elhusseiny2020', '');
            break;
        default: return;
    }
}

media.addEventListener('click', openMediaLink, false);

class Navigation extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        const root = this.shadowRoot;
        root.innerHTML = `
        <div id = 'navigation-container'>
         <slot name = 'about'></slot>
         <slot name = 'education'></slot>
         <slot name = 'experience'></slot>
         <slot name = 'skills'></slot>
         <slot name = 'languages'></slot>
         <slot name = 'award'></slot>
         <slot name = 'interests'></slot>
        </div>


        <style>
        #navigation-container {
            width: 50vw;
            height: 10vh;
            margin-left: 30vw;
            margin-top: 1vh;
            position: fixed;
            background-color: #ffff;
            border-radius: 20px;
            box-shadow:0px 0px 5px 5px  #E5E4E2;
            display: flex;
            align-items: center;
            justify-content: space-around;
            z-index: 10;
        }
        </style>
        `
    }
}

window.customElements.define('navigation-bar', Navigation);

class Frames extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        const root = this.shadowRoot;
        root.innerHTML = `
        <div id = 'frame'>

          <div id ='row-frame'>
         
            <div id = 'icon-frame'>
              <slot name = 'icon' id = 'icon-slot'></slot>
            </div> 

            <div id = 'topic-name'></div>
            

          </div>

         <div id = 'body-frame'>
           <slot name = 'backbone'></slot>
         </div>

        </div>

        <style>
        #frame {
            width: 49vw;
            height: auto;
            padding-top: 10px;
            padding-bottom: 10px;
            margin-top: 30px;
            background-color: #ffff;
            border-radius: 10px;
            box-shadow:0px 0px 5px 5px #E5E4E2;
        }
        #row-frame {
            width: 95%;
            height: 4vh;
            display: flex;
            align-items: center;
            left: 0;
            right: 0;
            margin: auto;
            border-bottom: 1px solid lightgray;
        }
        #icon-frame {
            width: 3vw;
            height: 3vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        #topic-name {
            height: 3vh;
            width: 15vw;
            display: flex;
            align-items: center;
            justify-content: start;
            font-family: 'Alatsi';
            font-size: 1.5vw;
            color: #232323;
        }
        #body-frame {
            width: 90%;
            height: inherit;
            display: flex;
            flex-direction: column;
            left: 0;
            right: 0;
            margin: auto;
            margin-top: 10px;
            font-family: 'Alatsi';
        }
        </style>
        `;
        this.state = {
            items: ['<i class="fas fa-briefcase"></i>']
        }
    }
    connectedCallback() {
        const frameName = this.getAttribute('subject');
        const bodyFrame = this.shadowRoot.getElementById('body-frame');
        const subjectName = this.shadowRoot.getElementById('topic-name');
        const test = '<i class="fas fa-briefcase"></i>';
        switch(frameName) {
            case 'about-me':
                subjectName.textContent = 'About Me';
                bodyFrame.textContent = str.aboutMe;
                break;
            case 'education':
                subjectName.textContent = 'Education';
                break;
            case 'experience':
                subjectName.textContent = 'Experience';
                break;
            case 'skills':
                subjectName.textContent = 'Skills';
                break;
            case 'languages':
                subjectName.textContent = 'Languages';
                break;
            case 'award':
                subjectName.textContent = 'Award';
                break;
            case 'interests':
                subjectName.textContent = 'Interests';
                break;
            default: return;

        }
    }
}

window.customElements.define('rock-frame', Frames);


const arowBtnLeft = document.getElementsByClassName('far')[0];
const arowBtnRight = document.getElementsByClassName('far')[1];

function reviewExperienceLeft() {
    const row = document.getElementsByClassName('experience-row')[0];
    const templates = document.getElementsByClassName('experience-template');
    const copy = templates[0].cloneNode(true);
    templates[0].remove();
    row.insertAdjacentElement('beforeend', copy);
}

function reviewExperienceRight() {
    const row = document.getElementsByClassName('experience-row')[0];
    const templates = document.getElementsByClassName('experience-template');
    const copy = templates[templates.length -1].cloneNode(true);
    templates[templates.length -1].remove();
    row.insertAdjacentElement('afterbegin', copy);
}

arowBtnLeft.addEventListener('click', reviewExperienceLeft, false);
arowBtnRight.addEventListener('click', reviewExperienceRight, false);


const tableBoard = document.getElementById('table-board');
class SkillCards extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        const root = this.shadowRoot;
        root.innerHTML = `
        <div id = 'card'>
          <div id = 'card-icon'>
            <slot name = 'card-icon' id = 'skillo'></slot>
          </div>
          <div id = 'card-name'></div>
          <div id = 'card-rate'>
            <slot name = 'stars' id = 'staro'></slot>
          </div>
        </div>

        <style>
         #card {
             width: 150px;
             height: 150px;
             box-shadow:0px 0px 5px 5px #E5E4E2;
             display: flex;
             flex-direction: column;
             border-radius: 10px;
             background-color: #ffff;
             margin-bottom: 20px;
         }
         #card-icon {
             width: 100%;
             height: 60%;
             display: flex;
             justify-content: center;
             align-items: center;
             font-size: 20px;
         }
         #card-name {
             width: 100%;
             height: 20%;
             font-family: 'Alatsi';
             font-size: 20px;
             display: flex;
             justify-content: center;
             align-items: center;
         }
         #card-rate {
             width: 100%;
             height: 20%;
             display: flex;
             justify-content: center;
             align-items: center;
         }
        #skillo {
            font-size: 3vw;
        }
        #staro {
            color: #FDD017;
        }
        </style>
        `;
    }

    connectedCallback() {
        const skillName = this.shadowRoot.getElementById('card-name');
        skillName.textContent = this.getAttribute('name');
    }

}

window.customElements.define('skill-card', SkillCards);

const [arabic, english, polish] = [
    'Arabic is my mother tongue language i am using it everyday in my daily basis work and in my communications with friends and family.',
    'I have the ability to express any idea without hesitation, with good vocabulary and grammar. I am speaking business English proficiency everyday at work.',
    'I can hold a basic conversation and communicate on simple everyday topics.'
  ];
  
  
  class Languages extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      const root = this.shadowRoot;
      root.innerHTML = `
       <div id = 'container'>
      
  
      <!-- first container-->
        <div id = 'lang-part part-1'>
  
          <div id = 'lang-row-header'>
            <div id = 'lang-name'>Arabic</div>
            <div id = 'lang-btn'>
              <div id = 'cic'></div>
            </div>
          </div>
          
         <div id = 'lang-body'>
            <div id = 'lang-rate'></div>
            <div id = 'lang-topic'></div>
         </div>
        
        </div>
      </div>
    
      <style>
      #container {
        width: 20vw;
        height: auto;
        padding: 10px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        transition: 0.5s ease-out;
      }
      #lang-part {
        width: 20vw;
        height: auto;
        display: flex;
        flex-direction: column;
      }
      #lang-row-header {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #F9F8F6;
        border-radius: 10px;
        cursor: pointer;
      }
      #lang-name {
        width: 70%;
        height: 100%;
        display: flex;
        padding-left: 20px;
        justify-content: start;
        align-items: center;
      }
      #lang-btn {
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: red;
      }
      #lang-body {
        width: 90%;
        height: auto
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        transform: scale(0);
        display: none;
        transition: 0.5s ease-out;
        padding-left: 20px;
        padding-top: 10px;
      }
      #lang-rate {
        width: 80%;
        height: 20px;
        display: flex;
        border-bottom: 2px solid lightgray;
      }
      #lang-topic {
        margin-top: 100px;
        width: 80%;
        height: auto;
      }
      #cic {
        width: 5px;
        height: 5px;
        border-radius: 100%;
        border: 5px solid #2b2b2b;
      }
      </style>
      `;
    }
    connectedCallback() {
      const elementB = this.shadowRoot.getElementById('lang-body');
      const btn = this.shadowRoot.getElementById('lang-row-header');
      const cic = this.shadowRoot.getElementById('cic');
      const langName = this.shadowRoot.getElementById('lang-name');
      const langBody = this.shadowRoot.getElementById('lang-body');
      const langRate = this.shadowRoot.getElementById('lang-rate');
      
      
      btn.onclick = function () {
        const lord = getComputedStyle(elementB);
        if (lord.transform == 'matrix(1, 0, 0, 1, 0, 0)') {
          elementB.style.transform = 'scale(0)';
          cic.style.border = '5px solid #2b2b2b';
          setTimeout(() => elementB.style.display = '', 500);
          cic.style.color = '';
        } else {
          elementB.style.display = 'flex';
          cic.style.border = '5px solid lightgreen';
          setTimeout(() => {
            elementB.style.transform = 'scale(1)';
          }, 500);
    
        }
      }
      langName.textContent = this.getAttribute('lang-name');
      langRate.textContent = this.getAttribute('lang-rate');
      const scale = this.getAttribute('lang-name');
      
      switch(scale) {
        case 'Arabic':
        langBody.textContent = arabic
        break;
        case 'English':
        langBody.textContent = english;
        break;
        case  'Polish':
        langBody.textContent = polish;
        break;
        default: return;
      }
      
    }
  }
  
  
  window.customElements.define('my-languages', Languages);
/*
const svgHome = document.getElementById('svg-control');
const ball = document.getElementById('graph-ball');
const graphTrack = document.getElementById('control-graph');

ball.onmousedown = function(e) {
  
  const shiftX = e.clientX - this.getBoundingClientRect().left;
  graphTrack.onmousemove = function(e) {
    let space = ball.getBoundingClientRect().left - graphTrack.getBoundingClientRect().left;
    let scale = space * 205 / 100;
    
    if (e.clientX > this.getBoundingClientRect().left + this.clientWidth - 10 ) {
      return;
    }
    if (e.clientX <=  this.getBoundingClientRect().left + 10) {
      return;
    }
    const svg = d3.select('#loop');
    svg.attr('d', `M 0 20 Q 300 0 ${scale} 200`)
    ball.style.left = e.pageX - shiftX + 'px';
    const scaleTxt = d3.select('#lang-graph');
    if (scale < 50 ) {
      scaleTxt.text('Polish');
    }
    if (scale > 50 && scale < 200) {
      scaleTxt.text('English');
    } 
    if (scale > 230) {
      scaleTxt.text('Arabic');
    }
  }
  graphTrack.onmouseup = function() {
    this.onmousemove = null;
  }
  graphTrack.ondragstart = function() {
    return false;
  }
  svgHome.onmouseup = function() {
    graphTrack.onmousemove = null;
  }

}


graphTrack.onclick = function(e) {
  if (e.clientX > this.getBoundingClientRect().left + this.clientWidth - 10 ) {
      return;
    }
    if (e.clientX <=  this.getBoundingClientRect().left + 10) {
      return;
    }
  const shiftX = e.clientX - this.getBoundingClientRect().left;
  ball.style.left = e.pageX  - ball.clientWidth / 2 + 'px';
}
*/

const languages = document.getElementsByClassName('lang-scale');
const svgControl = document.getElementById('svg-control');
let i = -1;
let scales = [20, 80, 140, 280];
let names = ['Polish', 'English', 'English', 'Arabic'];

function test() {
 const svg = d3.select('#loop');
setInterval(() => {
  i++;
  if (i > scales.length -1) {
    i = 0;
  }
  svg.attr('d', `M 0 20 Q 300 0 ${scales[i]} 200`);
  d3.select('#lang-graph').text(names[i]);
}, 2000);
  
}

test();


class Interests extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    const root = this.shadowRoot;
    root.innerHTML = `
    <div id = 'container-interest'>
      <div id = 'left'>
        <slot name = 'interest-icons'></slot>
      </div>
      <div id = 'right'></div>
    </div>

    <style>
    #container-interest {
      width: 200px;
      height: 50px;
      border-radius: 10px;
      box-shadow: 0px 0px 5px 5px #E5E4E2;
      background-color: #ffff;
      display: flex;
      margin-bottom: 20px;
    }
    #left {
      width: 40%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #right {
      width: 60%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Alatsi';
      font-size: 18px;
      color: #232323;
    }
    </style>
    `;
  }
  connectedCallback() {
    const txt = this.shadowRoot.getElementById('right');
    txt.textContent = this.getAttribute('interest-name');
  }
}

window.customElements.define('interest-tag', Interests);


class Message extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    const root = this.shadowRoot;
    root.innerHTML = `
    <div id = 'message-container'>

  <div id = 'name-row'>
    <div class = 'inputs' id = 'first-name-input'>
      <input type = 'text' placeholder="first name" class = 'input-user' id = 'input-user-firstname' required />
    </div>
    <div class = 'inputs' id = 'last-name-input'>
      <input type = 'text' placeholder="last name" class = 'input-user' id = 'input-user-lastname' required />
    </div>
  </div>


  <div id = 'email-row'>
    <div id = 'email-container'>
      <input type = 'text' class = 'input-user' id = 'input-user-email' placeholder="Email" required />
    </div>
  </div>


  <div id = 'alert-row'>
    <div id = 'user-alert'></div>
  </div>


  <div id = 'text-row'>
    <textarea id = 'user-textarea' placeholder="your message.."></textarea>
  </div>


  <div id = 'details-row'>
    <span id = 'msg-saved'></span>
    <span id = 'msg-date'></span>
  </div>

  <div id = 'send-row'>
    <div id = 'server-logo'></div>
    <div id = 'btn-msg'>Send</div>

  </div>

</div>

<style>
#message-container {
  width: 45vw;
  height: 70vh;
  padding: 20px;
  background-color: #ffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-family: 'Alatsi';
}
#name-row {
  width: 90%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#email-row {
  width: 90%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#alert-row {
  width: 90%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#text-row {
  width: 90%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#details-row {
  width: 90%;
  height: 30px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding-left: 10px;
  font-family: 'Alatsi';
  font-size: 14px;
}
#msg-date {
  margin-left: 10px;
}
#send-row {
  margin-top: 10px;;
  height: 180px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.inputs {
  width: 10vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-bottom: 2px solid grey;
}
.input-user {
  width: 90%;
  height: 90%;
  border: none;
  outline: 0;
}
#email-container {
  width: 50%;
  height: 100%;
  border-bottom: 2px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
}
#user-alert {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
}
#user-textarea {
  width: 100%;
  height: 100%;
  border: 2px solid grey;
  border-radius: 10px;
  padding: 10px;
  outline: 0;
  resize: none;
}
#server-logo {
  width: 150px;
  height: 100px;
}
#btn-msg {
  width: 200px;
  height: 50px;
  background-color: royalblue;
  margin-top: 20px;
  color: #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
}

</style>
    `;
  }
  connectedCallback() {
    const txt = this.shadowRoot.getElementById('user-textarea');
    const txtMsgSave = this.shadowRoot.getElementById('msg-saved');
    const txtMsgDate = this.shadowRoot.getElementById('msg-date');
    txt.value = localStorage.getItem('message');

    txt.onkeyup = function() {
      const str = txt.value;
      localStorage.setItem('message', str);
      const userDate = new Date();
      txtMsgSave.textContent = 'Saved!';
      
      if (txt.value.length < 1) {
        txtMsgSave.textContent = '';
      }

    }
  }
}

window.customElements.define('message-form', Message);

const homeWall = document.getElementsByClassName('home-wall')[0];
function appReview() {

  homeWall.scrollTo(0, 0);

}

const rel = document.getElementsByClassName('fa-redo')[0];
rel.addEventListener('click', appReview, false);

homeWall.onscroll = function() {

 rel.classList.add('reloading');
 if (this.scrollTop + this.clientHeight == this.scrollHeight) {
   rel.classList.add('reloading');
 } else {
   rel.classList.remove('reloading');
 }
};

class QueryBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    const root = this.shadowRoot;
    root.innerHTML = `
    <div id = 'query-box'>
  <div id = 'mail-box'>
    <div class = 'mail-icon'>
      <slot name = 'mail-box'></slot>
    </div>
    <div class = 'mail-txt'>
      <p>Drop me an email</p>
    </div>
  </div>
  <div id = 'feedback-box'>
    <div class = 'mail-icon'>
      <slot name = 'feedback'></slot>
    </div>
    <div class = 'mail-txt'>Feedback survey</div>
  </div>
</div>

<style>
  #query-box {
    width: 18vw;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #ffff;
    box-shadow: 0px 0px 5px 5px #E5E4E2;
    border-radius: 10px;
  }
  #mail-box {
    width: 90%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    background-color: #ffff;
    box-shadow: 0px 0px 3px 3px #E5E4E2;
    border-radius: 10px;
    cursor: pointer;
  }
  #feedback-box {
    width: 90%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    background-color: #ffff;
    box-shadow: 0px 0px 3px 3px #E5E4E2;
    border-radius: 10px;
    cursor: pointer;
  }
  .mail-icon {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mail-txt {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Alatsi';
    font-size: 16px;
    color: #2b2b2b;
  }
</style>
    `;
  }
  connectedCallback() {
    const btn = this.shadowRoot.getElementById('mail-box');
    const feedbackBtn = this.shadowRoot.getElementById('feedback-box');
    const mailMsg = document.getElementsByClassName('drop-mail-container')[0];
    const mailBody = document.getElementById('drop-body');
    
    btn.onclick = function() {

      if (mailBody.children.length > 0) {
        return;
      }

      mailMsg.classList.add('openMail');
      const domCover = document.createElement('div');
      domCover.classList.add('cover');
      document.body.appendChild(domCover);
      const messageForm = document.createElement('message-form');
      mailBody.append(messageForm);
    }
   
    feedbackBtn.onclick = function() {

      if (mailBody.children.length > 0) {
        return;
      }

      mailMsg.classList.add('openMail');
      const domCover = document.createElement('div');
      domCover.classList.add('cover');
      document.body.appendChild(domCover);
      const messageForm = document.createElement('feedback-survey');
      mailBody.append(messageForm);
    }

  }
}

window.customElements.define('mail-survey', QueryBox);

class FeedBack extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    const root = this.shadowRoot;
    root.innerHTML = `
    <div id = 'feedback-container'>
  <div id = 'intro'>
    <p>
      Collecting the employer's and recruiter's feedback helps me constantly to improve the quality of my application and develop my web development skills, along with high-performance technologies reflecting on my skills and increasing my chances to get hired.
    </p>
  </div>
  <div id = 'feedback-body'>

    <div class = 'feedback-item'>
      <div class = 'header' id = 'feed-header'></div>
      <div class = 'feed-row'>
        <div class = 'item-header'>Bad</div>
        <div class = 'item-header'>Normal</div>
        <div class = 'item-header'>Good</div>
        <div class = 'item-header'>Very Good</div>
      </div>
    </div>

    <div class = 'feedback-item'>
      <div class = 'header' id = 'feed-header'>UI</div>
      <div class = 'feed-row'>
        <div class = 'item-radio'>
          <input type = 'radio' value = 'bad' class = 'radio-feed-ui'  id = 'feed-ui'/>
        </div>
        <div class = 'item-radio'>
          <input type = 'radio' value = 'normal' class = 'radio-feed-ui' />
        </div>
        <div class = 'item-radio'>
          <input type = 'radio' value = 'good' class = 'radio-feed-ui' />
        </div>
        <div class = 'item-radio'>
          <input type = 'radio' value = 'very good' class = 'radio-feed-ui' />
        </div>
      </div>
    </div>
     <div class = 'feedback-item'>
      <div class = 'header' id = 'feed-header'>UX</div>
      <div class = 'feed-row'>
        <div class = 'item-radio'>
          <input type = 'radio' value = 'bad' class = 'radio-feed-ux' />
        </div>
        <div class = 'item-radio'>
          <input type = 'radio' value = 'normal' class = 'radio-feed-ux' />
        </div>
        <div class = 'item-radio'>
          <input type = 'radio' value = 'good' class = 'radio-feed-ux' />
        </div>
        <div class = 'item-radio'>
          <input type = 'radio' value = 'very good' class = 'radio-feed-ux' />
        </div>
      </div>
    </div>
    <div class = 'feedback-item'>
      <div class = 'header' id = 'feed-header'>Functionality</div>
      <div class = 'feed-row'>
        <div class = 'item-radio'>
          <input type = 'radio' value = 'bad' class = 'radio-feed-fn' />
        </div>
        <div class = 'item-radio'>
          <input type = 'radio' value = 'normal' class = 'radio-feed-fn' />
        </div>
        <div class = 'item-radio'>
          <input type = 'radio' value = 'good' class = 'radio-feed-fn' />
        </div>
        <div class = 'item-radio'>
          <input type = 'radio' value = 'very good' class = 'radio-feed-fn' />
        </div>
      </div>
    </div>
    <div class = 'feedback-item'>
      <div class = 'header' id = 'feed-header'>Browsers CMP</div>
      <div class = 'feed-row'>
        <div class = 'item-radio'>
          <input type = 'radio' value = 'bad' class = 'radio-feed-br' />
        </div>
        <div class = 'item-radio'>
          <input type = 'radio' value = 'normal' class = 'radio-feed-br' />
        </div>
        <div class = 'item-radio'>
          <input type = 'radio' value = 'good' class = 'radio-feed-br' />
        </div>
        <div class = 'item-radio'>
          <input type = 'radio' value = 'very good' class = 'radio-feed-br' />
        </div>
      </div>
    </div>

  </div>
  <div id = 'feed-txt-container'>
    <b>other areas you see that i need to improve on</b>
      <p>(optional)</p>
      <textarea id = 'feed-txt' placeholder="Advice me.."></textarea>
  </div>
  <div id = 'feedback-alert'></div>
  <div id = 'feedback-btn'>Send</div>
</div>

  
  <style>
  #feedback-container {
  width: 45vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Alatsi';
  color: #2b2b2b;
}
#intro {
  width: 45vw;
  height: 80px;
  align-items: center;
  padding-left: 5px;
  color: #2b2b2b;
  border-bottom: 2px solid grey;
}
#feedback-body {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
}
.feedback-item {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
}
.feed-row {
  display: flex;
}
.header {
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-header {
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-radio {
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#feed-txt-container {
  width: 45vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
}
#feed-txt {
  width: 50%;
  height: 80px;
  resize: none;
  border-radius: 10px;
  margin-top: 5px;
  outline: 0;
  padding-left: 5px;
  padding-top: 5px;
  border: 2px solid grey;
}
#feedback-btn {
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background-color: royalblue;
  color: #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
}
  </style>
    `;
  }

  connectedCallback() {
    const radioUI = this.shadowRoot.querySelectorAll('.radio-feed-ui');
    const radioUX = this.shadowRoot.querySelectorAll('.radio-feed-ux');
    const radioFN = this.shadowRoot.querySelectorAll('.radio-feed-fn');
    const radioBR = this.shadowRoot.querySelectorAll('.radio-feed-br');
    
    const radioArrays = [radioUI, radioUX, radioFN, radioBR];
    
    
    function unique() {
      for (let i of radioUI) {
        i.checked = false;
      }
      this.checked = true;
    }
    
    for (let i = 0; i < radioUI.length; i++) {
      radioUI[i].addEventListener('click', unique, false);
    }
    
    
    function uniquex() {
      for (let i of radioUX) {
        i.checked = false;
      }
      this.checked = true;
    }
    
    for (let x = 0; x < radioUX.length; x++) {
      radioUX[x].addEventListener('click', uniquex, false);
    }
    
    
    function uniquefn() {
      for (let i of radioFN) {
        i.checked = false;
      }
      this.checked = true;
    }
    
    for (let y = 0; y < radioFN.length; y++) {
      radioFN[y].addEventListener('click', uniquefn, false);
    }
    
    function uniquebr() {
      for (let i of radioBR) {
        i.checked = false;
      }
      this.checked = true;
    }
    
    for (let y = 0; y < radioBR.length; y++) {
      radioBR[y].addEventListener('click', uniquebr, false);
    }
  }
}

window.customElements.define('feedback-survey', FeedBack);

const mailMsg = document.getElementsByClassName('drop-mail-container')[0];
const mailBody = document.getElementById('drop-body');
const mailComponent = document.getElementsByTagName('message-form')[0];
const closeBtn = document.getElementsByClassName('fa-window-close ')[0];




function closeMailMessage() {
  const elementCover = document.getElementsByClassName('cover')[0];
  mailBody.children[0].remove();
  mailMsg.classList.remove('openMail');
  elementCover.remove();
}

closeBtn.addEventListener('click', closeMailMessage, false);