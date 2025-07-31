
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav>
        <img src="/logo.png" alt="Qindil Logo" class="logo" />
        <ul class="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/students">Students</Link></li>
          <li><Link to="/teachers">Teachers</Link></li>
          <li><Link to="/teacher/dashboard">Teacher Dashboard</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
        <a class="cta" href="#start">Get Started</a>
      </nav>
    </header>
  );
}
