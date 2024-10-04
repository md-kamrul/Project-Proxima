import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet";

const AskAI = () => {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    async function generateAnswerUsingAI() {
        setAnswer("loading...");

        const response = await axios({
            url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyD0crEGReWdCH7x3UJBhv88Z8jl_PiH6h0",
            method: "post",
            data: {
                contents: [{
                    parts: [{ "text": question }]
                }]
            }
        });
        setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);

    }

    return (
        <div>

            {/* changing helmet */}
            <Helmet>
                <title>Ask AI - Proxima</title>
                <meta name="description" content="Nested component" />
            </Helmet>

            <div className="w-[70%] mx-auto h-[500px] bg-[#000000cd] border-2 border-black rounded-lg relative mt-10">
                <input
                    id="question"
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask to Proxima, our AI chatbot"
                    className="input input-bordered bg-black rounded-full absolute bottom-5 left-10 w-[80%]" />
                <div className="flex flex-col gap-5">
                    {/* question */}
                    {
                        question && answer ?
                            <h3 className="border-2 border-[#191e24] rounded-3xl absolute top-5 left-10 w-[50%] px-5 py-2 mb-5 max-h-36 overflow-x-auto">
                                {question}
                            </h3>
                            :
                            <span></span>
                    }
                    {/* answer */}
                    {
                        answer && question ?
                            <h3 className="bg-[#191e24] rounded-3xl absolute bottom-40 right-10 w-[50%] px-5 py-2 max-h-40 overflow-x-auto">
                                {answer}
                            </h3>
                            :
                            <span></span>
                    }
                </div>

                <button className="btn bg-black text-white absolute bottom-5 right-10 rounded-full" onClick={generateAnswerUsingAI}>Generate</button>
            </div>
        </div>
    );
};

export default AskAI;