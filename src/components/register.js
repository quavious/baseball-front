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
                <Form.Group controlId="formBasicID" className="d-flex justify-content-start align-items-center">
                    <Form.Label htmlFor="userid" className="my-0 mr-1" style={{whiteSpace: "nowrap"}}>아이디</Form.Label>
                    <Form.Control type="text" id="userid" name="userid" placeholder="아이디" className="form-group-width ml-auto"/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className="d-flex justify-content-start align-items-center">
                    <Form.Label htmlFor="password" className="my-0 mr-1" style={{whiteSpace: "nowrap"}}>비밀번호</Form.Label>
                    <Form.Control type="password" id="password" name="password" placeholder="비밀번호" className="form-group-width ml-auto"/>
                </Form.Group>
                <Form.Group controlId="formBasicUsername" className="d-flex justify-content-start align-items-center">
                    <Form.Label htmlFor="username" className="my-0 mr-1" style={{whiteSpace: "nowrap"}}>닉네임</Form.Label>
                    <Form.Control type="text" id="username" name="username" placeholder="닉네임" className="form-group-width ml-auto"/>
                </Form.Group>
                <Form.Group controlId="formBasicUsername" className="d-flex justify-content-start align-items-center">
                    <Form.Label htmlFor="username" className="my-0 mr-1" style={{whiteSpace: "nowrap"}}>닉네임</Form.Label>
                    <Form.Control type="text" id="username" name="username" placeholder="닉네임" className="form-group-width ml-auto"/>
                </Form.Group>
                <Form.Group controlId="formBasicPhoneNumber" className="d-flex justify-content-start align-items-center">
                    <Form.Label htmlFor="phone" className="my-0 mr-1" style={{whiteSpace: "nowrap"}}>연락처</Form.Label>
                    <Form.Control type="text" id="phone" placeholder="연락처" className="form-group-width ml-auto"/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox" className="">
                    <Form.Check type="checkbox" label="전체동의"/>
                </Form.Group>
                <Button type="submit" className="w-100 button-custom theme-color-background">
                    Submit
                </Button>
            </Form>
            <p className="text-center mt-2">아직 스코어본 하이에나들 회원이 아니신가요? <a href="/register" className="container-login-footer">
                <strong>회원가입</strong></a>
            </p>
        </Container>
    )
}