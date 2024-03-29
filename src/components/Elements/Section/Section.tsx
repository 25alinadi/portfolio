import React from "react";

interface ISectionProps{
    title:string,
    topTitle:string,
    sectionId:string,
    children: JSX.Element
}

const Section:React.FC<ISectionProps> = ({title, topTitle, sectionId, children}) => {
    return(
        <div id={sectionId} className={"text-center py-20 mb-14"}>
            <div>
                <h5 className={"mb-2"}>{topTitle}</h5>
                <h1 className={"text-primary text-4xl"}>{title}</h1>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Section