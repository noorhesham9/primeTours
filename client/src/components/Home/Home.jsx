import React from "react";
import ContactUs from "./../contactUs/ContactUs";
import Footer from "./../footer/Footer";
import Messages from "./../BookNow/Messages";
import Features from "./../Features/Features";
import Header from "./../header/Header";
import Landing from "./../landing/Landing";
import Pricing from "./../pricing/pricing";
import Stats from "./../stats/Stats";
import Hotels from "./../hotels/Hotels";
function Home({ t, i18n, lang, setlang }) {
  return (
    <div>
      <Header i18n={i18n} t={t} lang={lang} setlang={setlang} />
      <Landing t={t} lang={lang} />
      <Features t={t} lang={lang} />
      <Pricing t={t} lang={lang} />
      <Stats t={t} lang={lang} />
      <Hotels t={t} lang={lang} />
      <Messages t={t} lang={lang} />
      <ContactUs t={t} lang={lang} />
      <Footer t={t} lang={lang} />
    </div>
  );
}

export default Home;
