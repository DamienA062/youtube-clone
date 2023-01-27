import axios from "axios";
import {useEffect, useState} from "react";

export const useFetch = (url) => {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

    const options = {
        method: 'GET',
        params: {
            maxResults: '50',
        },
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            if(!url) return;

            try {
                const response = await axios.get(`${BASE_URL}/${url}`, options);
                const data = response.data.items;
                setData(data);
            }catch (e) {
                console.error(e);
                setError(e);
            }finally {
                setIsLoading(false);
            }
        }

        setIsLoading(true);
        fetchData();
    }, [url])

    return {data, error, isLoading};
}