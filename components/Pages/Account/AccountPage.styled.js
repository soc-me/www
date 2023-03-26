import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const AccountPageContainer = styled.div`
    width: clamp(500px, 55%, 1000px);
    margin-top: 30px;
    display: flex; flex-direction: column;
    & .info{
        width: 100%;
        display: flex; align-items: center;
        & .imageOuter{
            height: 120px; width: 120px;
            border-radius: 9999px;
            overflow: hidden;
            box-sizing: border-box;
            /* border: 2px solid ${GLOBAL.ACCENT_COLOR}}; */
            position: relative;
            & img{
                height: 100%;
                width: auto;
            }
        }
        padding-bottom: 50px;
        border-bottom: 1px solid ${GLOBAL.ACCENT_COLOR};
        & .meta{
            margin-left: 100px;
            flex-grow: 1;
            display: flex; justify-content: flex-start;
            flex-direction: column;
            & .row{
                width: 100%;
                display: flex; align-items: center;
                &.top{
                    & .username{
                        font-size: 1.3em;
                        font-weight: 500;
                        width: fit-content;
                    }
                    & .buttons{
                        flex-grow: 1;
                        display: flex; align-items: center;
                        & .button{
                            height: 35px;
                            width: 120px;
                            border: 0;
                            color: white;
                            margin-left: 30px;
                            cursor: pointer;
                        }
                        & .followButtonContainer{
                            margin-left: 30px;
                        }
                        & .settings{
                            border-radius: 5px;
                            display: flex; align-items: center;
                            background-color: ${GLOBAL.BUTTON_COLORS[0].PRIMARY};
                            color: white;
                            &:hover{
                                background-color: ${GLOBAL.BUTTON_COLORS[0].SECONDARY};
                            }
                            & span{
                                font-size: 1em;
                                font-weight: 500;
                            }
                        }
                    }
                }
                &.followersList{
                    margin-top: 30px;
                    display: flex; align-items: center;
                    & > div{
                        display: flex; align-items: center;
                        & .number{
                            font-weight: 500;
                            margin-right: 5px;
                        }
                        margin-right:30px;
                        &:last-of-type{
                            margin-right: 0;
                        }
                    }
                }
            }
            & .bio{
                width: 100%;
                display: flex; justify-content: flex-start;
                margin-top: 30px;
                /* & h3{
                    font-weight: 500;
                    margin-bottom: 10px;
                } */
            }
        }
    }
    & .postListOuter{
        margin-top: 40px;
    }
`