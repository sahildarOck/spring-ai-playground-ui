import TextArea from "./TextArea";
import { useAppDispatch } from "../../store/hooks";
import { useAppText } from "../../slices/app/app-selectors";
import { setText } from "../../slices/app/app-slice";

export interface TextAreaContainerProps {
  editable?: boolean;
}

const TextAreaContainer = ({ editable }: TextAreaContainerProps) => {
  const text = useAppText();
  const dispatch = useAppDispatch();

  const handleChange = (newText: string) => {
    dispatch(setText(newText));
  };

  return (
    <div>
      <TextArea text={text} onChange={handleChange} editable={editable} />
    </div>
  );
};

export default TextAreaContainer;
