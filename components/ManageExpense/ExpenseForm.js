import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import CustomButton from "../UI/CustomButton";

const ExpenseForm = ({isEditing, onSubmit, onCancel, defaultValues}) => {
  const [inputs, setInputs] = useState({amount: defaultValues ? defaultValues.amount.toString() : "", 
    date: defaultValues && defaultValues.date, 
    description: defaultValues ? defaultValues.description: ""});
  
  const handleSubmit = () =>{
    const expenseData = {
      amount: +inputs.amount,
      date: new Date(inputs.date),
      description: inputs.description
    };
    const amountIsValid = expenseData.amount > 0 && !isNaN(expenseData.amount)
    
    const dateIsValid = new Date(expenseData.date) !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0
    
    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      return Alert.alert("Invalid Input", "Please Check your input values");
    }
    onSubmit(expenseData);
  }

  return (
    <View>
      <View style={styles.inputsContainer}>
        <View style={{flex: 1}}>
          <Input label={"Amount"} textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: (e)=>setInputs({...inputs, amount: e}),
            value: inputs.amount 
          }}
          />
            
        </View>
        <View style={{flex: 1}}>
          <Input label={"Date"} textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: (e)=>setInputs({...inputs, date: e}),
            value: inputs.date
          }}/>
        </View>
      </View>
      <Input label={"Description"} textInputConfig={{
        onChangeText: (e)=>setInputs({...inputs, description: e}),
        multiline: true, // Like TextArea in HTML
        value: inputs.description
      }}/>

      
      <View style={styles.buttonsContainer}>
        <CustomButton onPress={onCancel} mode={"flat"}>Cancel</CustomButton>
        <CustomButton onPress={()=>handleSubmit()}>{isEditing ? "Edit" : "Add"}</CustomButton>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  inputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20
  },
});
