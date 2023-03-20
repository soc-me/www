import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const IndexContainer = styled.div`
    width: 100%;
    margin-top: 30px;
    & .indexInner{
        width: 100%;
        display: flex; align-items: flex-start;
        //remove
        justify-content: center;
        & .postsOuter{
            display: flex; flex-direction: column;
            width: clamp(300px, 55%, 1000px);
            & .typeSelect{
                display: flex; align-items: center;
                margin-bottom: 20px;
                & button{
                    background-color: transparent;
                    cursor: pointer;
                    display: flex; align-items: center; justify-content: center;
                    &:first-of-type{margin-right: 20px;}
                    border-radius: 5px;
                    & span{
                        padding-bottom: 5px;
                        font-weight: 600;
                        font-size: 1em;
                        border-bottom: 3px solid transparent;
                    }
                    &.selected-true{
                        & span{
                            border-bottom: 3px solid ${GLOBAL.LOADER_COLOR};
                        }
                    }
                }
            }
        }
    }
`