import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const IndexContainer = styled.div`
    flex-grow: 1;
    flex-shrink: 0;
    margin-top: 30px;
    overflow-y: auto;
    align-items: flex-start;
    width: clamp(500px, 55%, 1000px);
    @media (max-width: 1000px) { width: 95%; }
    & .indexInner{
        //height: 2000px;
        width: 100%;
        display: flex; align-items: flex-start;
        justify-content: center;
        margin-bottom: 20px;
        & .postsOuter{
            width: 100%;
            display: flex; flex-direction: column;
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
            & .newOuter{
                width: 100%;
                margin-bottom: 20px;
            }
        }
    }
`