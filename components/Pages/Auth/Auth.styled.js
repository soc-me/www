import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const AuthContainer = styled.div`
    width: fit-content;
    & .authInner {
        display: flex; flex-direction: column;
        align-items: flex-start;
        & h1{
            font-size: 1.3em;
            font-weight: 500;
            margin-bottom: 10px;
        }
        & .meta{
            font-size: 1em;
            & a{
                font-size: inherit; font-weight: inherit;
                color: ${GLOBAL.LOADER_COLOR};
            }
        }
        & form{
            margin-top: 30px;
            display: flex; flex-direction: column;
            & .inputElement{
                display: flex; flex-direction: column;
                margin-bottom: 20px;
                & input{
                    width: 300px;
                    height: 40px;
                    padding: 15px 5px;
                    box-sizing: border-box;
                    background-color: ${GLOBAL.PRIMARY_COLOR};
                    border: 1px solid ${GLOBAL.ACCENT_COLOR};
                    border-radius: 3px;
                    align-items: flex-end;
                    font-size: 1em;
                    &:focus{
                        outline: 0;
                        border: 1px solid ${GLOBAL.LOADER_COLOR};
                    }
                }
                & label{
                    margin-bottom: 5px;
                    font-size: 0.8em;
                }
                &.submit{
                    margin-top: 20px;
                    & button{
                        width: 300px; height: 40px;
                        background-color: ${GLOBAL.LOADER_COLOR};
                        border-radius: 3px;
                        font-weight: 700;
                        font-size: 1em;
                        /* letter-spacing: 1px; */
                        cursor: pointer;
                        &:hover{
                            opacity: 0.9;
                        }
                    }
                }
            }
        }
        & .alt{
            margin-top: 10px;
        }
    }
`