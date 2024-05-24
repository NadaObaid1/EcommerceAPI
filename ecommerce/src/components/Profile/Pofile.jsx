import React, { useEffect, useState } from 'react';
import './Profile.css'
import axios from 'axios';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    const signIn = async () => {
      try {
        const response = await axios.post(`https://ecommerce-node4-five.vercel.app/auth/signin`, {
          email: 'nada.s.obaidd@gmail.com',
          password: '12345',
        });
        const accessToken = response.data.token;
        setToken(accessToken);
      } catch (error) {
        console.error('Error signing in:', error);
      }
    };

    signIn();
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`https://ecommerce-node4-five.vercel.app/user/profile`, {
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
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
