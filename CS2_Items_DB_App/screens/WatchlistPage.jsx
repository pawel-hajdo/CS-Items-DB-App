import {ScrollView, StyleSheet, Text, View} from "react-native";
import {globalStyles} from "../styles/globalStyles";
import {useEffect, useState} from "react";
import {getFromAsyncStorage} from "../App";
import ItemTile from "../components/itemTile";
import {useIsFocused} from "@react-navigation/native";
const WatchlistPage = ({ navigation })  => {

    const [watchlistItems, setWatchlistItems] = useState([]);

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            getFromAsyncStorage('watchlist').then(setWatchlistItems);
        }
    }, [isFocused]);
    return (
        <View style={globalStyles.container}>
            <Text style={[globalStyles.headlineText, {paddingTop: 8}]}>Watchlist</Text>
            <ScrollView>
                <View style={styles.watchlistContainer}>
                    {watchlistItems.map((item)=>(
                        <ItemTile key={item.name} itemName={item.name} itemImage={item.image} itemRarity={item.rarity} navigation={navigation}/>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    watchlistContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
    }
})

export default WatchlistPage;
