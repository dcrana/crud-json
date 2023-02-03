import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { createPostValidator } from "../../formvalidators/createPostValidators";
import { createNewPost, updatePost } from "../../redux/features/posts/postsSlice";
import { StyledButton } from "../home/StyledHome";
import { StyledForm, StyledFormBox, StyledFormError, StyledFormFieldDiv, StyledFormWrapper, StyledInput, StyledLabel, StyledPageWrapper, StyledTextArea, StyledTitle } from "../login/StyledLogin";

const AddNewPost = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    console.log('location>>', location);
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const payload = { ...data, postId: Math.floor((Math.random() * 1000) + 1), creator: "Divyarajsinh" };
        const editPayload = { ...data, postId: location?.state?.postId || 0, creator: "Divyarajsinh", id: location?.state?.id };
        if (location?.state?.id) {
            dispatch(updatePost(editPayload)).then((e) => {
                if (e.type === "posts/updatePost/fulfilled") {
                    console.log('fullfilled edit')
                    navigate('/posts');
                }
            })
        }
        else {
            dispatch(createNewPost(payload)).then((e) => {
                if (e.type === "posts/createNewPost/fulfilled") {
                    navigate('/posts');
                }
            })
        }
    }
    return (
        <StyledPageWrapper>
            <StyledFormBox>
                <StyledFormWrapper>
                    <StyledTitle>{location?.state?.id ? "Edit Post" : "Create Post"}</StyledTitle>
                    <StyledForm onSubmit={handleSubmit(onSubmit)}>
                        <StyledFormFieldDiv>
                            <StyledLabel htmlFor="title">Title:</StyledLabel>
                            <StyledInput
                                placeholder="Enter Post Title"
                                type="text"
                                rows={5}
                                {...register("title", createPostValidator?.title)}
                            ></StyledInput>
                            {errors.body && (
                                <StyledFormError>{errors.title?.message}</StyledFormError>
                            )}
                        </StyledFormFieldDiv>

                        <StyledFormFieldDiv>
                            <StyledLabel htmlFor="body">Body:</StyledLabel>
                            <StyledTextArea
                                placeholder="Enter Post Body"
                                type="textarea"
                                rows={5}
                                {...register("body", createPostValidator?.body)}
                            ></StyledTextArea>
                            {errors.body && (
                                <StyledFormError>{errors.body?.message}</StyledFormError>
                            )}
                        </StyledFormFieldDiv>
                        <StyledButton type="submit">Add</StyledButton>
                    </StyledForm>
                </StyledFormWrapper>
            </StyledFormBox>
        </StyledPageWrapper>
    );
};
export default AddNewPost;
