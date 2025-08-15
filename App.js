import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ManageExpense from "./screens/ManageExpense";
import RecentExpense from "./screens/RecentExpense";
import AllExpense from "./screens/AllExpense";
import GlobalStyles from "./constants/styles";
import {Ionicons} from "@expo/vector-icons";
import IconButton from './components/UI/IconButton';
import { Provider } from 'react-redux';
import store from './store/store';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () =>{
  const navigation = useNavigation();

  const addExpenseButtonHandler = () =>{
    navigation.navigate("ManageExpense");
  }

  return (
    <BottomTabs.Navigator screenOptions={{
      headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
      headerTintColor: "#fff",
      tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      headerRight: ({tintColor}) => <IconButton name={"add"} color={tintColor} size={30} onPress={addExpenseButtonHandler}/>
    }}>
      <BottomTabs.Screen name='RecentExpense' component={RecentExpense} options={{
        tabBarLabel: "Recent",
        title: "Recent Expenses",
        tabBarIcon: ({size, color})=> <Ionicons name='hourglass' size={size} color={color}/>
      }}/>
      <BottomTabs.Screen name='AllExpense' component={AllExpense} options={{
        tabBarLabel: "All",
        title: "All Expenses",
        tabBarIcon: ({size, color})=> <Ionicons name='calendar' size={size} color={color}/>
      }}/>
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='ExpensesOverview' component={ExpensesOverview} options={{
            headerShown: false,
          }}/>
          <Stack.Screen name='ManageExpense' component={ManageExpense} options={{
            presentation: "modal",
            headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
            headerTintColor: "#fff",
            cardStyle: {backgroundColor: GlobalStyles.colors.primary700}

          }}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </Provider>
  );
}
