import React from 'react';

import UserUpdateForm from '../components/UserUpdateForm';

export default function UserUpdate({ user, close, handleUpdateUser }) {

    function UpdateUser(updatedUser) {
        fetch("https://666b0d847013419182d2132e.mockapi.io/api/v1/users/" + user.id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            handleUpdateUser(updatedUser);
        })
    }

    return (
        <UserUpdateForm user={user} handleUpdateUser={UpdateUser} close={close} />
    );
}




