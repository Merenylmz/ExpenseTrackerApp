import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";
import { useSelector } from "react-redux";

const RecentExpense = () => {
  const dummyData = useSelector((state)=>state.expenses.expense);
  
  const recentExpenses = dummyData.filter(item =>{
    const today = new Date();
    const date7DaysAgo = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

    const itemDate = new Date(item.date); 
    return itemDate > date7DaysAgo;
  })
  
  return <ExpenseOutput expensesPeriod={"Last 7 days"} expenses={recentExpenses}/>;
};

export default RecentExpense;

const styles = StyleSheet.create({});
