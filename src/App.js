import './App.css';
import Body from "./pages/body";
import Header from "./pages/header";
import Footer from "./pages/components/footer";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Services from "./pages/services";
import Projects from "./pages/projects";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/resume" element = {<Body/>}/>
                <Route path="/" element = {<Body/>}/>
                <Route path="/projects" element = {<Projects/>}/>
                <Route path="/services" element = {<Services/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
