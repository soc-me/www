import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const UserListContainer = styled.div`
    width: 100%;
    display: flex; flex-direction: column;
    & .userEl, & .skeletonUserEl{
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
        height: 60px; width: 60px;
        border-radius: 9999px;
        background-color: ${GLOBAL.SECONDARY_COLOR};
        overflow: hidden;
        & img{
            height: 100%; width: auto;
        }
    }
    & .username{
        margin-left: 20px;
        font-weight: 600;
    }
    & .accept{
        margin-left: auto;
        display: flex; align-items: center;
        width: 120px;
        height: 40px;
        justify-content: center;
        border-radius: 5px;
        background-color: ${GLOBAL.LOADER_COLOR};
        cursor: pointer;
        &:hover{
            opacity: 0.9;
        }
        & img{
            height: 20px; width: 20px;
            margin-right: 5px;
        }
        & span{
            font-weight: 400;
        }
    }
`

export const SkeletonUserContainer = styled.div`
    width: 100%;
    display: flex; align-items: center;
    padding: 20px;
    border-radius: 5px;
    background-color: ${GLOBAL.PRIMARY_COLOR};
    border: 1px solid ${GLOBAL.ACCENT_COLOR};
    & .skeletonImage{
        height: 60px; width: 60px;
        border-radius: 9999px;
        background-color: ${GLOBAL.SECONDARY_COLOR};
    }
    & .skeletonName{
        margin-left: 20px;
        height: 40px; width: 100px;
        border-radius: 5px;
        background-color: ${GLOBAL.SECONDARY_COLOR};
    }
`

export const NothingFoundContainer = styled.div`
    width: 100%;
    display: flex; flex-direction: column; align-items: center;
    margin-top: 100px;
    & .image{
        height: 40px; width: 40px;
        margin-bottom: 40px;
    }
    & p{
        display: none;
        /* background: ${GLOBAL.PRIMARY_COLOR}; */
        border-radius: 5px;
        /* border: 1px solid ${GLOBAL.ACCENT_COLOR}; */
        font-weight: 500;
        font-size: 1.3em;
        color: #DDDDDD;
    }
`