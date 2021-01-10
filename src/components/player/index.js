import { Col, Container, Nav, Row } from "react-bootstrap";
import "../../styles/player.css"

export default function Player(){
    return (
        <Container style={{
            maxWidth: 1080,
        }}>
            <h2>Players</h2>
            <Nav fill variant="tabs" defaultActiveKey="all" className="mt-4">
                <Nav.Item>
                    <Nav.Link eventKey="all" className="nav-player">전체</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="staff" className="nav-player">코칭스텝</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="pitcher" className="nav-player">투수</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="catcher" className="nav-player">포수</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="infielder" className="nav-player">내야수</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="outfielder" className="nav-player">외야수</Nav.Link>
                </Nav.Item>
            </Nav>
            <h5>코칭스텝</h5>
            <Row className="w-100 mt-2 mx-0">
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
            </Row>
        </Container>
    )
}