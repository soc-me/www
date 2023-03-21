import styled from "styled-components";

export const AuthLayoutContainer = styled.div`
    // this prevents elastic scrolling on mobile
    width: 100vw;
    height: 100vh;
    min-height: 500px;
    position: fixed; top: 0; left: 0; z-index: 0;
    & .authLayoutInner{
        width: 100%; height: 100%;
        overflow-y: scroll;
        display: flex; align-items: center;
        & .backgroundImage{
            height: 100%; 
            width: 20%;
            margin-right: 10%;
            & .image{
                height: 100%; width: 100%;
                background-image: url("/authBg.jpg");
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
            }
        }
    }
`