import React from "react";
import CTA from "./CTA";

const Header:React.FC = () => {
    return(
        <header>
            <div className={"container header__container text-center py-10"}>
                <h5 className={"mb-2"}>Helli I'm</h5>
                <h1 className={"text-4xl"}>Ali Nadi</h1>
                <h5 className={"text-light mb-10"}>Fullstack Developer</h5>
                <CTA />
            </div>
        </header>
    )
}

export default Header