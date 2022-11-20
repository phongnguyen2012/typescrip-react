import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decPos, setBoard } from '../../redux/boardSlice';
import { rootState } from '../interface';
import Key from '../Key/Key'
import "./keyboard.css"

function KeyBoard() {
  const position = useSelector((state: rootState) => state.board.pos);
  const board = useSelector((state: rootState) => state.board.board);
  const dispatch = useDispatch();
  const rows: string[] = ["q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",];
  const clickBack = () => {
    if (position <= 0) 
      return;
    const newBoard = [...board];
    newBoard[position - 1] = "";
    dispatch(decPos());
    dispatch(setBoard(newBoard));
  };
  return (
    <div className="keyboard-container">
      {rows.map((row, idx) => {
        return (
          <div className='row'>
            {idx===2 && <span>Enter</span>}
            {row.split(" ").map((letter, idx) => {
              return (
                <div className='letter-row'>
                  <Key letter={letter.toLocaleUpperCase()} />
                  
                  {letter === "m" && <span onClick={clickBack} >Back</span>}
                </div>
              )
            })}
            </div>
        )
      })}
    </div>
  )
}

export default KeyBoard


