import React from "react";
import {TbDiscountCheckFilled} from "react-icons/tb";

interface IExperienceItem{
    title: string,
    grade:string
}

const ExperienceItem:React.FC<IExperienceItem> = ({title, grade}) => {
    return(
        <li className={"flex flex-row justify-start items-start"}>
            <div className={"text-primary px-3 py-1 text-xl"}><TbDiscountCheckFilled /></div>
            <div className={"text-left"}>
                <div className={"text-lg"}>{title}</div>
                <div className={"text-sm text-light"}>{grade}</div>
            </div>
        </li>
    )
}

export default ExperienceItem