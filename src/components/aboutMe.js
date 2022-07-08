import { Container } from "react-bootstrap";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
export const AboutMe = () => {
    return(
        <Container style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
            <br>
            </br>
            <h4 style={{ textShadow: "4px 4px 6px #000000"}}>Hey, I'm Kris.</h4>
            <EmojiPeopleIcon/>
            <p style={{ textShadow: "4px 4px 6px #000000"}}>A passionate developer from the Des Moines, IA area. </p>
        </Container>
    );
}