import { StyleSheet, Text, View } from "react-native";
import { useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import GlobalStyles from "../constants/styles";
import { useDispatch, useSelector } from "react-redux";
import { addExpense, deleteExpense, editExpense } from "../store/slices/expenses";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

const ManageExpense = ({route, navigation}) => {
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;
  const dispatch = useDispatch();
  const expenses = useSelector((state)=>state.expenses.expense);
  const selectedExpense = expenses.find(item=>{
    if (!item) return false; 
    return item.id == expenseId
  });
  
  

  useLayoutEffect(()=>{
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense"
    });
  }, [navigation, isEditing]);

  const deleteButtonHandler = () =>{
    dispatch(deleteExpense(expenseId));
    navigation.goBack()
  }

  const editOrAddOperationButtonHandler = (inputs) =>{
    if (isEditing) {
      dispatch(editExpense({id: expenseId, ...inputs})); 
    } else {
      dispatch(addExpense({...inputs, date: inputs.date.toISOString(), id: expenseId}));
    }
    navigation.goBack()
  }


  return (
    <View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Your Expense</Text>
        <ExpenseForm isEditing={isEditing} onCancel={()=>navigation.goBack()} onSubmit={editOrAddOperationButtonHandler} defaultValues={selectedExpense}/>
      </View>
      {
        isEditing && <View style={styles.deleteContainer}>
          <IconButton name={"trash"} color={GlobalStyles.colors.error500} size={36} onPress={deleteButtonHandler}/>
        </View>
      }
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20

  },
  deleteContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: GlobalStyles.colors.error50,
    borderTopWidth: 1,
    marginVertical: 15,
    marginHorizontal: 25
  },
  formContainer: {
    padding: 15
  }
});
