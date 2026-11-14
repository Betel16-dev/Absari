import { useState } from 'react';
import { AuthContext } from './authContext.js';
import { apiRequest } from '../services/api.js';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(email, password) {
    const result = await apiRequest('auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!result?.user || typeof result.user.role !== 'string') {
      throw new Error('The login response did not include a valid user.');
    }

    setUser(result.user);
    return result.user;
  }

  async function register(name, email, password) {
    return apiRequest('auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}
