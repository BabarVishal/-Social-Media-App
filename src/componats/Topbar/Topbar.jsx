import React from 'react';
import './Topbar.css';
import profilePic from '../../assets/vishal.png'; // Adjust path if necessary

function Topbar() {
  return (
    <div className="topbarContener">
        <div className="topbarLeft">
            <span className='logo'>LamaSocial</span>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <input 
                  type="text" 
                  placeholder="Search for friend, post or video" 
                  className="searchInput" 
                />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                {/* User Icon */}
                <div className="topbarIconItem">
                    <i className="fas fa-user"></i>
                    <span className="topbarIconBadge">1</span>
                </div>
                {/* Chat Icon */}
                <div className="topbarIconItem">
                    <i className="fas fa-comments"></i>
                    <span className="topbarIconBadge">2</span>
                </div>
                {/* Notification Icon */}
                <div className="topbarIconItem">
                    <i className="fas fa-bell"></i>
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <img src={profilePic} alt="Profile" className="topbarImg" />
        </div>
    </div>
  );
}

export default Topbar;


