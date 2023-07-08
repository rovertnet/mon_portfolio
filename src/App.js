import './App.css';
import Home from './composants/body/Home';
import { Header } from './composants/header/Header';

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
      </main>
    </>
  );
}

export default App;
