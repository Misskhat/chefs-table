import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="lexend container m-auto">
        <Navbar></Navbar>
        <div>
          <HeroSection></HeroSection>
        </div>
      </div>
    </>
  );
}

export default App;
