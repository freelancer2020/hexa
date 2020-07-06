"use strict";

const structure = `
<div id = 'cons'>
  Confiy class
</div>
<style>
#cons {
    width: 300px;
    height: 50px;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
`;
class Idra extends HTMLElement {
    constructor() {
        super();
        this.attachShadow( {mode: 'open'} );
        const root = this.shadowRoot;
        root.innerHTML = structure;
    }
}

window.customElements.define(Idra, 'confiy-log');
