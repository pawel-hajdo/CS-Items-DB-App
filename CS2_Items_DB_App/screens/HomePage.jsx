import {ScrollView, StyleSheet, Text, View} from "react-native";
import {globalStyles} from "../styles/globalStyles";
import ItemTile from "../components/ItemTile";
const HomePage = () => {

    return (
        <View style={globalStyles.container}>
            <ScrollView>
                <Text style={[globalStyles.headlineText, {fontSize: 35}]}>CS2 DB</Text>
                <Text style={globalStyles.headlineText}>Latest</Text>
                <View style={styles.rowContainer}>
                    <ItemTile itemName="Kilowatt Case" itemImage={"https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_33_png.png"}></ItemTile>
                    <ItemTile itemName="Ambush Sticker Capsule" itemImage={"https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_sticker_pack_community_2024_capsule_png.png"}></ItemTile>
                    <ItemTile itemName="NIGHTMODE Music Kit Box" itemImage={"https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_musickit_nightmode_capsule_png.png"}></ItemTile>
                </View>
                <View style={styles.watchlistText}>
                    <Text style={globalStyles.headlineText}>From your watchlist</Text>
                    <Text style={globalStyles.secondaryText}>Go to watchlist</Text>
                </View>


                <Text style={globalStyles.headlineText}>Search for</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    rowContainer: {
        paddingTop: 8,
        paddingBottom: 8,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    watchlistText: {
        flexDirection: "row",
        justifyContent: "space-between",
    }
});
export default HomePage;
