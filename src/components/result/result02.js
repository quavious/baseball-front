import { Container, Nav, Table } from "react-bootstrap";

import "../../styles/common/table.css"
import "../../styles/common/color.css"

const tableWidth = (num) => {
    return {
        width: num,
        minWidth: num-10,
        paddingLeft: 0,
        paddingRight: 0,
    }
}

export default function Result02(){
    return (
        <Container>
            <h2 className="text-center font-weight-bold theme-color-font">기록실</h2>
            <Nav fill justify variant="pills" defaultActiveKey="player" className="mt-4">
                <Nav.Item>
                    <Nav.Link eventKey="player" className="border rounded-0 py-3">선수기록</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="team" className="border rounded-0 py-3">팀기록</Nav.Link>
                </Nav.Item>
            </Nav>
            <Nav variant="pills" defaultActiveKey="pitcher" className="mt-4 justify-content-center">
                <Nav.Item>
                    <Nav.Link eventKey="pitcher" className="border border-dark mx-2 rounded-pill py-1 px-4">타자</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="catcher" className="border border-dark mx-2 rounded-pill py-1 px-4">투수</Nav.Link>
                </Nav.Item>
            </Nav>
            <Table className="mt-4" hover responsive style={{border: "0"}} >
                <thead className="table-secondary result-table-head">
                    <tr>
                        <th style={tableWidth(80)}></th>
                        <th className="text-center">선수명</th>
                        <th className="text-center">팀명</th>
                        <th className="text-center">AVG</th>
                        <th className="text-center">G</th>
                        <th className="text-center">PA</th>
                        <th className="text-center">AB</th>
                        <th className="text-center">R</th>
                        <th className="text-center">H</th>
                        <th className="text-center">2B</th>
                        <th className="text-center">3B</th>
                        <th className="text-center">HR</th>
                        <th className="text-center">TB</th>
                        <th className="text-center">RBI</th>
                        <th className="text-center">SAC</th>
                        <th className="text-center">SF</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center py-1">1</td>
                        {Array.from({length: 15}).map(() => <td className="text-center py-1"></td>)}
                    </tr>
                    <tr>
                        <td className="text-center py-1">2</td>
                        {Array.from({length: 15}).map(() => <td className="text-center py-1"></td>)}
                    </tr>
                    <tr>
                        <td className="text-center py-1">3</td>
                        {Array.from({length: 15}).map(() => <td className="text-center py-1"></td>)}
                    </tr>
                    <tr>
                        <td className="text-center py-1">4</td>
                        {Array.from({length: 15}).map(() => <td className="text-center py-1"></td>)}
                    </tr>
                    <tr>
                        <td className="text-center py-1">5</td>
                        {Array.from({length: 15}).map(() => <td className="text-center py-1"></td>)}
                    </tr>
                    <tr>
                        <td className="text-center py-1">6</td>
                        {Array.from({length: 15}).map(() => <td className="text-center py-1"></td>)}
                    </tr>
                    <tr>
                        <td className="text-center py-1">7</td>
                        {Array.from({length: 15}).map(() => <td className="text-center py-1"></td>)}
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}