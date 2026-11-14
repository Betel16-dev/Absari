function Navbar({ activePage, onLogout, onNavigate, user }) {
  return (
    <nav aria-label="Main navigation">
      <button
        type="button"
        aria-current={activePage === 'landing' ? 'page' : undefined}
        onClick={() => onNavigate('landing')}
      >
        JobBridge
      </button>
      {user ? (
        <>
          {user.role === 'user' && (
            <>
              <button type="button" onClick={() => onNavigate('userDashboard')}>
                Dashboard
              </button>
              <button type="button" onClick={() => onNavigate('jobs')}>
                Jobs
              </button>
              <button type="button" onClick={() => onNavigate('chat')}>
                Chat
              </button>
              <button type="button" onClick={() => onNavigate('support')}>
                Support
              </button>
              <button type="button" onClick={() => onNavigate('profile')}>
                Profile
              </button>
            </>
          )}
          {user.role === 'admin' && (
            <button type="button" onClick={() => onNavigate('adminDashboard')}>
              Admin
            </button>
          )}
          <button type="button" onClick={onLogout}>
            Log out
          </button>
        </>
      ) : (
        <>
          <button
            type="button"
            aria-current={activePage === 'login' ? 'page' : undefined}
            onClick={() => onNavigate('login')}
          >
            Log in
          </button>
          <button
            type="button"
            aria-current={activePage === 'register' ? 'page' : undefined}
            onClick={() => onNavigate('register')}
          >
            Register
          </button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
