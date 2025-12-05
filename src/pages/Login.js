import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useMutation } from '@tanstack/react-query';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLogin, setIsLogin] = useState(true);
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: isLogin ? login : register,
    onSuccess: (result) => {
      if (result.success) {
        navigate('/courses');
      }
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      ...(isLogin ? { email: formData.email, password: formData.password } : {
        name: formData.name,
        email: formData.email,
        password: formData.password
      })
    });
  };

  return (
    <section className="auth-page">
      <div className="container">
        <div className="auth-card">
          <h1>{isLogin ? 'Welcome Back' : 'Join Knowledge Brewers'}</h1>
          
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name || ''}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
            <button 
              type="submit" 
              className="btn btn-primary full-width"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? 'Loading...' : (isLogin ? 'Login' : 'Sign Up')}
            </button>
          </form>

          {mutation.isError && (
            <div className="error-message">{mutation.error.message}</div>
          )}

          <p className="auth-toggle">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button 
              type="button"
              onClick={() => setIsLogin(!isLogin)} 
              className="toggle-link"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
