import styled from "styled-components";

export const StylesLoader = styled.div`
border: 4px solid var(--yellow-1);
border-radius: 50%;
border-top: 4px solid var(--white-4);
width: 30px;
height: 30px;
-webkit-animation: spin 2s linear infinite; /* Safari */
animation: spin 2s linear infinite;
margin: 10px auto;
/* Safari */
@-webkit-keyframes spin {
0% { -webkit-transform: rotate(0deg); }
100% { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
}
`