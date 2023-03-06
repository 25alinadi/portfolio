import React from "react";
import Button from "../Elements/Button";

const CTA:React.FC = () => {
    return(
        <div>
            <Button btnTxt={"Download CV"} url={"#"} isPrimary={true} />
            <Button btnTxt={"Let's Talk"} url={"#"} />
        </div>
    )
}

export default CTA