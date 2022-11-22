import { createSlice } from '@reduxjs/toolkit';
import wordList from "../words.json";
let randomNum = Math.floor(Math.random() * wordList.words.length);

const initialState = {
    board: ["", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",],
        pos: 0,
        row: 0,
        correctWord: wordList.words[randomNum].toUpperCase()
}
export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        setBoard: (state, action) => {
            state.board = action.payload;
        },
        incPos: (state) => {
            state.pos += 1;
        },
        decPos: (state) => {
            state.pos -= 1;
        },
        incRow: (state) => {
            state.row += 1;
        },
      
    }
});
export const { setBoard , incPos, decPos, incRow} = boardSlice.actions;
export  default boardSlice.reducer;