import axios from "axios";

const url = "https://reactnativeapplication-68cc9-default-rtdb.firebaseio.com";


const storeExpense = async(expenseData) =>{
    const res = await axios.post(`${url}/expenses.json`, expenseData);
    const data = res.data;
    return data;
}

const fetchExpenses = async() => {
    const res = await axios.get(`${url}/expenses.json`);
    const data = res.data;

    let expenses = [];

    for (const key in data) {
        const itemObj = {
            id: key,
            amount: data[key].amount,
            date: new Date(data[key].date).toISOString(),
            description: data[key].description
        }
        expenses.push(itemObj);
    }

    return expenses;
}

const editExpenses = async(id, expenseData) =>{
    const res = axios.put(`${url}/expenses/${id}.json`, expenseData);
    return res.data;
}

const deleteExpenses = async(id) =>{
    const res = await axios.delete(`${url}/expenses/${id}.json`);
    return res.data;
}

export {storeExpense, fetchExpenses, editExpenses, deleteExpenses};