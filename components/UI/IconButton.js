import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({name, size, color, onPress}) => {
  return (
    <Pressable onPress={onPress} style={({pressed})=> pressed ? [styles.container, styles.pressed]: styles.container}>
        <View>  
            <Ionicons name={name} color={color} size={size}/>
        </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
    container: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2
    },
    pressed: {
        opacity: .6
    }
});
