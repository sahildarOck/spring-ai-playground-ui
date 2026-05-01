import { useState } from "react";
import TextArea from "./TextArea";

const TextAreaContainer = () => {
    const [text, setText] = useState("");

    const handleChange = (newText: string) => {
        setText(newText);
    }

    return (
        <div>
            <TextArea text={text} onChange={handleChange} />
        </div>
    );
}

export default TextAreaContainer;
