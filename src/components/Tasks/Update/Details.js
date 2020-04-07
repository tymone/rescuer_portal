import React from 'react';
import date from '../../../helpers/setDate';

const Details = ({ title, content, status, addDate, finishDate, createdBy, workingBy, handleChange }) => {
  return (
    <div className="details">
      <form>
        <div className="textDetails">
          <label>
            <span>tytuł:</span>
            <input type="text" name="title" value={title} onChange={handleChange} />
          </label>
          <label>
            <span>treść:</span>
            <textarea type="text" name="content" value={content} onChange={handleChange} />
          </label>
        </div>
        <div className="infoDetails">
          <label>
            <span>status:</span>
            <select value={status} name="status" onChange={handleChange}>
              <option value="to do">do zrobienia</option>
              <option value="in progress">w trakcie wykonywania/nie ukończone</option>
              <option value="done">wykonane</option>
            </select>
          </label>
          <label>
            <span>data dodania:</span>
            <input
              type="text"
              onFocus={(e) => (e.target.type = 'date')}
              value={date(addDate)}
              name="addDate"
              onChange={handleChange}
            />
          </label>
          <label>
            <span>dodał:</span>
            <input type="text" value={createdBy} name="createdBy" onChange={handleChange} />
          </label>
          <label>
            <span>rozpoczęte przez:</span>
            <input type="text" value={workingBy} name="workingBy" onChange={handleChange} />
          </label>
          <label>
            <span>data zakończenia:</span>
            <input
              type="text"
              onFocus={(e) => (e.target.type = 'date')}
              value={finishDate}
              name="finishDate"
              onChange={handleChange}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default Details;
