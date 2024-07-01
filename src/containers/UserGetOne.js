import React, { useEffect, useState } from 'react';

import UserDetailsModal from '../components/UserDetailsModal';
import ConfirmationModal from '../components/ConfirmationModal';

export default function UserGetOne({ user_id, showDetails, setShowDetails}) {

  const [user, setUser] = useState();

  useEffect(() => {
    fetch("https://666b0d847013419182d2132e.mockapi.io/api/v1/users/" + user_id, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      })
  }, []);

  
  if(user === "Not found"){
    return (
      <ConfirmationModal show={true} onHide={() => setShowDetails(false)} onConfirm={() => setShowDetails(false)} message="User not found" />
    );
  }

  if (!user) {
    return (
      <div>
      </div>
    );
  }

  return (
    <UserDetailsModal user={user} showDetails={showDetails} setShowDetails={setShowDetails} />
  );
}




