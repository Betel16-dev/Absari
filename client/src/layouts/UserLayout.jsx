import Navbar from '../components/Navbar.jsx';

function UserLayout({ activePage, children, onLogout, onNavigate, user }) {
  return (
    <>
      <Navbar
        activePage={activePage}
        onLogout={onLogout}
        onNavigate={onNavigate}
        user={user}
      />
      <main>{children}</main>
    </>
  );
}

export default UserLayout;
