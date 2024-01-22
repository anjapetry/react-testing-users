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
    <div>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
        </div>
        <div>
            <label>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
        </div>
        <button>Add User</button>
    </form>
  )
}

export default UserForm;