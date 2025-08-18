import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
import GlobalStyles from "../../constants/styles";


const ExpenseOutput = ({expenses, expensesPeriod}) => {
  return (
    <View style={styles.container}>
       <ExpenseSummary expenses={expenses} periodName={expensesPeriod}/>
       <ExpenseList expenses={expenses}/>
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
