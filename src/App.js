import './App.css';
import About from './composants/about/About';
import Home from './composants/body/Home';
import Competences from './composants/competences/Competences';
import { Header } from './composants/header/Header';
import Service from './composants/services/Service';

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Competences />
        <Service />
      </main>
    </>
  );
}

export default App;
