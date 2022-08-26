/**
 * Author : Ryan
 * Date : 2022-03-03
 * Desc : Style Reset
 */

import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

//NOTE style reset & global style
export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;;
    letter-spacing: -0.02em;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
    font-family: 'Noto Sans KR', sans-serif;;
  }
  textarea {
    border: none;
    outline: none;
    font-family: 'Noto Sans KR', sans-serif;;
    overflow: auto;
    resize: none;
  }
  ul {
    list-style: none;
  }
  li {
    list-style-type : none;
  }
  :focus{
    outline: none;
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes moveup {
    0%{ opacity: 0; transform: translateY(0);}
    100%{opacity: 1; transform: translateY(-50px);}
  }
  @keyframes underline {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 165px;
    }
  }
  @keyframes MUnderline {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 130px;
    }
  }
  @keyframes height100 {
    from {
      height: 0;
    }
    to {
      height: 100%;
    }
  }
  @keyframes height20 {
    from {
      height: 0;
    }
    to {
      height: 15%;
    }
  }
  @keyframes width130 {
    from {
      width: 90px;
    }
    to {
      width: 170px;
    }
  }
`;
