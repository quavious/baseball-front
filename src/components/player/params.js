import { Col, Container, Row, Table } from "react-bootstrap";

import "../../styles/common/table.css"
const tableWidth = (num) => {
    return {
        width: num,
        minWidth: num-10,
        paddingLeft: 0,
        paddingRight: 0,
    }
}

export default function PlayerParam({match}) {
    const {params: {id}} = match
    return (
        <Container>
            <h3 className="text-center mb-4">Player {id}</h3>
            <Row className="w-100 mx-0">
                <Col lg={6} className="d-flex justify-content-center align-items-center bg-secondary px-4 mx-auto" style={{width: 400, height: 480}}>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <img src="/baseball-player.svg" alt="Baseball_Player_Poster" width="400px" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="px-4">
                        <div className="d-flex justify-content-between align-items-end">
                            <h3 style={{fontSize: "2.5rem"}} className="my-0">송진우</h3>
                            <h1 style={{fontSize: "4rem"}} className="my-0">21</h1>
                        </div>
                        <hr className="my-0"/>
                        <div className="d-flex flex-column mt-4">
                            <span>보직 : 투수</span>
                            <span>별명 :</span>
                            <span>투타 유형 : 우투 / 오버스로우</span>
                            <span>생년월일 : 1992년 12월 12일</span>
                            <span>신장/체중/혈액형 : 195cm / 86kg / O형</span>
                            <span>출신 학교 : 증평초-세광중-세광고-동국대</span>
                            <span>특징 : </span>
                            <span>좌우명 :</span>
                            <span className="mt-4"><strong>경력사항</strong></span>
                            <span>1988년 빙그레 이글스 입단</span>
                            <span className="mt-4"><strong>수상내역</strong></span>
                            <span>수상내역수상내역</span>
                        </div>
                    </div>
                </Col>
            </Row>
            <Table className="mt-4" hover responsive bordered style={{border: "0"}} >
                <thead className="table-primary theme-color-table">
                    <tr>
                        <th style={tableWidth(80)}></th>
                        <th className="text-center">경기</th>
                        <th className="text-center">승</th>
                        <th className="text-center">패</th>
                        <th className="text-center">세</th>
                        <th className="text-center">홀드</th>
                        <th className="text-center">이닝</th>
                        <th className="text-center">피연타</th>
                        <th className="text-center">피홈런</th>
                        <th className="text-center">볼넷</th>
                        <th className="text-center">사구</th>
                        <th className="text-center">삼진</th>
                        <th className="text-center">실점</th>
                        <th className="text-center">자책점</th>
                        <th className="text-center">승률</th>
                        <th className="text-center">평균 자책점</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">05월</td>
                        {Array.from({length: 15}).map(() => <td className="text-center"></td>)}
                    </tr>
                    <tr>
                        <td className="text-center">06월</td>
                        {Array.from({length: 15}).map(() => <td className="text-center"></td>)}
                    </tr>
                    <tr>
                        <td className="text-center">07월</td>
                        {Array.from({length: 15}).map(() => <td className="text-center"></td>)}
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}