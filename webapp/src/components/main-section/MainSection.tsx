import React from 'react';
import './MainSection.scss'

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
                    <span>August 2018</span>
                </div>
            </div>
        </div>
    );
};

export default MainSection;