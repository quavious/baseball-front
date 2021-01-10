import { Button, Container, Form } from "react-bootstrap";
import "../../styles/community.css"

export default function CommunityParam({match}) {
    const {params: {id}} = match
    return (
        <Container>
            <h1>Article {id}</h1>
            <div className="d-flex align-items-center">
                <div className="d-flex flex-column">
                    <small><strong>빈센트 서울</strong></small>
                    <small className="text-muted">{new Date().toISOString()}</small>
                </div>
                <h6 className="ml-4">제목입니다제목입니다제목입니다</h6>
            </div>
            <hr className="my-1"/>
            <div className="mt-2 container-content">
                <p>본문입니다본문입니다본문입니다</p>
            </div>
            <Form className="">
                <Form.Group className="d-flex">
                    <Form.Control as="textarea" placeholder="" rows={3}/>
                    <Button variant="primary" type="submit" style={{width: 80, minWidth: 80}}>
                        등록하기
                    </Button>
                </Form.Group>
            </Form>
        </Container>
    )
}