import React from "react";
import {TbDiscountCheckFilled} from "react-icons/tb";

interface IExperienceItem{
    title: string,
    grade:string
}

const ExperienceItem:React.FC<IExperienceItem> = ({title, grade}) => {
    return(
        <li className={"flex flex-row justify-start items-start"}>
            <div className={"text-primary px-2 sm:px-3 py-1 text-base sm:text-xl"}><TbDiscountCheckFilled /></div>
            <div className={"text-left"}>
                <div className={"text-sm sm:text-lg"}>{title}</div>
                <div className={"text-xs sm:text-sm text-light"}>{grade}</div>
            </div>
        </li>
    )
}

export default ExperienceItem