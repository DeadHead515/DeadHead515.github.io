import { Container } from "react-bootstrap";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
export const AboutMe = () => {
    return(
        <Container style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
            <br>
            </br>
            <div style={{ textShadow: "4px 4px 6px #000000", fontSize: '30px'}}>Hey, I'm Kris.</div>
            <EmojiPeopleIcon fontSize="large"/>
            <p style={{ textShadow: "4px 4px 6px #000000"}}>A passionate developer from the Des Moines, IA area. </p>
        </Container>
    );
}