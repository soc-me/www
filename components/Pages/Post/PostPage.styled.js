import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const PostPageContainer  = styled.div`
    width: clamp(500px, 55%, 1000px);
    margin-top: 30px;
    @media (max-width: 1000px) { width: 95%; }
    & .postPageInner{
        width: 100%;
        display: flex;
        flex-direction: column;
        & .threadStarter{
            width: 100%;
            display: flex; 
            flex-direction: column;
            & h2{
                display: flex; align-items: center;
                font-size: 1em;
                font-weight: 600;
                margin-bottom: 20px;
                cursor: pointer;
                & img{
                    height: 30px;
                    width: 30px;
                    margin-right: 10px;
                }
                & span{
                    &:hover{
                        /* & img{
                            filter: opacity(0.9);
                        } */
                        opacity: 0.9;
                    }
                }
            }
            /* & .starterContainer{
                padding-bottom: 10px;
                border-bottom: 1px solid ${GLOBAL.ACCENT_COLOR};
            } */
        }
        & .comments{
            width: 100%;
            display: flex;
            flex-direction: column;
            /* margin-top: 10px; */
            & h2{
                font-size: 1em;
                font-weight: 800;
                margin-bottom: 20px;
                margin-left: 15px;
            }
        }
        & .newContainer{
            margin-bottom: 40px;

        }
    }
`