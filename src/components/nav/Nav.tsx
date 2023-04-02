import React from "react";
import {AiOutlineExperiment, AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {BsBoxes} from "react-icons/bs";
import {HiOutlineChatBubbleBottomCenterText} from "react-icons/hi2";

const Nav:React.FC = () => {
    return(
        <div className={"fixed bottom-[50px] right-0 left-0 w-[300px] sm:w-[350px] mx-auto py-3 rounded-full bg-black bg-opacity-20 backdrop-filter backdrop-blur z-50"}>
            <ul className={"flex flex-row justify-around items-center"}>
                <a href={"#home"}><li className={"w-11 h-11 cursor-pointer rounded-full text-xl transition ease-in-out duration-200 hover:bg-primary hover:text-background px-3 py-3"}><AiOutlineHome /></li></a>
                <a href={"#about"}><li className={"w-11 h-11 cursor-pointer rounded-full text-xl transition ease-in-out duration-200 hover:bg-primary hover:text-background px-3 py-3"}><AiOutlineUser /></li></a>
                <a href={"#experience"}><li className={"w-11 h-11 cursor-pointer rounded-full text-xl transition ease-in-out duration-200 hover:bg-primary hover:text-background px-3 py-3"}><AiOutlineExperiment /></li></a>
                <a href={"#portfolio"}><li className={"w-11 h-11 cursor-pointer rounded-full text-xl transition ease-in-out duration-200 hover:bg-primary hover:text-background px-3 py-3"}><BsBoxes /></li></a>
                <a href={"#contact"}><li className={"w-11 h-11 cursor-pointer rounded-full text-xl transition ease-in-out duration-200 hover:bg-primary hover:text-background px-3 py-3"}><HiOutlineChatBubbleBottomCenterText /></li></a>
            </ul>
        </div>
    )
}

export default Nav