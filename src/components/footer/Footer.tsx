import React from "react";
import {AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineYoutube} from "react-icons/ai";

const Footer:React.FC = () => {
    return(
        <div className={"bg-primary min-h-[400px] py-14"}>
            <div className={"max-w-7xl mx-auto px-4 sm:px-0"}>
                <h2 className={"text-3xl text-background text-center mb-8"}>Ali Nadi</h2>
                <ul className={"flex flex-row justify-center item-center space-x-4 md:space-x-10 mb-8"}>
                    <a href={"#home"}><li className={"text-sm text-background hover:opacity-70"}>Home</li></a>
                    <a href={"#about"}><li className={"text-sm text-background hover:opacity-70"}>About</li></a>
                    <a href={"#experience"}><li className={"text-sm text-background hover:opacity-70"}>Experience</li></a>
                    <a href={"#portfolio"}><li className={"text-sm text-background hover:opacity-70"}>Portfolio</li></a>
                    <a href={"#contact"}><li className={"text-sm text-background hover:opacity-70"}>Contact</li></a>
                </ul>
                <ul className={"flex flex-row justify-center item-center space-x-3 md:space-x-6"}>
                    <li className={"bg-background text-white rounded-xl text-xl p-2 cursor-pointer transition duration-300 ease-in-out hover:bg-white hover:text-background"}><AiOutlineGithub /></li>
                    <li className={"bg-background text-white rounded-xl text-xl p-2 cursor-pointer transition duration-300 ease-in-out hover:bg-white hover:text-background"}><AiOutlineInstagram /></li>
                    <li className={"bg-background text-white rounded-xl text-xl p-2 cursor-pointer transition duration-300 ease-in-out hover:bg-white hover:text-background"}><AiOutlineLinkedin /></li>
                    <li className={"bg-background text-white rounded-xl text-xl p-2 cursor-pointer transition duration-300 ease-in-out hover:bg-white hover:text-background"}><AiOutlineMail /></li>
                    <li className={"bg-background text-white rounded-xl text-xl p-2 cursor-pointer transition duration-300 ease-in-out hover:bg-white hover:text-background"}><AiOutlineYoutube /></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer