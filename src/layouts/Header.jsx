// import { Link } from "react-router-dom";
// import Button from "../Components/Button";
// export default function Header() {
    
//     return (
//         <>
//             <header className="text-white p-3">
//                 <nav className="h-20 flex">
//                     <div className="w-2/5 pl-28 my-12 flex justify-start items-center">
//                         <Link to={"/"}>
//                             {/* <h1 className="text-2xl">Ghouri / Agency</h1> */}
//                             <img className="w-[140px] rounded-full" src="../src/image/Ghouri.png" alt="" />
//                         </Link>
//                     </div>
//                     <div className="w-3/5 flex p-4">
//                         <ul className="w-full space-x-10 text-2xl flex justify-center items-center">
//                             <Link to={"/"}>Home</Link>
//                             <Link to={"/Services"}>Services</Link>
//                             <Link to={"/Project"}>Project</Link>
//                             <Link to={"/About"}>About</Link>
//                             <Link to={"/Contect"}>Contect us</Link>
//                         </ul>
//                     </div>
//                 </nav>
//             </header> 
//         </>
//     )
// }
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="text-white pt-[0] p-10 bg-transparent">
            <nav className="flex items-center justify-between flex-wrap">
                <div className="w-auto pl-4">
                    <Link to={"/"}>
                        <img className="w-[80px] rounded-full" src="../src/image/Ghouri.png" alt="Ghouri Agency" />
                    </Link>
                </div>

                <div className="block lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white px-3 py-2 border rounded hover:text-gray-400 focus:outline-none"
                    >☰</button>
                </div>

                <div className={`${isOpen ? 'block' : 'hidden'} w-full lg:flex lg:items-center lg:w-auto`}>
                    <ul className="lg:flex lg:space-x-10 text-2xl space-y-4 lg:space-y-0 p-4 lg:p-0">
                        <li>
                            <Link to={"/"} className="block active: text-white hover:text-gray-400">Home</Link>
                        </li>
                        <li>
                            <Link to={"/Services"} className="block text-white hover:text-gray-400">Services</Link>
                        </li>
                        <li>
                            <Link to={"/Project"} className="block text-white hover:text-gray-400">Project</Link>
                        </li>
                        <li>
                            <Link to={"/About"} className="block text-white hover:text-gray-400">About</Link>
                        </li>
                        <li>
                            <Link to={"/Contect"} className="block text-white hover:text-gray-400">Contect Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
