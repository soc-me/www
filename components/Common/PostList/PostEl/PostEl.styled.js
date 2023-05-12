import { GLOBAL } from "@/GLOBAL"
import styled from "styled-components"

export const PostElContainer = styled.div`
    width: 100%;
    border-radius: 5px;
    background-color: ${GLOBAL.PRIMARY_COLOR};
    border: 1px solid ${GLOBAL.ACCENT_COLOR};
    box-sizing: border-box;
    padding: 20px;
    display: flex; align-items: flex-start;
    margin-bottom: 20px;
    /* cursor: pointer; */
    &.isComment{
        padding-bottom: 25px !important;
    }
    & .content{
        width: 100%;
        margin-top: 5px;
        & .meta{
            & .imageContainer{
                width: 30px; height: 30px;
                margin-right: 15px;
                border-radius: 9999px;
                background-color: ${GLOBAL.SECONDARY_COLOR};
                cursor: pointer;
                & .image{
                    width: 100%; height: 100%;
                    border-radius: 9999px;
                    box-sizing: border-box;
                    /* border: 2px solid ${GLOBAL.ACCENT_COLOR}; */
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                }
            }
            margin-bottom: 15px;
            display: flex; align-items: center;
            & >*{font-size: 0.8em;}
            & .username{
                font-weight: 500;
            }
            & .seperator{
                width: 5px; height: 5px;
                border-radius: 9999px;
                background-color: ${GLOBAL.BUTTON_COLORS[0].SECONDARY};
                margin: 0 10px;
            }
            & .date{
                font-weight: 500;
            }
            & .menuOuter{
                margin-left: auto;
                flex-shrink: 0;
                background-color: ${GLOBAL.BUTTON_COLORS[0].PRIMARY};
                overflow: visible;
                height: 20px; width: 20px;
                border-radius: 9999px;
                cursor: pointer;
                position: relative;
                z-index: 9;
                font-size: unset;
                &:hover{
                    background-color: ${GLOBAL.BUTTON_COLORS[0].SECONDARY};
                }
                & .image{
                    width: 70%; height: 70%;
                    background-image: url('/dotsIcon.png');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    border-radius: 9999px;
                    transform: translateY(3%) translateX(3%);
                }
            }
        }
        & .text{
            width: 100%;
        }
        & .buttonControls{
            width: 100%;
            //border-top: 1px solid ${GLOBAL.ACCENT_COLOR};
            display: flex; align-items: center;
            margin-top: 10px;
            & .item{
                display: flex; align-items: center;
                color: #DDDDDD;
                background-color: transparent;
                margin-top: 10px;
                cursor: pointer;
                &.comment{margin-right: 0; margin-left: auto;}
                & span{
                    font-weight: 500;
                    font-size: 0.9em;
                }
                & > .image{
                    width: 20px; height: 20px;
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    margin-right: 10px;
                    &.commentIcon{  
                        background-image: url('/commentsIcon.png');
                    }
                }
            }
        }
    }   
`

export const PostMenuContainer = styled.div`
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    z-index: 99;
    top: 100%;
    right: 110%;
    background-color: ${GLOBAL.PRIMARY_COLOR};
    border-radius: 5px;
    border: 1px solid ${GLOBAL.ACCENT_COLOR};
    box-shadow: 0px 0px 10px 0px rgba(21, 21, 21, 0.75);
    & button, & a{
        font-size: 0.9em !important;
        width: 100%;
        font-weight: 500;
        box-sizing: border-box;
        padding-left: 10px;
        display: flex; align-items: center;
        text-align:left;
        background-color: transparent;
        height: 40px;
        cursor: pointer;
        &:hover{
            background-color: ${GLOBAL.BUTTON_COLORS[0].PRIMARY};
        }
        &.delete{
            color: white;
        }
    }
`