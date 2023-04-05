import React from "react";
// @ts-ignore
import testImg from "../../assets/images/portfolio1.jpg"
import Button from "../Elements/Button";

const PortfolioItem:React.FC = () => {
    return(
        <div className={"bg-backgroundLight rounded-2xl h-[450px] flex flex-col justify-between items-center p-4"}>
            <div>
                <div className={"w-full h-[250px] rounded-2xl mb-2 overflow-hidden"}>
                    <img src={testImg} className={"object-cover hover:scale-110 transform transition duration-200 w-full cursor-pointer h-full"} alt={""} />
                </div>
                <h2 className={"w-full text-white text-left"}>Crypto Currency Dashboard & Financial Visualization</h2>
            </div>
            <div className={"text-left w-full"}>
                <Button btnTxt={"Github"} url={"#"} isPrimary={true} />
                <Button btnTxt={"Live Demo"} url={"#"} />
            </div>
        </div>
    )
}

export default PortfolioItem