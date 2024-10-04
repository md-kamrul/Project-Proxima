import { Helmet } from "react-helmet";
import ExploreIfram from "../component/ExploreIfram";
import ExploreCards from "../component/ExploreCards";

const Explore = () => {

    return (
        <div className="pl-20 h-full">

            {/* changing helmet */}
            <Helmet>
                <title>Explore the Exoplanets - Proxima</title>
                <meta name="description" content="Nested component" />
            </Helmet>

            {/* explore ifram using https://eyes.nasa.gov/apps/exo/#/ */}
            <h1 className="text-white font-bold text-7xl mt-20">Explore Solar</h1>
            <ExploreIfram></ExploreIfram>

            {/* exoplanet card */}
            <h1 className="text-white font-bold text-7xl mt-20">Explore Exoplanets</h1>
            <ExploreCards className="mt-20"></ExploreCards>

        </div>
    );
};

export default Explore;