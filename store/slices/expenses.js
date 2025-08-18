import { createSlice } from "@reduxjs/toolkit";
import DUMMY_DATA from "../../data/dummyData";

const expenseSlices = createSlice({
    name: "expenses",
    initialState: {
        expense: DUMMY_DATA
    },
    reducers: {
        addExpense: (state, action) =>{
            state.expense.push({
                id: new Date().toString() + Math.random().toString(),
                description: action.payload.description,
                amount: action.payload.amount,
                date: new Date().toISOString()
            });
        },
        deleteExpense: (state, action)=>{
            state.expense = state.expense.filter(item=>item.id != action.payload.id);
        },
        editExpense: (state, action)=>{
            state.expense = state.expense.map(item=> item.id == action.payload.id ? {id: item.id, ...action.payload}: item)
        }
    }
});


export default expenseSlices.reducer;
export const addExpense = expenseSlices.actions.addExpense;
export const deleteExpense = expenseSlices.actions.deleteExpense;
export const editExpense = expenseSlices.actions.editExpense;