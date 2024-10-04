import GameSection from "../component/GameSection";
import HeroSection from "../component/HeroSection";

const Home = () => {
    return (
        <div className="w-full">

            {/* hero section */}
            <div className="mb-20">
                <HeroSection></HeroSection>
            </div>

            {/* game introduction section */}
            <GameSection></GameSection>

        </div>
    );
};

export default Home;