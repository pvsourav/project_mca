import React, { useState, useRef } from 'react';
import { Camera, User, Mail, Phone, Building, MapPin, Briefcase, Calendar, Upload, SkipForward, Send, Globe, CalendarHeart } from "lucide-react";
import './details.scss';
import avatar from '../assets/emoji.png';
import upload from '../assets/upload.png';
import tkmimg from '../assets/back1.jpg';
import logo from '../assets/logo.png';

const ProfileForm = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({length: currentYear - 1949}, (_, i) => currentYear - i);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    batchFrom: "",
    batchTo: "",
    email: "",
    phoneNumber: "",
    organisation: "",
    workType: "",
    country: "",
    location: "",
    role: "",
    dateJoined: "",
  });

  const [profilePicture, setProfilePicture] = useState(null);
  const [fileName, setFileName] = useState("profile picture");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log("Profile Picture:", profilePicture);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
      setFileName(file.name);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  // Work Type options
  const workTypes = [
    "IT",
    "Business",
    "Social Work",
    "Self Employed",
    "Homemaker",
    "Entrepreneur",
    "Government Sector",
    "Other"
  ];

  // Country list (this is a shortened list for brevity)
  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "India",
    "China",
    "Brazil",
    // ... Add more countries as needed
  ];

  return (
    <div className="profile-form">
      <div className="form-container">
      <div className="banner">
        hii
        <img src={tkmimg} alt="" />
        <span className="overlay"></span>
        <div className="tkm">
          <img src={logo} alt="" />
          <h1 className="tkm_title">TKM College of Engineering, Kollam</h1>
        </div>
        <div className="title_wrapper">
          <h1 className="title">Department of</h1>
          <h1 className="title">Computer</h1>
          <h1 className="title">Applications</h1>
        </div>
      </div>
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <div className="file-upload-container" onClick={triggerFileInput}>
              <div className="profile-pic">
                {profilePicture ? (
                  <img src={URL.createObjectURL(profilePicture)} alt="Profile" />
                ) : (
                  <img src={avatar} alt="Default Profile" />
                )}
              </div>
              <div className="upload-field">
                <img className="icon" src={upload} alt="" />
                <span className="upload-text">{fileName}</span>
              </div>
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept="image/*" 
              />
            </div>

            <div className="section-wrapper">
              <div className="info-section">
                <h3>Personal info</h3>
                <div className="fields-wrapper">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <div className="input-wrapper">
                      <User />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Batch</label>
                    <div className="batch-select">
                      <div className="input-wrapper">
                        <Calendar />
                        <select
                          name="batchFrom"
                          value={formData.batchFrom}
                          onChange={handleChange}
                        >
                          <option value="">From</option>
                          {years.map(year => (
                            <option key={`from-${year}`} value={year.toString()}>{year}</option>
                          ))}
                        </select>
                      </div>
                      <div className="input-wrapper">
                        <Calendar />
                        <select
                          name="batchTo"
                          value={formData.batchTo}
                          onChange={handleChange}
                        >
                          <option value="">To</option>
                          {years.map(year => (
                            <option key={`to-${year}`} value={year.toString()}>{year}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <div className="input-wrapper">
                      <Mail />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <div className="input-wrapper">
                      <Phone />
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-section">
                <h3>Organisation info</h3>
                <div className="fields-wrapper">
                <div className="form-group">
                    <label htmlFor="workType">Work Type</label>
                    <div className="input-wrapper">
                      <Briefcase />
                      <select
                        id="workType"
                        name="workType"
                        value={formData.workType}
                        onChange={handleChange}
                      >
                        <option value="">Select Work Type</option>
                        {workTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="organisation">Organisation</label>
                    <div className="input-wrapper">
                      <Building />
                      <input
                        type="text"
                        id="organisation"
                        name="organisation"
                        value={formData.organisation}
                        onChange={handleChange}
                        placeholder=""
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                  <label htmlFor="dateJoined">Year Joined</label>
                  <div className="input-wrapper">
                    <Calendar />
                    <input
                      type="number"
                      id="dateJoined"
                      name="dateJoined"
                      value={formData.dateJoined}
                      onChange={handleChange}
                      min="1900" // You can set this to a reasonable minimum year
                      max={new Date().getFullYear()} // Ensure the year is not more than the current year
                      placeholder="YYYY"
                    />
                  </div>
                </div>



                  <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <div className="input-wrapper">
                      <Briefcase />
                      <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="location">Working place</label>
                    <div className="input-wrapper">
                      <MapPin />
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="country">Working country</label>
                    <div className="input-wrapper">
                      <Globe />
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                      >
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div> 
            </div>

            <div className="button-group">
            <button type="button" className="skip">
              <SkipForward size={18} />
              <span>Skip</span>
            </button>
            <button type="submit" className="submit">
              <Send size={18} />
              <span>Submit</span>
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;