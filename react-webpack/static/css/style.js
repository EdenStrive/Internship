import { createGlobalStyle } from 'styled-components'

//全局样式
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        font-family: "Raleway", sans-serif;
    }
    li{
        list-style: none;
    }
    body{
        position: relative;
    }
    a{
        text-decoration:none; 
        out-line: none;
        color:rgb(255,255,255);
    }
    span{
        cursor: pointer;
    }
`

