import React from "react";

import UsersList from "../components/UserList";

const Users = () => {
  const USERS = [
    // {
    //   id: "u1",
    //   name: "Max Schwarz",
    //   image:
    //     "https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/france/paris/paris-cityscape-overview-guide-xlarge.jpg",
    //   places: 3
    // }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
