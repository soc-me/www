import styled from "styled-components";
import {GLOBAL} from '@/GLOBAL.js'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 55px;
    background-color: ${GLOBAL.PRIMARY_COLOR};
    border-bottom: 1px solid ${GLOBAL.ACCENT_COLOR};
    box-shadow: 0 0 3px #222222;
    & *{height: inherit}
    position: fixed;
    z-index: 999;
    top: 0; left: 0%;
    & .headerInner{
        width: 95%;
        max-width: 2000px;
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
                font-family: 'Tilt Warp', 'intern';
            }
        }
    }
`

export const NavContainer = styled.nav`
    height: 100%;
    margin-left: auto;
    &  ul{
        height: 100%;
        display: flex;  align-items: center;
        & li{
            display: flex; align-items: center; justify-content: center;
            margin-right: 10px;
            &:last-of-type{margin-right: 0px;}
            & a{
                height: 40px; width: 40px;
                background-color: ${GLOBAL.BUTTON_COLORS[0].PRIMARY};
                border-radius: 9999px;
                display: flex; align-items: center; justify-content: center;
                & .image{
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    height: 70%; width: 70%;
                }
                overflow: hidden;
                box-sizing: border-box;
                border: 2px solid ${GLOBAL.ACCENT_COLOR};
                cursor: pointer;
                &:hover{
                    background-color: ${GLOBAL.BUTTON_COLORS[0].SECONDARY};
                }
            }
            &.homeLink a .image{background-image: url('/homeIcon.png');}
            &.accountsLink a .image{background-image: url('/accountsIcon.png');}
            &.profileLink a{
                & .image{
                    height: 100%; width: 100%;
                }
                &:hover{
                    border-color: ${GLOBAL.LOADER_COLOR};
                }
            }
        }
    }
`