import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px
    }
    li{
        list-style: none;
    }
`

export const Li = styled.li`
    color:red;
`