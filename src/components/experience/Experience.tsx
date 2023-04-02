import React from "react";
import Section from "../Elements/Section";
import ExperienceItem from "./ExperienceItem";
import {skillsList} from "../helpers/data";

const Experience:React.FC = () => {
    const experiencesList = skillsList.map((skill, index) => <li key={`ski-${index}`} className={"bg-backgroundLight w-full min-h-max rounded-3xl py-4 md:py-6 px-2 md:px-5"}>
        <h2 className={"text-primary text-xl pb-2"}>{skill.title}</h2>
        {skill.cv && <a href={skill.cv} target={"_blank"}><div className={"text-sm underline cursor-pointer pb-8 text-primaryLight hover:text-white"}>download CV</div></a>}
        <ul className={"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"}>
            {skill.items.map((item, index) => <ExperienceItem key={`skill-${index}`} title={item.title} grade={item.grade} />)}
        </ul>
    </li>)

    return(
        <Section title={"My Experience"} topTitle={"What Skills I Have"} sectionId={"experience"}>
            <ul className={"grid grid-cols-1 md:grid-cols-2 gap-10 mt-14 px-6 lg:px-0"}>
                {experiencesList}
            </ul>
        </Section>
    )
}

export default Experience