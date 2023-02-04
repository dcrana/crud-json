import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { deletePost, fetchAllPosts } from "../../redux/features/posts/postsSlice";
import { StyledButton, StyledDelButton, StyledEditButton } from "../home/StyledHome"
import { StyledButtonsWraper, StyledEditDelButtons, StyledPostBody, StyledPostCard, StyledPostCardWrapper, StyledPostsWrapper, StyledPostTitle } from "./StyledPost"

const Posts = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { posts } = useSelector(state => state.posts);
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login')
    }
    useEffect(() => {
        dispatch(fetchAllPosts())
    }, [dispatch])

    const handleDelete = (item) => {
        dispatch(deletePost(item)).then((e) => {
            if (e.type === "posts/deletePost/fulfilled") {
                dispatch(fetchAllPosts())
            }
        });
    }
    return (
        <StyledPostsWrapper>
            <StyledButtonsWraper>
                <StyledButton onClick={() => navigate('/addpost')}>
                    Add New Post
                </StyledButton>
                <StyledButton onClick={() => handleLogout()} leftMargin="20px">
                    Logout
                </StyledButton>
            </StyledButtonsWraper>
            <StyledPostCardWrapper>
                {
                    posts?.length > 0 && posts.map((item, index) => {
                        return (
                            <StyledPostCard key={index}>
                                <StyledPostTitle>
                                    {item?.title}
                                </StyledPostTitle>
                                <StyledPostBody>
                                    {item?.body}
                                </StyledPostBody>
                                <StyledEditDelButtons>
                                    <StyledEditButton onClick={() => navigate('/editpost', { state: item })}>
                                        Edit
                                    </StyledEditButton>
                                    <StyledDelButton onClick={() => handleDelete(item)}>
                                        Delete
                                    </StyledDelButton>
                                </StyledEditDelButtons>
                            </StyledPostCard>
                        )
                    })
                }
            </StyledPostCardWrapper>
        </StyledPostsWrapper >
    )
}

export default Posts