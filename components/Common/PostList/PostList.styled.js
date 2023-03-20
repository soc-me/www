import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const PostListContainer = styled.div`
    width: 100%;
    & .postListInner{
        width: 100%;
        display: flex; flex-direction: column;
        & .post{
            width: 100%;
            border-radius: 10px;
            background-color: ${GLOBAL.PRIMARY_COLOR};
            border: 1px solid ${GLOBAL.ACCENT_COLOR};
            box-sizing: border-box;
            padding: 20px;
            display: flex; align-items: flex-start;
            margin-bottom: 20px;
            cursor: pointer;
            & .imageContainer{
                width: 50px; height: 50px;
                border-radius: 9999px;
                background-color: ${GLOBAL.SECONDARY_COLOR};
                cursor: pointer;
                & .image{
                    width: 100%; height: 100%;
                    border-radius: 9999px;
                    box-sizing: border-box;
                    border: 2px solid ${GLOBAL.ACCENT_COLOR};
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                }
            }
            & .content{
                flex-grow: 1;
                flex-shrink: 0;
                margin-left: 10px;
                margin-top: 5px;
                & .meta{
                    margin-bottom: 10px;
                    display: flex; align-items: center;
                    & .username{
                        font-weight: 600;
                    }
                    & .seperator{
                        width: 5px; height: 5px;
                        border-radius: 9999px;
                        background-color: ${GLOBAL.BUTTON_COLORS[0].SECONDARY};
                        margin: 0 10px;
                    }
                }
            }
        }
    }
`