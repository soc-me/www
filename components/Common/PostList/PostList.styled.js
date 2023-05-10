import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const PostListContainer = styled.div`
    width: 100%;
    & .postListInner{
        width: 100%;
        display: flex; flex-direction: column;
    }
`

export const LoadingContainer = styled.div`
    width: 100%;
    display: flex; flex-direction: column;
    & .loading {
        width: 100%;
        border-radius: 5px;
        /* height: 150px; */
        border: 1px solid ${GLOBAL.ACCENT_COLOR};
        box-sizing: border-box;
        background-color: ${GLOBAL.PRIMARY_COLOR};
        margin-bottom: 20px;
        &:last-of-type{margin-bottom: 0;}
        padding: 20px;
        /* background:linear-gradient(90deg,${GLOBAL.SECONDARY_COLOR} 8%,#222222 18%,${GLOBAL.SECONDARY_COLOR} 33%);
        background-size: 200% 100%;
        animation: 1.5s shine linear infinite; */
        & .row{
            width: 100%;
            display: flex; align-items: center;
            & .skeleton{
                background: ${GLOBAL.SECONDARY_COLOR};
                border-radius: 5px;
                // animation
                animation: loading 1.5s infinite;
            }
            &.top{
                margin-bottom: 15px;
                & .image{
                    width: 30px; height: 30px;
                    border-radius: 9999px;
                    margin-right: 15px;
                }
                & .meta{
                    flex-grow: 1;
                    height: 30px;
                }
            }
            &.bottom{
                & .content{
                    width: 100%;
                    height: 80px;
                }
            }
        }
    }
    // create a loading card animation
    @keyframes loading {
        0% {
            background-position: -200% 0;
        }
        100% {
            background-position: calc(200% + 100px) 0;
        }
    }
    @keyframes shine {
  to {
    background-position-x: -200%;
  }
}
`