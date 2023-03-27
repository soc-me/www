import styled from "styled-components";

export const LikeButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: inherit;;
    & .likeIcon{
        width: 20px; height: 20px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        margin-right: 10px;
    }
    & span{
        font-weight: 500;
        font-size: 0.9em;
    }
`