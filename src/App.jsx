import React, { lazy, Suspense } from "react";
import Loader from "./components/loader/Loader";
const Skill= lazy(() => import("./components/skill/Skill"));
const Header = lazy(() => import("./components/header/Header"));
const Nav = lazy(() => import("./components/nav/Nav"));
const About = lazy(() => import("./components/about/About"));
const Experience = lazy(() => import("./components/experience/Experience"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Footer = lazy(() => import("./components/footer/Footer"));
const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Skill />
        <Portfolio/>
        <Contact />
        <Footer/>
      </Suspense>
    </>
  );
};

export default App;
