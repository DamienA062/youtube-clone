import {useState, useEffect} from "react";
import {useParams} from "react-router";
import Box from "@mui/material/Box";
import {useFetch} from "../../utils/Hooks/Hooks.jsx";

import {ChannelCard, Videos} from "../../components/index.jsx";

const ChannelDetail = () => {
    const {id} = useParams();
    const {data: channelData, error: channelError, isLoading: channelIsLoading} = useFetch(`channels?part=snippet&id=${id}`);
    const {data: videosData, error: videosError, isLoading: videosIsLoading} = useFetch(`search?channelId=${id}&part=snippet`);
    const [channelDetail, setChannelDetail] = useState([]);
    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        setChannelDetail(channelData[0]);
        setVideos(videosData);
    }, [id, channelData, videosData]);
    
    return (
        <Box minHeight="95vh">
            <Box style={{
                background: 'linear-gradient(90deg, rgba(0, 30, 60, 1) 0%, rgba(75,75,186,1) 41%, rgba(15,100,117,1) 100%)',
                zIndex: 10,
                height: '300px'
            }}>
                <ChannelCard channelDetail={channelDetail}/>
            </Box>
            <Box display="flex" p="2">
                <Box sx={{mr: {sm: '140px'}}}/>
                <Videos videos={videos}/>
            </Box>
        </Box>
    )
}

export default ChannelDetail;