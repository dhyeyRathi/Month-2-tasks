import { Routes, Route } from "react-router-dom";

import "./index.css";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Journal from "./pages/Journal";
import Contact from "./pages/Contact";
import Footer from "./components/layout/Footer";
import CouplePage from "./pages/CouplePage";
import JournalPage from "./pages/JournalPage";
import ScrollToTop from "./components/layout/ScrollToTop";
import NotFound from "./components/layout/PathNotFound";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      

      <div>
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route element={<Layout></Layout>}>
            <Route path="/" element={<Home></Home>} />
            <Route path="/about" element={<About></About>} />
            <Route path="/services" element={<Services></Services>} />
            <Route path="/portfolio" element={<Portfolio></Portfolio>} />
            <Route path="/journal" element={<Journal></Journal>} />
            <Route path="/contact" element={<Contact></Contact>} />
            <Route path="/portfolio/:slug" element={<CouplePage />} />
            <Route path="/journal/:url" element={<JournalPage></JournalPage>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
       
      </div>
      {/* footer */}
      
    </>
  );
}

export default App;
