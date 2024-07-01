import React from 'react';
import { useState } from 'react';

import UserCreateForm from '../components/UserCreateForm';

export default function UserCreate({ close, NextId }) {

    const emptyUser = {
        id: "",
        createdAt: "",
        username: "",
        email: "",
        city: "",
        birthday: "",
        favcolor: "",
        currency: "",
        password: "",
        avatar: "",
    };

    const [createdUser, setCreatedUser] = useState(emptyUser);


    const handleCreateUser = () => {
        createdUser.id = NextId;
        createdUser.createdAt = new Date().toISOString();

        fetch("https://666b0d847013419182d2132e.mockapi.io/api/v1/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(createdUser),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
    };

    return (
        <UserCreateForm emptyUser={emptyUser} createdUser={createdUser} setCreatedUser={setCreatedUser} close={close} handleCreateUser={handleCreateUser} />
    );
}


