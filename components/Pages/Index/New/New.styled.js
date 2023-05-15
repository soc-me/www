import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const NewContainer = styled.form`
    width: 100%;
    border-radius: 5px;
    background-color: ${GLOBAL.SECONDARY_COLOR};
    border: 1px solid ${GLOBAL.ACCENT_COLOR};
    box-sizing: border-box;
    padding: 20px;
    @media all and (max-width: 500px){
        padding: 15px;
    }
    display: flex; align-items: flex-end;
    justify-content: space-between;
    & textarea{
        flex-grow:1 ;
        background-color: ${GLOBAL.PRIMARY_COLOR};
        border-radius: 5px;
        width: 100%;
        border: 1px solid ${GLOBAL.ACCENT_COLOR};
        padding: 10px 10px;
        resize: vertical;
        margin-right: 15px;
        height: 1em;
        &:focus{
            border: 1px solid ${GLOBAL.LOADER_COLOR};
            outline: 0;
        }
    }
    & .textEditorContainer{
        width: 90%;
        margin-top: 10px;
    }
    & .buttonContainer{
        @media all and (max-width: 500px){
            height: 30px;
            display: flex; align-items: center;
        }
    }
    & button{
        display: flex; align-items: center; justify-content: center;
        flex-direction: row-reverse;
        background-color: ${GLOBAL.LOADER_COLOR};
        border-radius: 5px;
        cursor:pointer;
        height: 1em; 
        width: 30px; height: 30px;
        @media all and (max-width: 500px){
            width: 20px; height: 20px;
            border-radius: 3px;
        }
        /* @media all and (max-width: 500px){
            width: 25px; height: 25px;
            margin-bottom: 2.5px;
        } */
        box-sizing: content-box;
        & span{
            font-weight: 500;
            font-size: 0.9em;
        }
        & .image{
            width: 15px; height: 15px;
            overflow: hidden;
            //margin-left: 10px;
            & img{
                height: 100%;
                width: auto;
            }
        }
        &:hover{
            opacity: 0.9;
        }
    }
`