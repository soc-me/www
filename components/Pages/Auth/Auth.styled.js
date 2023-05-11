import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const AuthContainer = styled.div`
    width: fit-content;
    background-color: ${GLOBAL.SECONDARY_COLOR};
    /* border: 1px solid ${GLOBAL.ACCENT_COLOR}; */
    padding: 50px 50px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    /* min-height: 100vh; */
    @media (max-width: 650px){
        width: 100%;
        max-width: 400px;
        box-shadow: none;
        padding: 0;
        margin-top: 60px;
        display: flex; flex-direction: column;
        align-items: center;
    }
    & .bgImage{
        width: 100%;
        height: 100px;
        display: none;
        @media (max-width: 650px){
            margin-top: auto;
            display: none;
        }
        background-image: url("/authBg3.jpg");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }
    & .authInner {
        display: flex; flex-direction: column;
        align-items: flex-start;
        @media (max-width: 650px){
            width: 80%;
            /* margin-bottom: 30px; */
        }
        & h1{
            font-size: 1.3em;
            font-weight: 500;
            margin-bottom: 20px;
        }
        & .meta{
            font-size: 0.9em;
            font-weight: 500;
            & a{
                font-size: inherit; font-weight: inherit;
                color: ${GLOBAL.LOADER_COLOR};
            }
        }
        & .redirection{
            margin-top: 40px;
            font-size: 0.9em;
            font-weight: 500;
        }
        & form{
            margin-top: 30px;
            display: flex; flex-direction: column;
            width: 100%;
            & .errorContainer{
                color: red;
                font-size: 0.9em;
                font-weight: 400;
                margin: 5px 0;
            }
            & .inputElement{
                display: flex; flex-direction: column;
                margin-bottom: 20px;
                width: 100%;
                & input{
                    width: 100%;
                    height: 40px;
                    padding: 15px 5px;
                    box-sizing: border-box;
                    background-color: ${GLOBAL.PRIMARY_COLOR};
                    border: 1px solid ${GLOBAL.ACCENT_COLOR};
                    border-radius: 3px;
                    align-items: flex-end;
                    font-size: 0.9em;
                    &:focus{
                        outline: 0;
                        border: 1px solid ${GLOBAL.LOADER_COLOR};
                    }
                }
                & label{
                    margin-bottom: 5px;
                    font-size: 0.9em;
                    font-weight: 500;
                }
                &.submit{
                    width: 100%;
                    margin-top: 20px;
                    & button{
                        width: 100%; height: 40px;
                        background-color: ${GLOBAL.LOADER_COLOR};
                        border-radius: 3px;
                        font-weight: 700;
                        font-size: 0.9em;
                        /* letter-spacing: 1px; */
                        cursor: pointer;
                        &:hover{
                            opacity: 0.9;
                        }
                    }
                    & .spinnerOuter{
                        width: 100%; height: 100%;
                    }
                }
            }
        }
        & .alt{
            margin-top: 10px;
        }
    }
`