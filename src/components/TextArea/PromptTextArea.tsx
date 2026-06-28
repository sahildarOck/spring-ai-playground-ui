import TextArea from "./TextArea";
import { useAppDispatch } from "../../store/hooks";
import { useAppText } from "../../slices/app/app-selectors";
import { setText } from "../../slices/app/app-slice";

const PromptTextArea = () => {
  const text = useAppText();
  const dispatch = useAppDispatch();

  const handleChange = (newText: string) => {
    dispatch(setText(newText));
  };

  return (
    <div>
      <TextArea
        text={text}
        onChange={handleChange}
        name="promptText"
        editable={true}
      />
    </div>
  );
};

export default PromptTextArea;
