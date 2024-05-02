import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from "../screens/HomePage";
import SettingsPage from "../screens/SettingsPage";
import WatchlistPage from "../screens/WatchlistPage";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

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
                tabBarActiveTintColor: 'purple',
                tabBarInactiveTintColor: 'grey',
                headerShown: false,
        })}
        >
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Watchlist" component={WatchlistPage}/>
            <Tab.Screen name="Settings" component={SettingsPage} />
        </Tab.Navigator>
    );
}
export default BottomMenuNavigation;
