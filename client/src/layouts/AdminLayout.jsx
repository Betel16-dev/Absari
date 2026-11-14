import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';

function AdminLayout({ activePage, children, onLogout, onNavigate, user }) {
  return (
    <>
      <Navbar
        activePage={activePage}
        onLogout={onLogout}
        onNavigate={onNavigate}
        user={user}
      />
      <div className="admin-layout">
        <Sidebar activePage={activePage} onNavigate={onNavigate} />
        <main>{children}</main>
      </div>
    </>
  );
}

export default AdminLayout;
