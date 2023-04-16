import React, { useState } from 'react';
import './ComplaintForm.scss';

function ComplaintForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data to backend or process locally
    console.log({ name, email, complaint });
  };

  return (
    <form className="complaint-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="complaint">Complaint:</label>
        <textarea
          id="complaint"
          value={complaint}
          onChange={(event) => setComplaint(event.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default complain-form;
