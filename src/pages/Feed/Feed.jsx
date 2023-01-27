import {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {Sidebar, Videos} from "../../components/index.jsx";
import {useFetch} from "../../utils/Hooks/Hooks.jsx";

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState('New');
    const {data, isLoading, error} = useFetch(`search?part=snippet&q=${selectedCategory}`);

    if(error) return <span>Oups, it seems that there is a problem.</span>

    return (
        <Stack sx={{flexDirection: {sx: "column", md: "row"}}}>
            <Box sx={{height: {sx: 'auto', md: '90vh'}, borderRight: '1px solid rgb(144, 202, 249)', px: {sx: 0, md: 2}}}>
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                <Typography className="copyright" variant="body2" sx={{mt: 1.5, color: '#fff'}}>
                    Copyright 2023 Aecx
                </Typography>
            </Box>
            <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
                <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: 'white'}}>
                    {selectedCategory} <span style={{color: 'rgb(0, 89, 178)'}}>videos</span>
                </Typography>
                <Videos videos={data} isLoading={isLoading}/>
            </Box>
        </Stack>
    );
}

export default Feed;