const HeroSection = () => {
    return (
        <div>
            <video autoPlay loop muted src="./hero_bg.mp4" type="video/mp4" className="w-full h-[800px] z-10"></video>
            <div className="w-full absolute flex flex-col gap-5 top-[23%] md:top-[40%] justify-center items-center">
                <h1 className="text-2xl md:text-5xl font-extrabold ">Exoplanets: A Universe Awaits.</h1>
                <h3 className="text-lg md:text-2xl font-bold">Play | Learn | Repeat</h3>
            </div>
        </div>
    );
};

export default HeroSection;