import styled from "styled-components";

export const NotificationsContainer = styled.div`
    width: clamp(500px, 55%, 1000px);
    margin-top: 30px;
    @media (max-width: 1000px) { width: 100%; }
    margin-bottom: 30px;
    & .notificationsInner{
        width: 100%;
        display: flex; flex-direction: column;
        & h1{
            font-size: 1.3em;
            margin-bottom: 40px;
            font-weight: 600;
        }
    } 
`