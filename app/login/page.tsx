'use client';

import { useState } from 'react';
import { supabase } from '../supabase';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage('Login successful!');

    window.location.href = '/';
  }

  async function handleGoogleLogin() {
    setMessage('');

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
      },
    });

    if (error) {
      setMessage(error.message);
    }
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#070707',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '420px',
          background: '#111',
          border: '1px solid #292929',
          borderRadius: '16px',
          padding: '35px',
          boxSizing: 'border-box',
        }}
      >
        {/* LOGO */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '30px',
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: '30px',
              fontWeight: '900',
            }}
          >
            BW <span style={{ color: '#ff6a00' }}>ARENA</span>
          </h1>

          <p
            style={{
              color: '#888',
              marginTop: '8px',
            }}
          >
            FREE FIRE ESPORTS
          </p>
        </div>

        <h2
          style={{
            marginBottom: '8px',
          }}
        >
          Welcome Back
        </h2>

        <p
          style={{
            color: '#888',
            fontSize: '14px',
            marginBottom: '25px',
          }}
        >
          Login to participate in tournaments.
        </p>

        {/* LOGIN FORM */}
        <form onSubmit={handleLogin}>
          <label
            style={{
              display: 'block',
              marginBottom: '8px',
            }}
          >
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '13px',
              marginBottom: '18px',
              boxSizing: 'border-box',
              background: '#181818',
              color: '#fff',
              border: '1px solid #333',
              borderRadius: '8px',
              fontSize: '15px',
            }}
          />

          <label
            style={{
              display: 'block',
              marginBottom: '8px',
            }}
          >
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '13px',
              marginBottom: '20px',
              boxSizing: 'border-box',
              background: '#181818',
              color: '#fff',
              border: '1px solid #333',
              borderRadius: '8px',
              fontSize: '15px',
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px',
              background: loading ? '#884000' : '#ff6a00',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'LOGGING IN...' : 'LOGIN'}
          </button>
        </form>

        {/* MESSAGE */}
        {message && (
          <div
            style={{
              marginTop: '18px',
              padding: '12px',
              background: '#181818',
              border: '1px solid #333',
              borderRadius: '8px',
              color: message === 'Login successful!' ? '#4ade80' : '#ff7777',
              fontSize: '14px',
            }}
          >
            {message}
          </div>
        )}

        {/* OR */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            margin: '25px 0',
            color: '#555',
          }}
        >
          <div
            style={{
              flex: 1,
              height: '1px',
              background: '#333',
            }}
          />

          OR

          <div
            style={{
              flex: 1,
              height: '1px',
              background: '#333',
            }}
          />
        </div>

        {/* GOOGLE LOGIN */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          style={{
            width: '100%',
            padding: '13px',
            background: '#fff',
            color: '#111',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '15px',
            cursor: 'pointer',
          }}
        >
          Continue with Google
        </button>

        {/* REGISTER */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '25px',
            fontSize: '14px',
            color: '#888',
          }}
        >
          Don't have an account?{' '}
          <a
            href="/register"
            style={{
              color: '#ff6a00',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Register
          </a>
        </div>

        {/* BACK */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '20px',
          }}
        >
          <a
            href="/"
            style={{
              color: '#666',
              textDecoration: 'none',
              fontSize: '13px',
            }}
          >
            ← Back to BW Arena
          </a>
        </div>
      </div>
    </main>
  );
}