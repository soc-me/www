import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const SettingsContainer = styled.div`
    width: 100%;
    width: clamp(500px, 55%, 1000px);
    margin-top: 30px;
    margin-bottom: 40px;;
    @media (max-width: 1000px) { width: 97.5%; }
    & .settingsInner{
        width: 100%;
        border-radius: 5px;
        background-color: ${GLOBAL.PRIMARY_COLOR};
        border: 1px solid ${GLOBAL.ACCENT_COLOR}; 
        min-height: 200px;
        box-sizing: border-box;
        /* margin-bottom: 80px; */
        /* padding:  40px; */
        padding: 40px 40px;
        @media all and (max-width: 500px){
            padding: 20px 20px;
        }
        display: flex; flex-direction: column; align-items: flex-start;
        & h1{
            font-size: 1.3em;
            font-weight: 600;
            width: fit-content;
            margin-bottom: 20px;
        }
        & .editProfile{
            margin-top: 20px;
            @media all and (max-width: 500px){
                margin-top: 0;
            }
            width: 100%;
            display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start;
            & .formEl{
                width: 100%;
                margin-bottom: 20px;
                &:last-of-type{margin-bottom: 0}
                display: flex; flex-direction: column;
                & label{
                    margin-bottom: 20px;
                    font-weight: 500;
                }
                & input.username, & textarea{
                    width: 100%;
                    height: 30px;
                    border: 1px solid ${GLOBAL.ACCENT_COLOR};
                    background-color: ${GLOBAL.PRIMARY_COLOR};
                    padding: 20px 10px;
                    border-radius: 5px;
                    box-sizing: border-box;
                    &:focus{
                        outline: none;
                        border: 1px solid ${GLOBAL.LOADER_COLOR};
                    }
                    &.bioInput{
                        min-height: 80px;
                        resize: vertical;
                        padding: 20px 10px;
                        width: 300px;
                        width: 100%;
                        background-color: ${GLOBAL.SECONDARY_COLOR};
                    }
                }
                & .imageInputContainer {
                    width: 150px; height: 150px;
                    border-radius: 9999px;
                    position: relative;
                    background-color: ${GLOBAL.SECONDARY_COLOR};
                    overflow: hidden;
                    cursor: pointer;
                    border: 2px solid ${GLOBAL.ACCENT_COLOR};
                    box-sizing: border-box;
                    &:hover{
                        border: 2px solid ${GLOBAL.LOADER_COLOR};
                    }
                    & img{
                        width: auto; height: 100%;
                        border-radius: 9999px;
                        position: absolute;
                        z-index: 9;
                        background-color: ${GLOBAL.SECONDARY_COLOR};
                    }
                    & input{
                        width: 100%; height: 100%;
                        border-radius: 9999px;
                        position: absolute;
                        z-index: 10;
                        opacity: 0;
                        background-color: inherit;
                        cursor: pointer;
                        border: 0;
                        padding: 0;
                        background-color: ${GLOBAL.SECONDARY_COLOR};
                    }
                }
                &.submit{
                    margin-top:10px;
                    @media all and (max-width: 500px){
                        margin-top: 0;
                    }
                }
                & button{
                    width: 120px;
                    height: 40px;
                    border-radius: 5px;
                    font-size: 0.9em;
                    background-color: ${GLOBAL.LOADER_COLOR};
                    cursor: pointer;
                    font-weight: 500;
                    display: flex; align-items: center;
                    & img{
                        width: 20px; height: 20px;
                        display: none;
                    }
                    & span{
                        margin-left: 0px;
                    }
                    &:hover{
                        opacity: 0.9;
                    }
                }
            }
            & .error{
                & p{
                    color: red;
                    font-size: 0.9em;
                    font-weight: 500;
                }
            }
        }
    }
    & .privacyInner{
        margin-top: 40px;
        width: 100%;
        border-radius: 5px;
        background-color: ${GLOBAL.PRIMARY_COLOR};
        border: 1px solid ${GLOBAL.ACCENT_COLOR};
        /* min-height: 200px; */
        box-sizing: border-box;
        padding: 40px 40px;
        @media all and (max-width: 500px){
            padding: 20px 20px;
        }
        display: flex; flex-direction: column; align-items: flex-start;
        & h1{
            font-size: 1.3em;
            font-weight: 600;
            width: fit-content;
            margin-bottom: 40px;
            @media all and (max-width: 500px){
                margin-bottom: 20px;
            }
        }
        & .el{
            width: 100%;
            display: flex; flex-direction: column;
            align-items: flex-start;
            margin-bottom: 40px;
            @media all and (max-width: 500px){
                margin-bottom: 20px;
            }
            &:last-of-type{margin-bottom: 0}
            & h3{
                font-size: 1.1em;
                font-weight: 500;
                margin-bottom: 20px;
                @media all and (max-width: 500px){
                    margin-bottom: 10px;
                }
            }
            & p{
                width: fit-content;
                margin-bottom: 30px;
                @media all and (max-width: 500px){
                    margin-bottom: 20px;
                }
            }
            & button{
                width: 120px;
                height: 40px;
                border-radius: 5px;
                font-weight: 500;
                font-size: 0.9em;
                cursor: pointer;
                &.delete{
                    background-color: #ba0000;
                    &:hover{
                        opacity: 0.9;
                    }
                }
                &.privacyControl, &.logout{
                    background-color: ${GLOBAL.LOADER_COLOR};
                    &:hover{
                        opacity: 0.9;
                    }
                }
            }
        }
    }
`