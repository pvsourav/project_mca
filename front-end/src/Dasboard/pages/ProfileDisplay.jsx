import React from 'react';
import ProfileCard from '../../components/ProfileCard';
import './profiledisplay.scss'
import dp from '../../assets/tkm3.jpeg'

const profiles = [
  {
    id: 1,
    name: "Anand",
    batch: "2021-25",
    company: "TCS",
    location: "Texas, USA",
    profilePic: dp
  },
  {
    id: 2,
    name: "Priya",
    batch: "2020-24",
    company: "Google",
    location: "California, USA",
    profilePic: dp
  },
  {
    id: 3,
    name: "Raj kumar",
    batch: "2022-26",
    company: "Microsoft",
    location: "Washington, USA",
    profilePic: dp
  },
  {
    id: 1,
    name: "Anand",
    batch: "2021-25",
    company: "TCS",
    location: "Texas, USA",
    profilePic: dp
  },
  {
    id: 2,
    name: "Priya",
    batch: "2020-24",
    company: "Google",
    location: "California, USA",
    profilePic: dp
  },
  {
    id: 3,
    name: "Raj",
    batch: "2022-26",
    company: "Microsoft",
    location: "Washington, USA",
    profilePic: dp
  },
  {
    id: 1,
    name: "Anand Prakash",
    batch: "2021-25",
    company: "TCS",
    location: "Texas, USA",
    profilePic: dp
  },
  {
    id: 2,
    name: "Muhammed Anas Bin Manzoor",
    batch: "2020-24",
    company: "Google",
    location: "California, USA",
    profilePic: dp
  },
  {
    id: 3,
    name: "Raj",
    batch: "2022-26",
    company: "Microsoft",
    location: "Washington, USA",
    profilePic: dp
  }
];

const ProfileDisplay = () => {
  return (
    <div className="profiles-wrapper">
      {profiles.map(profile => (
        <ProfileCard
          key={profile.id}
          name={profile.name}
          batch={profile.batch}
          company={profile.company}
          location={profile.location}
          profilePic={profile.profilePic}
        />
      ))}
    </div>
  );
};

export default ProfileDisplay;