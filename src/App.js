import './App.css';
import About from './composants/about/About';
import Home from './composants/body/Home';
import Competences from './composants/competences/Competences';
import Contact from './composants/contact/Contact';
import Footers from './composants/footers/Footers';
import { Header } from './composants/header/Header';
import Qualification from './composants/qualification/Qualification';
import Service from './composants/services/Service';

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />,
        <Competences />
        <Service />
        <Qualification />

        <Contact />
        <Footers />
      </main>
    </>
  );
}

export default App;
