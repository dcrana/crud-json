import styled from "styled-components";
import ArrowFrameBlue from "../../assets/images/ArrowFrameBlue.png";

export const StyledLoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: space-between;
  justify-content: center;
  background-color: var(--blue-1);
  background-image: url(${ArrowFrameBlue});
  background-position: 0%;
  background-repeat: no-repeat;
  background-position-y: 100%;
  background-size: contain;
  min-height: 100%;
`;

export const StyledLoginBox = styled.div`
  background: var(--white-1);
  border-radius: var(--border-radius);
  margin: 10% 0% 10% 0%;
  align-self: center;
  box-shadow: var(--box-shadow);
  width: 42%;
`;

export const StyledLoginFormWrapper = styled.div`
  width: 80%;
  margin: 10% auto 10% auto;
`;

export const StyledTitle = styled.h1`
  color: var(--blue-1);
  font-size: var(--x-large);  
  font-weight: var(--font-bold);
`;

export const StyledLoginForm = styled.form`
    margin-top: 30px;
`


