import React from "react";
import Section from "../Elements/Section";
import {FaMedal, FaRegFolderOpen, FaUserFriends} from "react-icons/fa";
import Button from "../Elements/Button";
// @ts-ignore
import aboutImg from "../../assets/images/me-about.jpg"

const About:React.FC = () => {
    return(
        <Section title={"About Me"} topTitle={"Get To Know"} sectionId={"about"}>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-6 py-14"}>
                <div className={"relative px-28"}>
                    <div className={"w-[530px] h-full rounded-3xl bg-gradient-to-tr from-transparent from-5% via-primary via-90% to-transparent to-5%"} />
                    <img src={aboutImg} className={"absolute top-0 left-[15%] w-[530px] h-full rounded-3xl rotate-12 transition duration-500 ease-in-out hover:rotate-0"} alt={"علی نادی"} />
                </div>
                <div className={"w-full"}>
                    <ul className={"grid grid-cols-1 md:grid-cols-3 gap-10 mb-10"}>
                        <li className={"bg-backgroundLight w-full h-60 flex flex-col justify-center items-center rounded-3xl drop-shadow"}>
                            <div className={"text-primary text-3xl mb-6"}><FaMedal /></div>
                            <div className={"text-lg font-bold mb-1"}>Experiences</div>
                            <div className={"text-light"}>+6 Years Working</div>
                        </li>
                        <li className={"bg-backgroundLight w-full h-60 flex flex-col justify-center items-center rounded-3xl drop-shadow"}>
                            <div className={"text-primary text-3xl mb-6"}><FaUserFriends /></div>
                            <div className={"text-lg font-bold mb-1"}>Clients</div>
                            <div className={"text-light"}>+50 WorldWide</div>
                        </li>
                        <li className={"bg-backgroundLight w-full h-60 flex flex-col justify-center items-center rounded-3xl drop-shadow"}>
                            <div className={"text-primary text-3xl mb-6"}><FaRegFolderOpen /></div>
                            <div className={"text-lg font-bold mb-1"}>Projects</div>
                            <div className={"text-light"}>+32 Completed</div>
                        </li>
                    </ul>
                    <div className={"text-justify text-light mb-10"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className={"text-left"}>
                        <Button btnTxt={"Let's Talk"} url={"#"} />
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default About