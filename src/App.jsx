import "./App.scss";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Our from "./Components/Our/Our";
import Cofe from "./Components/Cofe/Cofe";
import Maps from "./Components/Maps/Maps";
import Footer from "./Components/Footer/Footer";
import React from "react";

function App() {

  const [lang, setlang] = React.useState("uz")
  const xRef = React.useState()
  


  return (
    <>
      <Header lang={lang} setlang={setlang}/>
      <Hero lang={lang} />
      <Our  lang ={lang}/>
      <Cofe lang={lang}/>
      <Maps lang={lang}/>
      <Footer lang={lang} />
    </>
  );
}

export default App;
