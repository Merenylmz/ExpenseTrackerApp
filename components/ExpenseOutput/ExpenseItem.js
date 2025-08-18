import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";

const ExpenseItem = ({data}) => {
    const navigation = useNavigation();
    const date = data && new Date(data.date);
    
    
  return (
    <View>
        {
            data && date &&
            <Pressable onPress={()=>{navigation.navigate("ManageExpense", {
                expenseId: data.id
            })}}>
                <View style={styles.container}>
                    <View>
                        <Text style={[styles.textBase, styles.description]}>{data.description}</Text>

                        <Text style={styles.textBase}>{`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`}</Text>
                    </View>
                    <View style={styles.amountContainer}>
                        <Text style={styles.amount}>{data.amount}</Text>
                    </View>
                </View>
            </Pressable>
        }
    </View>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
    container: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 6,
        elevation: 4,
        shadowColor: GlobalStyles.colors.gray500,
        shadowOffset: {width:1, height:1},
        shadowOpacity: .35,
        shadowRadius: 6
    },
    textBase: {
        color: GlobalStyles.colors.primary50
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: "bold"
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        minWidth: 75,
        minHeight: 40
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: "bold"
    }
});
