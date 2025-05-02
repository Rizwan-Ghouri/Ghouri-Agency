import { BrowserRouter,Link, Route, Routes } from "react-router-dom";
import Home from "../../../pages/Home";
import Contect from "../../../pages/Contect";
import Services from "../../../pages/Services";
import About from "../../../pages/About";
import Project from "../../../pages/Project";
import Header from "../../../layouts/Header";

export default function Approuter() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Project" element={<Project />} />
                    <Route path="/Services" element={<Services />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contect" element={<Contect />} />
                    {/* <Route path="*" element={<Contect />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}