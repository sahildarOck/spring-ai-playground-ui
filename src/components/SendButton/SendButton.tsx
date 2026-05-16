interface SendButtonProps {
  onClick: () => void;
}

const SendButton = ({ onClick }: SendButtonProps) => {
  return <button onClick={onClick}>Send</button>;
};

export default SendButton;
