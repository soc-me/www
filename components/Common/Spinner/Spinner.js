import styled from "styled-components";

const Spinner = () => {
    return (
        <SpinnerContainer></SpinnerContainer>
    );
}

const SpinnerContainer = styled.div`
&{
  width: 25px;
  height: 25px;
  border: 3px solid #FFF;
  border-radius: 9999px;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  animation: pulse 1s linear infinite;
}
&:after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  border: 3px solid #FFF;
  border-radius: 9999px;
  display: inline-block;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: scaleUp 1s linear infinite;
}

@keyframes scaleUp {
  0% { transform: translate(-50%, -50%) scale(0) }
  60% , 100% { transform: translate(-50%, -50%)  scale(1)}
}
@keyframes pulse {
  0% , 60% , 100%{ transform:  scale(1) }
  80% { transform:  scale(1.2)}
}

`
export default Spinner;