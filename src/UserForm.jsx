import { useState } from 'react';

const UserForm = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, email);
  }

  return (
  <form onSubmit={handleSubmit}>
    <div>
        <label>Username</label>
        <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" />
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