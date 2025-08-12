import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
import GlobalStyles from "../../constants/styles";

const ExpenseOutput = ({expenses, expensesPeriod}) => {
    const DUMMY_DATA = [
        {
            id: "e5",
            description: "Book",
            amount: 18.59,
            date: new Date("2025-01-09")
        },
        {
            id: "e6",
            description: "Computer",
            amount: 2000.59,
            date: new Date("2025-07-09")
        },
        {
            id: "m2",
            description: "SSD",
            amount: 50.72,
            date: new Date("2025-05-09")
        },
        {
            id: "z3",
            description: "Screen",
            amount: 112.66,
            date: new Date("2025-08-11")
        },
        ,
        {
            id: "e8",
            description: "Computer",
            amount: 2000.59,
            date: new Date("2025-07-09")
        },
        {
            id: "m1",
            description: "SSD",
            amount: 50.72,
            date: new Date("2025-05-09")
        },
        {
            id: "z9",
            description: "Screen",
            amount: 112.66,
            date: new Date("2025-08-11")
        },
        {
            id: "z7",
            description: "Screen",
            amount: 112.66,
            date: new Date("2025-08-11")
        },
        ,
        {
            id: "e1",
            description: "Computer",
            amount: 2000.59,
            date: new Date("2025-07-09")
        },
        {
            id: "m6",
            description: "SSD",
            amount: 50.72,
            date: new Date("2025-05-09")
        },
        {
            id: "z4",
            description: "Screen",
            amount: 112.66,
            date: new Date("2025-08-11")
        },
        
    ]
  return (
    <View style={styles.container}>
       <ExpenseSummary expenses={DUMMY_DATA} periodName={expensesPeriod}/>
       <ExpenseList expenses={DUMMY_DATA}/>
    </View>
  );
};

export default ExpenseOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    }
});
