import { useState } from 'react';
import { useAuth } from '../context/useAuth.js';

function Register({ onNavigate }) {
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      await register(name, email, password);
      setIsRegistered(true);
    } catch (registerError) {
      setError(registerError.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section>
      <h1>Create an account</h1>
      {isRegistered ? (
        <>
          <p role="status">Your account was created. You can now log in.</p>
          <button type="button" onClick={() => onNavigate('login')}>
            Go to login
          </button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              autoComplete="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </label>
          <label>
            Email
            <input
              autoComplete="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              autoComplete="new-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Creating account...' : 'Register'}
          </button>
          {error && <p role="alert">{error}</p>}
        </form>
      )}
    </section>
  );
}

export default Register;
