interface TextAreaProps {
  text: string;
  onChange: (text: string) => void;
  name?: string;
  editable?: boolean;
}

const TextArea = ({
  text,
  onChange,
  name = "appText",
  editable = true,
}: TextAreaProps) => {
  return (
    <textarea
      name={name}
      value={text}
      onChange={(e) => onChange(e.target.value)}
      readOnly={!editable}
    />
  );
};

export default TextArea;
