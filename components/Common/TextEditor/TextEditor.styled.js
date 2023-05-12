import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const TextEditorContainer = styled.div`
    width: 100%;
    display: flex; flex-direction: column;
    & .menuBar{
        margin-top: 20px;
        @media all and (max-width: 500px){
            margin-top: 15px;
        }
        width: 100%;
        display: flex; flex-wrap: wrap;
        & button{
            display: flex; align-items: center; justify-content: center;
            color: white;
            /* background-color: ${GLOBAL.BUTTON_COLORS[0].PRIMARY}; */
            background-color: transparent;
            cursor: pointer;
            &.is-active{
                background-color: ${GLOBAL.BUTTON_COLORS[0].SECONDARY};
                &.paragraph{
                    background-color: transparent;
                }
            }
            width: fit-content; height: fit-content;
            padding: 5px 5px;
            margin-right: 10px;
            @media all and (max-width: 500px){
                margin-right: 5px;
            }
            & img{
                height: 20px; width: 20px;
                @media all and (max-width: 500px){
                    height: 20px; width: 20px;
                }
            }
            border-radius: 3px;
        }
    }
    //placeholder text
    .ProseMirror p.is-editor-empty:first-child::before {
        color: #DDDDDD;
        content: attr(data-placeholder);
        float: left;
        height: 0;
        pointer-events: none;
    }
    // editor
    .ProseMirror {
        outline: 0;
        /* min-height: 30px; */
        padding: 0px;
        box-sizing: border-box;
        max-width: 100%;
        & *{
            font-size: inherit;
            list-style: unset;
        }
        > * + * {
            margin-top: 10px;
        }
        & img{
            max-width: 100%;
            border-radius: 10px;
            margin-top: 5px;
        }
        ul,
        ol {
            padding: 0 1em;
            // add standard list styles
            list-style: circle;
        }
        *{
            list-style: circle;
        }

        h1,
        h2{
            line-height: 1.5;
        }
        h1{
            font-size: 1.3em;
        }
        strong{
            font-weight: 600;
        }

        code {
            background-color: rgba(#616161, 0.1);
            color: #616161;
        }

        pre {
            background: #0D0D0D;
            color: #FFF;
            font-family: 'JetBrainsMono', monospace;
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;
            /* width: 100%; */

            code {
            color: inherit;
            padding: 0;
            background: none;
            font-size: 0.8rem;
            }
        }

        img {
            max-width: 100%;
            height: auto;
        }

        blockquote {
            padding-left: 1rem;
            border-left: 2px solid rgba(#0D0D0D, 0.1);
        }

        hr {
            border: none;
            border-top: 2px solid rgba(#0D0D0D, 0.1);
            margin: 2rem 0;
        }
    }
`

export const ImageModalContainer = styled.div`
    position: fixed;
    width: 100vw; height: 100vh;
    top: 0; left: 0;
    background-color: rgba(0,0,0,0.3);
    z-index: 999;
    display: flex; align-items: center; justify-content: center;
    & .modal{
        background-color: ${GLOBAL.PRIMARY_COLOR};
        width: 300px;
        border-radius: 10px;
        border: 1px solid ${GLOBAL.ACCENT_COLOR};
        box-shadow: 0 0 5px black ;
        padding: 20px;
        box-sizing: border-box;
        & h3{
            font-size: 1.2em;
            margin-bottom: 20px;
            font-weight: 500;
        }
        & input{
            width: 100%;
            padding: 10px 10px;
            border-radius: 5px;
            border: 1px solid ${GLOBAL.ACCENT_COLOR};
            box-sizing: border-box;
            margin-bottom: 20px;
            background-color: transparent;
            outline:0;
            &:focus{
                border: 1px solid ${GLOBAL.LOADER_COLOR};
            }
        }
        & .controls{
            display: flex; align-items: center; 
            & button{
                background-color: ${GLOBAL.ACCENT_COLOR};
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                &.submit{
                    margin-right: 10px;
                    background-color: ${GLOBAL.LOADER_COLOR};
                }
                &:hover{
                    opacity: 0.8;
                }
            }
        }
    }
`