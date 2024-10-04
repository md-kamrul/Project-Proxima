import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import about_animation from "../../public/about-animation.json";
import Lottie from "lottie-react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaHourglassStart } from "react-icons/fa";
import Team from "../component/Team";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {

    useGSAP(() => {
        gsap.from(".hi", {
            opacity: 0,
            delay: 1,
            duration: 1,
        })
        gsap.to(".hi", {
            opacity: 1,
            delay: 1,
            duration: 1,
        })
        gsap.to("#team_name", {
            transform: "translateX(-200%)",
            scrollTrigger: {
                trigger: "#team_name",
                scroller: "body",
                start: "top 0%",
                end: "top -200%",
                scrub: 2,
                pin: true
            }
        })
    });

    return (
        <div className="w-full h-full overflow-hidden">
            <div className="w-full mx-auto h-full  bg-cover text-center">
                <div className="w-[80%] mx-auto flex flex-col md:flex-row gap-4 pt-32 justify-center items-center">
                    <h1 className="hi font-bold text-4xl md:text-5xl lg:text-7xl uppercase">Hi everyone</h1>
                    <Lottie className="w-96 mx-auto" animationData={about_animation}></Lottie>
                </div>
                <div className="pb-20">
                    <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl uppercase pt-32 pl-10"><span className="flex justify-start">This is</span> <br /> NASA Space Apps Challenge 2024</h1>
                </div>
                <div className="pb-20">
                    <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl uppercase pt-36"><span className="flex justify-center mb-10 text-9xl">We are</span> <br /> <div className="mt-9 bg-white"><div id="team_name" className="text-black text-[40vw] font-black">CryptoHattori</div></div></h1>
                </div>
                <div className="flex flex-col justify-center items-center gap-5  mt-11">
                    <FaMapMarkedAlt className="text-9xl text-white" />
                    <h1 className="text-9xl text-white" >Location : Mymensingh</h1>
                </div>
                <div className="flex flex-col justify-center items-center gap-5  mt-32">
                    <FaHourglassStart className="text-9xl text-white" />
                    <h1 className="text-7xl text-white" >Challenge : Chronicles of Exoplanet Exploration</h1>
                </div>
            </div>

            {/* about the team */}
            <div className="pt-96">
                <h1 className="resource-heading-2 text-3xl md:text-6xl lg:text-9xl font-bold flex justify-center items-center">Our Team</h1>
                <div className="flex justify-center items-center">
                </div>
                <div className="pt-32 pl-4 mb-28">
                    <Team></Team>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;