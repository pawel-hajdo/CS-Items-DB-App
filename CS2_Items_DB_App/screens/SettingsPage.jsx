import {StyleSheet, Text, View} from "react-native";
import {globalStyles} from "../styles/globalStyles";
import {useEffect, useState} from "react";
import {Picker} from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CURRENCY_KEY = "selectedCurrency";
const g_rgCurrencyData = {
    "USD": {"strCode": "USD", "eCurrencyCode": 1, "strSymbol": "$"},
    "GBP": {"strCode": "GBP", "eCurrencyCode": 2, "strSymbol": "£"},
    "EUR": {"strCode": "EUR", "eCurrencyCode": 3, "strSymbol": "€"},
    "CHF": {"strCode": "CHF", "eCurrencyCode": 4, "strSymbol": "CHF"},
    "RUB": {"strCode": "RUB", "eCurrencyCode": 5, "strSymbol": "₽"},
    "PLN": {"strCode": "PLN", "eCurrencyCode": 6, "strSymbol": "zł"},
    "BRL": {"strCode": "BRL", "eCurrencyCode": 7, "strSymbol": "R$"},
    "JPY": {"strCode": "JPY", "eCurrencyCode": 8, "strSymbol": "¥"},
    "NOK": {"strCode": "NOK", "eCurrencyCode": 9, "strSymbol": "kr"},
    "IDR": {"strCode": "IDR", "eCurrencyCode": 10, "strSymbol": "Rp"},
    "MYR": {"strCode": "MYR", "eCurrencyCode": 11, "strSymbol": "RM"},
    "PHP": {"strCode": "PHP", "eCurrencyCode": 12, "strSymbol": "P"},
    "SGD": {"strCode": "SGD", "eCurrencyCode": 13, "strSymbol": "S$"},
    "THB": {"strCode": "THB", "eCurrencyCode": 14, "strSymbol": "฿"},
    "VND": {"strCode": "VND", "eCurrencyCode": 15, "strSymbol": "₫"},
    "KRW": {"strCode": "KRW", "eCurrencyCode": 16, "strSymbol": "₩"},
    "TRY": {"strCode": "TRY", "eCurrencyCode": 17, "strSymbol": "₺"},
    "UAH": {"strCode": "UAH", "eCurrencyCode": 18, "strSymbol": "₴"},
    "MXN": {"strCode": "MXN", "eCurrencyCode": 19, "strSymbol": "Mex$"},
    "CAD": {"strCode": "CAD", "eCurrencyCode": 20, "strSymbol": "CDN$"},
    "AUD": {"strCode": "AUD", "eCurrencyCode": 21, "strSymbol": "A$"},
    "NZD": {"strCode": "NZD", "eCurrencyCode": 22, "strSymbol": "NZ$"},
    "CNY": {"strCode": "CNY", "eCurrencyCode": 23, "strSymbol": "¥"},
    "INR": {"strCode": "INR", "eCurrencyCode": 24, "strSymbol": "₹"},
    "CLP": {"strCode": "CLP", "eCurrencyCode": 25, "strSymbol": "CLP$"},
    "PEN": {"strCode": "PEN", "eCurrencyCode": 26, "strSymbol": "S/."},
    "COP": {"strCode": "COP", "eCurrencyCode": 27, "strSymbol": "COL$"},
    "ZAR": {"strCode": "ZAR", "eCurrencyCode": 28, "strSymbol": "R"},
    "HKD": {"strCode": "HKD", "eCurrencyCode": 29, "strSymbol": "HK$"},
    "TWD": {"strCode": "TWD", "eCurrencyCode": 30, "strSymbol": "NT$"},
    "SAR": {"strCode": "SAR", "eCurrencyCode": 31, "strSymbol": "SR"},
    "AED": {"strCode": "AED", "eCurrencyCode": 32, "strSymbol": "AED"},
    "SEK": {"strCode": "SEK", "eCurrencyCode": 33, "strSymbol": "kr"},
    "ARS": {"strCode": "ARS", "eCurrencyCode": 34, "strSymbol": "ARS$"},
    "ILS": {"strCode": "ILS", "eCurrencyCode": 35, "strSymbol": "₪"},
    "BYN": {"strCode": "BYN", "eCurrencyCode": 36, "strSymbol": "Br"},
    "KZT": {"strCode": "KZT", "eCurrencyCode": 37, "strSymbol": "₸"},
    "KWD": {"strCode": "KWD", "eCurrencyCode": 38, "strSymbol": "KD"},
    "QAR": {"strCode": "QAR", "eCurrencyCode": 39, "strSymbol": "QR"},
    "CRC": {"strCode": "CRC", "eCurrencyCode": 40, "strSymbol": "₡"},
    "UYU": {"strCode": "UYU", "eCurrencyCode": 41, "strSymbol": "$U"},
    "BGN": {"strCode": "BGN", "eCurrencyCode": 42, "strSymbol": "лв"},
    "HRK": {"strCode": "HRK", "eCurrencyCode": 43, "strSymbol": "kn"},
    "CZK": {"strCode": "CZK", "eCurrencyCode": 44, "strSymbol": "Kč"},
    "DKK": {"strCode": "DKK", "eCurrencyCode": 45, "strSymbol": "kr."},
    "HUF": {"strCode": "HUF", "eCurrencyCode": 46, "strSymbol": "Ft"},
    "RON": {"strCode": "RON", "eCurrencyCode": 47, "strSymbol": "lei"},
    "RMB": {"strCode": "RMB", "eCurrencyCode": 9000, "strSymbol": "刀币"},
    "NXP": {"strCode": "NXP", "eCurrencyCode": 9001, "strSymbol": "원"}
};

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
                {Object.values(g_rgCurrencyData).map(currency => (
                    <Picker.Item key={currency.eCurrencyCode} label={`${currency.strSymbol} - ${currency.strCode}`} value={currency.eCurrencyCode.toString()} />
                ))}
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
