import React from "react";
import Section from "../Elements/Section";
import {FaMedal, FaRegFolderOpen, FaUserFriends} from "react-icons/fa";
import {AiOutlineMail, AiOutlineWhatsApp} from "react-icons/ai";
import {FiPhoneCall} from "react-icons/fi";

const Contact:React.FC = () => {
    return(
        <Section title={"Contact Me"} topTitle={"Get In Touch"} sectionId={"contact"}>
            <div className={"mt-14 grid grid-cols-4 gap-8"}>
                <div className={"col-span-1"}>
                    <ul>
                        <li className={"bg-backgroundLight w-full h-60 flex flex-col justify-center items-center rounded-3xl drop-shadow mb-6"}>
                            <div className={"text-primary text-3xl mb-6"}><AiOutlineMail /></div>
                            <div className={"text-lg font-bold mb-1"}>Email</div>
                            <div className={"text-light"}>alinadi14@gmail.com</div>
                        </li>
                        <li className={"bg-backgroundLight w-full h-60 flex flex-col justify-center items-center rounded-3xl drop-shadow mb-6"}>
                            <div className={"text-primary text-3xl mb-6"}><FiPhoneCall /></div>
                            <div className={"text-lg font-bold mb-1"}>Mobile Number</div>
                            <div className={"text-light"}>+98 937 626 4899</div>
                        </li>
                        <li className={"bg-backgroundLight w-full h-60 flex flex-col justify-center items-center rounded-3xl drop-shadow mb-6"}>
                            <div className={"text-primary text-3xl mb-6"}><AiOutlineWhatsApp /></div>
                            <div className={"text-lg font-bold mb-1"}>WhatsApp</div>
                            <div className={"text-light"}>+98 937 626 4899</div>
                        </li>
                    </ul>
                </div>
                <div className={"col-span-3"}></div>
            </div>
        </Section>
    )
}

export default Contact