import {globalStyles} from "../styles/globalStyles";
import {View, Text, Image, StyleSheet} from "react-native";
import {useEffect, useState} from "react";
import {getSkinsFromApi} from "../api/SkinsApiManager";
import ItemRarityBar from "../components/ItemRarityBar";

const ItemDetailsPage = ({ route, navigation })  => {
    const {itemName, itemImage, itemRarity} = route.params;
    const [itemDetails, setItemDetails] = useState([]);

    useEffect(() => {
        getSkinsFromApi().then(data=> {
            const details = data.find(item=>item.name === itemName)
            console.log(details);
            setItemDetails(details);
        })
    }, []);

    return (
        <View style={[globalStyles.container, {paddingLeft: 0}, {paddingRight: 0}]}>
            <Image source={{ uri: itemImage }} style={styles.itemImage} />
            <View style={styles.detailsContainer}>
                <Text style={styles.itemName}>{itemName}</Text>
                <ItemRarityBar quality = {itemRarity}/>
                <Text style={globalStyles.secondaryText}>Description</Text>
                <Text style={styles.itemDescription}>{itemDetails.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        backgroundColor: '#15141F',
        height: "100%",
        width: "100%",
        borderRadius: 10,
        paddingLeft: 16,
        paddingRight: 16,
    },
    itemName: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 8,
        marginBottom: 8,
        textAlign: "center"
    },
    itemImage: {
        marginTop: 16,
        width: '100%',
        height: '30%',
    },
    itemDescription: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: "light",
        marginTop: 8,
    }
});
export default ItemDetailsPage;
