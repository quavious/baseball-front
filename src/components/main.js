import { Carousel, Col, Container, Nav, Row, Table } from "react-bootstrap";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faInstagram, faAmazon} from '@fortawesome/free-brands-svg-icons' 
import "../styles/main.css"
import "../styles/common/color.css"

library.add(faAmazon, faFacebook, faInstagram, faYoutube)

export default function Main(){
    return (
        <>
        <div style={{width: "100%", position: "relative"}}>
            <Carousel className="">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/main_background1.jpg"
                    alt="First slide"
                    />
                    <div className="d-inline-block carousel-text">
                        <h3 className="text-light font-weight-bold">제목입니다제목입니다제목입니다</h3>
                        <span className="text-light">내용입니다내용입니다내용입니다내용입니다내용입니다</span>
                    </div>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/main_background2.jpg"
                    alt="Third slide"
                    />
                    <div className="d-inline-block carousel-text">
                        <h3 className="text-light font-weight-bold">제목입니다제목입니다제목입니다</h3>
                        <span className="text-light">내용입니다내용입니다내용입니다내용입니다내용입니다</span>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/main_background3.jpg"
                    alt="Third slide"
                    />
                    <div className="d-inline-block  carousel-text">
                        <h3 className="text-light font-weight-bold">제목입니다제목입니다제목입니다</h3>
                        <span className="text-light">내용입니다내용입니다내용입니다내용입니다내용입니다</span>
                    </div>
                </Carousel.Item> */}
            </Carousel>
        </div>
        <Container>
           <Row className="px-2 mt-2">
               <Col lg={5}>
                   <strong className="theme-color-font my-2">이달의 하이에나</strong>
                   <Row className="my-2">
                        <Col className="d-flex flex-column align-items-center">
                            <div className="bg-secondary w-100" style={{height: 240}}>
                                <small className="theme-color-font font-weight-light mx-2">투수</small>
                            </div>
                            <strong className="mt-2">송진우</strong>
                            <small>9/12</small>
                            <small>ERA: 4.50</small>
                        </Col>
                        <Col className="d-flex flex-column align-items-center">
                            <div className="bg-secondary w-100" style={{height: 240}}>
                                <small className="theme-color-font font-weight-light mx-2">투수</small>
                            </div>
                            <strong className="mt-2">송진우</strong>
                            <small>9/12</small>
                            <small>ERA: 4.50</small>
                        </Col>
                   </Row>
               </Col>
               <Col lg={7}>
                    <Nav fill justify variant="pills" defaultActiveKey="player" className="mt-4">
                        <Nav.Item>
                            <Nav.Link eventKey="player" className="border rounded-0 py-2">선수기록</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="team" className="border rounded-0 py-2">팀기록</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div className="bg-secondary px-4 py-3 pb-2">
                        {Array.from({length: 6}).map((_, idx) => (
                        <>
                        <div key={idx} className="d-flex justify-content-between w-100 pt-1 py-1">
                            <span>1. 2021년 서포터즈 모집</span>
                            <small>2021.01.01</small>
                        </div>
                        {idx !== 5 ? <hr className="my-1"/> : null}
                        </>
                        ))}
                    </div>
               </Col>
           </Row>
        </Container>
        <Container fluid className="bg-secondary px-4 pt-2 pb-4 my-4">
            <Container>
                <Row className="my-2">
                    <Col lg={5}>
                        <strong className="theme-color-font my-2">2021. 01</strong>
                        <div className="bg-light mt-2 mb-4" style={{height: 220}}></div>
                    </Col>
                    <Col lg={7}>
                        <strong className="theme-color-font my-2">TEAM RANKING</strong>
                        <Table className="mt-4 w-100" hover responsive style={{border: "0"}} >
                            <thead className="table-secondary result-table-head">
                                <tr>
                                    <th className="text-center">순위</th>
                                    <th className="text-center">팀명</th>
                                    <th className="text-center">경기</th>
                                    <th className="text-center">승</th>
                                    <th className="text-center">패</th>
                                    <th className="text-center">무</th>
                                    <th className="text-center">승률</th>
                                    <th className="text-center">게임차</th>
                                    <th className="text-center">연속</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center py-1">1</td>
                                    {Array.from({length: 9}).map((_, idx) => <td key={idx} className="text-center py-1"></td>)}
                                </tr>
                                <tr>
                                    <td className="text-center py-1">2</td>
                                    {Array.from({length: 9}).map((_, idx) => <td key={idx} className="text-center py-1"></td>)}
                                </tr>
                                <tr>
                                    <td className="text-center py-1">3</td>
                                    {Array.from({length: 9}).map((_, idx) => <td key={idx} className="text-center py-1"></td>)}
                                </tr>
                                <tr>
                                    <td className="text-center py-1">4</td>
                                    {Array.from({length: 9}).map((_, idx) => <td key={idx} className="text-center py-1"></td>)}
                                </tr>
                                <tr>
                                    <td className="text-center py-1">5</td>
                                    {Array.from({length: 9}).map((_, idx) => <td key={idx} className="text-center py-1"></td>)}
                                </tr>
                                <tr>
                                    <td className="text-center py-1">6</td>
                                    {Array.from({length: 9}).map((_, idx) => <td key={idx} className="text-center py-1"></td>)}
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </Container>
        <Container>
           <>
           <Nav variant="pills" defaultActiveKey="documentary" className="mt-4 justify-content-center">
                <Nav.Item>
                    <Nav.Link eventKey="documentary" className="border border-dark mx-2 my-1 rounded py-1 px-4">Documentary</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="instagram" className="border border-dark mx-2 my-1 rounded py-1 px-4">Instagram</Nav.Link>
                </Nav.Item>
            </Nav>
           <Row>
               <Col lg={4} md={6} sm={6} >
                   <div className="bg-secondary main-image-box my-4 mx-2"></div>
               </Col>
               <Col lg={4} md={6} sm={6} >
                   <div className="bg-secondary main-image-box my-4 mx-2"></div>
               </Col>
               <Col lg={4} md={6} sm={6} >
                   <div className="bg-secondary main-image-box my-4 mx-2"></div>
               </Col>
               <Col lg={4} md={6} sm={6} >
                   <div className="bg-secondary main-image-box my-4 mx-2"></div>
               </Col>
               <Col lg={4} md={6} sm={6} >
                   <div className="bg-secondary main-image-box my-4 mx-2"></div>
               </Col>
               <Col lg={4} md={6} sm={6} >
                   <div className="bg-secondary main-image-box my-4 mx-2"></div>                   
               </Col>
           </Row>
           </>
        </Container>
        <div className="d-inline-flex flex-column align-items-center theme-color-background px-2 py-2 show-icon" style={{position: "fixed", bottom: "60px", right: "40px"}}>
            <FontAwesomeIcon icon={['fab', 'facebook']} size="3x" className="my-2" color="white"/>
            <FontAwesomeIcon icon={['fab', 'amazon']} size="3x" className="my-2" color="white"/>
            <FontAwesomeIcon icon={['fab', 'instagram']} size="3x" className="my-2" color="white"/>
            <FontAwesomeIcon icon={['fab', 'youtube']} size="3x" className="my-2" color="white"/>
        </div>
        </>
    )
}