import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import "../styles/calendar.css"

export default function Calander() {
    const [date, setDate] = useState(new Date())
    const [year, setYear] = useState(null)
    const [month, setMonth] = useState(null)
    useEffect(() => {
        setYear(date.getFullYear())
        setMonth(date.getMonth() + 1)
    }, [date])

    const handleClickDate = (e, num) => {
        e.preventDefault();
        switch(num){
            case 0:
                setDate(new Date(date.setMonth(date.getMonth() - 1)))
                break;
            case 1:
                setDate(new Date(date.setMonth(date.getMonth() + 1)))
                break;
            default:
                break;
        }
    }

    return (
        <Container>
            <div className="calendar w-100">
                <div className="calendar-month mx-auto d-flex justify-content-center align-items-center">
                    <button className="calendar-change m-0 p-0 rounded-circle" onClick={e => handleClickDate(e, 0)}>{" < "}</button>
                    <h1 className="mx-4 mt-0 mb-1">{year}.{month < 10 ? `0${month}`: month}</h1>
                    <button className="calendar-change m-0 p-0 rounded-circle" onClick={e => handleClickDate(e, 1)}>{" > "}</button>
                </div>
                <div class="regular-field d-flex justify-content-end align-items-center mt-2">
                    <input type="radio" id="radio-home" name="notaswitch-one" value="yes" className="mr-1" checked/>
                    <label for="radio-home" className="mr-2 my-0">홈경기</label>
                    <input type="radio" id="radio-away" name="notaswitch-one" value="no" className="mr-1"/>
                    <label for="radio-away" className="my-0">원정경기</label>
                </div>
                <div className="calendar-week mt-3">
                    <div>MON</div>
                    <div>TUE</div>
                    <div>WED</div>
                    <div>THU</div>
                    <div>FRI</div>
                    <div className="calendar-saturday">SAT</div>
                    <div className="calendar-sunday">SUN</div>
                </div>
                <div className="calendar-days">
                    {Array.from({length: 35}).map((_, el) => {
                        return (
                            <div key={`day_${el}`} className="d-flex flex-column justify-content-center align-items-center">
                                <img src="/baseball_logo.svg" alt={`calendar_poster_${el}`}/>
                                <strong>18:00</strong>
                                <small>인천</small>
                                <span>{el < 4 ? null : el - 3}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Container>
    )
}