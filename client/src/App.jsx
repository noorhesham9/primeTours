import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Reservation from "./components/reservationPage/Reservation";
import Error404 from "./components/Error404/Error404";
import { useTranslation } from "react-i18next";
import { AnimatePresence, useCycle } from "framer-motion";
import Admin from "./components/Admin/Admin";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Program1 from "./components/Programs/Program1";
import Program2 from "./components/Programs/program2";
import Program3 from "./components/Programs/Program3";
import Program4 from "./components/Programs/Program4";
import Program5 from "./components/Programs/Program5";
import Program6 from "./components/Programs/Program5";

function App() {
  const [lang, setlang] = useCycle("en", "ar");
  const { t, i18n } = useTranslation();
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "https://prime-tours.vercel.app/";
  const [top, settop] = useState(true);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // For smooth scrolling
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 360) {
        settop(false);
      } else {
        settop(true);
      }
    });
  });
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home i18n={i18n} t={t} lang={lang} setlang={setlang} />}
        />
        <Route
          path="/reservationForm"
          element={
            <Reservation i18n={i18n} t={t} lang={lang} setlang={setlang} />
          }
        />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/program/Program1"
          element={
            <>
              <Header i18n={i18n} t={t} lang={lang} setlang={setlang} />
              <Program1 lang={lang} />
              <Footer />
            </>
          }
        />
        <Route
          path="/program/Program2"
          element={
            <>
              <Header i18n={i18n} t={t} lang={lang} setlang={setlang} />
              <Program2 lang={lang} />
              <Footer />
            </>
          }
        />
        <Route
          path="/program/Program3"
          element={
            <>
              <Header i18n={i18n} t={t} lang={lang} setlang={setlang} />
              <Program3 lang={lang} />
              <Footer />
            </>
          }
        />
        <Route
          path="/program/Program4"
          element={
            <>
              <Header i18n={i18n} t={t} lang={lang} setlang={setlang} />
              <Program4 lang={lang} />
              <Footer />
            </>
          }
        />
        <Route
          path="/program/Program5"
          element={
            <>
              <Header i18n={i18n} t={t} lang={lang} setlang={setlang} />
              <Program5 lang={lang} />
              <Footer />
            </>
          }
        />
        <Route
          path="/program/Program6"
          element={
            <>
              <Header i18n={i18n} t={t} lang={lang} setlang={setlang} />
              <Program6 lang={lang} />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
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
