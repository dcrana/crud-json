import { useNavigate } from "react-router-dom"
import { StyledButton } from "../home/StyledHome"
import { StylesPostsWrapper } from "./StyledPost"

const Posts = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login')
    }
    return (
        <StylesPostsWrapper>
            <StyledButton onClick={() => handleLogout()}>
                Logout
            </StyledButton>
        </StylesPostsWrapper>
    )
}

export default Posts