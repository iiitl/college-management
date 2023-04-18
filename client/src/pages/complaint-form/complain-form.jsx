import React, { useState } from 'react';
import './complain-form.scss';

const ComplaintForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data to the server
  };

  return (
    <form className="complaint-form" onSubmit={handleSubmit}>
      <h1 style={{textAlign:"center",
                  color: "orange",
                  fontFamily:"verdana",
                  fontWeight:"bold",
                  fontSize: "40px"
    }}>Complain Form</h1>
      <label>
        Username
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </label>
      <label>
        Email
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
      </label>
      <label>
        Complaint
        <textarea value={complaint} onChange={(e) => setComplaint(e.target.value)} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ComplaintForm;


