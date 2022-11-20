import React from 'react'
import "../App.css"
function DateDisplay(props) {
    const {date} = props;
  return (
    <div className='dislay-date'>DateDisplay {date}</div>
  )
}

export default DateDisplay