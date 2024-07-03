import javascriptLogo from "./javascript.svg";
import "./style.css";
import viteLogo from "/vite.svg";

export const template = (document.querySelector("#app").innerHTML = `
  <div>
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    
    <h1>Hello Vite!</h1>
  </div>
`);
