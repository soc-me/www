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
    & .loading{
        width: 100%;
        border-radius: 10px;
        background-color: ${GLOBAL.PRIMARY_COLOR};
        border: 1px solid ${GLOBAL.ACCENT_COLOR};
        box-sizing: border-box;
        padding: 20px;
        display: flex; align-items: flex-start;
        margin-bottom: 20px;
        height: 150px;
    }
    @keyframes sweep {
        0% {
            background-position: 0% 0%;
        }
        50% {
            background-position: 100% 100%;
        }
        100% {
            background-position: 0% 0%;
        }
    }

    .loading {
        background: linear-gradient(45deg,  ${GLOBAL.SECONDARY_COLOR}, ${GLOBAL.PRIMARY_COLOR});
        background: -moz-linear-gradient(45deg,  ${GLOBAL.SECONDARY_COLOR}, ${GLOBAL.SECONDARY_COLOR});
        background-size: 400% 400%;
        animation: sweep 2s ease-in-out infinite;
    }
`