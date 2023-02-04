import styled from "styled-components";

export const StyledHomeWrapper = styled.div`
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
export const StyledHomeTitle = styled.h1`
  color: var(--blue-1);
  font-size: var(--x-large);  
  font-weight: var(--font-bold);
`;

export const StyledButton = styled.button`
  margin-top: 20px;
  margin-left: ${({leftMargin})=>leftMargin ? leftMargin : '0px'};
  color: var(--blue-1);
  font-size: var(--small);
  font-weight: var(--font-semibold);
  background: var(--yellow-1);
  border-radius: 6px;
  width: 160px;
  padding: 8px 0px;
  border: 2px solid var(--yellow-1);
  cursor: pointer;
`;

export const StyledEditButton = styled.button`
  margin-top: 20px;
  margin-left: ${({leftMargin})=>leftMargin ? leftMargin : '0px'};
  color: var(--blue-1);
  font-size: var(--small);
  font-weight: var(--font-semibold);
  background: green;
  border-radius: 6px;
  width: 120px;
  border: none;
  padding: 8px 0px;
  cursor: pointer;
`;

export const StyledDelButton = styled.button`
  margin-top: 20px;
  margin-left: ${({leftMargin})=>leftMargin ? leftMargin : '0px'};
  color: var(--blue-1);
  font-size: var(--small);
  font-weight: var(--font-semibold);
  background: red;
  border-radius: 6px;
  width: 120px;
  padding: 8px 0px;
  border: none;
  margin: 0px 0px 0px 20px;
  cursor: pointer;
`;
