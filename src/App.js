import Navbar from './components/Navbar/Navbar';
import './index.css'
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import { Home } from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';

function App() {
  return (
      <div>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
  );
}

export default App;
