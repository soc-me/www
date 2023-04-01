import styled from "styled-components";

export const PostPageContainer  = styled.div`
    width: clamp(500px, 55%, 1000px);
    margin-top: 30px;
    @media (max-width: 1000px) { width: 95%; }
    & .postPageInner{
        width: 100%;
    }
`