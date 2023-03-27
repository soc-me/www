import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const SettingsContainer = styled.div`
    width: 100%;
    width: clamp(500px, 55%, 1000px);
    margin-top: 30px;
    margin-bottom: 40px;;
    & .settingsInner{
        width: 100%;
        border-radius: 5px;
        background-color: ${GLOBAL.PRIMARY_COLOR};
        border: 1px solid ${GLOBAL.ACCENT_COLOR};
        min-height: 200px;
        box-sizing: border-box;
        padding: 30px 30px;
        display: flex; flex-direction: column; align-items: flex-start;
        & h1{
            font-size: 1.3em;
            font-weight: 600;
            width: fit-content;
        }
        & .editProfile{
            margin-top: 20px;
            width: 100%;
            display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start;
            & .formEl{
                margin-bottom: 20px;
                &:last-of-type{margin-bottom: 0}
                display: flex; flex-direction: column;
                & label{
                    margin-bottom: 15px;
                    font-weight: 500;
                }
                & input.username, & textarea{
                    width: 300px;
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
                        min-height: 100px;
                        resize: none;
                        padding: 10px;
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
                    &:hover{
                        outline: 2px solid ${GLOBAL.LOADER_COLOR};
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
                & button{
                    width: 120px;
                    height: 50px;
                    border-radius: 5px;
                    background-color: ${GLOBAL.LOADER_COLOR};
                    cursor: pointer;
                    font-weight: 500;
                    display: flex; align-items: center;
                    & img{
                        width: 25px; height: 25px;
                    }
                    & span{
                        margin-left: 10px;
                    }
                    &:hover{
                        opacity: 0.9;
                    }
                }
            }
        }
    }
`