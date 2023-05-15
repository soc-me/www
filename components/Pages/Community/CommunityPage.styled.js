import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const CommunityPageContainer = styled.div`
    width: 100%;
    width: clamp(500px, 55%, 1000px);
    margin-top: 30px;
    margin-bottom: 20px;
    @media (max-width: 1000px) { width: 95%; }
    & .communityInner {
        width: 100%;
        display: flex; flex-direction: column;
        & >.top {
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
                background-color: ${GLOBAL.SECONDARY_COLOR};
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                border-radius: 10px 10px 0 0;
                border-bottom: 1px solid ${GLOBAL.ACCENT_COLOR};
            }
            .title {
                width: 100%;
                box-sizing: border-box;
                display: flex; flex-direction: row; align-items: center;
                padding: 20px 20px;
                padding-bottom: 0;
                & h1{
                    font-size: 1em;
                    font-weight: 600;
                }
                & .communityLogo {
                    flex-shrink: 0;
                    width: 50px;
                    height: 50px;
                    border-radius: 9999px;
                    margin-right: 20px;
                    background-color: ${GLOBAL.SECONDARY_COLOR};
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                }
            }
            & .about {
                width: 100%;
                box-sizing: border-box;
                padding: 20px;
                padding-left: 90px;
                /* margin-top: 20px; */
                padding-top: 0;
                & h2 {
                    font-size: 1em;
                    font-weight: 600;
                    margin-bottom: 10px;
                    display: none;
                }
                & p {
                    font-size: 0.9em;
                }
            }
        }
        & .bottom {
            width: 100%;
            display: flex; flex-direction: column;
            & .newContainer {
                width: 100%;
                margin-bottom: 20px;
            }
        }
        
    }
`