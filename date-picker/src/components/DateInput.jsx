import React, { useEffect } from 'react'
import "../App.css"
import DateDisplay from './DateDisplay'
function DateInput() {
    const [date, setDate] = React.useState(Date.now());
    useEffect(() => {console.log(date)}, [date]);
    console.log(date);
    return (
        <div>
            <input className='date-input' type="date" onChange={(e) => setDate(e.target.value)}/>
            <DateDisplay date = {date}/>
        </div>
    )
}

export default DateInput