import bgImage from "../../assets/images/bg-img.png"

const HeroSection = () => {
    return (
        <div className="h-[600px] bg-no-repeat bg-cover rounded-4xl" style={{backgroundImage: `url(${bgImage})`}}>
           <div className="text-white pl-56 pr-56 pt-36 pb-36">
                <h1 className="text-6xl text-center mt-auto mb-auto font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
                <p className="text-center pt-6 pl-20 pr-20">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div className="space-x-6 text-center pt-10">
                    <button className="rounded-4xl pl-7 pr-7 pt-3 pb-3 bg-[#0be58a] hover:border-2  hover:bg-transparent">Explore Now</button>
                    <button className="rounded-4xl pl-7 pr-7 pt-3 pb-3 bg-[#0be58a] hover:border-2  hover:bg-transparent">Our Feedback</button>
                </div>
           </div>
        </div>
    );
};

export default HeroSection;
