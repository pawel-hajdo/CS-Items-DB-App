import {ScrollView, StyleSheet, Text, View} from "react-native";
import {globalStyles} from "../styles/globalStyles";
import {useEffect, useState} from "react";
import {getCratesFromApi} from "../api/SkinsApiManager";
import ItemTile from "../components/itemTile";

const BoxItemsPage = ({ route, navigation }) => {
    const {boxName} = route.params;
    const [boxItems, setBoxItems] = useState([]);

    useEffect(() => {
        getCratesFromApi().then(data => {
            const box = data.find(item => item.name === boxName);
            if (box) {
                setBoxItems(box.contains);
                console.log(box.contains);
            } else {
                console.log("Nie znaleziono skrzynki o nazwie:", boxName);
            }
        });
    }, []);


    return (
        <View style={globalStyles.container}>
            <Text style={[globalStyles.headlineText, {paddingTop: 8}]}>{boxName}</Text>
            <ScrollView>
                <View style={styles.boxContainer}>
                    {boxItems.map((item)=>(
                        <ItemTile key={item.id} itemName={item.name} itemImage={item.image} itemRarity={item.rarity} itemId = {item.id} navigation={navigation}/>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    boxContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
    }
})
export default BoxItemsPage;
