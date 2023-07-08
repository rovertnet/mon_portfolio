import React from 'react';
import "./home.css";
import Social from './Social';
import Data from './Data';
import ScrolDown from './ScrolDown';

const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home_container container grid">
            <div className="home_content grid">
                  <Social />

                    <div className="home_img"></div>

                  <Data />
            </div>
            <ScrolDown />
        </div>
    </section>
  )
}

export default Home