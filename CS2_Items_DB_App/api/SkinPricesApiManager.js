const currency = 6 // PLN
const baseUrl = "https://steamcommunity.com/market/priceoverview/?currency="+currency+"&appid=730&market_hash_name=";

export const getPriceForItem = async (itemName) => {
    try{
        const response = await fetch(baseUrl+itemName);
        return await response.json();
    } catch (error){
        console.log(error);
    }
}
