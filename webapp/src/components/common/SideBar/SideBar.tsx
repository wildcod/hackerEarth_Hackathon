import React from 'react';
import './SideBar.scss';

const SideBar = () => {
  return (
    <div className="todo-sidebar">
      <h3>Today</h3>
      <div className="date-container">
        <div className="date">
          <span>12</span>
          <span>AUG</span>
        </div>
        <div className="month">
          <span>Monday</span>
          <span>August, 2018</span>
        </div>
      </div>
      <div className="todo-list">
        <h3>Thinks to do</h3>
        <div className="item">
          <span>04</span>
          <span>Meetings</span>
        </div>
        <div className="item">
          <span>04</span>
          <span>Meetings</span>
        </div>
        <div className="item">
          <span>04</span>
          <span>Meetings</span>
        </div>
      </div>
      <div className="up-coming">
        <h3>Upcommings</h3>
        <div className="card">
          <span className="title">Meeting</span>
          <span className="body">Meeting with Roger R .Fisk</span>
          <span className="time">10:00 - 12:00</span>
        </div>
        <div className="card">
          <span className="title">Meeting</span>
          <span className="body">Meeting with Roger R .Fisk</span>
          <span className="time">10:00 - 12:00</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
