import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const NewContainer = styled.form`
    width: 100%;
    border-radius: 5px;
    background-color: ${GLOBAL.SECONDARY_COLOR};
    border: 1px solid ${GLOBAL.ACCENT_COLOR};
    box-sizing: border-box;
    padding: 20px;
    display: flex; align-items: flex-start;
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
        flex-grow:1 ;
    }
    & button{
        display: flex; align-items: center; justify-content: center;
        flex-direction: row-reverse;
        background-color: ${GLOBAL.LOADER_COLOR};
        border-radius: 5px;
        cursor:pointer;
        height: 1em; padding: 10px 10px;
        box-sizing: content-box;
        width: 50px;
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