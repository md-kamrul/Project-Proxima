const Gallery = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <img className="w-[500px]" src="./1.jpg" alt="" />
                </div>
                <div>
                    <img className="w-[500px]" src="./2.webp" alt="" />
                </div>
                <div>
                    <img className="w-[500px]" src="./3.webp" alt="" />
                </div>
                <div>
                    <img className="w-[500px]" src="./4.jpg" alt="" />
                </div>
                <div>
                    <img className="w-[500px]" src="./5.jpg" alt="" />
                </div>
                <div>
                    <img className="w-[500px]" src="./6.jpg" alt="" />
                </div>
                <div>
                    <img className="w-[500px]" src="./7.jpg" alt="" />
                </div>
                <div>
                    <img className="w-[500px]" src="./8.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;