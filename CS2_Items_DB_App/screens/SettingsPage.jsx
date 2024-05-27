import {StyleSheet, Text, View} from "react-native";
import {globalStyles} from "../styles/globalStyles";
import {useEffect, useState} from "react";
import {Picker} from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CURRENCY_KEY = "selectedCurrency";

const SettingsPage = ({ navigation }) => {
    const [currency, setCurrency] = useState(6); // Default to PLN

    useEffect(() => {
        // Load the selected currency from AsyncStorage when the component mounts
        const loadCurrency = async () => {
            try {
                const storedCurrency = await AsyncStorage.getItem(CURRENCY_KEY);
                if (storedCurrency) {
                    setCurrency(storedCurrency);
                }
            } catch (error) {
                console.log("Failed to load currency from AsyncStorage:", error);
            }
        };

        loadCurrency();
    }, []);

    const handleCurrencyChange = async (itemValue) => {
        setCurrency(itemValue);
        try {
            await AsyncStorage.setItem(CURRENCY_KEY, itemValue);
        } catch (error) {
            console.log("Failed to save currency to AsyncStorage:", error);
        }
    };

    return (
        <View style={globalStyles.container}>
            <Text style={[globalStyles.headlineText, {paddingTop: 8}]}>Settings</Text>
            <Text style={globalStyles.secondaryText}>Select Currency:</Text>
            <Picker
                selectedValue={currency}
                style={styles.picker}
                onValueChange={handleCurrencyChange}
            >
                <Picker.Item label="PLN" value="6" />
                <Picker.Item label="USD" value="1" />
                <Picker.Item label="EUR" value="3" />
                <Picker.Item label="GBP" value="2" />
                {/* Add more currencies as needed */}
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    picker: {
        color: 'white',
        height: 50,
        width: 150,
        marginTop: 20,
        backgroundColor: 'orange'
    }
});
export default SettingsPage;
