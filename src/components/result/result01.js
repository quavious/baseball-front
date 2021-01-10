import { Col, Container, Row, Table } from "react-bootstrap";

import "../../styles/common/table.css"

export default function Result01(){
    return (
        <Container>
            <h2 className="text-center font-weight-bold">독립야구단 경기도리그</h2>
            <Row className="mt-4">
                <Col lg={6}>
                    <strong>| 순위표</strong>
                    <Table className="mt-4" hover responsive style={{border: "0"}} >
                        <thead className="table-secondary">
                            <tr>
                                <th>팀명</th>
                                <th className="text-center">경기</th>
                                <th className="text-center">승</th>
                                <th className="text-center">패</th>
                                <th className="text-center">무</th>
                                <th className="text-center">승률</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({length: 6}).map(() =>
                                <tr>
                                    <td>파주시 챌린저스</td>
                                    <td className="text-center">48</td>
                                    <td className="text-center">48</td>
                                    <td className="text-center">48</td>
                                    <td className="text-center">48</td>
                                    <td className="text-center">48</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Col>
                <Col lg={6}>
                    <strong>| 상대전적</strong>
                    <Table className="mt-4" hover bordered responsive style={{border: "0"}} >
                        <thead className="table-secondary">
                            <tr className="table-more-line">
                                <th className="text-center"></th>
                                <th className="text-center">상대팀<br />상대팀</th>
                                <th className="text-center">상대팀<br />상대팀</th>
                                <th className="text-center">상대팀<br />상대팀</th>
                                <th className="text-center">상대팀<br />상대팀</th>
                                <th className="text-center">상대팀<br />상대팀</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({length: 6}).map(() =>
                                <tr className="table-more-line">
                                    <td className="text-center bg-secondary">상대팀<br />상대팀</td>
                                    <td className="text-center"></td>
                                    <td className="text-center"></td>
                                    <td className="text-center"></td>
                                    <td className="text-center"></td>
                                    <td className="text-center"></td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}