import { Container, Nav, Table } from "react-bootstrap";

import "../../styles/common/table.css"
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
            <h2 className="text-center font-weight-bold">기록실</h2>
            <Nav fill justify variant="pills" defaultActiveKey="player" className="mt-4">
                <Nav.Item>
                    <Nav.Link eventKey="player" className="border rounded-0">선수기록</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="team" className="border rounded-0">팀기록</Nav.Link>
                </Nav.Item>
            </Nav>
            <Nav variant="pills" defaultActiveKey="pitcher" className="mt-4 justify-content-center">
                <Nav.Item>
                    <Nav.Link eventKey="pitcher" className="border mx-2">타자</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="catcher" className="border mx-2">투수</Nav.Link>
                </Nav.Item>
            </Nav>
            <Table className="mt-4" hover responsive style={{border: "0"}} >
                <thead className="table-secondary">
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
                        <td className="text-center">1</td>
                        {Array.from({length: 15}).map(() => <td className="text-center"></td>)}
                    </tr>
                    <tr>
                        <td className="text-center">2</td>
                        {Array.from({length: 15}).map(() => <td className="text-center"></td>)}
                    </tr>
                    <tr>
                        <td className="text-center">3</td>
                        {Array.from({length: 15}).map(() => <td className="text-center"></td>)}
                    </tr>
                    <tr>
                        <td className="text-center">4</td>
                        {Array.from({length: 15}).map(() => <td className="text-center"></td>)}
                    </tr>
                    <tr>
                        <td className="text-center">5</td>
                        {Array.from({length: 15}).map(() => <td className="text-center"></td>)}
                    </tr>
                    <tr>
                        <td className="text-center">6</td>
                        {Array.from({length: 15}).map(() => <td className="text-center"></td>)}
                    </tr>
                    <tr>
                        <td className="text-center">7</td>
                        {Array.from({length: 15}).map(() => <td className="text-center"></td>)}
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}