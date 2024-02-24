import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';

function Posts() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from your Django backend when the component mounts
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/get_users/');
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.error('Failed to fetch users');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <Layout title='sample | Users' content='Users page'>
        <div
          style={{
            backgroundColor: 'whitesmoke',
            width: '600px',
            position: 'relative',
            left: '250px',
            alignItems: 'center',
          }}
        >
          <h1 style={{ textAlign: 'center' }}>Users</h1>
          <div>
            <table className='table'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Posts;
