import React from "react";
import Section from "../Elements/Section";
import ExperienceItem from "./ExperienceItem";

const Experience:React.FC = () => {
    return(
        <Section title={"My Experience"} topTitle={"What Skills I Have"} sectionId={"experience"}>
            <ul className={"grid grid-cols-1 md:grid-cols-2 gap-10 mt-14 px-6 lg:px-0"}>
                <li className={"bg-backgroundLight w-full min-h-max rounded-3xl py-4 md:py-6 px-2 md:px-5"}>
                    <h2 className={"text-primary text-xl pb-2"}>Frontend Development</h2>
                    <div className={"text-sm underline cursor-pointer pb-8 text-primaryLight hover:text-white"}>download CV</div>
                    <ul className={"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"}>
                        <ExperienceItem title={"ReactJs"} grade={"Experienced"} />
                        <ExperienceItem title={"NextJs"} grade={"Experienced"} />
                        <ExperienceItem title={"HTML"} grade={"Experienced"} />
                        <ExperienceItem title={"CSS"} grade={"Experienced"} />
                        <ExperienceItem title={"JavaScript"} grade={"Experienced"} />
                        <ExperienceItem title={"JQuery"} grade={"Experienced"} />
                        <ExperienceItem title={"Tailwind"} grade={"Experienced"} />
                        <ExperienceItem title={"Bootstrap"} grade={"Experienced"} />
                    </ul>
                </li>
                <li className={"bg-backgroundLight w-full min-h-max rounded-3xl py-4 md:py-6 px-2 md:px-5"}>
                    <h2 className={"text-primary text-xl pb-2"}>Backend Development</h2>
                    <div className={"text-sm underline cursor-pointer pb-8 text-primaryLight hover:text-white"}>download CV</div>
                    <ul className={"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"}>
                        <ExperienceItem title={"Python"} grade={"Experienced"} />
                        <ExperienceItem title={"Django"} grade={"Experienced"} />
                        <ExperienceItem title={"Flask"} grade={"Experienced"} />
                        <ExperienceItem title={"FastApi"} grade={"Experienced"} />
                        <ExperienceItem title={"PHP"} grade={"Experienced"} />
                        <ExperienceItem title={"Laravel"} grade={"Experienced"} />
                    </ul>
                </li>
                <li className={"bg-backgroundLight w-full min-h-max rounded-3xl py-4 md:py-6 px-2 md:px-5"}>
                    <h2 className={"text-primary text-xl pb-2"}>Mobile Development</h2>
                    <div className={"text-sm underline cursor-pointer pb-8 text-primaryLight hover:text-white"}>download CV</div>
                    <ul className={"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"}>
                        <ExperienceItem title={"Flutter"} grade={"Experienced"} />
                        <ExperienceItem title={"Dart"} grade={"Experienced"} />
                        <ExperienceItem title={"Android"} grade={"Experienced"} />
                        <ExperienceItem title={"Kotlin"} grade={"Experienced"} />
                    </ul>
                </li>
                <li className={"bg-backgroundLight w-full min-h-max rounded-3xl py-4 md:py-6 px-2 md:px-5"}>
                    <h2 className={"text-primary text-xl pb-2"}>Others</h2>
                    <div className={"text-sm underline cursor-pointer pb-8 text-primaryLight hover:text-white"}>download CV</div>
                    <ul className={"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"}>
                        <ExperienceItem title={"VueJs"} grade={"Experienced"} />
                        <ExperienceItem title={"WordPress"} grade={"Experienced"} />
                        <ExperienceItem title={"Plugin Wordpress"} grade={"Experienced"} />
                        <ExperienceItem title={"Template Wordpress"} grade={"Experienced"} />
                    </ul>
                </li>
            </ul>
        </Section>
    )
}

export default Experience