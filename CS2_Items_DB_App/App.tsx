import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomMenuNavigation from "./navigation/BottomMenuNavigation.jsx";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    getAgentsFromApi,
    getCollectionsFromApi,
    getCratesFromApi, getGraffitiFromApi, getMusicKitsFromApi, getPatchesFromApi,
    getSkinsFromApi,
    getStickersFromApi
} from "./api/SkinsApiManager.js";

function App(): React.JSX.Element {

    const [crates, setCrates] = useState([]);
    const [skins, setSkins] = useState([]);
    const [collections, setCollections] = useState([]);
    const [stickers, setStickers] = useState([]);
    const [agents, setAgents] = useState([]);
    const [patches, setPatches] = useState([]);
    const [graffiti, setGraffiti] = useState([]);
    const [musicKits, setMusicKits] = useState([]);

    useEffect(()=>{
        getCratesFromApi().then(setCrates);
        getSkinsFromApi().then(setSkins);
        getCollectionsFromApi().then(setCollections);
        getStickersFromApi().then(setStickers);
        getAgentsFromApi().then(setAgents);
        getPatchesFromApi().then(setPatches);
        getGraffitiFromApi().then(setGraffiti);
        getMusicKitsFromApi().then(setMusicKits);

        saveToAsyncStorage();
    },[])

    const saveToAsyncStorage = async () => {
        await AsyncStorage.setItem("crates", JSON.stringify(crates));
        await AsyncStorage.setItem("skins", JSON.stringify(skins));
        await AsyncStorage.setItem("collections", JSON.stringify(collections));
        await AsyncStorage.setItem("stickers", JSON.stringify(stickers));
        await AsyncStorage.setItem("agents", JSON.stringify(agents));
        await AsyncStorage.setItem("patches", JSON.stringify(patches));
        await AsyncStorage.setItem("graffiti", JSON.stringify(graffiti));
        await AsyncStorage.setItem("musicKits", JSON.stringify(musicKits));
    }
    return (
      <NavigationContainer>
          <BottomMenuNavigation/>
      </NavigationContainer>
    );
}
export const getFromAsyncStorage = async (key: string) => {
    try{
        const itemsString = await AsyncStorage.getItem(key);
        //console.log(cratesString);
        return itemsString ? JSON.parse(itemsString) : [];
    } catch (error) {
        console.error(error);
    }
}

export default App;
