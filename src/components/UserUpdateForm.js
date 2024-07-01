import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';



export default function UserUpdateForm({ user, handleUpdateUser, close }) {

    const [updatedUser, setUpdatedUser] = useState(user);

    const emptyUser = {
        username: "",
        email: "",
        city: "",
        birthday: "",
        favcolor: "",
        currency: "",
        password: "",
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdateUser(updatedUser);
        close();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="username"
                    value={updatedUser.username}
                    onChange={(e) => { setUpdatedUser({ ...updatedUser, username: e.target.value }) }}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="email"
                    value={updatedUser.email}
                    onChange={(e) => { setUpdatedUser({ ...updatedUser, email: e.target.value }) }}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="city"
                    value={updatedUser.city}
                    onChange={(e) => { setUpdatedUser({ ...updatedUser, city: e.target.value }) }}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Birthday</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="birthday"
                    value={updatedUser.birthday}
                    onChange={(e) => { setUpdatedUser({ ...updatedUser, birthday: e.target.value }) }}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Favourite color</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="favcolor"
                    value={updatedUser.favcolor}
                    onChange={(e) => { setUpdatedUser({ ...updatedUser, favcolor: e.target.value }) }}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Currency</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="currency"
                    value={updatedUser.currency}
                    onChange={(e) => { setUpdatedUser({ ...updatedUser, currency: e.target.value }) }}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="password"
                    value={updatedUser.password}
                    onChange={(e) => { setUpdatedUser({ ...updatedUser, password: e.target.value }) }}
                    required
                />
            </Form.Group>
            <Button variant="secondary" type="button" onClick={() => { setUpdatedUser(user) }}>
                Reset
            </Button>
            <Button variant="danger" type="button" onClick={() => { setUpdatedUser(emptyUser) }}>
                Clear
            </Button>
            <Button variant="success" type="submit">
                Edit User
            </Button>
        </Form>
    );
}


