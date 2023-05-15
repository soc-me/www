import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const CommunitiesPageContainer = styled.div`
    width: 100%;
    width: clamp(500px, 55%, 1000px);
    margin-top: 30px;
    margin-bottom: 40px;
    @media (max-width: 1000px) { width: 95%; }
    display: flex; flex-direction: column;
    .top {
        width: 100%;
        display: flex; flex-direction: column;
        background-color: ${GLOBAL.PRIMARY_COLOR};
        border-radius: 10px 10px 0 0;
        margin-bottom: 20px;
        border: 1px solid ${GLOBAL.ACCENT_COLOR};
        box-sizing: border-box;
        .banner {
            width: 100%;
            height: 150px;
            background-image: url("/communitiesBanner.jpg");
            background-size: cover;
            background-position: center;
            border-radius: 10px 10px 0 0;
            border-bottom: 1px solid ${GLOBAL.ACCENT_COLOR};
        }
        .title {
            width: 100%;
            box-sizing: border-box;
            display: flex; flex-direction: row; justify-content: space-between; align-items: center;
            padding: 20px 20px;
            & h1 {
                font-size: 1.1em;
                font-weight: 600;
            }
            & button.createCommunity {
                background-color: ${GLOBAL.LOADER_COLOR};
                height: 2em;
                width: 70px;
                border-radius: 5px;
                font-weight: 500;
                font-size: 0.9em;
                border: none;
                color: white;
                cursor: pointer;
                &:hover {
                    opacity: 0.9;
                }
            }
        }
        .text {
            width: 100%;
            box-sizing: border-box;
            padding: 0 20px;
            display: flex; flex-direction: column;
        }
    }
`