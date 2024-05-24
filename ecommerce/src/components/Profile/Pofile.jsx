import React, { useEffect, useState } from 'react';
import './Profile.css'
import axios from 'axios';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`https://ecommerce-node4-five.vercel.app/user/profile`, {
          headers: {
            Authorization: `Tariq__eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGYzNzJkZWEyODFmYmEyZWFkZDkwMCIsInVzZXJOYW1lIjoiTmFkYU9iYWlkIiwicm9sZSI6IlVzZXIiLCJzdGF0dXMiOiJBY3RpdmUiLCJpYXQiOjE3MTY1MTA4NjZ9.oZbZ-uwoNxDFl6ysDhTf_Q8kI-4ZCNwJYjq5kEdq42A`,
          },
        });
        setProfileData(response.data.user);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      {profileData ? (
        <div className="profile">
          <h1>Your Profile</h1>
          <div className="profile-info">
            <div className="profile-image">
              <img src={profileData.image.secure_url} alt="Profile" />
            </div>
            <div className="profile-details">
              <div className="profile-item">
                <span className="profile-label">Username: </span>
                <span className="profile-value">{profileData.userName}</span>
              </div>
              <div className="profile-item">
                <span className="profile-label">Email: </span>
                <span className="profile-value">{profileData.email}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
