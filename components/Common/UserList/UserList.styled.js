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
    @media all and (max-width: 500px){
        padding: 15px;
    }
    box-sizing: border-box;
    border-radius: 5px;
    background-color: ${GLOBAL.PRIMARY_COLOR};
    border: 1px solid ${GLOBAL.ACCENT_COLOR};
    & .imageContainer{
        height: 60px; width: 60px;
        @media all and (max-width: 500px){
            height: 40px; width: 40px;
        }
        border-radius: 9999px;
        background-color: ${GLOBAL.SECONDARY_COLOR};
        flex-shrink: 0;
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
    @media all and (max-width: 500px){
        &.profileList{
            & .profileButton{
                display: none;
            }
        }
    }
    & .profileButton{
        margin-left: auto;
        display: flex; align-items: center;
        width: 120px;
        height: 40px;
        justify-content: center;
        border-radius: 5px;
        background-color: ${GLOBAL.LOADER_COLOR};
        flex-shrink: 0;
        height: 2em;
        width: 70px;
        border-radius: 5px;
        margin-right: 10px;
        font-weight: 500;
        font-size: 0.9em;
        cursor: pointer;
        &:hover{
            opacity: 0.9;
        }
        font-weight: 500;
    }
`

export const SkeletonUserContainer = styled.div`
    /* width: 100%; */
    display: flex; align-items: center; 
    padding: 20px;
    @media all and (max-width: 500px){
        padding: 15px;
    }
    border-radius: 5px;
    background-color: ${GLOBAL.PRIMARY_COLOR};
    border: 1px solid ${GLOBAL.ACCENT_COLOR};
    & .skeletonImage{
        flex-shrink: 0;
        height: 60px; width: 60px;
        @media all and (max-width: 500px){
            height: 40px; width: 40px;
        }
        border-radius: 9999px;
        background-color: ${GLOBAL.SECONDARY_COLOR};
    }
    & .skeletonName{
        margin-left: 20px;
        height: 40px; width: 100%;
        @media all and (max-width: 500px){
            height: 30px;
        }
        flex-shrink: 1;
        border-radius: 5px;
        background-color: ${GLOBAL.SECONDARY_COLOR};
    }
`

export const NothingFoundContainer = styled.div`
    width: 100%;
    display: flex; flex-direction: row; align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    background: ${GLOBAL.PRIMARY_COLOR};
    border-radius: 5px;
    border: 1px solid ${GLOBAL.ACCENT_COLOR};
    margin-bottom: 30px;
    & img{
        height: 30px; width: 30px;
    }
    & p{
        /* margin-left: auto; */
        width: fit-content;
        font-weight: 500;
        /* font-size: 1.3em; */
    }
`