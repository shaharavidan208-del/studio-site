import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import Projects from "./components/Projects.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./components/Home.jsx"
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path = '/' element = {<Home />}></Route>
        <Route path = '/about' element = {<About />}></Route>
        <Route path = '/projects' element = {<Projects />}></Route>
        <Route path = '/contact' element = {<Contact />}></Route>
         </Routes>
      <Footer />
    </div>
  );
}