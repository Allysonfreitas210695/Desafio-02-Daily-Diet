import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feedback from '@screens/Feedback';

import Home from '@screens/Home';
import MealDetails from '@screens/MealDetails';
import NewDailyDiet from '@screens/NewDailyDiet';
import Statistic  from '@screens/Statistic';


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

            <Screen
                name='statistic'
                component={Statistic}
            />

            <Screen
                name='newDailyDiet'
                component={NewDailyDiet}
            />

            <Screen
                name='feedback'
                component={Feedback}
            />

            <Screen
                name='mealDetails'
                component={MealDetails}
            />


        </Navigator>
    );
}