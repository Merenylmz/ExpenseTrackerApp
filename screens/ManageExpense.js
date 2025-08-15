import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import GlobalStyles from "../constants/styles";
import CustomButton from "../components/UI/CustomButton";
import { useNavigation } from "@react-navigation/native";

const ManageExpense = ({route, navigation}) => {
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  useLayoutEffect(()=>{
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense"
    });
  }, [navigation, isEditing]);

  const deleteButtonHandler = () =>{
    navigation.goBack()
  }

  const editOrAddOperationButtonHandler = () =>{
    navigation.goBack()
  }

  return (
    <View>
      <View style={styles.buttonsContainer}>
        <CustomButton onPress={()=>navigation.goBack()} mode={"flat"}>Cancel</CustomButton>
        <CustomButton onPress={editOrAddOperationButtonHandler}>{isEditing ? "Edit" : "Add"}</CustomButton>
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
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20
  },
  deleteContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: GlobalStyles.colors.error50,
    borderTopWidth: 1,
    marginVertical: 15,
    marginHorizontal: 25
  }
});
