import { Helmet } from "react-helmet";
import Videos from "../component/Videos";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowCircleDown } from "react-icons/fa";
import Gallery from "../component/Gallery.jsx";


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Resource = () => {

    useGSAP(() => {
        gsap.from(".resource-heading", {
            opacity: 0,
            delay: 1,
            duration: 1,
        })
        gsap.to(".resource-heading", {
            opacity: 1,
            delay: 1,
            duration: 1,
        })
        gsap.from(".resource-heading-2", {
            scale: 0,
            opacity: -1,
        })
        gsap.to(".resource-heading-2", {
            scale: 1,
            opacity: 1,
            scrollTrigger: {
                trigger: ".resource-heading-2",
                scroller: "body",
                // markers: true,
                start: "top 60%",
                end: "top 40%",
                scrub: 4,
                pin: true
            }
        })
        gsap.from(".ArrowCircleDown", {
            opacity: 0,
            delay: 1,
            duration: 1,
        })
        gsap.to(".ArrowCircleDown", {
            opacity: 1,
            delay: 1,
            duration: 1,
        })
    });

    return (
        <div>

            {/* changing helmet */}
            <Helmet>
                <title>Resource - Proxima</title>
                <meta name="description" content="Nested component" />
            </Helmet>

            {/* body of the page */}
            <div className="w-full h-full pt-48">
                <h1 className="resource-heading text-3xl md:text-6xl lg:text-9xl font-bold flex justify-center items-center">Let's Watch the Videos</h1>
                <div className="flex justify-center items-center">
                    <FaArrowCircleDown className="ArrowCircleDown text-3xl md:text-7xl lg:text-9xl mt-10 animate-bounce text-clip" />
                </div>

                <div className="pt-32 pl-4 mb-28">
                    <Videos></Videos>
                </div>

                <div className="pt-20">
                    <h1 className="resource-heading-2 text-3xl md:text-6xl lg:text-9xl font-bold flex justify-center items-center">Gallery</h1>
                    <div className="flex justify-center items-center">
                        <FaArrowCircleDown className="ArrowCircleDown text-3xl md:text-7xl lg:text-9xl mt-10 animate-bounce text-clip" />
                    </div>

                    <div className="pt-32 pl-4 mb-28">
                        <Gallery></Gallery>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resource;