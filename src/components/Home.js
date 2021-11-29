import React from "react";
import Header from './header';
import Line from './line';
import '../styles/App.scss';
import Cards from "./cards";
import Horen from "./horen";


function Home() {
  return (
    <div className="home">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <section className="line">
          <Line />
        </section>
        <section className="cards">
          <Cards />
        </section>
        <section className="horen">
          <Horen/>
        </section>

      </main>
      
    </div>
  );
}

export default Home;
