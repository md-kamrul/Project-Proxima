import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Resource from "../pages/Resource";
import AskAI from "../pages/AskAI";
import PlayGame from "../pages/PlayGame";
import Explore from "../pages/Explore";
import AboutUs from "../pages/AboutUs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about-us",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/resources",
                element: <Resource></Resource>
            },
            {
                path: "/play-game",
                element: <PlayGame></PlayGame>
            },
            {
                path: "/ask-ai",
                element: <AskAI></AskAI>
            },
            {
                path: "/explore",
                element: <Explore></Explore>
            },
        ],
    },
]);