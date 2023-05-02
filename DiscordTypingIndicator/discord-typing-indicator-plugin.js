// ==UserScript==
// @name         Discord Typing Indicator
// @version      1
// @description  Adds a typing indicator similar as linux terminal indicator to the message input box in Discord.
// @author       veereswar gadde
// @namespace    VeereswarG#3358
// @run-at       document-start
// @grant        none
// ==/UserScript==

const css = `
[data-slate-node="element"] span[data-slate-node="text"] {
  border-right: 10px solid #d3d3d3;
}
`;

function addGlobalStyle(css) {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.append(style);
}

addGlobalStyle(css);
