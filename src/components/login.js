import { Button, Container, Form, Row } from "react-bootstrap";

import "../styles/login.css"
import "../styles/common/color.css"

export default function Login() {
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
                <span className="font-weight-bold text-dark">스코어본 하이에나들</span>
            </Row>
            <Form className="mt-4 px-4">
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="이메일" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="비밀번호" />
                </Form.Group>
                <div className="my-2 d-flex justify-content-between align-items-center">
                <Form.Group controlId="formBasicCheckbox" className="my-0">
                    <Form.Check type="checkbox" label="자동로그인"/>
                </Form.Group>
                    <div>
                        <small><a href="/">아이디 찾기</a> | <a href="/">비밀번호 찾기</a></small>
                    </div>
                </div>
                <Button type="submit" className="w-100 button-custom theme-color-border">
                    Submit
                </Button>
            </Form>
            <p className="text-center mt-2">아직 스코어본 하이에나들 회원이 아니신가요? <a href="/register" className="container-login-footer">
                <strong>회원가입</strong></a>
            </p>
        </Container>
    )
}