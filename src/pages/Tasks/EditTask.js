import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from './duck/actions';
// import { Prompt } from 'react-router-dom';


class EditTask extends Component {
  state = { 
    id: '',
    title: '',
    content: '',
    active: Boolean(),
    addDate: '',
    finishDate: '',
  }
  componentDidMount(){
    const getTask = this.props.tasks.filter(task => task.id == this.props.match.params.id)[0]
    this.setState({
      id: getTask.id,
      title: getTask.title,
      content: getTask.content,
      active: getTask.active,
      addDate: getTask.addDate,
      finishDate: getTask.finishDate,
    })
    console.log(getTask.addDate)
    
  }

  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value,
      active: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const { title, content, active, addDate, finishDate } = this.state
    const { id } = this.props.tasks.filter(task => task.id == this.props.match.params.id)[0]
    const editTask = {
      id,
      title,
      content,
      active,
      addDate,
      finishDate,
      updateDate : new Date().getTime(),
      updateBy: '',
    }
    console.log(editTask)
    
  }
  render() {
    console.log(this.state)
    
    return (
      <div className='editTask'>
        <form onSubmit={this.handleSubmit}>
          <label>
            tytuł: 
            <input 
              type="text" 
              name="title"
              value={this.state.title} 
              onChange={this.handleChange}
            />
          </label>
          <label>
            treść:
            <input 
              type='text' 
              name="content"
              value={this.state.content} 
              onChange={this.handleChange} 
            />
          </label>
          <label>
            status: 
            <select value={this.state.active} onChange={this.handleChange}>
              <option value={true}>do zrobienia</option>
              <option value={false}>zrobione</option>
            </select>
          </label>
          <button>Zapisz zmiany</button>
        </form>
      </div>
     );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.list
})

const mapDispatchToProps = dispatch => ({
  edit: editTask => dispatch(actions.edit(editTask))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(EditTask);

// deleteTask = (id) => {
  //   const tasks = [...this.state.tasks];
  //   const index = tasks.findIndex(task => task.id === id)
  //   tasks.splice(index, 1);
  //   this.setState({
  //     tasks
  //   })
  // }

  // editTask = (id) => {
  //   let task = document.querySelector(`.toDo li:nth-child(${id}) div.toggle-p`)
  //   let taskEdit = document.querySelector(`.toDo li:nth-child(${id}) div.toggle-textarea`)
  //   task.classList.toggle('off')
  //   taskEdit.classList.toggle('show')
  // }

  // saveEdit = (i, id) => {
  //   let tasks = [...this.state.tasks]
  //   const index = tasks.findIndex(task => task.id === i)
  //   tasks[index].value = this.state.editValue ? this.state.editValue : tasks[index].value
  //   this.setState({
  //     tasks,
  //     editValue: ''
  //   })
  //   let task = document.querySelector(`.toDo li:nth-child(${id}) div.toggle-p`)
  //   let taskEdit = document.querySelector(`.toDo li:nth-child(${id}) div.toggle-textarea`)
  //   task.classList.toggle('off')
  //   taskEdit.classList.toggle('show')

  // }

  // <Prompt when={this.state.editActive} message={'Masz niezapisany formularz. Czy na pewno chcesz opuścić stronę?'} />

  // moveTaskToDone = (id) => {
//   const date = new Date().getTime();
//   const tasks = [...this.state.tasks];
//   const index = tasks.findIndex(task => task.id === id)
//   tasks[index].active = false
//   tasks[index].finishDate = date
//   this.setState({
//     tasks
//   })
// }