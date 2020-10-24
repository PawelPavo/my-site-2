import { createGlobalStyle } from 'styled-components';

// creates style for the whole website and toggles between themes
export const GlobalStyles = createGlobalStyle`
    body, html {
        background-color: white;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

`;