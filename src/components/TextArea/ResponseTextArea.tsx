import TextArea from "./TextArea";
import { useAppResponse } from "../../slices/app/app-selectors";

const ResponseTextArea = () => {
  const responseText = useAppResponse();

  return (
    <div>
      <TextArea
        text={responseText}
        onChange={() => {}}
        name="responseText"
        editable={false}
      />
    </div>
  );
};

export default ResponseTextArea;