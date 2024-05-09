const language = 'en';
const baseUrl = "https://bymykel.github.io/CSGO-API/api/"+language;

export const getSkinsFromApi = async () => {
    try {
        const response = await fetch(baseUrl + '/skins.json')
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export const getCratesFromApi = async () => {
    try {
        const response = await fetch(baseUrl + '/crates.json')
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export const getCollectionsFromApi = async () => {
    try {
        const response = await fetch(baseUrl + '/collections.json')
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export const getStickersFromApi = async () => {
    try {
        const response = await fetch(baseUrl + '/stickers.json')
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export const getAgentsFromApi = async () => {
    try {
        const response = await fetch(baseUrl + '/agents.json')
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export const getPatchesFromApi = async () => {
    try {
        const response = await fetch(baseUrl + '/patches.json')
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export const getGraffitiFromApi = async () => {
    try {
        const response = await fetch(baseUrl + '/graffiti.json')
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export const getMusicKitsFromApi = async () => {
    try {
        const response = await fetch(baseUrl + '/music_kits.json')
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}
