import { Button, Container, Form } from "react-bootstrap";
import "../../styles/community.css"
import "../../styles/common/color.css"

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
                    <Button className="theme-color-background" type="submit" style={{width: 80, minWidth: 80}}>
                        등록하기
                    </Button>
                </Form.Group>
            </Form>
            <div className="bg-secondary pt-4 pb-2 px-4">
                <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <strong className="theme-color-font mr-2">빈센트 서울</strong>
                            <small className="text-muted text-small mr-2">{new Date().toISOString()}</small>
                            <small className="text-small mr-2">답글</small>
                        </div>
                        <small className="text-muted text-small">신고</small>
                    </div>
                    <p>분양가가 부동산마다 다른가요?</p>
                    <hr />
                </div>
                <div className="pl-4">
                    <h6 className="mr-2" style={{float: "left"}}>👉</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <strong className="theme-color-font mr-2">빈센트 서울</strong>
                            <small className="text-muted text-small mr-2">{new Date().toISOString()}</small>
                            <small className="text-small mr-2">답글</small>
                        </div>
                        <small className="text-muted text-small">신고</small>
                    </div>
                    <p>분양가가 부동산마다 다른가요?</p>
                    <hr />
                </div>
                <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <strong className="theme-color-font mr-2">빈센트 서울</strong>
                            <small className="text-muted text-small mr-2">{new Date().toISOString()}</small>
                            <small className="text-small mr-2">답글</small>
                        </div>
                        <small className="text-muted text-small">신고</small>
                    </div>
                    <p>분양가가 부동산마다 다른가요?</p>
                    <hr />
                </div>
            </div>
        </Container>
    )
}