import styled from "styled-components";
import ArrowFrameBlue from "../../assets/images/ArrowFrameBlue.png";

export const StyledPageWrapper = styled.div`
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

export const StyledFormBox = styled.div`
  background: var(--white-1);
  border-radius: var(--border-radius);
  margin: 10% 0% 10% 0%;
  align-self: center;
  box-shadow: var(--box-shadow);
  width: 42%;
`;

export const StyledFormWrapper = styled.div`
  width: 80%;
  margin: 10% auto 10% auto;
`;

export const StyledTitle = styled.h1`
  color: var(--blue-1);
  font-size: var(--x-large);  
  font-weight: var(--font-bold);
`;

export const StyledForm = styled.form`
    margin-top: 30px;
`

export const StyledFormFieldDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-top: 5px;
`

export const StyledLabel = styled.label`
  color: var(--blue-2);
  font-size: var(--small);
  font-weight: var(--font-medium);
  line-height: 30px;
`
export const StyledInput = styled.input`
  border: var(--border);
  border-radius: 6px;
  height: 48px;
  // width: 100%;
  padding-left: 15px;
  color: var(--blue-2);
  // flex: 1;
  &::placeholder {
  color: var(--grey-1);
  font-size: var(--small);
  font-weight: var(--font-normal);
  margin: 5px;
}
`
export const StyledFormError = styled.div`
  margin-top: 5px;
  color: var(--red-1);
  font-size: var(--x-small);
  font-weight: var(--font-normal);
`
export const StyledInfoDiv = styled.div`
  text-align:center;
  margin-top:30px 
`
export const StyledSpan = styled.span`
  color: var(--grey-2);
  font-size: var(--small);
  font-weight: var(--font-semibold);
`
export const StyledLink = styled.span`
  color: var(--blue-1);
  font-size: var(--small);
  font-weight: var(--font-semibold);
  margin-left: 3px;
  text-decoration: underline;
  text-decoration-color:var(--blue-2) ;
  cursor: pointer; 
`



