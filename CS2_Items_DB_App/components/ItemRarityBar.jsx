import {StyleSheet, View, Text} from "react-native";
import React from "react";

const ItemRarityBar = (params) => {
    const {quality} = params;

    return (
      <View style={[styles.bar, {backgroundColor: quality.color}]}>
        <Text style={styles.text}>{quality.name}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    bar: {
        borderRadius: 10,
        width: '100%',
        alignItems: "center",
    },
    text: {
        color: '#FFFFFF',
        fontSize: 12
    }
})
export default ItemRarityBar;
