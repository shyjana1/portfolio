import './App.scss';
import Header from './components/Header/Header'
import Contact from './components/Contact/Contact'
import Intro from './components/Intro/Intro'
import Project3 from './components/Project3/Project3'
import Project from './components/Project/Project'
import Project2 from './components/Volunteer/Project2'
import { useState } from 'react'
import Menu from './components/Menu/Menu'
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="pages">
      <Intro />

      <Project />
      <Project2 />
      <Project3 />
      <Contact />
    </div>
    </div>
  );
}

export default App;
