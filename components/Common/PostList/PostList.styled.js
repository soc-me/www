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
            /* cursor: pointer; */
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
                    margin-bottom: 15px;
                    display: flex; align-items: center;
                    & *{font-size: 0.9em;}
                    & .username{
                        font-weight: 600;
                    }
                    & .seperator{
                        width: 5px; height: 5px;
                        border-radius: 9999px;
                        background-color: ${GLOBAL.BUTTON_COLORS[0].SECONDARY};
                        margin: 0 10px;
                    }
                    & button{
                        margin-left: auto;
                        background-color: ${GLOBAL.BUTTON_COLORS[0].PRIMARY};
                        overflow: hidden;
                        height: 20px; width: 20px;
                        border-radius: 9999px;
                        cursor: pointer;
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
                & .buttonControls{
                    width: 100%;
                    border-top: 1px solid ${GLOBAL.ACCENT_COLOR};
                    display: flex; align-items: center;
                    margin-top: 15px;
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
                        & .image{
                            width: 20px; height: 20px;
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                            margin-right: 15px;
                            &.likeIcon{
                                background-image: url('/heartOn.png');
                            }
                            &.commentIcon{  
                                background-image: url('/commentsIcon.png');
                            }
                        }
                    }
                }
            }   
        }
    }
`