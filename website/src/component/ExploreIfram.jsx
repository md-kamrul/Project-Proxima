const ExploreIfram = () => {

    function openIfram() {
        let open = document.getElementById("explore-ifram");
        let close = document.getElementById("explore-img");
        open.classList.remove("hidden");
        close.classList.add("hidden");
        console.log(open, close);

    }

    return (
        <div>
            <div id="explore-img" className="w-full h-auto relative">
                <img className="blur-sm w-[95%] h-[600px] mx-auto mt-14 border-2 border-white" src="./explore-img.png" alt="explore in details" />
                <button onClick={openIfram} className="absolute top-[45%] left-[45%] bg-[#FF0000] px-5 py-3 rounded-lg">Explore</button>
            </div>

            <div id="explore-ifram" className="w-full h-auto relative hidden">
                <iframe src="https://eyes.nasa.gov/apps/exo/#/" className="w-[95%] h-[600px] mx-auto mt-14 border-2 border-white"></iframe>
            </div>
        </div>
    );
};

export default ExploreIfram;