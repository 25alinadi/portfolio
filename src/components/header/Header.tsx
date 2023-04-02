import React from "react";
import CTA from "./CTA";
import {AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineYoutube} from "react-icons/ai";
// @ts-ignore
import meImg from "../../assets/images/me.png"

const Header:React.FC = () => {
    return(
        <div id={"home"} className={"py-28 mb-14"}>
            <div className={"text-center pb-14"}>
                <h5 className={"mb-2"}>Hello, I'm</h5>
                <h1 className={"text-4xl"}>Ali Nadi</h1>
                <h5 className={"text-light mb-10"}>Fullstack Developer</h5>
                <CTA />
            </div>
            <div className={"flex flex-row-reverse justify-around items-end"}>
                <div className={"hidden md:block text-xs text-primary pb-7"}>
                    <div className={"rotate-90"}>Scroll Down</div>
                </div>
                <div className={"w-[350px] h-[500px] bg-gradient-to-t from-background to-primary rounded-t-full pt-10"}>
                    <img src={meImg} className={"w-full h-full object-contain drop-shadow-xl"} alt={"ali nadi"} />
                </div>
                <div className={"hidden md:block"}>
                    <ul className={"space-y-3 text-xl text-primary"}>
                        <li className={"cursor-pointer transition duration-200 hover:text-white"}><AiOutlineLinkedin /></li>
                        <li className={"cursor-pointer transition duration-200 hover:text-white"}><AiOutlineGithub /></li>
                        <li className={"cursor-pointer transition duration-200 hover:text-white"}><AiOutlineInstagram /></li>
                        <li className={"cursor-pointer transition duration-200 hover:text-white"}><AiOutlineYoutube /></li>
                        <li className={"cursor-pointer transition duration-200 hover:text-white"}><AiOutlineMail /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header