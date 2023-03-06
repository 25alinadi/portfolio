import React from "react";

interface IButtonProps{
    btnTxt: string,
    url: string,
    customClass?: string,
    isPrimary?: boolean
}

const Button:React.FC<IButtonProps> = ({btnTxt, url="#", isPrimary=false, customClass}) => {
    return(
        <a href={url}
           target={"_blank"}
           className={`max-w-content inline-block border-2 ${isPrimary ? "bg-transparent text-primary border-primary" : "bg-primary text-background border-transparent"} py-3 px-6 mx-2 rounded-xl transition duration-200 cursor-pointer hover:bg-white hover:text-background ${customClass ?? ''}`} style={{border: "1px solid"}}>
            {btnTxt}
        </a>
    )
}

export default Button