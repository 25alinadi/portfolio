import React from "react";
import Section from "../Elements/Section";
import {FaMedal, FaRegFolderOpen, FaUserFriends} from "react-icons/fa";
import {AiOutlineMail, AiOutlineWhatsApp} from "react-icons/ai";
import {FiPhoneCall} from "react-icons/fi";
import {socialNetworkUrls, userInfo} from "../helpers/data";

const Contact:React.FC = () => {
    return(
        <Section title={"Contact Me"} topTitle={"Get In Touch"} sectionId={"contact"}>
            <div className={"px-3 lg:px-0"}>
                <ul className={"mt-14 grid grid-cols-1 md:grid-cols-3 gap-8"}>
                    <li className={"bg-backgroundLight w-full h-48 flex flex-col justify-center items-center rounded-3xl drop-shadow mb-6"}>
                        <div className={"text-primary text-3xl mb-6"}><AiOutlineMail /></div>
                        <div className={"text-lg font-bold mb-1"}>Email</div>
                        <a href={`mailto:${socialNetworkUrls.email}`}><div className={"text-light"}>{socialNetworkUrls.email}</div></a>
                    </li>
                    <li className={"bg-backgroundLight w-full h-48 flex flex-col justify-center items-center rounded-3xl drop-shadow mb-6"}>
                        <div className={"text-primary text-3xl mb-6"}><FiPhoneCall /></div>
                        <div className={"text-lg font-bold mb-1"}>Mobile Number</div>
                        <a href={`tel:${userInfo.mobile}`}><div className={"text-light"}>{userInfo.mobile_txt}</div></a>
                    </li>
                    <li className={"bg-backgroundLight w-full h-48 flex flex-col justify-center items-center rounded-3xl drop-shadow mb-6"}>
                        <div className={"text-primary text-3xl mb-6"}><AiOutlineWhatsApp /></div>
                        <div className={"text-lg font-bold mb-1"}>WhatsApp</div>
                        <div className={"text-light"}>{userInfo.mobile_txt}</div>
                    </li>
                </ul>
            </div>
        </Section>
    )
}

export default Contact