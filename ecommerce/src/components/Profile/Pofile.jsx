import React, { useEffect, useContext, useState } from 'react';
import './Profile.css';
import axios from 'axios';
import { AuthContext } from '../../AuthContext';


const Profile = () => {
  const { token } = useContext(AuthContext);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('https://ecommerce-node4-five.vercel.app/user/profile', {
          headers: {
            Authorization: `Tariq__${token}`,
          },
        });
        setProfileData(response.data.user);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    if (token) {
      fetchProfile();
    }
  }, [token]);

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
        <p style={{fontSize: '30px', color: 'red', marginBottom: '110px'}}>Please Login before...</p>
      )}
    </div>
  );
};

export default Profile;
