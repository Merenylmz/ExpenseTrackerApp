import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({expenses}) => {
  return (
    <View>
        <FlatList data={expenses} renderItem={({item})=><ExpenseItem data={item}/>} keyExtractor={(item, index)=>index.toString() }/>
    </View>
  );
};

export default ExpenseList;

const styles = StyleSheet.create({
});
