import { useState } from 'react';

const UserForm = ( { onUserAdded }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onUserAdded({
      email,
      name,
    });
  }

  return (
  <form onSubmit={handleSubmit}>
    <div className="form">
      <div className="label-wrapper">
        <label htmlFor="name">Name</label>
        <input id='name' value={name} onChange={(e) => setName(e.target.value)} type="text" />
        </div>
        <div className="label-wrapper">
            <label htmlFor='email'>Email</label>
            <input id='email' value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
        </div>
        </div>
        <button>Add User</button>
    </form>
  )
}

export default UserForm;