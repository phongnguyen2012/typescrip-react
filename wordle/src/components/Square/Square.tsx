import React from 'react'
import "./square.css";

interface Iprops {
    val: string,
    squareIdx: number,
}

function Square(props: Iprops) {
    const {val, squareIdx} = props;
  return (
    <div className='square'>{val}</div>
  )
}

export default Square