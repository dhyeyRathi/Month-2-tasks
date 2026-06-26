import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import "./index.css";
import ScrollToTop from "./components/layout/ScrollToTop";
import NotFound from "./components/layout/PathNotFound";
import Layout from "./components/layout/Layout";

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
        </Suspense>

      </div>
      {/* footer */}

    </>
  );
}

export default App;
