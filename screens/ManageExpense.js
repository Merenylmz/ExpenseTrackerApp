import { StyleSheet, Text, View } from "react-native";
import { useLayoutEffect, useState } from "react";
import IconButton from "../components/UI/IconButton";
import GlobalStyles from "../constants/styles";
import { useDispatch, useSelector } from "react-redux";
import { addExpense, deleteExpense, editExpense } from "../store/slices/expenses";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { storeExpense , deleteExpenses, editExpenses} from "../utils/httpFirebase";
import LoadingOverlay from "../components/UI/LoadingOverlay";

const ManageExpense = ({route, navigation}) => {
  const expenseId = route.params?.expenseId;
  const [loading, setLoading] = useState(false);
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

  const deleteButtonHandler = async() =>{
    setLoading(true);
    dispatch(deleteExpense(expenseId));
    const status = await deleteExpenses(expenseId);
    setLoading(false);
    navigation.goBack()
  }

  const editOrAddOperationButtonHandler = async(inputs) =>{
    setLoading(true);
    if (isEditing) {
      dispatch(editExpense({id: expenseId, ...inputs}));
      await editExpenses(expenseId, inputs); 
    } else {
      const {name} = await storeExpense({...inputs, date: inputs.date.toISOString()});  
      dispatch(addExpense({...inputs, date: inputs.date.toISOString(), id: name}));
    }
    setLoading(false);
    navigation.goBack()
  }


  return (
    !loading ? 
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
    </View> : <LoadingOverlay />
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
