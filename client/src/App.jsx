import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home.jsx";
import SignIn from './pages/signin';
import About from './pages/about.jsx';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects.jsx';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/About" element={<About /> } />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Dashboard" element={<Dashboard /> }/>
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}
