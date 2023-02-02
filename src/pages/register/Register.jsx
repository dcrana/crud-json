import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUpFormValidators } from "../../formvalidators/signupformvalidators";
import { encrypt } from "../../helpers/crypto";
import { creatUser } from "../../redux/features/register/registerSlice";
import { StyledButton } from "../home/StyledHome";
import { StyledForm, StyledFormBox, StyledFormError, StyledFormFieldDiv, StyledFormWrapper, StyledInfoDiv, StyledInput, StyledLabel, StyledLink, StyledPageWrapper, StyledSpan, StyledTitle } from "../login/StyledLogin";

export const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleNavigate = (item) => {
        item && navigate(item);
    }
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const onSubmit = (data) => {
        dispatch(creatUser({ ...data, password: encrypt(data?.password) })).then((e) => {
            // console.log('event>>', e)
            if (e.type === "register/creatUser/fulfilled") {
                alert("Registration Succesfull")
                navigate("/login");
            }
        });
    };
    return (
        <StyledPageWrapper>
            <StyledFormBox>
                <StyledFormWrapper>
                    <StyledTitle>Register</StyledTitle>
                    <StyledForm onSubmit={handleSubmit(onSubmit)}>
                        <StyledFormFieldDiv>
                            <StyledLabel htmlFor="firstname">Firstname:</StyledLabel>
                            <StyledInput placeholder="Enter firstname" type='text' {...register("firstname", signUpFormValidators?.firstname)}></StyledInput>
                            {errors.firstname && <StyledFormError>{errors.firstname?.message}</StyledFormError>}
                        </StyledFormFieldDiv>
                        <StyledFormFieldDiv>
                            <StyledLabel htmlFor="lastname">Lastname:</StyledLabel>
                            <StyledInput placeholder="Enter lastname" type='text' {...register("lastname", signUpFormValidators?.lastname)}></StyledInput>
                            {errors.lastname && <StyledFormError>{errors.lastname?.message}</StyledFormError>}
                        </StyledFormFieldDiv>
                        <StyledFormFieldDiv>
                            <StyledLabel htmlFor="email">Email:</StyledLabel>
                            <StyledInput placeholder="Enter email" type='text' {...register("email", signUpFormValidators?.email)}></StyledInput>
                            {errors.email && <StyledFormError>{errors.email?.message}</StyledFormError>}
                        </StyledFormFieldDiv>
                        <StyledFormFieldDiv>
                            <StyledLabel htmlFor="mobile">Mobile:</StyledLabel>
                            <StyledInput placeholder="Enter mobile number" type='text' {...register("mobile", signUpFormValidators?.mobile)}></StyledInput>
                            {errors.mobile && <StyledFormError>{errors.mobile?.message}</StyledFormError>}
                        </StyledFormFieldDiv>
                        <StyledFormFieldDiv>
                            <StyledLabel htmlFor="password">Password:</StyledLabel>
                            <StyledInput placeholder="Enter passoword" type="password" {...register("password", signUpFormValidators?.password)} ></StyledInput>
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