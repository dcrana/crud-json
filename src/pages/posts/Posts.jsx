import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { deletePost, fetchAllPosts } from "../../redux/features/posts/postsSlice";
import { StyledButton } from "../home/StyledHome"
import { StyledButtonsWraper, StyledPostsWrapper } from "./StyledPost"

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
            if (e.type === "posts/deletePost") {
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

            {
                posts?.length > 0 && posts.map((item, index) => {
                    return (
                        <div key={index}>
                            {item?.body}
                            <StyledButton onClick={() => navigate('/editpost', { state: item })}>
                                Edit
                            </StyledButton>
                            <StyledButton onClick={() => handleDelete(item)}>
                                Delete
                            </StyledButton>
                        </div>
                    )
                })
            }
        </StyledPostsWrapper >
    )
}

export default Posts