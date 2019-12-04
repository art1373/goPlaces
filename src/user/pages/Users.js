import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Max Schwarz',
      image:
        'https://external-preview.redd.it/iwhNGVPeJi2geKHiwECajD-5mLBsR5_a5yWGGPR3Pgo.jpg?width=960&crop=smart&auto=webp&s=c2ca8633626771398785d4314cf19b24bea41b68',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
