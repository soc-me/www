import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const TextEditorContainer = styled.div`
    width: 100%;
    display: flex; flex-direction: column;
    & .menuBar{
        margin-top: 20px;
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
            & img{
                height: 20px; width: 20px;
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
        }
        > * + * {
            margin-top: 0.75em;
        }

        ul,
        ol {
            padding: 0 1em;
            // add standard list styles
            list-style: disc;
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