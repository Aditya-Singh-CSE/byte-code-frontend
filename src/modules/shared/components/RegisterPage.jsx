import  { useState } from 'react';
import './RegisterPage.css';
import { Mail, Lock, User, Phone, Eye, EyeOff , Github} from 'lucide-react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration attempted with:', formData);
  };

  return (
    <div className="page-wrapper">
      <div className="register-container">
        <div className="register-box">
          <div className="logo-section">
            <h1>Create Account</h1>
            <p>Get started with your free account</p>
          </div>
          
          <form onSubmit={handleSubmit} className="register-form">
            <div className="input-group">
              <User className="input-icon" size={20} />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <Mail className="input-icon" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <Phone className="input-icon" size={20} />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <Lock className="input-icon" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={togglePassword}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="terms-checkbox">
              <label>
                <input type="checkbox" required />
                <span>I agree to the <a href="#">Terms & Conditions</a></span>
              </label>
            </div>

            <button type="submit" className="register-button">
              Create Account
            </button>
          </form>

          <div className="divider">
            <span>or</span>
          </div>

          <div className="social-login">
            <button className="social-button google">
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PHBhdGggZD0iTTE4IDEySDEyTTEyIDZWMTgiLz48L3N2Zz4=" alt="Google" />
              <span>Sign up with Google</span>
            </button>
            <button className="social-button github">
              <Github size={18} />
              <span>Sign up with GitHub</span>
            </button>
            <button className="social-button linkedin">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48A1.56,1.56,0,1,1,8.15,6.92,1.57,1.57,0,0,1,6.59,8.48ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
              </svg>
              <span>Sign up with LinkedIn</span>
            </button>
          </div>

          <div className="login-link">
            Already have an account? <a href="#">Login here</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;