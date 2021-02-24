import { Button, Container, Form, Row } from "react-bootstrap";

import "../styles/register.css"
import "../styles/common/color.css"

export default function Register() {
    return (
        <Container className="container-login">
            <Row className="d-flex align-items-center justify-content-center">
                <img
                    alt=""
                    src="/baseball_logo.svg"
                    width="48"
                    height="48"
                    className="header-logo"
                />
                <span className="font-weight-bold text-dark" style={{letterSpacing: "-1.3px"}}>스코어본 하이에나들</span>
            </Row>
            <Form className="mt-4 px-4">
                <Form.Group className="d-flex justify-content-start align-items-center position-relative">
                    <Form.Label htmlFor="userid" className="my-0 mr-1 font-weight-bold" style={{whiteSpace: "nowrap"}}>아이디</Form.Label>
                    <Form.Control type="text" id="userid" name="userid" placeholder="아이디" className="form-control-custom ml-auto input-height"/>
                    <Button className="position-absolute position-right outline-button">중복확인</Button>
                </Form.Group>
                <Form.Group className="d-flex justify-content-start align-items-center">
                    <Form.Label htmlFor="password" className="my-0 mr-1 font-weight-bold" style={{whiteSpace: "nowrap"}}>비밀번호</Form.Label>
                    <Form.Control type="password" id="password" name="password" placeholder="비밀번호" className="form-control-custom ml-auto input-height"/>
                </Form.Group>
                <Form.Group className="d-flex justify-content-start align-items-center">
                    <Form.Label htmlFor="confirm" className="my-0 mr-1 font-weight-bold" style={{whiteSpace: "nowrap"}}>비밀번호 확인</Form.Label>
                    <Form.Control type="text" id="confirm" name="confirm" placeholder="닉네임" className="form-control-custom ml-auto input-height"/>
                </Form.Group>
                <Form.Group className="d-flex justify-content-start align-items-center position-relative">
                    <Form.Label htmlFor="username" className="my-0 mr-1 font-weight-bold" style={{whiteSpace: "nowrap"}}>닉네임</Form.Label>
                    <Form.Control type="text" id="username" name="username" placeholder="닉네임" className="form-control-custom ml-auto input-height"/>
                    <Button className="position-absolute position-right outline-button">중복확인</Button>
                </Form.Group>
                <Form.Group className="d-flex justify-content-start align-items-center position-relative">
                    <Form.Label htmlFor="phone" className="my-0 mr-1 font-weight-bold" style={{whiteSpace: "nowrap"}}>연락처</Form.Label>
                    <Form.Control type="text" id="phone" placeholder="연락처" className="form-control-custom ml-auto input-height"/>
                    <Button className="position-absolute position-right outline-button">인증</Button>
                </Form.Group>
                <Form.Group className="d-flex justify-content-start align-items-center position-relative">
                    <Form.Label htmlFor="agree" className="my-0 mr-1 font-weight-bold" style={{whiteSpace: "nowrap"}}>이용약관동의</Form.Label>
                    <Form.Check type="checkbox" id="agree" label="전체동의" className="form-control-custom ml-auto border-0"/>
                </Form.Group>
                <div className="d-flex justify-content-center">
                    <Form.Group className="d-inline-flex flex-column align-items-center justify-content-center px-4 ml-4">
                        <div className="mt-1 d-flex align-items-center justify-content-between w-100">
                            <Form.Check type="checkbox" label="이용약관 (필수)"/>
                            <small className="theme-color-font">약관보기 {">>"}</small>
                        </div>
                        <div className="mt-1 d-flex align-items-center justify-content-between w-100">
                            <Form.Check type="checkbox" label="개인정보처리방침 (필수)"/>
                            <small className="theme-color-font">약관보기 {">>"}</small>
                        </div>
                        <div className="mt-1 d-flex align-items-center justify-content-between w-100">
                            <Form.Check type="checkbox" label="개인정보처리방침 (선택)"/>
                            <small className="theme-color-font">약관보기 {">>"}</small>
                        </div>
                        <div className="mt-1 d-flex flex-column justify-content-center align-items-center w-100">
                            <Form.Check type="checkbox" label="무료배송,할인쿠폰 등 혜택/정보 수신(선택)"/>
                            <div className="mt-1 d-flex justify-content-between w-100 px-4">
                                <Form.Check type="checkbox" label="SMS"/>
                                <Form.Check type="checkbox" label="이메일"/>
                            </div>
                        </div>
                    </Form.Group>
                </div>
                <Button type="submit" className="mt-2 w-100 button-custom theme-color-background">
                    Submit
                </Button>
            </Form>
            <p className="text-center mt-2">아직 스코어본 하이에나들 회원이 아니신가요? <a href="/register" className="container-login-footer">
                <strong>회원가입</strong></a>
            </p>
        </Container>
    )
}