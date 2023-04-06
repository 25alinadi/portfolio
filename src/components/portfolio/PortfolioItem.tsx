import React from "react";
// @ts-ignore
import testImg from "../../assets/images/portfolio1.jpg"
import Button from "../Elements/Button";
import {PortfolioData} from "../contract/data/portfolio";

const PortfolioItem:React.FC<{item: PortfolioData}> = ({item}) => {
    const tagsList = item?.tags?.map((item, index) =>
        <div key={`tags-${item}-${index}`} className={"flex flex-row justify-start items-center text-primaryLight mr-2"}>
            <div className={"text-xs"}>#</div>
            <div className={"text-sm"}>{item}</div>
        </div>)
    return(
        <div className={"bg-backgroundLight rounded-2xl h-[450px] flex flex-col justify-between items-center p-4"}>
            <div className={"w-full"}>
                <a href={item?.cover} target={"_blank"}>
                    <div className={"w-full h-[250px] rounded-2xl mb-2 overflow-hidden"}>
                        <img src={item.cover} className={"object-cover hover:scale-110 transform transition duration-200 w-full cursor-pointer h-full"} alt={""} />
                    </div>
                </a>
                <h2 className={"w-full text-white text-left"}>{item.title}</h2>
                <div className={"flex flex-row flex-wrap justify-start items-start"}>
                    {tagsList}
                </div>
            </div>
            <div className={"text-left w-full"}>
                {/*<Button btnTxt={"Github"} url={"#"} isPrimary={true} />*/}
                <Button btnTxt={"Live Demo"} url={item.linkUrl !== null ? item.linkUrl : "#"} />
            </div>
        </div>
    )
}

export default PortfolioItem