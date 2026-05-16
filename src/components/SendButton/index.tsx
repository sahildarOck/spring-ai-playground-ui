import SendButton from "./SendButton";
import { useAppText } from "../../slices/app-selectors";
import { useAppDispatch } from "../../store/hooks";
import { setPrompt } from "../../slices/app-slice";
import { useLazyGetResponseQuery } from "../../slices/api";

const SendButtonContainer = () => {
  const text = useAppText();
  const dispatch = useAppDispatch();
  const [trigger] = useLazyGetResponseQuery();

  const handleClick = () => {
    dispatch(setPrompt(text));
    if (text) {
      trigger(text);
    }
  };
  return <SendButton onClick={handleClick} />;
};

export default SendButtonContainer;
