import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLogin, setIsLogin] = useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert('Login successful! (Demo)');
    } else {
      alert('Registration successful! (Demo)');
    }
  };

  return (
    <section className="auth-page">
      <div className="container">
        <div className="auth-card">
          <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
          <p className="auth-toggle">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button onClick={() => setIsLogin(!isLogin)} className="toggle-link">
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
          
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn btn-primary full-width">
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
