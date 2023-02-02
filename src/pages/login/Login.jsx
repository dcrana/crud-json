import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginFormValidators } from "../../formvalidators/loginFormValidators";
import { decrypt } from "../../helpers/crypto";
import { getRegisterUsersList } from "../../redux/features/register/registerSlice";
import { StyledButton } from "../home/StyledHome";
import {
    StyledForm,
    StyledFormBox,
    StyledFormError,
    StyledFormFieldDiv,
    StyledFormWrapper,
    StyledInfoDiv,
    StyledInput,
    StyledLabel,
    StyledLink,
    StyledPageWrapper,
    StyledSpan,
    StyledTitle,
} from "./StyledLogin";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRegisterUsersList());
    }, []);

    const { allUsers } = useSelector((state) => state.register);

    const handleNavigate = (item) => {
        item && navigate(item);
    };

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const existUser = allUsers.length > 0 && allUsers.filter((item) => {
            return (data.email === item.email)
        })
        if (existUser.length === 0) {
            setError("email", { type: 'custom', message: 'This email id is not exists!' });
        } else if (data.password === decrypt(existUser[0].password)) {
            localStorage.setItem('token', "jwttoken");
            handleNavigate('/posts')
        }
        else {
            setError("password", { type: 'custom', message: 'Please enter correct password!' })
        }
    };
    return (
        <StyledPageWrapper>
            <StyledFormBox>
                <StyledFormWrapper>
                    <StyledTitle>Login</StyledTitle>
                    <StyledForm onSubmit={handleSubmit(onSubmit)}>
                        <StyledFormFieldDiv>
                            <StyledLabel htmlFor="email">Email:</StyledLabel>
                            <StyledInput
                                placeholder="Enter email"
                                type="text"
                                {...register("email", loginFormValidators?.email)}
                            ></StyledInput>
                            {errors.email && (
                                <StyledFormError>{errors.email?.message}</StyledFormError>
                            )}
                        </StyledFormFieldDiv>
                        <StyledFormFieldDiv>
                            <StyledLabel htmlFor="password">Password:</StyledLabel>
                            <StyledInput
                                placeholder="Enter passoword"
                                type="password"
                                {...register("password", loginFormValidators?.password)}
                            ></StyledInput>
                            {errors.password && (
                                <StyledFormError>{errors.password?.message}</StyledFormError>
                            )}
                        </StyledFormFieldDiv>
                        <StyledButton type="submit">Login</StyledButton>
                    </StyledForm>
                    <StyledInfoDiv>
                        <StyledSpan>Don't have an account yet?</StyledSpan>
                        <StyledLink onClick={() => handleNavigate("/register")}>
                            Register
                        </StyledLink>
                    </StyledInfoDiv>
                </StyledFormWrapper>
            </StyledFormBox>
        </StyledPageWrapper>
    );
};
export default Login;
