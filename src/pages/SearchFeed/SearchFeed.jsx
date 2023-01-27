import {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Videos} from "../../components/index.jsx";
import {useFetch} from "../../utils/Hooks/Hooks.jsx";
import {useParams} from "react-router";

const SearchFeed = () => {

    const {searchTerm} = useParams();
    const {data, isLoading, error} = useFetch(`search?part=snippet&q=${searchTerm}`);

    if(error) return <span>Oups, it seems that there is a problem.</span>

    return (
        <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
            <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: 'white'}}>
                Search results for :  <span style={{color: 'rgb(0, 89, 178)'}}>{searchTerm}</span> videos
            </Typography>
            <Videos videos={data} isLoading={isLoading}/>
        </Box>
    );
}

export default SearchFeed;