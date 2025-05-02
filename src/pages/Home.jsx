// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedin,faGithub,faWhatsapp } from '@fortawesome/free-brands-svg-icons'
// import { Link } from "react-router-dom";

// export default function Home() {
//     return (
//         <>
//             <main>
//                 <section className="flex text-white">
//                     <div className="w-3/5 p-7 m-10">
//                         <h1 className="text-lg px-3">Welcome to <span className='text-2xl text-yellow-500 font-bold'>Ghouri Agency</span> – Crafting Digital Excellence</h1>
//                         {/* <span className='text-yellow-500 font-bold'>Muhammad Rizwan</span> */}
//                         <p className="text-lg p-3 leading-7">
//                         At <span className='text-yellow-500 font-bold'>Ghouri Agency</span>, we don't just build websites – we create digital experiences. Our expertise in <span className='text-md text-yellow-500 font-bold'>responsive web design</span>  and  <span className='text-md text-yellow-500 font-bold'>single-page applications</span> ensures that your online presence stands out in today's crowded digital space. Whether you need a sleek portfolio or a robust e-commerce platform, our tailor-made solutions are designed to drive engagement and growth.
//                         </p>
//                         <Link className='p-3 text-3xl text-yellow-500' target='_blank' to={"https://www.linkedin.com/in/rizwan-ghouri/"}><FontAwesomeIcon icon={faLinkedin} /></Link>
//                         <Link className='p-3 text-3xl text-yellow-500' target='_blank' to={"https://github.com/Rizwan-Ghouri"}><FontAwesomeIcon icon={faGithub} /></Link>
//                         <Link className='p-3 text-3xl text-yellow-500' target='_blank' to={"https://wa.me/9203211628950"}><FontAwesomeIcon icon={faWhatsapp} /></Link>
//                     </div>
//                     <div className="w-3/5 flex justify-center items-center">
//                         <img className="w-[50%] h-[70%] rounded-full" src="../src/image/Ghouri.png" alt="" />
//                     </div>
//                 </section>
             
//             </main>
//         </>
//     )
// }
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <main>
                <section className="flex flex-col lg:flex-row text-white bg-transparent p-1">
                    {/* Image Section */}
                    <div className="lg:w-3/5 w-full flex justify-center items-center">
                        <img className="w-[50%] h-[70%] rounded-full" src="../src/image/Ghouri.png" alt="Ghouri Agency" />
                    </div>
                    {/* Text Section */}
                    <div className="lg:w-3/5 w-full p-7 my-10">
                        <h1 className="text-lg px-3">
                            Welcome to <span className='text-2xl text-yellow-500 font-bold'>Ghouri Agency</span> – Crafting Digital Excellence
                        </h1>
                        <p className="text-lg p-3 leading-7">
                            At <span className='text-yellow-500 font-bold'>Ghouri Agency</span>, we don't just build websites – we create digital experiences. Our expertise in <span className='text-md text-yellow-500 font-bold'>responsive web design</span> and <span className='text-md text-yellow-500 font-bold'>single-page applications</span> ensures that your online presence stands out in today's crowded digital space. Whether you need a sleek portfolio or a robust e-commerce platform, our tailor-made solutions are designed to drive engagement and growth.
                        </p>
                        {/* Social Links */}
                        <div className="flex space-x-4 p-4">
                            <Link className='text-3xl text-yellow-500' target='_blank' to={"https://www.linkedin.com/in/rizwan-ghouri/"}>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </Link>
                            <Link className='text-3xl text-yellow-500' target='_blank' to={"https://github.com/Rizwan-Ghouri"}>
                                <FontAwesomeIcon icon={faGithub} />
                            </Link>
                            <Link className='text-3xl text-yellow-500' target='_blank' to={"https://wa.me/9203211628950"}>
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
