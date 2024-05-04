import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ItemRarityBar from "./ItemRarityBar";
const ItemTile = ({itemName, itemImage, itemRarity, navigation}) => {

    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.itemName}>{itemName}</Text>
            <Image source={{ uri: itemImage }} style={styles.itemImage} />
            <ItemRarityBar quality = {itemRarity}></ItemRarityBar>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#15141F',
        width: 100,
        height: 120,
        borderRadius: 10,
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8
    },
    itemName: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: "bold",
        marginTop: 8,
        textAlign: "center"
    },
    itemImage: {
        width: 90,
        height: 70,
    }
});
export default ItemTile;

