import { useNavigate } from "react-router-dom";
import { Button, StyledHomeTitle, StyledHomeWrapper } from "./StyledHome"

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
            <Button onClick={() => { handleNavigate('/login') }} >Login</Button>
        </StyledHomeWrapper>
    )
}
export default Home;