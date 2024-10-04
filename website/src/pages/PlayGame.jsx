import { Helmet } from "react-helmet";

const PlayGame = () => {
    return (
        <div>

            {/* changing helmet */}
            <Helmet>
                <title>Games - Proxima</title>
                <meta name="description" content="Nested component" />
            </Helmet>

            <h1 className="text-white font-bold text-7xl mt-20 ml-10 flex items-center">
                Learn with Game
                <span className="bg-[#FF0000] px-2 py-1 rounded-xl text-base ml-5">New Arrivals</span>
            </h1>

            <div>
                <div id="explore-img" className="w-full h-auto relative">
                    <img className="w-[80%] h-[600px] mx-auto mt-14 border-2 border-white" src="./gameUI.png" alt="explore in details" />
                    <a href="https://imtiazahmeddipto.itch.io/exo-descover?secret=kA0tbMAYvx04K6A5yP9PjmToe4" target="_blank">
                        <button className="absolute top-[45%] left-[45%] bg-[#FF0000] px-5 py-3 rounded-lg">Wanna Play?</button>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default PlayGame;