import { StyledLoginBox, StyledLoginFormWrapper, StyledLoginPageWrapper, StyledTitle } from "./StyledLogin";

export const Login = () => {
    return (
        <StyledLoginPageWrapper>
            <StyledLoginBox>
                <StyledLoginFormWrapper>
                    <StyledTitle>Login</StyledTitle>
                </StyledLoginFormWrapper>
            </StyledLoginBox>
        </StyledLoginPageWrapper>
    )
}
export default Login;