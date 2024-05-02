import About from "./About/About";
import Banner from "./Banner/Banner";
import Services from "./Our-Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
                <About></About>
                <Services></Services>
        </div>
    );
};

export default Home;