import AsyncStorage from "@react-native-async-storage/async-storage";

const CURRENCY_KEY = "selectedCurrency";
const baseUrl = "https://steamcommunity.com/market/priceoverview/?appid=730&market_hash_name=";

export const getPriceForItem = async (itemName) => {
    try {
        const currency = await AsyncStorage.getItem(CURRENCY_KEY) || "6"; // Default to PLN if not set
        const response = await fetch(`${baseUrl}${itemName}&currency=${currency}`);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};
