import styled from "styled-components";

export const LayoutContainer = styled.div`
    width: 100%;
    display: flex; flex-direction: column;
    align-items: center;
    & .layoutInner{
        width: 95%;
        display: flex; flex-direction: column;
        margin-top: 55px;
    }
`