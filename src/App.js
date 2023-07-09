import './App.css';
import About from './composants/about/About';
import Home from './composants/body/Home';
import Competences from './composants/competences/Competences';
import { Header } from './composants/header/Header';

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />,
        <About />,
        <Competences />
      </main>
    </>
  );
}

export default App;
