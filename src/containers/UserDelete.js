import React from 'react';

import ConfirmationModal from '../components/ConfirmationModal';

export default function UserDelete({ show, onHide, user, handleDeleteUser }) {

    const deleteUser = () => {
        fetch("https://666b0d847013419182d2132e.mockapi.io/api/v1/users/" + user.id, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                onHide();
                handleDeleteUser(user.id);
            })
    };

    return (
        <ConfirmationModal
            show={show}
            onHide={onHide}
            onConfirm={deleteUser}
            message={`Are you sure you want to delete ${user.username}?`}
        />
    );
}

