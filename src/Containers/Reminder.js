import React, {Component} from 'react';
import Layout from '../Components/Layout/Layout';
import Input from '../Components/Inputs/Input';
import Display from '../Components/Display/Display';
import Item from '../Components/ReminderItems/Item';
class Reminder extends Component {
  state = {
    Items: [

    ],
    

  }

handleSubmit = (e) => {
  e.preventDefault();
  let titleValue = this.state.reminderTitle;
  let descValue = this.state.reminderDescription;
  let dateValue = this.state.reminderDueDate;

  let newState = {taskTitle: titleValue, taskDescription: descValue, taskDueDate: dateValue}

  let modifiedState = [...this.state.Items]
  modifiedState.push(newState)
  this.setState({
    Items: modifiedState
  })
}
handleTitleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}
handleDescChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}
handleDueDateChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

completedHandler = (taskIndex) => {
  const tasks = [...this.state.Items];
  tasks.splice(taskIndex, 1);
  this.setState({Items: tasks})
}


  render(){
      let items = (
        <React.Fragment>
          {this.state.Items.map((item, index) => {
            return <Item 
            key={Math.random()*10}
            title={item.taskTitle}
            description={item.taskDescription}
            dueDate={item.taskDueDate}
            clicked={() => this.completedHandler(index)}/>
          })}
        </React.Fragment>
      )


    return(
      <Layout>
        <Input
        handleSubmit={this.handleSubmit}
        handleTitle={this.handleTitleChange}
        handleDescription={this.handleDescChange}
        handleDueDate={this.handleDueDateChange}/>
        <Display>
          {items}
        </Display>
      </Layout>
    )
  }
}

export default Reminder