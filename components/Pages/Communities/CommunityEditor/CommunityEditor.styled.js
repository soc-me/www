import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const CommunityEditorContainer = styled.form`
    width: 100vw;
    position: fixed; top: 0; left: 0;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    z-index: 9999;
    & .modal{
        background-color: ${GLOBAL.PRIMARY_COLOR};
        border-radius: 10px;
        border: 1px solid ${GLOBAL.ACCENT_COLOR};
        display: flex;
        flex-direction: column;
        padding: 20px;
        width: clamp(400px, 30%, 500px);
        @media (max-width: 600px) { width: 95%; }
        & .title{
            width: 100%;
            & h2{
                font-size: 1.1em;
                font-weight: 600;
            }
            padding-bottom: 10px;
            border-bottom: 1px solid ${GLOBAL.ACCENT_COLOR};
            margin-bottom: 20px;
        }
        & .formEl{
            width: 100%;
            display: flex; flex-direction: column;
            margin-bottom: 15px;
            &.visibility{
                margin-bottom: 0;
            }
            & h3{
                font-size: 1em;
                font-weight: 600;
                margin-bottom: 10px;
            }
            & label{
                font-size: 0.9em;
                color: #DDDDDD;
                margin-bottom: 10px;
            }
            & input{
                width: 100%;
                outline: 0;
                font-size: 0.9em;
                box-sizing: border-box;
                padding: 5px 10px;
                border-radius: 3px;
                border: 1px solid ${GLOBAL.ACCENT_COLOR};
                background-color: transparent;
                &:focus{
                    border: 1px solid ${GLOBAL.LOADER_COLOR};
                }
            }
        }
        & .controls{
            margin-top: 25px;
            display: flex; flex-direction: row; justify-content: flex-start;
            align-items: center;
            & button{
                margin-right: 10px;
                &:last-of-type{
                    margin-right: 0;
                }
                padding: 10px 10px;
                border-radius: 5px;
                border: none;
                cursor: pointer;
                font-size: 0.9em;
                font-weight: 500;
                height: 2em;
                width: 70px;
                border-radius: 5px;
                &.create{
                    background-color: ${GLOBAL.LOADER_COLOR};
                    color: white;
                    &:hover{
                        opacity: 0.9;
                    }
                }
                &.cancel{
                    background-color: ${GLOBAL.BUTTON_COLORS[0].PRIMARY};
                    color: white;
                    &:hover{
                        opacity: 0.9;
                    }
                }
            }
        }
        & .error{
            color: red;
            font-size: 0.9em;
            margin-top: 15px;
            font-weight: 600;
        }
    }
`