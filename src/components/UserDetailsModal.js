import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


export default function UserDetailsModal({showDetails, setShowDetails, user}) {

    return (
        <>
            <Modal show={showDetails} onHide={() => setShowDetails(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>User Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>ID:</Form.Label>
                        <Form.Control type="text" value={user.id} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="text" value={user.username} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Mail:</Form.Label>
                        <Form.Control type="text" value={user.email} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Created at:</Form.Label>
                        <Form.Control type="text" value={user.createdAt} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>City:</Form.Label>
                        <Form.Control type="text" value={user.city} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Birthday:</Form.Label>
                        <Form.Control type="text" value={user.birthday} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Favourite Color:</Form.Label>
                        <Form.Control type="text" value={user.favcolor} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Currency:</Form.Label>
                        <Form.Control type="text" value={user.currency} disabled />
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDetails(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

