import { useState, useEffect } from "react";
import { Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import UserDelete from "../containers/UserDelete";
import UserUpdate from "../containers/UserUpdate";
import UserDetailsModal from "./UserDetailsModal";

export default function UserRow ({ user, handleDeleteUser, handleUpdateUser }) {

    const [showEdit, setShowEdit] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    const closeEdit = () => setShowEdit(false);

    useEffect(() => {
        setShowEdit(false);
    }, [user]);


    const imageStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%'
    };


    return (
        <>
            <td>
                <img style={imageStyle} src={user.avatar} alt={user.username} className="avatar" />
            </td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }>
                    <button onClick={()=>{setShowEdit(true)}} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Delete
                        </Tooltip>
                    }>
                    <button onClick={() => setShowDeleteModal(true)} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Details
                        </Tooltip>
                    }>
                    <button onClick={() => setShowDetails(true)} className="btn text-info btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Details">&#xE88E;</i></button>
                </OverlayTrigger>
            </td>

            <Modal show={showEdit} onHide={closeEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Edit User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UserUpdate handleUpdateUser={handleUpdateUser} user={user} close={closeEdit} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeEdit}>Close</Button>
                </Modal.Footer>
            </Modal>

            <UserDelete
                show={showDeleteModal}
                onHide={() => setShowDeleteModal(false)}
                user={{ id: user.id, username: user.username}}
                handleDeleteUser={handleDeleteUser}
            />

            <UserDetailsModal showDetails={showDetails} setShowDetails={setShowDetails} user={user} />

        </>
    );
}
