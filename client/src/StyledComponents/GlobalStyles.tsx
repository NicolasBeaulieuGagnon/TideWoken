import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    :root{
        --text-color: #FFBF00;
        --background-color: #fff;
        --content-color: #002137;
        --soft-content-color: #a4ffeb71;
        --heighlight-color:#22C55E;
        --off-white:#e9e9e9;
        --sharp-shadow: 0 0 5px 1px #4d4d4d;
        --light-shadow: 0 0 2px 1px #6d6d6d;
    }

/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html, body {
  height: 100%;
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
}
body {
  color: var(--text-color);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;

  @media(max-width:300px){
    line-height: 1;
  }
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}
`;
