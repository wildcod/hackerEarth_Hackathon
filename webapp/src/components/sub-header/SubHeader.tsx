import React, {useState} from 'react';
import './SubHeader.scss'

const tabs = ['All', 'Personal', 'Work', 'Shopping', 'Others']

const SubHeader = () => {
    const [ isSelected, setIsSelected] = useState(0)
    return (
        <div className="todo-sub-header">
              <div className="title">Schedule</div>
              <div className="tabs">
                  {
                      tabs.map((tab, index) => (
                          <div className={isSelected === index? 'selected': ''} onClick={() => setIsSelected(index)}>{tab}</div>
                      ))
                  }
              </div>
              <div className="add-task">Add Task</div>
        </div>
    );
};

export default SubHeader;