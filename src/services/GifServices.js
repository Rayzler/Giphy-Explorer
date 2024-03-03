const API_KEY = 'YOUR_GIPHY_API_KEY';

async function getTrending() {
    const url = `https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}`;
    return await (await fetch(url)).json();
}

async function searchGifs({keyword, limit = 15, rating = "g", lang = "en", offset = 0} = {}) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}`;
    return await (await fetch(url)).json();
}

async function searchGifById(id) {
    const url = `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`;
    return await (await fetch(url)).json();
}

export {getTrending, searchGifs, searchGifById};