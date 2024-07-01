import { Button, Form } from 'react-bootstrap';


export default function UserCreateForm({ emptyUser, createdUser, setCreatedUser, close, handleCreateUser }) {


    const handleSubmit = (e) => {
        e.preventDefault();
        handleCreateUser(createdUser);
        close();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="username"
                    value={createdUser.username}
                    onChange={(e) => { setCreatedUser({ ...createdUser, username: e.target.value }) }}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="email"
                    value={createdUser.email}
                    onChange={(e) => { setCreatedUser({ ...createdUser, email: e.target.value }) }}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="city"
                    value={createdUser.city}
                    onChange={(e) => { setCreatedUser({ ...createdUser, city: e.target.value }) }}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="birthday"
                    value={createdUser.birthday}
                    onChange={(e) => { setCreatedUser({ ...createdUser, birthday: e.target.value }) }}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="favcolor"
                    value={createdUser.favcolor}
                    onChange={(e) => { setCreatedUser({ ...createdUser, favcolor: e.target.value }) }}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="currency"
                    value={createdUser.currency}
                    onChange={(e) => { setCreatedUser({ ...createdUser, currency: e.target.value }) }}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="password"
                    value={createdUser.password}
                    onChange={(e) => { setCreatedUser({ ...createdUser, password: e.target.value }) }}
                    required
                />
            </Form.Group>
            <Button variant="danger" type="button" onClick={() => { setCreatedUser(emptyUser) }}>
                Clear
            </Button>
            <Button variant="success" type="submit">
                Create User
            </Button>
        </Form>
    );
}


