import { Col, Container, Nav, Row } from "react-bootstrap";
import "../../styles/player.css"

export default function Player(){
    const arr = ["전체", "코칭스텝", "투수", "포수", "내야수", "외야수"]
    return (
        <Container className="my-4">
            <h2>Players</h2>
            <Nav fill variant="tabs" defaultActiveKey="전체" className="mt-4">
                {arr.map(el => (
                    <Nav.Item>
                        <Nav.Link eventKey={el} className="nav-player">{el}</Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
            <h5>코칭스텝</h5>
            <Row className="w-100 mt-2 mx-0">
                {Array.from({length: 6}).map(() => (
                    <Col className="mt-4" lg={4} md={6}>
                        <div className="px-4 py-4 col-player d-flex justify-content-around align-items-center">
                            <img src="/baseball-player.svg" alt="baseball_player_poster" width="145"/>
                            <div>
                                <h6 className="font-weight-light">감독</h6>
                                <h4>No. 21</h4>
                                <h3>송진우</h3>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}