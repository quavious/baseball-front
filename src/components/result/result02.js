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
    const tableHead = ["선수명", "팀명", "AVG", 'G', "PA", "AB", "R", 'H', '2B', '3B', 'HR', 'TB', 'RBI', 'SAC', "SF"]
    return (
        <Container className="my-4">
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
            <Table className="my-4" hover responsive style={{border: "0"}} >
                <thead className="table-secondary result-table-head">
                    <tr>
                        <th style={tableWidth(80)}></th>
                        {tableHead.map(el => (
                            <th className="text-center">{el}</th>                            
                        ))}
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