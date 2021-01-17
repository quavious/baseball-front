import "../../styles/common/footer.css"
import "../../styles/common/header.css"
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav, NavDropdown } from "react-bootstrap"


export const Header = () => {
    return (
        <Navbar className="header fixed-top" expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/" className="mr-4 d-flex align-items-center">
                    <img
                        alt=""
                        src="/baseball_logo.svg"
                        width="48"
                        height="48"
                        className="header-logo"
                    />
                    <strong style={{letterSpacing: "-1.3px"}}>스코어본 하이에나들</strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mx-auto">
                        <NavDropdown title="HYENAS" id="basic-nav-dropdown_hyenas" className="font-weight-bold text-light">
                            <NavDropdown.Item href="/">구단소개</NavDropdown.Item>
                            <NavDropdown.Item href="/">구단 시설</NavDropdown.Item>
                            <NavDropdown.Item href="/">조직도</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="PLAYERS" id="basic-nav-dropdown_players" className="font-weight-bold text-light">
                            <NavDropdown.Item href="/player">감독/코치진</NavDropdown.Item>
                            <NavDropdown.Item href="/player/1">투수</NavDropdown.Item>
                            <NavDropdown.Item href="/player/1">포수</NavDropdown.Item>
                            <NavDropdown.Item href="/">내야수</NavDropdown.Item>
                            <NavDropdown.Item href="/">외야수</NavDropdown.Item>
                            <NavDropdown.Item href="/">이달의 하이에나</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/" className="font-weight-bold text-light">GAME EVENT</Nav.Link>
                        <NavDropdown title="COMMUNITY" id="basic-nav-dropdown_community" className="font-weight-bold text-light">
                            <NavDropdown.Item href="/community">소식</NavDropdown.Item>
                            <NavDropdown.Item href="/community/post/12">사진</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/" className="font-weight-bold text-light">HYENAS STORE</Nav.Link>
                        <NavDropdown title="Board" id="basic-nav-dropdown_board" className="font-weight-bold text-light">
                            <NavDropdown.Item href="/result/01">경기도 리그</NavDropdown.Item>
                            <NavDropdown.Item href="/result/02">기록실</NavDropdown.Item>
                            <NavDropdown.Item href="/">Something</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="/login" className="font-weight-light text-light header-link">
                            로그인
                        </Nav.Link>
                        <Nav.Link href="/register" className="font-weight-light text-light header-link">
                            회원가입
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export const Footer = () => {
    return (
        <div className="footer fixed-bottom py-4">
            <Container className="d-flex align-items-start">
            <img src='/baseball_logo.svg' width="64" alt="Baseball Logo" className="footer-logo"/>
            <div className="d-flex flex-column ml-4">
                <p className="text-light font-weight-bold m-0">이용약관 | 개인정보방침</p>
                <div className="d-flex mt-2">
                    <div className="d-inline-flex flex-column">
                        <small className="text-light text-muted">(주)본아이티</small>
                        <small className="text-light text-muted">T. 02-000-0000</small>
                    </div>
                    <div className="d-inline-flex flex-column ml-4">
                        <small className="text-light">사업자 등록번호 : 000-00-00000</small>
                        <small className="text-light">F. 02-000-0000</small>
                    </div>
                    <div className="d-inline-flex flex-column ml-4">
                        <small className="text-light">서울특별시 송파구 법원로 000 00빌딩 0층</small>
                        <small className="text-light">E. abc@bot-it.co.kr</small>
                    </div>
                </div>
                <small className="text-light mt-2">Copyright@2020 All Right Reserved.</small>
            </div>
            </Container>
        </div>
    )
}

export const FooterMobile = () => {
    return (
        <div className="footer fixed-bottom py-4">
            <Container className="d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center">
                <img src='/baseball_logo.svg' width="48" alt="Baseball Logo" className="footer-logo mx-1"/>
                <h3 className="text-light font-weight-bold mx-1" style={{letterSpacing: "-1.3px"}}>스코어본 하이에나들</h3>
            </div>
            <div className="d-flex flex-column ml-4">
                <p className="text-light text-center font-weight-bold m-0">이용약관 | 개인정보방침</p>
                <div className="d-flex flex-column align-items-center mt-2">
                    <div className="d-inline-flex">
                        <small className="text-light text-muted mx-2">(주)본아이티</small>
                        <small className="text-light text-muted mx-2">사업자 등록번호 : 000-00-00000</small>
                    </div>
                    <div className="d-inline-flex">
                        <small className="text-light mx-1">T. 02-000-0000</small>
                        <small className="text-light mx-1">F. 02-000-0000</small>
                    </div>
                    <div className="d-inline-flex">
                        <small className="text-light mx-1">서울특별시 송파구 법원로 000 00빌딩 0층</small>
                        <small className="text-light mx-1">E. abc@bot-it.co.kr</small>
                    </div>
                </div>
                <small className="text-light text-center mt-2">Copyright@2020 All Right Reserved.</small>
            </div>
            </Container>
        </div>
    )
}