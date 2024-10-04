import chatbot_animation from "../../public/chatbot_animation.json";
import Lottie from "lottie-react";

const ChatbotSection = () => {
    return (
        <div>
            <div className="w-[80%] mx-auto flex flex-col gap-5 mb-20">
                <div>
                    <h1 className="text-2xl md:text-5xl font-extrabold">Tired of searching through endless articles?</h1>
                </div>
                <div>
                    <h1 className="text-2xl md:text-5xl font-extrabold text-right">Meet your personalized exoplanet guide</h1>
                </div>
                <div>
                    <Lottie className="w-96 mx-auto" animationData={chatbot_animation}></Lottie>
                </div>
                <div>
                    <h1 className="text-2xl md:text-5xl font-extrabold text-center">
                        <span className="text-[#FF0000]">Proxima</span>, an Personalized AI Chatbot
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default ChatbotSection;