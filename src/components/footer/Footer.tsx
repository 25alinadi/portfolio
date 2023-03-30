import React from "react";
import {AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineYoutube} from "react-icons/ai";

const Footer:React.FC = () => {
    return(
        <div className={"bg-primary min-h-[400px] w-full py-14"}>
            <div className={"max-w-6xl mx-auto"}>
                <h2 className={"w-full text-3xl text-background text-center mb-8"}>Ali Nadi</h2>
                <ul className={"flex flex-row justify-center item-center space-x-10 mb-8"}>
                    <li className={"text-sm text-background hover:opacity-70"}>Home</li>
                    <li className={"text-sm text-background hover:opacity-70"}>About</li>
                    <li className={"text-sm text-background hover:opacity-70"}>Experience</li>
                    <li className={"text-sm text-background hover:opacity-70"}>Portfolio</li>
                    <li className={"text-sm text-background hover:opacity-70"}>Contact</li>
                </ul>
                <ul className={"flex flex-row justify-center item-center space-x-6"}>
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