import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const FollowButtonContainer = styled.button`
    width: 100%;
    background-color: transparent;
    height: 100%;
    font-weight: 500;
    cursor: pointer;
    color: white;
    cursor: pointer;
    background-color: ${GLOBAL.LOADER_COLOR};
    border-radius: 5px;
    &:hover{
        opacity: 0.9;
    }
    & span{
        background-color: transparent;
        height: 100%; width: 100%;
        display: flex; justify-content: center; align-items: center;
    }
`