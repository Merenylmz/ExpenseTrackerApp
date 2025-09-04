import { StyleSheet } from "react-native";
import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";
import { useSelector } from "react-redux";

const AllExpense = () => {
  const dummyData = useSelector(state=>state.expenses.expense);

  return <ExpenseOutput expensesPeriod={"Total"} expenses={dummyData}/>;
};

export default AllExpense;

const styles = StyleSheet.create({});
