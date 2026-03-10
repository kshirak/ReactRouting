import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    if (!role) {
      alert("Please select a role");
      return;
    } else {
      navigate("/home");
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      <p>Select Role:</p>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">--Select--</option>
        <option value="Student">Student</option>
        <option value="Admin">Admin</option>
      </select>
      <br /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
export default Login;