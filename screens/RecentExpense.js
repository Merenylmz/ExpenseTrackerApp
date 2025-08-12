import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";

const RecentExpense = () => {
  return <ExpenseOutput expensesPeriod={"Last 7 days"}/>;
};

export default RecentExpense;

const styles = StyleSheet.create({});
