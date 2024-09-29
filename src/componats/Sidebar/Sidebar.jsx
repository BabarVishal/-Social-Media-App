import React from 'react';
import './Sidebar.css';
// Add necessary font awesome icons here
import { FaRss, FaComment, FaVideo, FaUsers, FaBookmark, FaQuestionCircle, FaBriefcase, FaCalendarAlt, FaGraduationCap } from "react-icons/fa";
import profilePic from '../../assets/vishal.png'; // Adjust path if necessary

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <FaRss className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <FaComment className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <FaVideo className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <FaUsers className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <FaBookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <FaQuestionCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <FaBriefcase className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <FaCalendarAlt className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <FaGraduationCap className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button>Show more</button>
        <ul className="sidebarFrindlist">
          <li className="sidebarFrinde">
            <img src={profilePic} alt="" className="sidebarimg" />
            <span className="sidebarname">Vishal babar</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

