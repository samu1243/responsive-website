import Navbar from './components/Navbar/Navbar';
import './index.css'
import About from './pages/About/About';
import { Home } from './pages/Home/Home';
import Skills from './pages/Skills/Skills';

function App() {
  return (
      <div>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
      </div>
  );
}

export default App;
