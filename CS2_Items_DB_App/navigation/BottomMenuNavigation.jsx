import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from "../screens/HomePage";
import SettingsPage from "../screens/SettingsPage";
import WatchlistPage from "../screens/WatchlistPage";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import CategorySearchPage from "../screens/CategorySearchPage";
import boxItemsPage from "../screens/BoxItemsPage";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigation() {
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={HomePage}/>
            <Stack.Screen name="CategorySearch" component={CategorySearchPage}/>
            <Stack.Screen name="BoxItemsPage" component={boxItemsPage}/>
        </Stack.Navigator>
        )
}
function BottomMenuNavigation() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if(rn === "Home"){
                        iconName = focused ? 'home' : 'home-outline';
                    } else if(rn === "Watchlist"){
                        iconName = focused ? 'heart' : 'heart-outline';
                    } else if(rn === "Settings"){
                        iconName = focused ? 'settings' : 'settings-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'orange',
                tabBarInactiveTintColor: 'grey',
                headerShown: false,
                tabBarStyle: {backgroundColor: '#1B1E28', borderColor: '#1B1E28', paddingBottom: 4}
        })}
        >
            <Tab.Screen name="Home" component={StackNavigation} />
            <Tab.Screen name="Watchlist" component={WatchlistPage}/>
            <Tab.Screen name="Settings" component={SettingsPage} />
        </Tab.Navigator>
    );
}
export default BottomMenuNavigation;
