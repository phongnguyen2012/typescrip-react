import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    board: ["", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",],
        pos: 0
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
        }
    }
});
export const { setBoard , incPos, decPos} = boardSlice.actions;
export  default boardSlice.reducer;