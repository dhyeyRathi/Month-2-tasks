import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import "./index.css";
import ScrollToTop from "./components/layout/ScrollToTop";
import NotFound from "./components/layout/PathNotFound";
import Layout from "./components/layout/Layout";
import SeoSchema from "./components/SeoSchema";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Journal = lazy(() => import("./pages/Journal"));
const Contact = lazy(() => import("./pages/Contact"));
const CouplePage = lazy(() => import("./pages/CouplePage"));
const JournalPage = lazy(() => import("./pages/JournalPage"));

function App() {
  return (
    <>


      <div>
        <ScrollToTop></ScrollToTop>
        <Suspense fallback={<div style={{ minHeight: "100vh", background: "#faf9f7" }} />}>
          <Routes>
            <Route element={<Layout></Layout>}>
              <Route path="/" element={<Home></Home>} />
              <Route path="/about" element={ <><SeoSchema type="about" /> <About></About></>} />
              <Route path="/services" element={<><SeoSchema type="services" /> <Services></Services></>} />
              <Route path="/portfolio" element={<><SeoSchema type="portfolio" /> <Portfolio></Portfolio></>} />
              <Route path="/journal" element={<><SeoSchema type="journal" /> <Journal></Journal></>} />
              <Route path="/contact" element={<><SeoSchema type="contact" /> <Contact></Contact></>} />
              <Route path="/portfolio/:slug" element={<><SeoSchema type="couple" /> <CouplePage /></>} />
              <Route path="/journal/:url" element={<><SeoSchema type="journal" /> <JournalPage></JournalPage></>} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

      </div>
      {/* footer */}

    </>
  );
}

export default App;
