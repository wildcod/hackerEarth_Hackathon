import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import './SubHeader.scss';

const tabs = ['All', 'Personal', 'Work', 'Shopping', 'Others'];

const SubHeader = () => {
  const [isSelected, setIsSelected] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="todo-sub-header">
      <div className="title">Schedule</div>
      <div className="tabs-wrapper">
        <div className="tabs-container">
          {tabs.map((tab, index) => (
            <div
              className={isSelected === index ? 'selected' : ''}
              onClick={() => setIsSelected(index)}>
              {tab}
            </div>
          ))}
        </div>
      </div>
      <div className="add-task">
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          <PlusOutlined /> Add Task
        </Button>
        <Modal
          title="Vertically centered modal dialog"
          centered
          visible={isModalOpen}
          onOk={() => setIsModalOpen(false)}
          onCancel={() => setIsModalOpen(false)}>
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>
    </div>
  );
};

export default SubHeader;
