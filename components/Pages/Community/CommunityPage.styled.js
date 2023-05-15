import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const CommunityPageContainer = styled.div`
    width: 100%;
    width: clamp(500px, 55%, 1000px);
    margin-top: 30px;
    margin-bottom: 20px;
    @media (max-width: 1000px) { width: 100%; }
    & .communityInner {
        width: 100%;
        display: flex; flex-direction: column;
        & >.top {
            width: 100%;
            display: flex; flex-direction: column;
            background-color: ${GLOBAL.PRIMARY_COLOR};
            border-radius: 10px 10px 0 0;
            margin-bottom: 20px;
            border: 1px solid ${GLOBAL.ACCENT_COLOR};
            box-sizing: border-box;
            .banner {
                width: 100%;
                height: 200px;
                background-color: ${GLOBAL.SECONDARY_COLOR};
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                border-radius: 10px 10px 0 0;
                border-bottom: 1px solid ${GLOBAL.ACCENT_COLOR};
            }
            .title {
                width: 100%;
                box-sizing: border-box;
                display: flex; flex-direction: row; align-items: center;
                padding: 20px 20px;
                padding-bottom: 0;
                & h1{
                    font-size: 1em;
                    font-weight: 600;
                }
                & .communityLogo {
                    flex-shrink: 0;
                    width: 50px;
                    height: 50px;
                    border-radius: 9999px;
                    margin-right: 20px;
                    background-color: ${GLOBAL.SECONDARY_COLOR};
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                }
                & .communityControls{
                    flex-shrink: 0;
                    margin-left: auto;
                    display: flex; flex-direction: row; align-items: center; justify-content: center;
                    height: 2em;
                    width: 70px;
                    border-radius: 5px;
                    font-weight: 500;
                    font-size: 0.9em;
                    background-color: ${GLOBAL.BUTTON_COLORS[0].PRIMARY};
                    cursor: pointer;
                    &:hover{
                        background-color: ${GLOBAL.BUTTON_COLORS[0].SECONDARY};
                    }
                    & .settingsIcon {
                        width: 20px;
                        height: 20px;
                        background-image: url('/settingsIcon.png');
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                        margin-right:5px;
                    }
                    & span{
                        font-size: 0.9em;
                        font-weight: 600;
                    }
                }
            }
            & .about {
                width: 100%;
                box-sizing: border-box;
                padding: 20px;
                margin-bottom: 10px;
                /* padding-left: 90px; */
                /* margin-top: 20px; */
                /* padding-top: 0; */
                & h2 {
                    font-size: 1em;
                    font-weight: 600;
                    margin-bottom: 10px;
                    display: none;
                }
                & p {
                    /* font-size: 0.9em; */
                }
            }
        }
        & .bottom {
            width: 100%;
            display: flex; flex-direction: column;
            & .newContainer {
                width: 100%;
                margin-bottom: 20px;
            }
        }
        & > .editForm{
            width: 100%;
            display: flex; flex-direction: column;
            background-color: ${GLOBAL.PRIMARY_COLOR};
            border-radius: 10px;
            margin-bottom: 20px;
            border: 1px solid ${GLOBAL.ACCENT_COLOR};
            box-sizing: border-box;
            padding: 20px;
            & form{
                width: 100%;
                display: flex; flex-direction: column;
                &.general{
                    & button{
                        height: 2em;
                        width: 70px;
                        border-radius: 5px;
                        margin-right: 10px;
                        font-weight: 500;
                        font-size: 0.9em;
                        cursor: pointer;
                        color: white;
                        &.visibility{
                            background-color: ${GLOBAL.BUTTON_COLORS[0].PRIMARY};
                            &:hover{
                                background-color: ${GLOBAL.BUTTON_COLORS[0].SECONDARY};
                            }
                        }
                        &.delete{
                            background-color: red;
                            &:hover{
                                opacity: 0.9;
                            }
                        }
                    }
                }
                & h2{
                    font-size: 1em;
                    font-weight: 600;
                    margin-bottom: 15px;
                    padding-bottom: 10px;
                    border-bottom: 1px solid ${GLOBAL.ACCENT_COLOR};
                }
                & .formEl{
                    width: 100%;
                    display: flex; flex-direction: column; 
                    align-items: flex-start;
                    margin-bottom: 20px;
                    &.logo{
                        margin-bottom: 0;
                    }
                    & h3{
                        font-size: 1em;
                        font-weight: 500;
                        margin-bottom: 10px;
                    }
                    & label{
                        font-size: 1em;
                        font-weight: 400;
                        margin-bottom: 15px;
                        color: #DDDDDD;
                    }
                    & .imageContainer{
                        position: relative;
                        background-color: ${GLOBAL.SECONDARY_COLOR};
                        overflow: hidden;
                        cursor: pointer;
                        border: 2px solid ${GLOBAL.ACCENT_COLOR};
                        box-sizing: border-box;
                        cursor: pointer;
                        &:hover{
                            border: 2px solid ${GLOBAL.LOADER_COLOR};
                        }
                        & img{
                            position: absolute;
                            z-index: 1;
                            width: 100%; height: auto;
                        }
                        & input{
                            width: 100%; height: 100%;
                            position: absolute;
                            z-index: 10;
                            opacity: 0;
                            background-color: inherit;
                            cursor: pointer;
                            border: 0;
                            padding: 0;
                            background-color: ${GLOBAL.SECONDARY_COLOR};
                            color: transparent;
                        }
                        &.bannerContainer{
                            width: 100%;
                            height: 200px;
                            border-radius: 10px;
                        }
                        &.iconContainer{
                            width: 70px;
                            height: 70px;
                            border-radius: 9999px;
                        }
                    }
                }
                & .error{
                    color: red;
                    font-size: 0.9em;
                    font-weight: 500;
                    margin-top: 15px;
                    &.general{
                        margin-top: 0;
                        margin-bottom: 20px;
                    }
                }
                & .controls{
                    margin-top: 20px;
                    display: flex; flex-direction: row;
                    align-items: center;
                    & button{
                        height: 2em;
                        width: 70px;
                        border-radius: 5px;
                        margin-right: 10px;
                        font-weight: 500;
                        font-size: 0.9em;
                        cursor: pointer;
                        &:last-of-type{
                            margin-right: 0;
                        }
                        &.save{
                            background-color: ${GLOBAL.LOADER_COLOR};
                            &:hover{
                                opacity: 0.9;
                            }
                        }
                        &.cancel{
                            background-color: ${GLOBAL.BUTTON_COLORS[0].PRIMARY};
                            &:hover{
                                background-color: ${GLOBAL.BUTTON_COLORS[0].SECONDARY};
                            }
                        }
                    }
                }
            }
        }
    }
`