import { useState } from 'react';
import Calendar from 'react-calendar';
import s from "./Home.module.css";
import "./react-calendar.css";
import {useNavigate} from "react-router-dom";

export default function Home() {
    const [date, setDate] = useState(new Date());
    const navigate = useNavigate();
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const handleClickDay = (event) => {
        /*
         * Redirect to a new page for each day with that day's todos. 
         * Page link formatted as: /TodoPage/Month/Day/Year
         * months[event.getMonth()] gets name of the month at index getMonth()
         */
        navigate(`/TodoPage/${months[event.getMonth()]}/${event.getDate()}/${event.getFullYear()}`);
    }

    return (
        <div>
            <h2>Calendar View</h2>
            <Calendar 
                onChange={setDate} 
                value={date} 
                /* When you click on a specific day */
                onClickDay={handleClickDay}
            />
        </div>
    );
}