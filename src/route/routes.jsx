import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Experience from "../pages/Experience/Experience";
import Education from "../pages/Education/Education";
import Skills from "../pages/Skills/Skills";
import Portfolio from "../pages/Portfolio/Portfolio";
import AboutMe from "../pages/AboutMe/AboutMe";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/experience',
                element: <Experience></Experience>
            },
            {
                path: '/education',
                element: <Education></Education>
            },
            {
                path: '/skills',
                element: <Skills></Skills>
            },
            {
                path: '/portfolio',
                element: <Portfolio></Portfolio>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <AboutMe></AboutMe>
            }
        ]
    }
])

export default router;