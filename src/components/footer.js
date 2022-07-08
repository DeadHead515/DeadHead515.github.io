import { Container, Row } from "react-bootstrap"
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export const Footer = () =>{
    return (
        <Container style={{color: 'white'}} >
            <Row style={{display: 'flex',flexDirection: 'row', justifyContent: 'center', lineHeight:'40px'}}>
                Contact Me
            </Row>
            <div style={{display: 'flex',flexDirection: 'row', justifyContent:'space-evenly'}}>
            <div style={{display:'flex', flexDirection: 'column' , alignItems: 'center'}}><EmailIcon/><p>kristopher.j.jurgens@gmail.com</p></div>
            <div style={{display:'flex', flexDirection: 'column' , alignItems: 'center'}}><LinkedInIcon/><p>Linked In.</p></div>
            </div>
            
        </Container>
    )
}