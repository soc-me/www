import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const RequestsPageContainer = styled.div`
    width: clamp(500px, 55%, 1000px);
    margin-top: 30px;
    margin-bottom: 40px;
    @media (max-width: 1000px) { width: 97.5%; }
    & .requestsPageInner{
        width:  100%;
        display: flex; 
        flex-direction: column;
        & h1{
            font-size: 1.3em;
            font-weight: 600;
            margin-bottom: 40px;
            width: fit-content;
        }
    }
`