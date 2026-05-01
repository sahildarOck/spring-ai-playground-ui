
interface TextAreaProps {
    text: string;
    onChange: (text: string) => void;
}

const TextArea = ({ text, onChange }: TextAreaProps) => {
    return (
        <textarea value={text} onChange={(e) => onChange(e.target.value)} />
    );
}

export default TextArea;