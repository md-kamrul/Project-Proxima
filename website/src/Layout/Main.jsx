import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import Navbar from "../component/Navbar";
import { Helmet } from "react-helmet";

const Main = () => {
    return (
        <div>

            {/* changing helmet */}
            <Helmet>
                <title>Proxima - Learn with Game</title>
                <meta name="description" content="Nested component" />
            </Helmet>

            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;