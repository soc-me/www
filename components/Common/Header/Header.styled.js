import styled from "styled-components";
import {GLOBAL} from '@/GLOBAL.js'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 55px;
    background-color: ${GLOBAL.PRIMARY_COLOR};
    border-bottom: 1px solid ${GLOBAL.ACCENT_COLOR};
    box-shadow: 0 0 3px #222222;
    & *{height: inherit}
    & .headerInner{
        width: 95%;
        display: flex;
        & .logo{
            display: flex;
            align-items: center;
            & .image{
                height: 40px; width: 40px;
                border-radius: 9999px;
                background-image: url('/logo4.jpg');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                border: 0px solid ${GLOBAL.ACCENT_COLOR};
            }
            & h2{
                font-weight: 700;
                margin-left: 20px;
                font-size: 1.5em;
                letter-spacing: 2px;
                font-family: 'Monoton', cursive;
            }
        }
    }
`