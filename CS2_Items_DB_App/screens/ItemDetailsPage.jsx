import {globalStyles} from "../styles/globalStyles";
import {View, Text, Image, StyleSheet} from "react-native";
import {useEffect, useState} from "react";
import {getSkinsFromApi} from "../api/SkinsApiManager";
import ItemRarityBar from "../components/ItemRarityBar";
import ItemTile from "../components/itemTile";
import BoxTile from "../components/boxTile";

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
            <Image source={{ uri: itemImage }} style={styles.itemImage} resizeMode="contain"/>
            <View style={styles.detailsContainer}>
                <Text style={styles.itemName}>{itemName}</Text>
                <ItemRarityBar quality = {itemRarity}/>

                <View style={styles.collectionsContainer}>
                    {itemDetails.collections && itemDetails.collections.length > 0 && (
                        <>
                            {itemDetails.collections.map((collection) => (
                                <BoxTile key={collection.id} boxName={collection.name} boxImage={collection.image} navigation={navigation}/>
                            ))}
                        </>
                    )}
                    {itemDetails.crates && itemDetails.crates.length > 0 && (
                        <>
                            {itemDetails.crates.map((crate) => (
                                <BoxTile key={crate.id} boxName={crate.name} boxImage={crate.image} navigation={navigation}/>
                            ))}
                        </>
                    )}
                </View>

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
        borderRadius: 30,
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
        maxWidth: '100%',
        height: '25%',
    },
    itemDescription: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: "light",
        marginTop: 8,
    },
    collectionsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
    }
});
export default ItemDetailsPage;
