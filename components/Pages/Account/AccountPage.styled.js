import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const AccountPageContainer = styled.div`
    width: clamp(500px, 55%, 1000px);
    margin-top: 30px;
    display: flex; flex-direction: column;
    margin-bottom: 40px;
    @media (max-width: 1000px) { width: 100%; }
    /* change */
    & .info{
        width: 100%;
        padding-bottom: 30px;
        border-bottom: 1px solid ${GLOBAL.ACCENT_COLOR};
        display: flex; flex-direction: column;
        @media all and (max-width:500px){
            padding-bottom: 0;
            border-bottom: 0;
            align-items: center;
        }
        & > .row{
            width: 100%;
            display: flex; align-items: center;
            @media all and (max-width: 500px){
                &:first-of-type{
                    width: 100%;
                }
            }
            & .imageOuter{
                flex-shrink: 0;
                height: 120px; width: 120px;
                @media all and (max-width: 500px){
                    height: 20vw; width: 20vw;
                }
                border-radius: 9999px;
                overflow: hidden;
                box-sizing: border-box;
                /* border: 2px solid ${GLOBAL.ACCENT_COLOR}}; */
                position: relative;
                & img{
                    height: 100%;
                    width: auto;
                }
            }
            & .meta{
                margin-left: 50px;
                flex-grow: 1;
                display: flex; justify-content: flex-start;
                flex-direction: column;
                @media all and (max-width: 500px){
                    flex-grow: 0;
                    margin-left: 20px;
                }
                & .row{
                    width: 100%;
                    display: flex; align-items: center;
                    @media all and (max-width: 400px){
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    @media all and (max-width: 500px){
                        width: fit-content;
                        & .buttons .button{
                            margin-left: 0px !important;
                        }
                    }
                    &.top{
                        & .username{
                            font-size: 1.3em;
                            @media all and (max-width: 500px){
                                font-size: 1.2em;
                                margin-bottom: 0;
                                margin-right: 20px;
                            }
                            @media all and (max-width: 400px){
                                font-size: 1.2em;
                                margin-bottom: 10px;
                            }
                            font-weight: 500;
                            width: fit-content;
                        }
                        & .buttons{
                            flex-grow: 1;
                            display: flex; align-items: center;
                            & .button{
                                height: 35px;
                                width: 120px;
                                border: 0;
                                color: white;
                                margin-left: 30px;
                                cursor: pointer;
                            }
                            & .followButtonContainer{
                                margin-left: 30px;
                            }
                            & .settings{
                                border-radius: 5px;
                                display: flex; align-items: center;
                                background-color: ${GLOBAL.BUTTON_COLORS[0].PRIMARY};
                                color: white;
                                &:hover{
                                    background-color: ${GLOBAL.BUTTON_COLORS[0].SECONDARY};
                                }
                                & span{
                                    font-size: 1em;
                                    font-weight: 500;
                                }
                            }
                            & .fakeFollow{
                                border-radius: 5px;
                                display: flex; align-items: center;
                                background-color: ${GLOBAL.LOADER_COLOR};
                                color: white;
                                cursor: pointer;
                                &:hover{
                                    opacity: 0.8;
                                }
                                & span{
                                    font-size: 1em;
                                    font-weight: 500;
                                }
                            }
                        }
                    }
                    &.followersList{
                        margin-top: 30px;
                        display: flex; align-items: center; flex-direction: row;
                        padding: 10px 20px;
                        background-color: ${GLOBAL.PRIMARY_COLOR};
                        width: fit-content;
                        border-radius: 5px;
                        box-shadow: 0px 0px 10px 0px rgb(12, 12, 12);
                        @media all and (max-width: 500px){
                            display: none;
                        }
                        & > div{
                            display: flex; align-items: center;
                            & .number{
                                font-weight: 500;
                                margin-right: 5px;
                            }
                            margin-right:30px;
                            @media all and (max-width: 600px){
                                margin-right: 15px;
                            }
                            &:last-of-type{
                                margin-right: 0;
                            }
                        }
                    }
                }
                & .bio{
                    @media all and (max-width: 500px){
                            display: none;
                    }
                    width: 100%;
                    display: flex; justify-content: flex-start;
                    margin-top: 30px;
                    /* & h3{
                        font-weight: 500;
                        margin-bottom: 10px;
                    } */
                }
            }
            &.second{
                display: none;
                @media all and (max-width: 500px){
                    display: flex; flex-direction: column; align-items: flex-start;
                    padding-bottom: 10px;
                    border-bottom: 1px  solid ${GLOBAL.ACCENT_COLOR};
                }
                width: 100%;
                margin-top: 20px;
                & .bio{
                    width: 100%;
                    display: flex; justify-content: center;
                    & p{
                        width: 100%;
                    }
                    @media all and (max-width: 500px){
                        margin-bottom: 15px;
                    }
                }
                & .followersList{
                    display: none;
                    @media all and (max-width: 500px){
                        display: flex; flex-direction: row; align-items: center; justify-content: center;
                        padding: 12px 20px;
                        background-color: ${GLOBAL.PRIMARY_COLOR};
                        width: 100%;
                        box-sizing: border-box;
                        border-radius: 5px;
                        box-shadow: 0px 0px 10px 0px rgb(12, 12, 12);
                    }
                    margin-top: 0px;
                    margin-bottom: 20px;
                    /* width: 100vw;
                    transform: translateX(-5vw); */
                    /* position: absolute; */
                    left: 0;
                    /* border-top: 1px  solid ${GLOBAL.ACCENT_COLOR}; */
                    /* border-bottom: 1px  solid ${GLOBAL.ACCENT_COLOR}; */
                    /* padding: 10px 0; */
                    & > div{
                        display: flex; align-items: center;
                        flex-direction: row;
                        & .number{
                            font-size: 1em;
                            font-weight: 500;
                            margin-right: 10px;
                            font-weight: 500;
                        }
                        & .text{
                            font-size: 1em;
                            color: white;
                            font-weight: 500;
                        }
                        margin-right: 10vw;
                        @media all and (max-width: 500px){
                            margin-right: 8vw;
                        }
                        /* @media all and (max-width: 350px){
                            margin-right: 4vw;
                        } */
                        &:last-of-type{
                            margin-right: 0;
                        }
                    }
                    }
            }
        }
    }
    & .postListOuter{
        margin-top: 30px;
        & .privateError{
            margin-top: 50px;
            width: 100%;
            display: flex; align-items: center;
            flex-direction: column;
            justify-content: center;
            & .imageContainer{
                height: 80px; 
                & img{
                    height: 100%;
                    opacity: 0.8;
                }
                /* margin-right: 40px; */
                margin-bottom: 20px;
            }
            & .text{
                display: flex; flex-direction: column;
                align-items: center;
                & h3{
                    font-weight: 400;
                    color: ${GLOBAL.ACCENT_COLOR};
                    color: white;
                    font-size: 1.2em;
                    margin-bottom: 15px;
                    width: fit-content;
                }
                & p{
                    font-weight: 400;
                    width: fit-content;
                    text-align: center;
                    color: ${GLOBAL.ACCENT_COLOR};
                }
            }
        }
    }
`