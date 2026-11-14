const adminNavigation = [
  { id: 'adminDashboard', label: 'Dashboard' },
  { id: 'manageJobs', label: 'Manage jobs' },
  { id: 'manageUsers', label: 'Manage users' },
  { id: 'manageSupport', label: 'Manage support' },
  { id: 'manageAdmins', label: 'Manage admins' },
];

function Sidebar({ activePage, onNavigate }) {
  return (
    <aside aria-label="Admin navigation">
      <nav>
        {adminNavigation.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            aria-current={activePage === id ? 'page' : undefined}
            onClick={() => onNavigate(id)}
          >
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
