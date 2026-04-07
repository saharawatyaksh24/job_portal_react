function JobList({ jobs, deleteJob }) {
  return (
    <div>
      {jobs.length === 0 ? (
        <p>No jobs available</p>
      ) : (
        jobs.map((job) => (
          <div className="job-card" key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <button onClick={() => deleteJob(job.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default JobList;