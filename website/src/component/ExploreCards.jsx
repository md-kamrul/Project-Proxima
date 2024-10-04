const ExploreCards = () => {
    return (
        <div className='w-[91%] mx-auto mt-20 flex flex-col gap-20 text-justify'>

            {/* card - 1 */}
            <div className="card card-side bg-black border-2 border-white shadow-xl p-10">
                <figure>
                    <img className="w-64"
                        src="./KEPLER186x.webp"
                        alt="Movie" />
                </figure>
                <div className="card-body pl-10 w-[1%]">
                    <h2 className="card-title text-4xl">Kepler-186f</h2>
                    <p>The first Earth-sized planet found in the habitable zone of another star, it orbits a K-dwarf star. Kepler-186f is a groundbreaking exoplanet, or a planet outside our solar system, that made headlines in 2014. It's the first planet with a radius similar to Earth's to be discovered in the habitable zone of another star.</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-[#FF0000] text-white hover:bg-transparent hover:text-[#FF0000] hover:border hover:border-[#FF0000]">See Details</button>
                    </div>
                </div>
            </div>

            {/* card - 2 */}
            <div className="card card-side bg-black border-2 border-white shadow-xl p-10">
                <figure>
                    <img className="w-64"
                        src="./Osiris.jpg"
                        alt="Movie" />
                </figure>
                <div className="card-body pl-10 w-[1%]">
                    <h2 className="card-title text-4xl">HD 209458 b (Osiris)</h2>
                    <p>HD 209458 b, also known as Osiris, is a gas giant exoplanet orbiting the star HD 209458. It made history in 1999 as the first exoplanet to have its atmosphere directly detected. This groundbreaking discovery opened up a new era in exoplanet research, allowing scientists to study the atmospheres of planets beyond our solar system.</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-[#FF0000] text-white hover:bg-transparent hover:text-[#FF0000] hover:border hover:border-[#FF0000]">See Details</button>
                    </div>
                </div>
            </div>

            {/* card - 3 */}
            <div className="relative flex justify-center items-center">
                <div className="card card-side bg-black border-2 border-white shadow-xl p-10 blur-sm">
                    <figure>
                        <img className="w-64"
                            src="./TRAPPIST-1e.png"
                            alt="Movie" />
                    </figure>
                    <div className="card-body pl-10 w-[1%]">
                        <h2 className="card-title text-4xl">TRAPPIST-1e</h2>
                        <p>TRAPPIST-1e is one of the seven Earth-sized exoplanets orbiting the ultracool dwarf star TRAPPIST-1. It's particularly intriguing because it's located within the star's habitable zone, where conditions are just right for liquid water to exist on the planet's surface.</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-[#FF0000] text-white hover:bg-transparent hover:text-[#FF0000] hover:border hover:border-[#FF0000]">See Details</button>
                        </div>
                    </div>
                </div>
                <div className="absolute  text-3xl font-bold">Coming Soon...</div>
            </div>

            {/* card - 4 */}
            <div className="relative flex justify-center items-center">
                <div className="card card-side bg-black border-2 border-white shadow-xl p-10 blur-sm">
                    <figure>
                        <img className="w-64"
                            src="./TRAPPIST-1e.png"
                            alt="Movie" />
                    </figure>
                    <div className="card-body pl-10 w-[1%]">
                        <h2 className="card-title text-4xl">TRAPPIST-1e</h2>
                        <p>TRAPPIST-1e is one of the seven Earth-sized exoplanets orbiting the ultracool dwarf star TRAPPIST-1. It's particularly intriguing because it's located within the star's habitable zone, where conditions are just right for liquid water to exist on the planet's surface.</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-[#FF0000] text-white hover:bg-transparent hover:text-[#FF0000] hover:border hover:border-[#FF0000]">See Details</button>
                        </div>
                    </div>
                </div>
                <div className="absolute  text-3xl font-bold">Coming Soon...</div>
            </div>
            
        </div>
    );
};

export default ExploreCards;