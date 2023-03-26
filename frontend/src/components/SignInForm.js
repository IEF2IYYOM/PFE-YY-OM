import { useState } from 'react';
import { toast } from 'react-toastify';
import '../SignIn.css';

function SignInPage() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Step 1

  const handleLoginSuccess = () => {
    setIsSignedIn(true); // Update the state on login success
  };

  const handleLoginFailure = (error) => {
    setIsSignedIn(false); // Update the state on login failure
    toast.error(error);
  };

  return (
    <>
      <SignInForm onLoginSuccess={handleLoginSuccess} onLoginFailure={handleLoginFailure} />
    </>
  );
}

function SignInForm({ onLoginSuccess, onLoginFailure }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [response, setResponse] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("handleSubmit called"); // Debugging console log

    const res = await fetch("http://localhost:3001/user/login", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log("data:", data); // Debugging console log

    if (data.error) {
      setResponse(data.error);
      onLoginFailure(data.error); // Call onLoginFailure on login failure
    } else {
      setResponse(data.message);
      onLoginSuccess(); // Call onLoginSuccess on login success
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-field">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
      </div>
      <div className="form-field">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
        />
      </div>
      <button type="submit" className="form-submit">Submit</button>
      {response && <p>{response}</p>}
    </form>
  );
}


export default SignInPage;
