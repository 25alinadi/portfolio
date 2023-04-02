import React from "react";
import Button from "../Elements/Button";

const CTA:React.FC = () => {
    return(
        <div>
            <Button btnTxt={"Download CV"} url={"https://alinadi.ir/files/fullstack.pdf"} isPrimary={true} />
            <Button btnTxt={"Let's Talk"} url={"#contact"} />
        </div>
    )
}

export default CTA