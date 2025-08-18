import { configureStore } from "@reduxjs/toolkit";
import expenseSlices from "./slices/expenses";


const store = configureStore({
    reducer: {
        expenses: expenseSlices
    }
});

export default store;