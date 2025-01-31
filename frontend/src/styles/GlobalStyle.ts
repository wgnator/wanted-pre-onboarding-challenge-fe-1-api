import { createGlobalStyle } from "styled-components";
import { MOBILE_WIDTH } from "../consts/consts";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`

:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color: white;
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}
* {
  box-sizing: border-box;
}
a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    list-style: none;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
*{
    box-sizing: border-box;
}

  
*:focus, *:focus-visible {
  outline: none;

}

button {
  border-radius: 8px;
  border: 1px solid white;
  color: white;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: inherit;
  cursor: pointer;
  transition: border-color 0.25s, color 0.25s;
&:disabled:hover {
  border-color: inherit;
  color: inherit;
  * {
    color: inherit;
    transition: color 0.25s;
  }
  cursor: inherit;
}
&:hover {
  border-color: ${theme.primaryColor};
  color: ${theme.primaryColor};
  * {
    color: ${theme.primaryColor};
    transition: color 0.25s;
  }
  
  @media (max-width: ${MOBILE_WIDTH}px) {
  color: white !important; border-color: white !important
}
}

}

textarea {
  font-family: inherit;
}
::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}
::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,0.5);    /* color of the scroll thumb */
     /* roundness of the scroll thumb */
  border-radius: 5px;
}
@media (max-width: 720px) {
    button {
      padding: 0.5rem;
    }
}

@-webkit-keyframes skeleton-gradient {
    0% {
        background-color: rgba(165, 165, 165, 0.1);
    }

    50% {
        background-color: rgba(165, 165, 165, 0.3);
    }

    100% {
        background-color: rgba(165, 165, 165, 0.1);
    }
}

@keyframes skeleton-gradient {
    0% {
        background-color: rgba(165, 165, 165, 0.1);
    }

    50% {
        background-color: rgba(165, 165, 165, 0.3);
    }

    100% {
        background-color: rgba(165, 165, 165, 0.1);
    }
}
`;
