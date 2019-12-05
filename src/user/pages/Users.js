import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image: "https://avatars0.githubusercontent.com/u/28806196?s=460&v=4",
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
