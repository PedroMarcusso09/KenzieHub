import { createGlobalStyle } from "styled-components"

export const GlobalReset = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    };

    #root {
        height: 100vh;
    };

    button{
        cursor: pointer;
    };

    ul, ol{
        list-style: none;
    };

    a{
        cursor: pointer;
        text-decoration: none;
    };

`