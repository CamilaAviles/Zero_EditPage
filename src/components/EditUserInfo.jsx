import React, { useState } from 'react';

const EditUserInfo = ({ userInfo, updateUserInfo }) => {
  const [form, setForm] = useState(userInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserInfo(form);
  };

  return (
    <div>
      <h2>Edit User Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Role:
            <input
              type="text"
              name="role"
              value={form.role}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditUserInfo;
