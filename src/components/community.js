import { Container, DropdownButton, FormControl, InputGroup, Dropdown, Button, Table, Pagination } from "react-bootstrap";

const tableWidth = (num) => {
    return {
        width: num,
        minWidth: num,
        paddingLeft: 0,
        paddingRight: 0,
    }
}

const CommunityList = () => {
    const arr = [12,11,10,9,8,7,6,5,4,3,2,1]
    return arr.map((el, idx) => {
        return (
            <tr key={`table_row_${idx}`}>
                <td style={tableWidth(50)} className="text-center">
                    {idx < 3 ? "공지" : el}
                </td>
                <td className="">예시질문입니다예시질문입니다예시질문입니다예시질문입니다.</td>
                <td style={tableWidth(70)} className="text-center">Otto</td>
                <td style={tableWidth(90)} className="text-center">
                    {new Date().toISOString().split("T")[0]}
                </td>
                <td style={tableWidth(70)} className="text-center">{el*100}</td>
            </tr>
        )
    })
}

export default function Community(){
    const active = 1
    const PaginationItems = () => [1,2,3,4,5].map(number => (
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>
    ))
    return (
        <Container>
            <h3 className="text-center">COMMUNITY</h3>
            <InputGroup className="my-3">
                <DropdownButton
                as={InputGroup.Prepend}
                variant="outline-secondary"
                title="Dropdown"
                id="input-group-dropdown-1"
                >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
                <FormControl aria-describedby="basic-addon1" />
                <Button variant="primary" type="submit">
                    검색하기
                </Button>
            </InputGroup>
            <Table hover style={{border: "0"}}>
                <thead className="table-primary">
                    <tr>
                    <th style={tableWidth(50)} className="text-center">번호</th>
                    <th>제목</th>
                    <th style={tableWidth(70)} className="text-center">글쓴이</th>
                    <th style={tableWidth(90)} className="text-center">등록일</th>
                    <th style={tableWidth(70)} className="text-center">조회수</th>
                    </tr>
                </thead>
                <tbody>
                    <CommunityList />
                </tbody>
            </Table>
            <div className="d-flex justify-content-between align-items-center">
                <div></div>
                <Pagination size="sm">
                    <PaginationItems />
                </Pagination>
                <Button className="mt-1">글쓰기</Button>
            </div>
        </Container>
    )
}