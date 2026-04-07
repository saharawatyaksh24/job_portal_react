import { useState } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import "./styles/Job.css";

function App() {
  const [jobs, setJobs] = useState([]);

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>JobPortal</h2>
        <div>
          <button className="nav-btn">Login</button>
          <button className="nav-btn">Register</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h1>Find Your Dream Job</h1>
        <p>Search jobs from top companies</p>
      </div>

      {/* Main Section */}
      <div className="container">
        <JobForm addJob={addJob} />
        <JobList jobs={jobs} deleteJob={deleteJob} />
      </div>
    </div>
  );
}

export default App;