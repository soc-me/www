import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const AccountPageContainer = styled.div`
    width: clamp(500px, 55%, 1000px);
    margin-top: 30px;
    display: flex; flex-direction: column;
    margin-bottom: 40px;
    @media (max-width: 1000px) { width: 95%; }
    /* change */
    & .info{
        width: 100%;
        padding-bottom: 30px;
        border-bottom: 1px solid ${GLOBAL.ACCENT_COLOR};
        display: flex; flex-direction: column;
        @media all and (max-width: 500px){
            padding-bottom: 0;
            border-bottom: 0;
        }
        & > .row{
            width: 100%;
            display: flex; align-items: center;
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
                    margin-left: 10vw;
                }
                & .row{
                    width: 100%;
                    display: flex; align-items: center;
                    @media all and (max-width: 500px){
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
                                font-size: 1.1em;
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
                        }
                    }
                    &.followersList{
                        margin-top: 30px;
                        display: flex; align-items: center;
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
                }
                width: 100%;
                margin-top: 30px;
                & .bio{
                    width: 100%;
                    display: flex; justify-content: flex-start;
                    /* margin-top: 30px; */
                    /* margin-bottom: 10px; */
                }
                & .followersList{
                    margin-top: 30px;
                    width: 100vw;
                    transform: translateX(-5vw);
                    /* position: absolute; */
                    left: 0;
                    display: flex; align-items: center; justify-content: center;
                    border-top: 1px  solid ${GLOBAL.ACCENT_COLOR};
                    border-bottom: 1px  solid ${GLOBAL.ACCENT_COLOR};
                    padding: 10px 0;
                    & > div{
                        display: flex; align-items: center;
                        flex-direction: column;
                        & .number{
                            font-size: 1.1em;
                            font-weight: 500;
                            margin-bottom: 10px;
                        }
                        & .text{
                            font-size: 0.9em;
                            color: #DDDDDD;
                        }
                        margin-right: 15vw;
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