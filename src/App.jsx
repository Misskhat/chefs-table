import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import OurReceipesSection from "./components/OurReceipesSection/OurReceipesSection";

function App() {
  return (
    <>
      <div className="lexend container m-auto">
        <Navbar></Navbar>
        <div>
          <HeroSection></HeroSection>
        </div>
        <div>
          <OurReceipesSection></OurReceipesSection>
        </div>
      </div>
    </>
  );
}

export default App;
