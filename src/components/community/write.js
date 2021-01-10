import { Container, Form, Button } from "react-bootstrap";

import "../../styles/common/color.css"

export default function CommunityWrite(){
    return (
        <Container>
            <h3 className="text-center">COMMUNITY</h3>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>제목</Form.Label>
                    <Form.Control type="email" placeholder="" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control as="textarea" rows={8} placeholder="" />
                </Form.Group>
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="첨부파일" />
                    <small>10MB 이하, 5개까지 첨부 가능</small>
                </Form.Group>
                <div className="d-flex align-items-center justify-content-end">
                    <Form.Group controlId="formBasicCheckbox" className="my-0 mr-4">
                        <Form.Check type="checkbox" label="비밀글" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='theme-color-background'>
                        문의하기
                    </Button>
                </div>
            </Form>
        </Container>
    )
}