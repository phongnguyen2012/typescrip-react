import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { incPos, setBoard } from '../../redux/boardSlice';
import { rootState } from '../interface';
import "./key.css"
interface Iprops {
    letter: string,
}

function Key(props: Iprops) {
    const { letter } = props;
    const board = useSelector((state: rootState) => state.board.board);
    const position = useSelector((state: rootState) => state.board.pos);
    const dispatch = useDispatch();
    const chooseLetter = () => {
        if (position < 30) {
            const newBoard = [...board];
            newBoard[position] = letter;
            dispatch(setBoard(newBoard));
            dispatch(incPos());
        }
    };
    return (
        <div className="letter" onClick={chooseLetter}>
            {letter}
        </div>
    )
}

export default Key