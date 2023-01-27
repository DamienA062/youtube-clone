import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import {VideoCard, ChannelCard, PlaylistCard} from "../index.jsx";

const Videos = ({videos, isLoading, direction}) => {
    return (
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
            {isLoading
                ? <span>Loading...</span>
                : (
                    Array.isArray(videos) && videos.length > 0 && videos.map((item, index) => (
                        item.id.playlistId ? "" :
                        <Box key={index}>
                            {item.id.videoId && <VideoCard video={item}/>}
                            {item.id.channelId && <ChannelCard channelDetail={item}/>}

                        </Box>
                    ))
                )
            }
        </Stack>
    );
}

export default Videos