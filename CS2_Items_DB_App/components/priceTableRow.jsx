import {StyleSheet, Text, View} from "react-native";
import {globalStyles} from "../styles/globalStyles";
import React from "react";

const PriceTableRow = (params) => {

    const {wear, lowest_price, volume, median_price} = params;

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{wear}</Text>
            <View style={styles.row}>
                <View style={styles.cell}>
                    <Text style={styles.cellText}>Volume (24h):</Text>
                    <Text style={styles.cellText}>{volume}</Text>
                </View>
                <View style={styles.cell}>
                    <Text style={styles.cellText}>Price:</Text>
                    <Text style={styles.cellText}>{lowest_price}</Text>
                </View>
                <View style={styles.cell}>
                    <Text style={styles.cellText}>Median:</Text>
                    <Text style={styles.cellText}>{median_price}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1c1c2b',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cell: {
        flex: 1,
        alignItems: 'center',
    },
    cellText: {
        color: 'white',
        fontSize: 16,
    },
});

export default PriceTableRow;
