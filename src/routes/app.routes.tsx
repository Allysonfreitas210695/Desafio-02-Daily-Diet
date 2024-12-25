import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import Home from '@screens/Home';


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator
            initialRouteName='home'
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name='home'
                component={Home}
            />
        </Navigator>
    );
}