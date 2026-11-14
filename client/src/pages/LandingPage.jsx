function LandingPage({ onNavigate }) {
  return (
    <section>
      <h1>Welcome to JobBridge</h1>
      <p>Your multilingual job assistant.</p>
      <button type="button" onClick={() => onNavigate('register')}>
        Get started
      </button>
    </section>
  );
}

export default LandingPage;
