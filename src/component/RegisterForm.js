
import React, { useState } from "react";



function RegistrationForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}`);
    alert(`Name: ${name}, Phone: ${phone}, Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label>
        Email Address:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;

