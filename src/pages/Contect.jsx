import Button from "../Components/Button";
import TextInput from '../Components/TextInput';




// export default function Contect() {
//     return(
//         <>
//          <section className="flex text-white">
//                     <form action="post" className="w-3/5 m-5 font-arail">
//                         <label className="text-xl px-4" htmlFor="">Name:</label>
//                         <TextInput types="text" place="Enter your Name" />
//                         <label className="text-xl px-4" htmlFor="">Email:</label>
//                         <TextInput types="email" place="Enter your Email"  />
//                         <label className="text-xl px-4" htmlFor="">Message:</label>
//                         <textarea className="w-full rounded-md p-2 m-4 resize-y text-black" placeholder="Enter your Message" rows={3} name="" id=""></textarea>
//                         <span className="w-full flex justify-center items-center"><Button lable='Submlt' /></span>
//                     </form>
//                     <div className="px-10 py-5 b" >
//                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.187619701621!2d67.0899985944135!3d24.925677609381403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f60a0781265%3A0x2befaba123014ab1!2sSMIT%20Gulshan%20Campus!5e0!3m2!1sen!2s!4v1729497485069!5m2!1sen!2s" frameborder="0"  width={600} height={400}></iframe>
//                     </div>
//                 </section>
                  
//         </>
//     )
// }
export default function Contect() {
    return (
        <>
            <section className="w-full  flex flex-col lg:flex-row text-white bg-transparent p-5">
                {/* Form Section */}
                <form action="" className="lg:w-full w-5/5 m-5 font-arial">
                    <label className="text-xl px-4" htmlFor="name">Name:</label>
                    <TextInput types="text" place="Enter your Name" />
                    <label className="text-xl px-4" htmlFor="email">Email:</label>
                    <TextInput types="email" place="Enter your Email" />
                    <label className="text-xl px-4" htmlFor="message">Message:</label>
                    <textarea
                        className="w-full rounded-md p-2 m-3  resize-y text-black"
                        placeholder="Enter your Message"
                        rows={3}
                        name="message"
                        id="message"
                    ></textarea>
                    <span className="w-full flex justify-center items-center">
                        <Button lable="Submit" />
                    </span>
                </form>

                {/* Map Section */}
                <div className="lg:w-full w-full px-10 py-5">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.187619701621!2d67.0899985944135!3d24.925677609381403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f60a0781265%3A0x2befaba123014ab1!2sSMIT%20Gulshan%20Campus!5e0!3m2!1sen!2s!4v1729497485069!5m2!1sen!2s"
                        // frameBorder="0"
                        width="100%"
                        height="400"
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>
                </div>
            </section>
        </>
    );
}
