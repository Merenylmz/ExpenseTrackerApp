import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../constants/styles";

const ExpenseSummary = ({periodName, expenses}) => {
  const sumExpense = expenses.reduce((sum, expense)=>{
    return sum += expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>₺{sumExpense.toFixed(2)}</Text>
    </View>
  );
};

export default ExpenseSummary;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 8,
    padding: 8,
    alignItems: "center"
  },
  period:{
    fontSize: 13,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontWeight: "bold",
    fontSize: 16,
    color: GlobalStyles.colors.primary500
  }
});
