import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import {Navbar, Error, Footer} from "./components/index.jsx";
import {Feed, VideoDetail, SearchFeed, ChannelDetail} from "./pages/index.jsx";
import Box from '@mui/material/Box';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = () => {
    return (
        <Box sx={{backgroundColor: '#001E3C'}}>
            <Navbar/>
            <Outlet/>
        </Box>
    );
}

const router = createBrowserRouter(
    [
        {
            element: <AppLayout/>,
            children: [
                {
                    path: "/",
                    element: <Feed/>
                },
                {
                    path: "/video/:id",
                    element: <VideoDetail/>
                },
                {
                    path: "/channel/:id",
                    element: <ChannelDetail/>
                },
                {
                    path: "/search/:searchTerm",
                    element: <SearchFeed/>
                },
                {
                    path: "*",
                    element: <Error/>
                }
            ]
        }
    ]
)

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);