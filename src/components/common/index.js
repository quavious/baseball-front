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
                        <Nav.Link href="/" className="font-weight-bold text-light pl-2 pr-1">HYENAS</Nav.Link>
                        <Nav.Link href="/player" className="font-weight-bold text-light pl-2 pr-1">PLAYERS</Nav.Link>
                        <Nav.Link href="/" className="font-weight-bold text-light pl-2 pr-1">GAME EVENT</Nav.Link>
                        <Nav.Link href="/community" className="font-weight-bold text-light pl-2 pr-1">COMMUNITY</Nav.Link>
                        <Nav.Link href="/" className="font-weight-bold text-light pl-2 pr-1">HYENAS STORE</Nav.Link>
                        <NavDropdown title="Board" id="basic-nav-dropdown" className="font-weight-bold text-light pl-2 pr-1">
                            <NavDropdown.Item href="/result/01">경기도 리그</NavDropdown.Item>
                            <NavDropdown.Item href="/result/02">기록실</NavDropdown.Item>
                            <NavDropdown.Item href="/">Something</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="/login" className="font-weight-light text-light header-link pl-2 pr-1">
                            로그인
                        </Nav.Link>
                        <Nav.Link href="/register" className="font-weight-light text-light header-link pl-2 pr-1">
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
        <div className="footer fixed-bottom">
            <Container className="d-flex align-items-start">
            <img src='/baseball_logo.svg' width="64" alt="Baseball Logo" className="footer-logo"/>
            <div className="d-flex flex-column ml-4">
                <p className="text-light font-weight-bold">이용약관 | 개인정보방침</p>
                <small className="text-light">Copyright@2020 All Right Reserved.</small>
            </div>
            </Container>
        </div>
    )
}