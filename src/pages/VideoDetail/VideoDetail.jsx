import {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import ReactPlayer from "react-player";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {CheckCircle} from "@mui/icons-material";

import {Videos} from "../../components/index.jsx";
import {useFetch} from "../../utils/Hooks/Hooks.jsx";


const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState(null);
    const [relatedVideos, setRelatedVideos] = useState(null);
    const {id} = useParams();
    const {data: videosData, error: videosError, isLoading: videosIsLoading} = useFetch(`videos?part=snippet,statistics&id=${id}`);
    const {data: relatedVideosData, error: relatedVideosError, isLoading: relatedVideosIsLoading} = useFetch(`search?part=snippet&relatedToVideoId=${id}&type=video`);

    if(videosError || relatedVideosError) return <span>Oups, it seems that there is a problem.</span>

    useEffect(() => {
        setVideoDetail(videosData[0]);
        setRelatedVideos(relatedVideosData);
    });

    if(!videoDetail?.snippet) return <span>LOADING</span>

    const {snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount}} = videoDetail;

    return (
        <Box minHeight="95vh">
            <Stack direction={{xs: 'column', md: 'row'}}>
                <Box flex={1}>
                    <Box sx={{width: '100%', position: 'sticky', top: '86px'}}>
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id}`}
                            className="react-player"
                            controls
                        />
                        <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                            {title}
                        </Typography>
                        <Stack direction="row" justifyContent="space-between" sx={{color: '#fff'}} py={1} px={2}>
                            <Link to={`/channel/${channelId}`}>
                                <Typography variant='subtitle1' color="#fff">
                                    {channelTitle}
                                    <CheckCircle sx={{fontSize: '12px', color:'5px'}}/>
                                </Typography>
                            </Link>
                            <Stack direction="row" gap="20px" alignItems="center">
                                <Typography variant="body1" sx={{opacity: 0.7}}>
                                    {parseInt(viewCount).toLocaleString()} views
                                </Typography>
                                <Typography variant="body1" sx={{opacity: 0.7}}>
                                    {parseInt(likeCount).toLocaleString()} likes
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box px={2} py={{md: 1, xs: 5}} justifyContent="center" alignItems="center">
                    <Videos videos={relatedVideos} direction="column" isLoading={videosIsLoading}/>
                </Box>
            </Stack>
        </Box>
    );
}

export default VideoDetail;