import { IoGameController } from "react-icons/io5";
import { Link } from "react-router-dom";

const GameSection = () => {
    return (
        <div className="w-full h-auto bg-[#000000cd] mb-20 rounded-lg py-10">
            <div className="hero h-auto md:h-[400px] w-[80%] mx-auto">
                <div className="hero-content flex-col lg:flex-row w-[80px] h-[80px]">
                    <video autoPlay loop muted src="./game_video.mp4" type="video/mp4" className="md:max-w-lg rounded-lg z-10"></video>
                    <div>
                        <span className="bg-[#FF0000] px-2 py-1 rounded-xl">New Arrivals</span>
                        <h1 className="text-3xl lg:text-5xl font-bold mt-4">Learn By Playing Games!</h1>
                        <p className="py-3 lg:py-6">
                            You can learn about Exoplanets by playing some interactive games. This games are informative, intertaining and engaging
                        </p>
                        <Link to='/play-game'>
                            <button className="btn border-2 border-[#FF0000] hover:bg-[#FF0000] text-white">
                                <IoGameController className="text-3xl" />
                                Let's Play
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameSection;