function ChatMessage({ message, role = 'assistant' }) {
  return (
    <p className={`chat-message chat-message--${role}`}>
      {message}
    </p>
  );
}

export default ChatMessage;
