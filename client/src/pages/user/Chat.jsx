import ChatWindow from '../../components/ChatWindow.jsx';
import LanguageSelector from '../../components/LanguageSelector.jsx';

function Chat() {
  return (
    <section>
      <h1>Chat</h1>
      <LanguageSelector />
      <ChatWindow />
    </section>
  );
}

export default Chat;
