import React from "react";
import Section from "../Elements/Section";
import {portfolioList} from "../helpers/data";
import PortfolioItem from "./PortfolioItem";

const Portfolio:React.FC = () => {
    const portfolioItemsList = portfolioList.map((item , index) => <PortfolioItem key={`portfolio-${index}`} item={item} />)
    return(
        <Section title={"Portfolio"} topTitle={"My Recent Work"} sectionId={"portfolio"}>
            <div className={"mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}>
                {portfolioItemsList}
            </div>
        </Section>
    )
}

export default Portfolio