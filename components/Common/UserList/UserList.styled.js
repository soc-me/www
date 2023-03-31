import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const UserListContainer = styled.div`
    width: 100%;
    display: flex; flex-direction: column;
    & .userEl{
        margin-bottom: 20px;
    }

`

export const UserElContainer = styled.div`
    width: 100%;
    display: flex; align-items: center;
    padding: 20px;
    border-radius: 5px;
    background-color: ${GLOBAL.PRIMARY_COLOR};
    border: 1px solid ${GLOBAL.ACCENT_COLOR};
    & .imageContainer{
        height: 50px; width: 50px;
        border-radius: 9999px;
        background-color: ${GLOBAL.SECONDARY_COLOR};
        overflow: hidden;
        & img{
            height: 100%; width: 100%;
        }
    }
    & .username{
        margin-left: 20px;
        font-weight: 600;
    }
`