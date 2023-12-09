import React, { useState } from 'react';
import './Form.css';
import './app.css'


const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormErrors({
      ...formErrors,
      [name]: '',
    });

    if (formData[name] !== value) {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newFormErrors = { ...formErrors };
    if (formData.name === '' || formData.name.length < 4 || formData.name.length > 20) {
      newFormErrors.name = 'Name should be 4-20 characters';
      isValid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email === '' || !emailRegex.test(formData.email)) {
      newFormErrors.email = 'Enter a valid email address';
      isValid = false;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[\S]+$/;
    if (
      formData.password === '' ||
      !passwordRegex.test(formData.password) ||
      formData.password.length < 8
    ) {
      newFormErrors.password =
        'Password should Have atleast one number , symbol , Capital letter';
      isValid = false;
    }
    setFormErrors(newFormErrors);
    setIsFormValid(isValid);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form Data:', formData);
      alert("SIGN IN SUCCESSFUL")
    } else {
      console.log('Form Validation Failed');
    }
  };

  return (
    <main>
      <div class="container" id="container">
        <div class="form-container sign-in-container">
          <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <div class="social-container">
              <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
              <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <div className="inp">
              <i class="fa-solid fa-user"></i>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            {formErrors.name && <div className="error-message">{formErrors.name}</div>}
            <div className="inp">
              <i class="fa-solid fa-envelope"></i>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {formErrors.email && <div className="error-message">{formErrors.email}</div>}
            <div className="inp">
              <i class="fa-solid fa-lock"></i>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {formErrors.password && (
              <div className="error-message">{formErrors.password}</div>
            )}

            <button>Sign In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <div className="logos">
                <div className='radio'><img src="https://i.imgur.com/28akQFX.jpg" width="100px" height="30px" /></div>
              </div>
              <h1>Welcome Back!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button class="ghost" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Form;
