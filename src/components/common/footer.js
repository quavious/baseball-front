import {Container} from "react-bootstrap"
import "../../styles/common/footer.css"

export const Footer = () => {
    return (
        <div className="footer py-4">
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
        <div className="footer py-4">
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