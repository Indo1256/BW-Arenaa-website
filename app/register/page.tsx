'use client';

import { useState } from 'react';
import { supabase } from '../supabase';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    if (loading) return;

    setMessage('');

    if (!username.trim()) {
      setMessage('Please enter a username.');
      return;
    }

    if (!email.trim()) {
      setMessage('Please enter your email.');
      return;
    }

    if (!password) {
      setMessage('Please enter a password.');
      return;
    }

    if (password.length < 6) {
      setMessage('Password must be at least 6 characters.');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    setLoading(true);
    setMessage('Creating your account...');

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password: password,
        options: {
          data: {
            username: username.trim(),
          },
        },
      });

      if (error) {
        setLoading(false);
        setMessage(error.message);
        return;
      }

      setLoading(false);

      if (data.user) {
        setMessage(
          'Account created successfully! Please check your email to confirm your account.'
        );

        setPassword('');
        setConfirmPassword('');
      } else {
        setMessage('Account creation completed.');
      }
    } catch (error) {
      setLoading(false);

      setMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      );
    }
  }

  async function handleGoogleRegister() {
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
          maxWidth: '450px',
          background: '#111',
          border: '1px solid #292929',
          borderRadius: '16px',
          padding: '35px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: '30px',
          }}
        >
          <h1 style={{ margin: 0, fontSize: '30px' }}>
            BW <span style={{ color: '#ff6a00' }}>ARENA</span>
          </h1>

          <p style={{ color: '#888', marginTop: '8px' }}>
            FREE FIRE ESPORTS
          </p>
        </div>

        <h2 style={{ marginBottom: '8px' }}>Create Account</h2>

        <p
          style={{
            color: '#888',
            fontSize: '14px',
            marginBottom: '25px',
          }}
        >
          Create your BW Arena account and start competing.
        </p>

        <label style={{ display: 'block', marginBottom: '8px' }}>
          Username
        </label>

        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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

        <label style={{ display: 'block', marginBottom: '8px' }}>
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

        <label style={{ display: 'block', marginBottom: '8px' }}>
          Password
        </label>

        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

        <label style={{ display: 'block', marginBottom: '8px' }}>
          Confirm Password
        </label>

        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
          type="button"
          onClick={handleRegister}
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
          {loading ? 'CREATING ACCOUNT...' : 'CREATE ACCOUNT'}
        </button>

        {message && (
          <div
            style={{
              marginTop: '18px',
              padding: '14px',
              background: '#181818',
              border: '1px solid #333',
              borderRadius: '8px',
              color: message.includes('successfully')
                ? '#4ade80'
                : '#ff7777',
              fontSize: '14px',
              lineHeight: '1.5',
            }}
          >
            {message}
          </div>
        )}

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            margin: '25px 0',
            color: '#555',
          }}
        >
          <div style={{ flex: 1, height: '1px', background: '#333' }} />
          OR
          <div style={{ flex: 1, height: '1px', background: '#333' }} />
        </div>

        <button
          type="button"
          onClick={handleGoogleRegister}
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

        <div
          style={{
            textAlign: 'center',
            marginTop: '25px',
            fontSize: '14px',
            color: '#888',
          }}
        >
          Already have an account?{' '}
          <a
            href="/login"
            style={{
              color: '#ff6a00',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Login
          </a>
        </div>

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