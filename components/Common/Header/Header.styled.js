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
                background-image: url('/logo5.jpg');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                border: 0px solid ${GLOBAL.ACCENT_COLOR};
                display: none;
            }
            & h2{
                font-weight: 800;
                /* margin-left: 10px; */
                font-size: 1.3em;
                letter-spacing: 1px;
                font-family: 'Tilt Warp', 'intern';
                /* color: ${GLOBAL.PRIMARY_COLOR}; */
                color: white;
                background-color: ${GLOBAL.BUTTON_COLORS[0].PRIMARY};
                padding: 0 10px;
                height: 35px;
                border-radius: 5px;
                @media all and (max-width: 500px){
                    font-size: 1.1em;
                    padding: 0 5px;
                }
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
                @media all and (max-width: 500px){
                    height: 35px; width: 35px;
                }
                background-color: ${GLOBAL.BUTTON_COLORS[0].PRIMARY};
                border-radius: 9999px;
                display: flex; align-items: center; justify-content: center;
                border: 2px solid ${GLOBAL.ACCENT_COLOR};
                & .image{
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    height: 70%; width: 70%;
                }
                &.profContainer{
                    border: 0px solid transparent;
                    &:hover{
                        /* transition: all 50ms ease-in-out; */
                        border:2px  solid ${GLOBAL.LOADER_COLOR};
                        border: 0;
                        opacity: 0.9;
                    }
                    & .image{
                        height: 100%; width: 100%;
                    }
                }
                overflow: hidden;
                box-sizing: border-box;
                cursor: pointer;
                &:hover{
                    background-color: ${GLOBAL.BUTTON_COLORS[0].SECONDARY};
                }
            }
            &.homeLink a .image{background-image: url('/homeIcon.png');}
            &.communitiesLink a .image{background-image: url('/communityIcon.png');}
            &.accountsLink a .image{
                background-image: url('/searchIcon.png');
                height: 60%; width: 60%;
            }
            &.requestsLink a .image{
                background-image: url('/accountsIcon.png');
            }
            &.requestsLink{
                position: relative;
                & .requestCount{
                    position: absolute;
                    top: 10%; right: 0;
                    height: 20px; width: 20px;
                    border-radius: 9999px;
                    background-color: red;
                    color: white;
                    font-weight: 500;
                    font-size: 0.8em;
                }
            }
            &.profileLink a{
                & .image{
                    height: 100%; width: 100%;
                }
                &:hover{
                    border-color: ${GLOBAL.LOADER_COLOR};
                }
            }
            &.notificationsLink a .image{
                background-image: url('/notificationsIcon.png');
            }
            &.notificationsLink{
                position: relative;
                & .unreadCount{
                    position: absolute;
                    top: 10%; right: 0;
                    height: 20px; width: 20px;
                    border-radius: 9999px;
                    background-color: red;
                    color: white;
                    font-weight: 500;
                    font-size: 0.8em;
                }
            }
            &.loginLink a{
                width: auto;
                padding: 0 20px;
                border-radius: 10px;
                background-color: ${GLOBAL.LOADER_COLOR};
                color: white;
                font-weight: 500;
                border: 0;
                &:hover{
                    opacity: 0.8;
                    cursor: pointer;
                }
            }
        }
    }
`