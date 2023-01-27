import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
        q: 'music',
        part: 'snippet,id',
        regionCode: 'US',
        maxResults: '50',
        order: 'date'
    },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url = null) => {
    const {data} = await axios.request(options);

    return data;
}