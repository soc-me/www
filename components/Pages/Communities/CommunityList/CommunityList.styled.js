import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const CommunityListContainer = styled.div`
    width: 100%;
    display: flex; flex-direction: column;
    & .listEl{
        height: 80px;
        width: 100%;
        padding: 20px 20px;
        box-sizing: border-box;
        border: 1px solid ${GLOBAL.ACCENT_COLOR};
        border-radius: 5px;
        background-color: ${GLOBAL.PRIMARY_COLOR};
        margin-bottom: 20px;
        display: flex; align-items: center;
        cursor: pointer;
        &:last-of-type {
            margin-bottom: 0;
        }
        & .communityImage {
            width: 40px;
            height: 40px;
            border-radius: 9999px;
            margin-right: 20px;
            background-color: ${GLOBAL.SECONDARY_COLOR};
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            cursor: pointer;
        }
        & .text {
            flex-grow: 1;
            display: flex; flex-direction: row;  justify-content: space-between; align-items: center;
            & .nameContainer {
                & .name {
                    font-weight: 600;
                    cursor: pointer;
                }
            }
        }
        & .lastPosted {
            & p {
                font-size: 0.8em;
                color: #DDDDDD;
            }
        }
    }
`

export const SkeletonCommunityElementContainer = styled.div`
    height: 80px;
    width: 100%;
    padding: 20px 20px;
    box-sizing: border-box;
    border: 1px solid ${GLOBAL.ACCENT_COLOR};
    border-radius: 5px;
    background-color: ${GLOBAL.PRIMARY_COLOR};
    margin-bottom: 20px;
    display: flex; align-items: center;
    cursor: default;
    & .communityImage {
        width: 40px;
        height: 40px;
        border-radius: 9999px;
        margin-right: 20px;
        background-color: ${GLOBAL.SECONDARY_COLOR};
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        cursor: default;
    }
    & .text{
        flex-grow: 1;
        height: 2em;
        border-radius: 5px;
        background-color: ${GLOBAL.SECONDARY_COLOR};
    }
`