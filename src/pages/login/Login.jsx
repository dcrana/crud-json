import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginFormValidators } from "../../formvalidators/loginFormValidators";
import { StyledButton } from "../home/StyledHome";
import { StyledForm, StyledFormBox, StyledFormError, StyledFormFieldDiv, StyledFormWrapper, StyledInfoDiv, StyledInput, StyledLabel, StyledLink, StyledPageWrapper, StyledSpan, StyledTitle } from "./StyledLogin";

 const Login = () => {
    const navigate = useNavigate();
    const handleNavigate = (item) => {
        item && navigate(item);
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <StyledPageWrapper>
            <StyledFormBox>
                <StyledFormWrapper>
                    <StyledTitle>Login</StyledTitle>
                    <StyledForm onSubmit={handleSubmit(onSubmit)}>
                        <StyledFormFieldDiv>
                            <StyledLabel htmlFor="email">Email:</StyledLabel>
                            <StyledInput placeholder="Enter email" type='text' {...register("email",loginFormValidators?.email)}></StyledInput>
                            {errors.email && <StyledFormError>{errors.email?.message}</StyledFormError>}
                        </StyledFormFieldDiv>
                        <StyledFormFieldDiv>
                            <StyledLabel htmlFor="password">Password:</StyledLabel>
                            <StyledInput placeholder="Enter passoword" type="password" {...register("password",loginFormValidators?.password)} ></StyledInput>
                            {errors.password && <StyledFormError>{errors.password?.message}</StyledFormError>}
                        </StyledFormFieldDiv>
                        <StyledButton type="submit">Login</StyledButton>
                    </StyledForm>
                    <StyledInfoDiv>
                        <StyledSpan>
                            Don't have an account yet?
                        </StyledSpan>
                        <StyledLink onClick={() => handleNavigate('/register')}>
                            Register
                        </StyledLink>
                    </StyledInfoDiv>
                </StyledFormWrapper>
            </StyledFormBox>
        </StyledPageWrapper>
    )
}
export default Login;