import { Button, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../constants/styles";

const ErrorOverlay = ({description, onPress}) => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.title}>An a Occured Error</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
        <View>
            <Button title="Okay" onPress={onPress}/>
        </View>
    </View>
  );
};

export default ErrorOverlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: GlobalStyles.colors.primary700
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff"
    },
    description: {
        fontSize: 18,
        marginBottom: 15,
        color: "#fff"
    }
});
