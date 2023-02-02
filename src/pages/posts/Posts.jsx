import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { fetchAllPosts } from "../../redux/features/posts/postsSlice";
import { StyledButton } from "../home/StyledHome"
import { StylesPostsWrapper } from "./StyledPost"

const Posts = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {posts} = useSelector(state => state.posts);
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login')
    }
    useEffect(()=>{
        dispatch(fetchAllPosts())
    },[dispatch])
    return (
        <StylesPostsWrapper>
            <StyledButton onClick={() => handleLogout()}>
                Logout
            </StyledButton>
            {
                posts?.length > 0 && posts.map((item,index)=>{
                    return (
                        <div>
                            {item?.body}
                        </div>
                    )
                })
            }
        </StylesPostsWrapper>
    )
}

export default Posts