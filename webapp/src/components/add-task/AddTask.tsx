import React from 'react';
import './AddTask.scss';

const AddTask = () => {
  return (
    <div className="todo-form-container">
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" placeholder="Add Title" />
        <label htmlFor="description">Description</label>
        <textarea name="description">Write Description</textarea>
        <label htmlFor="due_date">Due Date</label>
        <input type="date" name="due_date" />
        <label htmlFor="label">Label</label>
        {/*<input type="text" name="label" placeholder="Add Label" />*/}
        <select name="label">
          <option>Personal</option>
          <option>Work</option>
          <option>Shopping</option>
          <option>Others</option>
        </select>
        <label htmlFor="priority">Priority</label>
        <input type="text" name="priority" placeholder="Add Priority" />
        <label htmlFor="start_time">Start Time</label>
        <input type="time" name="start_time" />
        <label htmlFor="end_time">End Time</label>
        <input type="time" name="end_time" />
        <div className="submit-task-btn">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
