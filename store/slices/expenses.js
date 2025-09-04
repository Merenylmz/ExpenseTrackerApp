import { createSlice } from "@reduxjs/toolkit";
import DUMMY_DATA from "../../data/dummyData";

const expenseSlices = createSlice({
    name: "expenses",
    initialState: {
        expense: DUMMY_DATA
    },
    reducers: {
        addExpense: (state, action) =>{
            state.expense.push(action.payload);
        },
        deleteExpense: (state, action)=>{
            state.expense = state.expense.filter(item=>item.id != action.payload.id);
        },
        editExpense: (state, action)=>{
            state.expense = state.expense.map(item=> item.id == action.payload.id ? {id: item.id, ...action.payload}: item)
        },
        setExpense: (state, action)=>{
            state.expense = action.payload;
        }
    }
});


export default expenseSlices.reducer;
export const addExpense = expenseSlices.actions.addExpense;
export const deleteExpense = expenseSlices.actions.deleteExpense;
export const editExpense = expenseSlices.actions.editExpense;
export const setExpense = expenseSlices.actions.setExpense;