import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faClock, faMoneyCheck, faChartLine, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? '☰' : '☰'}
      </button>
      <nav className="sidebar-nav">
        <NavLink to="/" exact className="sidebar-item">
          <FontAwesomeIcon icon={faHome} className="icon" />
          <span className="text">Home</span>
        </NavLink>
        <NavLink to="/profile" className="sidebar-item">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <span className="text">Profile</span>
        </NavLink>
        <NavLink to="/attendance" className="sidebar-item">
          <FontAwesomeIcon icon={faClock} className="icon" />
          <span className="text">Attendance</span>
        </NavLink>
        <NavLink to="/workhours" className="sidebar-item">
          <FontAwesomeIcon icon={faChartLine} className="icon" />
          <span className="text">Work Hours</span>
        </NavLink>
        <NavLink to="/loanapplications" className="sidebar-item">
          <FontAwesomeIcon icon={faMoneyCheck} className="icon" />
          <span className="text">Loans</span>
        </NavLink>
        <NavLink to="/leaverequests" className="sidebar-item">
          <FontAwesomeIcon icon={faEnvelopeOpenText} className="icon" />
          <span className="text">Leave Requests</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
