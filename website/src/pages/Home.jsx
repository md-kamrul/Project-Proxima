import ChatbotSection from "../component/ChatbotSection";
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

            {/* chatbot section */}
            <ChatbotSection></ChatbotSection>

        </div>
    );
};

export default Home;