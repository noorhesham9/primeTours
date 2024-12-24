import Features from "./components/Features/Features";
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";
import Pricing from "./components/pricing/pricing";
import Stats from "./components/stats/Stats";
import Hotels from "./components/hotels/Hotels";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./components/footer/Footer";
function App() {
  const [top, settop] = useState(true);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // For smooth scrolling
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY > 360) {
        settop(false);
      } else {
        settop(true);
      }
    });
  });

  return (
    <>
      {/* <GoogleTranslateElementInit /> */}

      <Header />
      <Landing />
      <Features />
      <Pricing />
      <Stats />
      <Hotels />
      <Footer />
      <button
        style={{
          display: top ? "none" : "flex",
        }}
        className="scroll-to-top"
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </>
  );
}

export default App;
