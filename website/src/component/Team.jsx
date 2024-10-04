const Team = () => {
    return (
        <div>
            <div className=" w-96 font-black text-2xl flex flex-col justify-center items-center border-2 border-black px-3 py-5 bg-black text-white rounded-lg mx-auto">
                <img className="w-48 rounded-lg pb-4" src="./kamrul.png" alt="Team Lead" />
                <h3>Md. Kamrul Islam</h3>
                <h3>Team Lead</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-5 mt-10">
                <div className=" w-96 font-black text-2xl flex flex-col justify-center items-center border-2 border-black px-3 py-5 bg-black text-white rounded-lg mx-auto">
                    <img className="w-48 rounded-lg pb-4" src="./dhrubo.jpg" alt="Team Lead" />
                    <h3>Dhruba Saha</h3>
                    <h3>UI/UX Designer</h3>
                </div>
                <div className=" w-96 font-black text-2xl flex flex-col justify-center items-center border-2 border-black px-3 py-5 bg-black text-white rounded-lg mx-auto">
                    <img className="w-48 rounded-lg pb-4" src="./rifa.png" alt="Team Lead" />
                    <h3>Ramisa Anjum Rifa</h3>
                    <h3>Product R&D</h3>
                </div>
                <div className=" w-96 font-black text-2xl flex flex-col justify-center items-center border-2 border-black px-3 py-5 bg-black text-white rounded-lg mx-auto">
                    <img className="w-48 rounded-lg pb-4" src="./imtiaz.png" alt="Team Lead" />
                    <h3>Imtiaz Ahmed Dipto</h3>
                    <h3>Game Dev</h3>
                </div>
                <div className=" w-96 font-black text-2xl flex flex-col justify-center items-center border-2 border-black px-3 py-5 bg-black text-white rounded-lg mx-auto">
                    <img className="w-48 rounded-lg pb-4" src="./samir.jpg" alt="Team Lead" />
                    <h3>Sakibul Samir Rafi</h3>
                    <h3>Web Dev</h3>
                </div>
            </div>
        </div>
    );
};

export default Team;