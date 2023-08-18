import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";

const Routes = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="main"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="main" component={MainScreen} />
        </Stack.Navigator>
    );
};



export default Routes;