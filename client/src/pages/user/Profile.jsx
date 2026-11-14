import { useAuth } from '../../context/useAuth.js';

function Profile() {
  const { user } = useAuth();

  return (
    <section>
      <h1>Profile</h1>
      <p>{user?.name || user?.email}</p>
    </section>
  );
}

export default Profile;
