import "../../styles/common/header.css"
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav, NavDropdown } from "react-bootstrap"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export const HeaderMobile = ({root}) => {
    const [bg, setBg] = useState("transparent")
    const handleToggle = (e) => {
        e.preventDefault()
        if(bg === "primary") {
            setBg("transparent")
        } else if (bg === "transparent") {
            setBg("primary")
        } else {
            return;
        }
    }
    return (
        <>
        <Navbar className={`header ${root ? "position-absolute w-100 border-0 header-main" : "header-other"}`} expand="lg" bg={root ? bg : "light"} variant={root ? "dark" : "light"} >
            <Container className="align-content-start">
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
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}/>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mx-auto">
                        <NavDropdown title="HYENAS" id="basic-nav-dropdown_hyenas" className="font-weight-bold">
                            <NavDropdown.Item href="/" className={root? "text-light" : "text-dark"}>구단소개</NavDropdown.Item>
                            <NavDropdown.Item href="/" className={root? "text-light" : "text-dark"}>구단 시설</NavDropdown.Item>
                            <NavDropdown.Item href="/" className={root? "text-light" : "text-dark"}>조직도</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="PLAYERS" id="basic-nav-dropdown_players" className="font-weight-bold">
                            <NavDropdown.Item href="/player" className={root? "text-light" : "text-dark"}>감독/코치진</NavDropdown.Item>
                            <NavDropdown.Item href="/player/1" className={root? "text-light" : "text-dark"}>투수</NavDropdown.Item>
                            <NavDropdown.Item href="/player/1" className={root? "text-light" : "text-dark"}>포수</NavDropdown.Item>
                            <NavDropdown.Item href="/" className={root? "text-light" : "text-dark"}>내야수</NavDropdown.Item>
                            <NavDropdown.Item href="/" className={root? "text-light" : "text-dark"}>외야수</NavDropdown.Item>
                            <NavDropdown.Item href="/" className={root? "text-light" : "text-dark"}>이달의 하이에나</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/" className="font-weight-bold nav-white" >GAME EVENT</Nav.Link>
                        <NavDropdown title="COMMUNITY" id="basic-nav-dropdown_community" className="font-weight-bold">
                            <NavDropdown.Item href="/community" className={root? "text-light" : "text-dark"}>소식</NavDropdown.Item>
                            <NavDropdown.Item href="/community/post/12" className={root? "text-light" : "text-dark"}>사진</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/" className="font-weight-bold nav-white">HYENAS STORE</Nav.Link>
                        <NavDropdown title="Board" id="basic-nav-dropdown_board" className="font-weight-bold">
                            <NavDropdown.Item href="/result/01" className={root? "text-light" : "text-dark"}>경기도 리그</NavDropdown.Item>
                            <NavDropdown.Item href="/result/02" className={root? "text-light" : "text-dark"}>기록실</NavDropdown.Item>
                            <NavDropdown.Item href="/calander" className={root? "text-light" : "text-dark"}>달력</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="/login" className="font-weight-light header-link">
                            로그인
                        </Nav.Link>
                        <Nav.Link href="/register" className="font-weight-light header-link">
                            회원가입
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export const HeaderPC = ({root}) => {
    const [bg, setBg] = useState("transparent")
    const [drop, setDrop] = useState(false);
    useEffect(() => {
        setDrop(false)
    }, [])
    const handleFocus = (e) => {
        e.preventDefault();
        if(!drop) {
            setBg("primary");
            setDrop(true);
        }
    }
    const handleBlur = (e) => {
        e.preventDefault()
        if(drop) {
            setBg("transparent");
            setDrop(false);
        }
    }
    return (
        <Navbar className={`header ${root ? "position-absolute w-100 border-0 header-main" : "header-other"}`} expand="lg" bg={root ? bg : "light"} variant={root ? "dark" : "light"}>
            <Container className="d-flex align-items-start">
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
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex align-items-start pt-2" onClick={handleFocus} onBlur={handleBlur}>
                    <Nav className="mx-auto pt-2">
                        <section className="mr-1">
                        <h6 className={`${root ? "text-white" : "text-dark"} font-weight-bold`}>HYENAS</h6>
                        <ul id="basic-nav-dropdown_hyenas" className={`font-weight-bold navbar-ul ${drop ? "d-block": "d-none"}`}>
                            <Link to="/"><li className={root? "text-light mt-2" : "text-dark mt-2"}>구단소개</li></Link>
                            <Link to="/"><li className={root? "text-light mt-2" : "text-dark mt-2"}>구단 시설</li></Link>
                            <Link to="/"><li className={root? "text-light mt-2" : "text-dark mt-2"}>조직도</li></Link>
                        </ul>
                        </section>
                        <section className="mr-1">
                        <h6 className={`${root ? "text-white" : "text-dark"} font-weight-bold`}>PLAYERS</h6>
                        <ul id="basic-nav-dropdown_players" className={`font-weight-bold navbar-ul ${drop ? "d-block": "d-none"}`}>
                            <Link to="/player"><li className={root? "text-light mt-2" : "text-dark mt-2"}>감독/코치진</li></Link>
                            <Link to="/player/1"><li className={root? "text-light mt-2" : "text-dark mt-2"}>투수</li></Link> 
                            <Link to="/player/1"><li className={root? "text-light mt-2" : "text-dark mt-2"}>포수</li></Link> 
                            <Link to="/"><li className={root? "text-light mt-2" : "text-dark mt-2"}>내야수</li></Link> 
                            <Link to="/"><li className={root? "text-light mt-2" : "text-dark mt-2"}>외야수</li></Link> 
                            <Link to="/"><li className={root? "text-light mt-2" : "text-dark mt-2"}>이달의 하이에나</li></Link> 
                        </ul>
                        </section>
                        <Link to="/" className="font-weight-bold nav-white" ><h6 className={`${root ? "text-white" : "text-dark"} font-weight-bold mr-1`}>GAME EVENT</h6></Link>
                        <section className="mr-1">
                        <h6 className={`${root ? "text-white" : "text-dark"} font-weight-bold`}>COMMUNITY</h6>
                        <ul title="COMMUNITY" id="basic-nav-dropdown_community" className={`font-weight-bold navbar-ul ${drop ? "d-block": "d-none"}`}>
                            <Link to="/community"><li className={`${root? "text-light" : "text-dark"} mt-2`}>소식</li></Link>
                            <Link to="/community/post/12"><li className={`${root? "text-light" : "text-dark"} mt-2`}>사진</li></Link>
                        </ul>
                        </section>
                        <Link to="/" className="font-weight-bold nav-white"><h6 className={`${root ? "text-white" : "text-dark"} font-weight-bold mr-1`}>HYENAS STORE</h6></Link>
                        <section className="mr-1">
                        <h6 className={`${root ? "text-white" : "text-dark"} font-weight-bold`}>
                            BOARD
                        </h6>
                        <ul title="Board" id="basic-nav-dropdown_board" className={`font-weight-bold navbar-ul ${drop ? "d-block": "d-none"}`}>
                            <Link to="/result/01"><li className={`${root? "text-light" : "text-dark"} mt-2`}>경기도 리그</li></Link>
                            <Link to="/result/02"><li className={`${root? "text-light" : "text-dark"} mt-2`}>기록실</li></Link>
                            <Link to="/calander"><li className={`${root? "text-light" : "text-dark"} mt-2`}>달력</li></Link>
                        </ul>
                        </section>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="/login" className="font-weight-light header-link">
                            로그인
                        </Nav.Link>
                        <Nav.Link href="/register" className="font-weight-light header-link">
                            회원가입
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export const Header = ({root, mobile}) => {
    if(mobile) {
        return <HeaderMobile root={root}/>
    } else {
        return <HeaderPC root={root} /> 
    }
}