import React, {useEffect, useState} from 'react';

import UserList from '../components/UserList';

export default function UserGetAll() {

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleCreateUser = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
  };

  const handleUpdateUser = (updatedUser) => {
    const updatedUsers = users.map((user) => {
      if (user.id === updatedUser.id) {
        return updatedUser;
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://666b0d847013419182d2132e.mockapi.io/api/v1/users", {
      method: "GET",
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setUsers(data);
    })
  }, []);

  if (!users) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  console.log(users)

  return (
    <UserList users={users} handleDeleteUser={handleDeleteUser} handleCreateUser={handleCreateUser} handleUpdateUser={handleUpdateUser} />
  );
}




