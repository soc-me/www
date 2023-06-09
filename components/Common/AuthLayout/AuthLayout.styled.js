import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const AuthLayoutContainer = styled.div`
    // this prevents elastic scrolling on mobile
    width: 100vw;
    height: 100vh;
    min-height: 500px;
    /* position: fixed; top: 0; left: 0; z-index: 0; */
    background-image: url("/authBg3.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    @media (max-width: 650px){
        background-image: unset;
        width: 100%;
        height: fit-content;
        position: unset;
    }
    & .authLayoutInner{
        width: 100%; height: 100%;
        /* & .backgroundImage{
            height: 100%; 
            width: 20%;
            margin-right: 5%;
            overflow: hidden;
            border-radius: 0 0% 0% 0;
            border-right: 1px solid ${GLOBAL.ACCENT_COLOR};
            & .image{
                height: 100%; width: 100%;
                background-image: url("/authBg.jpg");
                background-size: cover;
                background-position: center center;
                background-repeat: no-repeat;
            }
        } */
    }
`