import React from "react";
import Header from "./../components/header";
import Nav from "./../components/nav";
import About from "./../components/about";
import Experience from "./../components/experience";
import Portfolio from "./../components/portfolio";
import Testimonials from "./../components/testimonials";
import Contact from "./../components/contact";
import Footer from "./../components/footer";
import Services from "./../components/services";

const App:React.FC = () => {
    return(
        <React.Fragment>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </React.Fragment>
    )
}

export default App