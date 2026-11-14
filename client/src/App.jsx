import { useCallback, useState } from 'react';
import AdminLayout from './layouts/AdminLayout.jsx';
import UserLayout from './layouts/UserLayout.jsx';
import { useAuth } from './context/useAuth.js';
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AdminDashboard from './pages/admin/Dashboard.jsx';
import ManageAdmins from './pages/admin/ManageAdmins.jsx';
import ManageJobs from './pages/admin/ManageJobs.jsx';
import ManageSupport from './pages/admin/ManageSupport.jsx';
import ManageUsers from './pages/admin/ManageUsers.jsx';
import UserChat from './pages/user/Chat.jsx';
import UserDashboard from './pages/user/Dashboard.jsx';
import UserJobs from './pages/user/Jobs.jsx';
import Profile from './pages/user/Profile.jsx';
import UserSupport from './pages/user/Support.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

const pages = {
  landing: LandingPage,
  login: Login,
  register: Register,
  userDashboard: UserDashboard,
  jobs: UserJobs,
  chat: UserChat,
  support: UserSupport,
  profile: Profile,
  adminDashboard: AdminDashboard,
  manageJobs: ManageJobs,
  manageUsers: ManageUsers,
  manageSupport: ManageSupport,
  manageAdmins: ManageAdmins,
};

const adminPages = new Set([
  'adminDashboard',
  'manageJobs',
  'manageUsers',
  'manageSupport',
  'manageAdmins',
]);

const userPages = new Set(['userDashboard', 'jobs', 'chat', 'support', 'profile']);

function App() {
  const [activePage, setActivePage] = useState('landing');
  const { user, logout } = useAuth();
  const Page = pages[activePage] ?? LandingPage;
  const redirectToLogin = useCallback(() => setActivePage('login'), []);
  const onLogout = () => {
    logout();
    setActivePage('landing');
  };

  if (adminPages.has(activePage)) {
    return (
      <ProtectedRoute
        onUnauthenticated={redirectToLogin}
        requiredRole="admin"
      >
        <AdminLayout
          activePage={activePage}
          onLogout={onLogout}
          onNavigate={setActivePage}
          user={user}
        >
          <Page />
        </AdminLayout>
      </ProtectedRoute>
    );
  }

  if (userPages.has(activePage)) {
    return (
      <ProtectedRoute
        onUnauthenticated={redirectToLogin}
        requiredRole="user"
      >
        <UserLayout
          activePage={activePage}
          onLogout={onLogout}
          onNavigate={setActivePage}
          user={user}
        >
          <Page />
        </UserLayout>
      </ProtectedRoute>
    );
  }

  return (
    <UserLayout
      activePage={activePage}
      onLogout={onLogout}
      onNavigate={setActivePage}
      user={user}
    >
      <Page onNavigate={setActivePage} />
    </UserLayout>
  );
}

export default App;
