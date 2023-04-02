import React from "react";
import {AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineYoutube} from "react-icons/ai";
import {socialNetworkUrls, userInfo} from "../helpers/data";

const Footer:React.FC = () => {
    return(
        <div className={"bg-primary min-h-[400px] py-14"}>
            <div className={"max-w-7xl mx-auto px-4 sm:px-0"}>
                <h2 className={"text-3xl text-background text-center mb-8"}>{userInfo.first_name + " " + userInfo.last_name}</h2>
                <ul className={"flex flex-row justify-center item-center space-x-4 md:space-x-10 mb-8"}>
                    <a href={"#home"}><li className={"text-sm text-background hover:opacity-70"}>Home</li></a>
                    <a href={"#about"}><li className={"text-sm text-background hover:opacity-70"}>About</li></a>
                    <a href={"#experience"}><li className={"text-sm text-background hover:opacity-70"}>Experience</li></a>
                    <a href={"#portfolio"}><li className={"text-sm text-background hover:opacity-70"}>Portfolio</li></a>
                    <a href={"#contact"}><li className={"text-sm text-background hover:opacity-70"}>Contact</li></a>
                </ul>
                <ul className={"flex flex-row justify-center item-center space-x-3 md:space-x-6"}>
                    <a href={socialNetworkUrls.github} target={"_blank"}><li className={"bg-background text-white rounded-xl text-xl p-2 cursor-pointer transition duration-300 ease-in-out hover:bg-white hover:text-background"}><AiOutlineGithub /></li></a>
                    <a href={socialNetworkUrls.instagram} target={"_blank"}><li className={"bg-background text-white rounded-xl text-xl p-2 cursor-pointer transition duration-300 ease-in-out hover:bg-white hover:text-background"}><AiOutlineInstagram /></li></a>
                    <a href={socialNetworkUrls.linkedIn} target={"_blank"}><li className={"bg-background text-white rounded-xl text-xl p-2 cursor-pointer transition duration-300 ease-in-out hover:bg-white hover:text-background"}><AiOutlineLinkedin /></li></a>
                    <a href={`mailto:${socialNetworkUrls.email}`} target={"_blank"}><li className={"bg-background text-white rounded-xl text-xl p-2 cursor-pointer transition duration-300 ease-in-out hover:bg-white hover:text-background"}><AiOutlineMail /></li></a>
                    <a href={socialNetworkUrls.youtube} target={"_blank"}><li className={"bg-background text-white rounded-xl text-xl p-2 cursor-pointer transition duration-300 ease-in-out hover:bg-white hover:text-background"}><AiOutlineYoutube /></li></a>
                </ul>
            </div>
        </div>
    )
}

export default Footer