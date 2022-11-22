
import {motion} from 'framer-motion';
import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { rootState } from '../interface';
import "./square.css";

interface IProps {
    val: string,
    squareIdx: number,
}

function Square(props: IProps) {
  const {val, squareIdx} = props;
  //redux
    const correctWord = useSelector((state: rootState) => state.board.correctWord);
    const postion = useSelector((state: rootState) => state.board.pos);
    const reduxRow = useSelector((state: rootState) => state.board.row);
    //state
    const [correct, setCorrect] = useState<boolean>(false);
    const [almost, setAlmost] = useState<boolean>(false);
    const [wrong , setWrong] = useState<boolean>(false);
    let worldLastIndex = 4;
    let currentPos =
    postion === 5 
    ? worldLastIndex : postion > 5 && postion % 5 === 0 
    ? worldLastIndex
    :(postion % 5) - 1;
    console.log("currentPos", currentPos);
    const variants = {
      filled: () => ({
        scale: [1.2, 1],
        transition: {
          duration: 0.2,
        },
      }),
      unfilled: () => ({
        scale: [1.2, 1],
        transition: {
          duration: 0.2,
        },
      }),
    };
    useEffect(() => {
      if (correctWord[currentPos] === val) {
        setCorrect(true);
      } else if (!correct && val !== "" && correctWord.includes(val)) {
        setAlmost(true);
      } else if (!correct && val !== "" && !correctWord.includes(val)) {
        setWrong(true);
      }
      return () => {
        setCorrect(false);
        setAlmost(false);
        setWrong(false);
      };
    }, [val]);
   const status: any = Math.floor(squareIdx/5) < reduxRow && (correct ? "correct" : almost ? "almost" : wrong ? "wrong" : "");
  
  return (
    <motion.div animate={val ? "filled" : "unfilled"} variants={variants}>
      <div className='square' id={status}>{val}</div>
    </motion.div>
    
  )
}



export default Square