import ChatbotSection from "../component/ChatbotSection";
import GameSection from "../component/GameSection";
import HeroSection from "../component/HeroSection";
import ResourceSection from "../component/ResourceSection";

const Home = () => {
    return (
        <div className="w-full">

            {/* hero section */}
            <div className="mb-20">
                <HeroSection></HeroSection>
            </div>

            {/* game introduction section */}
            <GameSection></GameSection>

            {/* chatbot section */}
            <ChatbotSection></ChatbotSection>

            {/* resources section */}
            <ResourceSection></ResourceSection>

        </div>
    );
};

export default Home;