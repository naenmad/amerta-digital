import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ContactPage from './pages/contactpage';
import AboutPage from './pages/aboutpage';
import HomePage from "./pages/homepage";
import GetStartedPage from "./pages/getstartedpage";
import ScrollUp from "./components/scrollUp.tsx";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/getstarted" element={<GetStartedPage />} />
                </Routes>
                <ScrollUp />
                <Footer />
            </div>
        </Router>
    );
};

export default App;