import './App.css';
import About from './composants/about/About';
import Home from './composants/body/Home';
import { Header } from './composants/header/Header';

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />,
        <About />
      </main>
    </>
  );
}

export default App;
