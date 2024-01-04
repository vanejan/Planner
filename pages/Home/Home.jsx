import { useState } from 'react';
import Calendar from 'react-calendar';
import s from "./Home.module.css";
import "./react-calendar.css";

export default function Home() {
    const [date, setDate] = useState(new Date());

    return (
        <Calendar onChange={setDate} value={date} />
    );
}