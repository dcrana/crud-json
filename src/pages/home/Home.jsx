import { useNavigate } from "react-router-dom";
import { Button, StyledButton, StyledHomeTitle, StyledHomeWrapper } from "./StyledHome"

const Home = () => {
    const navigate = useNavigate();
    const handleNavigate = (item) => {
        item && navigate(item);
    }
    return (
        <StyledHomeWrapper>
            <StyledHomeTitle>
                Welcome to the our site please login to continue...
            </StyledHomeTitle>
            <StyledButton onClick={() => { handleNavigate('/login') }} >Login</StyledButton>
        </StyledHomeWrapper>
    )
}
export default Home;