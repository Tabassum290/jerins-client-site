const Banner = () => {
    return (
        <div 
            className="bg-cover bg-center h-[600px] my-5 p-16 flex items-center justify-center text-center text-white" 
            style={{ backgroundImage: "url('https://i.ibb.co/3yPhj71k/elevated-view-camera-lens-spiral-notebook-cellphone-personal-accessories-background-23-2147856120.jpg')" }}
        >
            <div className="bg-black bg-opacity-60 p-10 rounded-2xl">
                <h1 className="text-6xl font-extrabold mb-4">Welcome To <br /><span className="text-purple-500">SMART TECH</span></h1>
                <p className="text-xl mb-6">Discover the latest gadgets and smart technology to enhance your daily life.</p>
                <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg">Shop Now</button>
            </div>
        </div>
    );
};

export default Banner;