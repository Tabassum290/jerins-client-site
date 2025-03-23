import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar/>
            <main className="max-w-7xl mx-auto">
            <Banner/>
            </main>
            <Footer/>
        </div>
    );
};

export default Home;