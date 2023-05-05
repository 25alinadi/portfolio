import React from "react";
import CTA from "./CTA";
import {AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineYoutube} from "react-icons/ai";
// @ts-ignore
import meImg from "../../assets/images/pic.png"
import {socialNetworkUrls, userInfo} from "../helpers/data";

const Header:React.FC = () => {
    return(
        <div id={"home"} className={"py-28 mb-14"}>
            <div className={"text-center pb-14"}>
                <h5 className={"mb-2"}>Hello, I'm</h5>
                <h1 className={"text-4xl"}>{userInfo.first_name + " " + userInfo.last_name}</h1>
                <h5 className={"text-light mb-10"}>{userInfo.skill}</h5>
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
                        <li className={"cursor-pointer transition duration-200 hover:text-white"}><a href={socialNetworkUrls.linkedIn} target={"_blank"}><AiOutlineLinkedin /></a></li>
                        <li className={"cursor-pointer transition duration-200 hover:text-white"}><a href={socialNetworkUrls.github} target={"_blank"}><AiOutlineGithub /></a></li>
                        <li className={"cursor-pointer transition duration-200 hover:text-white"}><a href={socialNetworkUrls.instagram} target={"_blank"}><AiOutlineInstagram /></a></li>
                        <li className={"cursor-pointer transition duration-200 hover:text-white"}><a href={socialNetworkUrls.youtube} target={"_blank"}><AiOutlineYoutube /></a></li>
                        <li className={"cursor-pointer transition duration-200 hover:text-white"}><a href={`mailto:${socialNetworkUrls.email}`} target={"_blank"}><AiOutlineMail /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header