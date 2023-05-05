import React from "react";
import Section from "../Elements/Section";
import {FaMedal, FaRegFolderOpen, FaUserFriends} from "react-icons/fa";
import Button from "../Elements/Button";
// @ts-ignore
import aboutImg from "../../assets/images/pic-about.png"
import {userInfo} from "../helpers/data";

const About:React.FC = () => {
    return(
        <Section title={"About Me"} topTitle={"Get To Know"} sectionId={"about"}>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-6 py-14"}>
                <div className={"mb-8 sm:mb-0 px-10 sm:h-72 lg:h-96 xl:h-auto"}>
                    <div className={"w-full h-full rounded-3xl bg-gradient-to-tr from-transparent from-5% via-primary via-90% to-transparent to-5%"}>
                        <img src={aboutImg} className={"w-full h-full z-10 rounded-3xl rotate-12 transition duration-500 ease-in-out hover:rotate-0"} alt={"علی نادی"} />
                    </div>
                </div>
                <div className={"w-full pr-4 lg:pr-0"}>
                    <ul className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10"}>
                        <li className={"bg-backgroundLight w-full h-40 md:h-48 flex flex-col justify-center items-center rounded-3xl drop-shadow"}>
                            <div className={"text-primary text-3xl mb-6"}><FaMedal /></div>
                            <div className={"text-lg font-bold mb-1"}>Experiences</div>
                            <div className={"text-light"}>{`${userInfo.experience_years} Working`}</div>
                        </li>
                        <li className={"bg-backgroundLight w-full h-40 md:h-48 flex flex-col justify-center items-center rounded-3xl drop-shadow"}>
                            <div className={"text-primary text-3xl mb-6"}><FaUserFriends /></div>
                            <div className={"text-lg font-bold mb-1"}>Clients</div>
                            <div className={"text-light"}>{`${userInfo.clients} WorldWide`}</div>
                        </li>
                        <li className={"bg-backgroundLight w-full h-40 md:h-48 flex flex-col justify-center items-center rounded-3xl drop-shadow"}>
                            <div className={"text-primary text-3xl mb-6"}><FaRegFolderOpen /></div>
                            <div className={"text-lg font-bold mb-1"}>Projects</div>
                            <div className={"text-light"}>{`${userInfo.projects} Completed`}</div>
                        </li>
                    </ul>
                    <div className={"text-justify text-light mb-10"}>
                        <p>Hi guys</p>
                        <p>{userInfo.about_txt}</p>
                    </div>
                    <div className={"text-center md:text-left"}>
                        <Button btnTxt={"Let's Talk"} url={"#contact"} />
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default About