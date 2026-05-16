import "./App.css";
import PromptTextArea from "../TextArea/PromptTextArea";
import ResponseTextArea from "../TextArea/ResponseTextArea";
import SendButton from "../SendButton";

function App() {
  return (
    <>
      <PromptTextArea />
      <SendButton />
      <ResponseTextArea />
    </>
  );
}

export default App;
