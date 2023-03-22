import styled from "styled-components";

const Spinner = ({size, border}) => {
    return (
        <SpinnerContainer size={size} border={border}></SpinnerContainer>
    );
}

const SpinnerContainer = styled.div`
&{
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border: ${props => props.border}px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 9999px;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 

`
export default Spinner;