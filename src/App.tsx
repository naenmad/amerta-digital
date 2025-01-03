import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/utils/navbar.tsx';
import Footer from './components/utils/footer.tsx';
import ContactPage from './pages/contactpage';
import AboutPage from './pages/aboutpage';
import HomePage from "./pages/homepage.tsx";
import GetStartedPage from "./pages/getstartedpage";
import ScrollUp from "./components/utils/scrollUp.tsx";
import PrivacyPolicyPage from "./pages/privacypolicypage";
import TermsOfServicePage from "./pages/termsofservicepage";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/getstarted" element={<GetStartedPage />} />
                    <Route path={"/privacy-policy" } element={<PrivacyPolicyPage />} />
                    <Route path={"/terms-of-service" } element={<TermsOfServicePage />} />
                </Routes>
                <ScrollUp />
                <Footer />
            </div>
        </Router>
    );
};

export default App;