import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

//全局样式
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px
    }
    li{
        list-style: none;
    }
`

//导航
export const Li = styled.li`
    color:red;
`

//背景
export const Index_div = styled.div`
    border: soild black 1px;
`