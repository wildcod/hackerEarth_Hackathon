import React from 'react';
import './MainSection.scss';
import {
  RightOutlined,
  LeftOutlined,
  EditFilled,
  DeleteFilled
} from '@ant-design/icons';

const MainSection = () => {
  return (
    <div className="todo-main-section">
      <div className="header">
        <div className="left-col">
          <span>Days</span>
          <span>Week</span>
          <span>Month</span>
        </div>
        <div className="center-col">12 August</div>
        <div className="right-col">
          <LeftOutlined className="arrow" />
          <span>August 2018</span>
          <RightOutlined className="arrow" />
        </div>
      </div>
      <div className="task-list-container">
        <div className="wrapper">
          <div className="item">
            <div className="date">
              <span>12</span>
              <span>AUG</span>
            </div>
            <div className="priority">High</div>
            <div className="title">Meetings</div>
            <div className="time">13:00 - 14:00</div>
            <div className="date end-date">
              <span>12</span>
              <span>AUG</span>
            </div>
          </div>
          <div className="action">
            <EditFilled />
            <DeleteFilled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
