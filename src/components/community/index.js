import { Container, DropdownButton, FormControl, InputGroup, Dropdown, Button, Table, Pagination } from "react-bootstrap";
import {useState, useEffect} from 'react'

import "../../styles/common/color.css"
import { Link } from "react-router-dom";

const CommunityList = ({flag, title}) => {
    const created = new Date().toISOString().split("T")[0]
    return Array.from({length: 12}).map((_, idx) => {
        const el = 12 - idx
        return (
            <tr key={`table_row_${idx}`}>
                <td className="text-center">
                    {idx < 3 ? <strong className="theme-color-font">공지</strong> : el}
                </td>
                <td className="table-title">{
                    <a href={`/community/post/${el}`}>
                    {flag ? title.slice(0, 12)+"..." : title.slice(0, 35)}
                    </a>
                }</td>
                <td className="text-center">Otto</td>
                <td className="text-center">
                    {flag ? created.slice(2) : created}
                </td>
                <td className="text-center">{el*100}</td>
            </tr>
        )
    })
}

export default function Community({main}){
    console.log(!main)
    const [flag, setFlag] = useState(false)
    const title = "예시질문입니다예시질문입니다예시질문입니다예시질문입니다."
    useEffect(() => {
        const handleChangeWidth = (e) => {
            e.preventDefault()
            if(e.target.innerWidth < 992){
                if(!flag) {
                    setFlag(true)
                }
            } else {
                if(flag){
                    setFlag(false)
                }
            }
        }
        window.addEventListener("resize", handleChangeWidth)
        return () => window.removeEventListener("resize", handleChangeWidth)
    }, [flag])
    const active = 1
    const PaginationItems = () => [1,2,3,4,5].map(number => (
        <Pagination.Item key={number} active={number === active} >
            {number}
        </Pagination.Item>
    ))
    return (
        <Container>
            <h3 className="text-center">COMMUNITY</h3>
            <InputGroup className="my-3 theme-color-border">
                <DropdownButton
                    as={InputGroup.Prepend}
                    variant="outline-dark"
                    title="Dropdown"
                    id="input-group-dropdown-1"
                >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
                <FormControl aria-describedby="basic-addon1"/>
                <Button variant="primary" type="submit" className="theme-color-background">
                    검색하기
                </Button>
            </InputGroup>
            <Table hover style={{border: "0"}}>
                <thead className="table-normal">
                    <tr>
                    <th className="text-center theme-color-font">번호</th>
                    <th className="table-title theme-color-font">제목</th>
                    <th className="text-center theme-color-font">글쓴이</th>
                    <th className="text-center theme-color-font">등록일</th>
                    <th className="text-center theme-color-font">조회수</th>
                    </tr>
                </thead>
                <tbody>
                    <CommunityList flag={flag} title={title}/>
                </tbody>
            </Table>
            <div className="d-flex justify-content-between align-items-center">
                <div></div>
                <Pagination size="sm" className="mt-2 mb-4 ">
                    <PaginationItems />
                </Pagination>
                <Button className="mt-2 mb-4 theme-color-background"><Link to="/community/write">글쓰기</Link></Button>
            </div>
        </Container>
    )
}