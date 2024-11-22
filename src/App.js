import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from "./Components/Intro/Intro";
import Skills from './Components/Skills/Skills';
import Portofolio from './Components/Portofolio/Portofolio';
import Aboutme from './Components/Aboutme/Aboutme';
import Contact from './Components/Contact/Contact';
import Footer from "./Components/Footer/Footer";
import { themeContext } from './Context';
import { useContext } from "react";

function App() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div 
            className="App"
            style={{
                background: darkMode ? 'black' : '',
                color: darkMode ? 'white' : '',
            }}
        >
            <Navbar />
            <Intro />
            <Skills />
            <Portofolio />
            <Aboutme />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
