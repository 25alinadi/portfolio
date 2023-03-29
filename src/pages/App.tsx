import React from "react";
import Header from "./../components/header";
import Nav from "./../components/nav";
import About from "./../components/about";
import Experience from "./../components/experience";
import Portfolio from "./../components/portfolio";
import Contact from "./../components/contact";
import Footer from "./../components/footer";

const App:React.FC = () => {
    return(
        <React.Fragment>
            <div className={"container mx-auto"}>
                <Header />
                <Nav />
                <About />
                <Experience />
                <Portfolio />
                <Contact />
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default App