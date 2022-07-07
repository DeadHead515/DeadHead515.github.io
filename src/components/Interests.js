import { Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";

export const Interests= () => {
    return(
            <Container>
                <Row style={{  display: 'flex', flexDirection:'row', justifyContent: 'center', fontSize: '30px' }}>
                    Things I like to Do:
                </Row>
                <div style={{display: 'flex', flexDirection:'row', justifyContent: 'center', }}>
                    <ul>
                        <li>Fishing</li>
                        <li>Football</li>
                        <li>Guitar</li>
                        <li>Biking</li>
                    </ul>
                
                    <ul>
                        <li>Disc Golf</li>
                        <li>Reading</li>
                        <li>Hiking</li>
                        <li>Cooking food</li>
                    </ul> 
                </div>
            </Container>
    );
    
}
