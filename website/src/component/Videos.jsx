const Videos = () => {
    return (
        <div>
            <div className="flex justify-center items-center mt-10">
                <iframe width="1120" height="630" src="https://science.nasa.gov/wp-content/uploads/2023/09/ExoplanetTypes_Full_Mix.mp4"  allowfullscreen></iframe>
            </div>
            <div className="md:w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-3 grid-flow-row gap-4 mt-9">
                <div>
                <iframe width="400" height="280" src="https://www.youtube.com/embed/k1UcseLVNVc?si=SEFX6Psz68G0cZ-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div>
                <iframe width="400" height="280" src="https://www.youtube.com/embed/4IXYp9Fse44?si=IkR-o6mjn6h7f9NQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div>
                <iframe width="400" height="280" src="https://www.youtube.com/embed/0ZOhJe_7GrE?si=76xbbWD1hYXTMWX-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Videos;