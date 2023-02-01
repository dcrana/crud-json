import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signUpFormValidators } from "../../formvalidators/signupformvalidators";
import { StyledButton } from "../home/StyledHome";
import { StyledForm, StyledFormBox, StyledFormError, StyledFormFieldDiv, StyledFormWrapper, StyledInfoDiv, StyledInput, StyledLabel, StyledLink, StyledPageWrapper, StyledSpan, StyledTitle } from "../login/StyledLogin";

export const Register = () => {
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
                    <StyledTitle>Register</StyledTitle>
                    <StyledForm onSubmit={handleSubmit(onSubmit)}>
                        <StyledFormFieldDiv>
                            <StyledLabel htmlFor="firstname">Firstname:</StyledLabel>
                            <StyledInput placeholder="Enter firstname" type='text' {...register("firstname",signUpFormValidators?.firstname)}></StyledInput>
                            {errors.firstname && <StyledFormError>{errors.firstname?.message}</StyledFormError>}
                        </StyledFormFieldDiv>
                        <StyledFormFieldDiv>
                            <StyledLabel htmlFor="lastname">Lastname:</StyledLabel>
                            <StyledInput placeholder="Enter lastname" type='text' {...register("lastname",signUpFormValidators?.lastname)}></StyledInput>
                            {errors.lastname && <StyledFormError>{errors.lastname?.message}</StyledFormError>}
                        </StyledFormFieldDiv>
                        <StyledFormFieldDiv>
                            <StyledLabel htmlFor="email">Email:</StyledLabel>
                            <StyledInput placeholder="Enter email" type='text' {...register("email",signUpFormValidators?.email)}></StyledInput>
                            {errors.email && <StyledFormError>{errors.email?.message}</StyledFormError>}
                        </StyledFormFieldDiv>
                        <StyledFormFieldDiv>
                            <StyledLabel htmlFor="mobile">Mobile:</StyledLabel>
                            <StyledInput placeholder="Enter mobile number" type='text' {...register("mobile",signUpFormValidators?.mobile)}></StyledInput>
                            {errors.mobile && <StyledFormError>{errors.mobile?.message}</StyledFormError>}
                        </StyledFormFieldDiv>
                        <StyledFormFieldDiv>
                            <StyledLabel htmlFor="password">Password:</StyledLabel>
                            <StyledInput placeholder="Enter passoword" type="password" {...register("password",signUpFormValidators?.password)} ></StyledInput>
                            {errors.password && <StyledFormError>{errors.password?.message}</StyledFormError>}
                        </StyledFormFieldDiv>
                        <StyledButton type="submit">Register</StyledButton>
                    </StyledForm>
                    <StyledInfoDiv>
                        <StyledSpan>
                        Already have an account?
                        </StyledSpan>
                        <StyledLink onClick={() => handleNavigate('/login')}>
                            Log in
                        </StyledLink>
                    </StyledInfoDiv>
                </StyledFormWrapper>
            </StyledFormBox>
        </StyledPageWrapper>
    )
}
export default Register;