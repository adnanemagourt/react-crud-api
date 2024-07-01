import { useState, useEffect } from 'react';

import { Alert, Button, Modal, InputGroup, FormControl, Form } from 'react-bootstrap';
import Pagination from './Pagination';
import UserRow from './UserRow';
import UserCreate from '../containers/UserCreate';
import UserGetOne from '../containers/UserGetOne';

const UserList = ({ users, handleDeleteUser, handleCreateUser, handleUpdateUser }) => {

    const sortedUsers = users.sort((a, b) => a.username.localeCompare(b.username));
    const NextId = users.reduce((acc, user) => Math.max(acc, user.id), 0) + 1;

    const [handleShowAdd, setShowAdd] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(6);
    const [searchTerm, setSearchTerm] = useState('');
    const [user_id, setUserId] = useState();
    const [showDetails, setShowDetails] = useState(false);

    const searchResults = sortedUsers.filter((user) => {
        return user.username.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        closeAdd();
        return () => {
            handleShowAlert();
        };
    }, [sortedUsers]);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = searchResults.slice(indexOfFirstUser, indexOfLastUser);
    const totalPagesNum = Math.ceil(searchResults.length / usersPerPage);

    const showAdd = () => setShowAdd(true);
    const closeAdd = () => setShowAdd(false);
    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    };



    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-4">
                        <h2>Manage <b>Users</b></h2>
                    </div>
                    <div className="col-sm-2">
                        <Form.Control
                            placeholder="Get one user by ID"
                            type="number"
                            min="1"
                            max={NextId - 1}
                            onChange={(e) => setUserId(e.target.value)}
                            required
                        />
                        <Button variant="success" type="button" onClick={() => { setShowDetails(true) }}>
                            Search
                        </Button>
                    </div>
                    <div className="col-sm-6 d-flex justify-content-end">
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Search..."
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                        </InputGroup>
                        <Button onClick={showAdd} className="btn btn-success ml-2" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New User</span></Button>
                    </div>

                </div>
            </div>

            <Alert show={showAlert} variant='success'>
                User list updated successfully!
            </Alert>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Username</th>
                        <th>Mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentUsers.map(user => (
                            <tr key={user.id}>
                                <UserRow user={user} handleDeleteUser={handleDeleteUser} handleUpdateUser={handleUpdateUser} />
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <Pagination pages={totalPagesNum}
                setCurrentPage={setCurrentPage}
                allUsers={searchResults.length}
                usersPerPage={usersPerPage}
                setUsersPerPage={setUsersPerPage}
            />

            <Modal show={handleShowAdd} onHide={closeAdd}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UserCreate handleCreateUser={handleCreateUser} close={closeAdd} NextId={NextId} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeAdd}>Close</Button>
                </Modal.Footer>
            </Modal>
            
            { showDetails ? <UserGetOne user_id={user_id} showDetails={showDetails} setShowDetails={setShowDetails} /> : null}

        </>
    );
}


export default UserList;
