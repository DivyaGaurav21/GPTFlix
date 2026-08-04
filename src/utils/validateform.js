export function validateForm(formData, isSignUp, setError) {
  const err = {};

  // Name validation (only for Sign Up)
  if (!isSignUp && !formData.name.trim()) {
    err.nameError = "Name is required.";
  }

  // Email validation
  if (!formData.email.trim()) {
    err.emailError = "Email is required.";
  } else {
    const emailRegex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(formData.email)) {
      err.emailError = "Please enter a valid email address.";
    }
  }

  // Password validation
  if (!formData.password.trim()) {
    err.passwordError = "Password is required.";
  } else if (formData.password.length < 6) {
    err.passwordError = "Password must be at least 6 characters.";
  }

  setError(err);

  return Object.keys(err).length === 0;
}