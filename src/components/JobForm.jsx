import { useState } from "react";

function JobForm({ addJob }) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = () => {
    if (!title || !company) return;

    addJob({
      id: Date.now(),
      title,
      company,
    });

    setTitle("");
    setCompany("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <button onClick={handleSubmit}>Add Job</button>
    </div>
  );
}

export default JobForm;