import ChatMessage from './ChatMessage.jsx';

function ChatWindow() {
  return (
    <section aria-label="Chat conversation">
      <ChatMessage message="Your conversation will appear here." />
    </section>
  );
}

export default ChatWindow;
