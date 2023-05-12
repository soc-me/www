import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const NotificationListContainer = styled.div`
    width: 100%;
    display: flex; flex-direction: column;
    & .notifEl{
        margin-bottom: 20px;
        &:last-of-type{margin-bottom: 0;}
    }
`

export const NotificationElementContainer = styled.div`
    width: 100%;
    display: flex; align-items: center;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: ${GLOBAL.PRIMARY_COLOR};
    border: 1px solid ${GLOBAL.ACCENT_COLOR};
    cursor: pointer;
    &:hover{
        opacity: 0.9;
    }
    & .imageContainer{
        height: 60px; width: 60px;
        border-radius: 9999px;
        background-color: ${GLOBAL.SECONDARY_COLOR};
        flex-shrink: 0;
        overflow: hidden;
        & img{
            height: 100%; width: auto;
        }
    }
    & p{
        margin-left: 20px;
        font-weight: 500;
    }
    & .time{
        margin-left: auto;
        font-weight: 500;
    }
`