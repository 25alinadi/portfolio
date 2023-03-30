import React from "react";
import Section from "../Elements/Section";
import PortfolioItem from "./PortfolioItem";

const Portfolio:React.FC = () => {
    return(
        <Section title={"Portfolio"} topTitle={"My Recent Work"} sectionId={"portfolio"}>
            <div className={"mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}>
                <PortfolioItem />
                <PortfolioItem />
                <PortfolioItem />
                <PortfolioItem />
                <PortfolioItem />
            </div>
        </Section>
    )
}

export default Portfolio