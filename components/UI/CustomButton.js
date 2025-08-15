import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../constants/styles";

const CustomButton = ({children, onPress, mode}) => {
  return (
    <View>
        <Pressable onPress={onPress} style={({pressed})=> pressed ? styles.pressed : {}}>
            <View style={[styles.button, mode == "flat" && styles.flat]}>
                <Text style={[styles.buttonText, mode == "flat" && styles.flatText]}>{children}</Text>
            </View>
        </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
    button: {
        minWidth: 120,
        marginHorizontal: 8,
        borderRadius: 4,
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.primary400
    },
    buttonText: {
        color: "#fff",
        textAlign: "center"
    },
    flat: {
        backgroundColor: "transparent"
    },
    flatText: {
        color: GlobalStyles.colors.primary200,
    },
    pressed: {
        backgroundColor: GlobalStyles.colors.primary100,
        opacity: .75,
        borderRadius: 4
    }
});
