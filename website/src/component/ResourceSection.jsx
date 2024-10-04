import blog_animation from "../../public/blog_animation.json";
import Lottie from "lottie-react";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const ResourceSection = () => {
    return (
        <div className="w-full h-auto bg-[#000000cd] rounded-lg py-10">
            <div className="hero h-auto md:h-[400px] w-[80%] mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <h1 className="text-3xl lg:text-5xl font-bold mt-4">Discover with Resources</h1>
                        <p className="py-3 lg:py-6">
                            Dive into the fascinating world of exoplanets with our extensive resource - Blogs, Videos, and Research Papers.
                        </p>
                        <Link to="/resources">
                            <button className="btn border-2 border-[#FF0000] hover:bg-[#FF0000] text-white">
                                <IoDocumentAttachSharp className="text-3xl" />
                                Read Docs
                            </button>
                        </Link>
                    </div>
                    <Lottie animationData={blog_animation}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default ResourceSection;