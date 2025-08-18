import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";
import DUMMY_DATA from "../data/dummyData";
import { useSelector } from "react-redux";

const AllExpense = () => {
  const dummyData = useSelector(state=>state.expenses.expense);
  
  return <ExpenseOutput expensesPeriod={"Total"} expenses={dummyData}/>;
};

export default AllExpense;

const styles = StyleSheet.create({});
