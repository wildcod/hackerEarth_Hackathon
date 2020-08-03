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
          title="Add Task"
          centered
          closable={false}
          footer={null}
          visible={isModalOpen}
          onOk={() => setIsModalOpen(false)}
          onCancel={() => setIsModalOpen(false)}>
          <div className="form-container">
            <form>
              <label htmlFor="title">Title</label>
              <input type="text" name="title" placeholder="Add Title" />
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                placeholder="Write Description"
              />
              <label htmlFor="due_date">Due Date</label>
              <input type="date" name="due_date" />
              <label htmlFor="label">Label</label>
              <input type="text" name="label" placeholder="Add Label" />
              <label htmlFor="priority">Priority</label>
              <input type="text" name="priority" placeholder="Add Priority" />
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default SubHeader;
