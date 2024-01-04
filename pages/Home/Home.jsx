import { useState } from 'react';
import Calendar from 'react-calendar';
import s from "./Home.module.css";
import "./react-calendar.css";
import {useNavigate} from "react-router-dom";

export default function Home() {
    const [date, setDate] = useState(new Date());
    const navigate = useNavigate();


    return (
        <div>
            <h2>Calendar View</h2>
            <Calendar 
                onChange={setDate} 
                value={date} 
            />
        </div>
    );
}