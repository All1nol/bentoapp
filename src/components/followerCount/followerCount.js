import React, { useState } from 'react';
import axios from 'axios';

const FollowerCount = () => {
  const [username, setUsername] = useState('');
  const [followerCount, setFollowerCount] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/followers/${username}`);
      setFollowerCount(response.data.followerCount);
    } catch (error) {
      console.error('Error fetching follower count:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Twitter username"
      />
      <button onClick={handleSearch}>Search</button>
      {followerCount !== null && (
        <p>{`${username} has ${followerCount} followers.`}</p>
      )}
    </div>
  );
};

export default FollowerCount; // Add this line to export the FollowerCount component
