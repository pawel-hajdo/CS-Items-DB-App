import {ScrollView, StyleSheet, Text, View} from "react-native";
import {globalStyles} from "../styles/globalStyles";
import BoxTile from "../components/boxTile";
import CategoryTile from "../components/CategoryTile";
const HomePage = ({ navigation }) => {

    return (
        <View style={globalStyles.container}>
            <Text style={[globalStyles.headlineText, {fontSize: 35}]}>CS2 DB</Text>
            <ScrollView>
                <Text style={globalStyles.headlineText}>Latest</Text>
                <View style={styles.rowContainer}>
                    <BoxTile boxName="Kilowatt Case" boxImage={"https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_33_png.png"} navigation={navigation}></BoxTile>
                    <BoxTile boxName="Ambush Sticker Capsule" boxImage={"https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_sticker_pack_community_2024_capsule_png.png"} navigation={navigation}></BoxTile>
                    <BoxTile boxName="NIGHTMODE Music Kit Box" boxImage={"https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_musickit_nightmode_capsule_png.png"} navigation={navigation}></BoxTile>
                </View>
                <View style={styles.watchlistText}>
                    <Text style={globalStyles.headlineText}>From your watchlist</Text>
                    <Text style={globalStyles.secondaryText}>Go to watchlist</Text>
                </View>
                <View style={styles.watchListContainer}>
                    <Text style={{fontSize: 12, color: '#FFFFFF'}}>
                        There is nothing here :(((
                        Go add something to your watchlist
                    </Text>
                </View>
                <Text style={globalStyles.headlineText}>Search for</Text>
                <View style={styles.rowContainer}>
                    <CategoryTile itemName= "Cases" itemImage={"https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_community_30_png.png"} navigation={navigation}></CategoryTile>
                    <CategoryTile itemName= "Collections" itemImage={"https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/set_icons/set_op10_ancient_png.png"} navigation={navigation}></CategoryTile>
                    <CategoryTile itemName= "Agents" itemImage={"https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/characters/customplayer_ctm_fbi_variantb_png.png"} navigation={navigation}></CategoryTile>
                    <CategoryTile itemName= "Sticker Capsules" itemImage={"https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/weapon_cases/crate_sticker_pack_cph2024_contenders_png.png"} navigation={navigation}></CategoryTile>
                    <CategoryTile itemName= "Graffiti" itemImage={"https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/stickers/valve_sprays/howling_dawn_png.png"} navigation={navigation}></CategoryTile>
                    <CategoryTile itemName= "Music kits" itemImage={"https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/main/static/panorama/images/econ/music_kits/timhuling_01_png.png"} navigation={navigation}></CategoryTile>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    rowContainer: {
       // paddingTop: 8,
        paddingBottom: 8,
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
    },
    watchlistText: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    watchListContainer: {
        backgroundColor: '#15141F',
        width: "100%",
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
        marginTop: 4
    }
});
export default HomePage;
