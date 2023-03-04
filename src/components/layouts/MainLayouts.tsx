import React, {ReactNode} from "react";

interface IMainLayoutsProps{
    title?: string,
    handleLoading?: any,
    children?: ReactNode
}

const MainLayouts:React.FC<IMainLayoutsProps> = ({title="", handleLoading, children}) => {
    return(
        <React.Fragment>
            <div className={"relative min-h-[500px] z-0"}>
                <div className={"container mx-auto"}>
                    {children}
                </div>
            </div>
        </React.Fragment>
    )
}

export default MainLayouts