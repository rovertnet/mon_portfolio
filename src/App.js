import './App.css';
import About from './composants/about/About';
import Home from './composants/body/Home';
import Competences from './composants/competences/Competences';
import { Header } from './composants/header/Header';
import Qualification from './composants/qualification/Qualification';
import Service from './composants/services/Service';
import Temoignage from './composants/temoignage/Temoignage';

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
        <Temoignage />
      </main>
    </>
  );
}

export default App;
