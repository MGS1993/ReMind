import React, {Component} from 'react';
import Layout from '../Components/Layout/Layout';
import Input from '../Components/Inputs/Input';
import Display from '../Components/Display/Display';
import Item from '../Components/ReminderItems/Item';
import firebase from 'firebase';

class Reminder extends Component {
  state = {
    Items: [

    ],
    

  }

  componentDidMount() {
    this.getUserData();
    
  }
 
  shouldComponentUpdate(nextProps, nextState) {
    return (nextState.Items !== this.state.Items? 1 : 0)
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.writeUserData();
      console.log('[Reminder.js] updated...');
    }
  }

  componentWillUnmount() {
    let ref = firebase.database().ref('/reminders');
    ref.off()
    console.log("component unmounted")
  }


  writeUserData = () => {
    firebase.database().ref('/reminders').set(this.state);
    
  }
  
  getUserData = () => {
    let ref = firebase.database().ref('/reminders');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
    console.log('[Reminder.js] mounted...');
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
  let date = new Date(e.target.value)
  let day = date.getDate() + 1;
  
  this.setState({
    [e.target.name]: this.getDayOfWeek(e.target.value)+ ' ' + this.getMonth(e.target.value) + ' ' + day 
  })
}

completedHandler = (taskIndex) => {
  const tasks = [...this.state.Items];
  tasks.splice(taskIndex, 1);
  this.setState({Items: tasks})
}

 getDayOfWeek = (date) => {
  const dayOfWeek = new Date(date).getDay();    
  return isNaN(dayOfWeek) ? null : 
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][dayOfWeek];
}

getMonth = (date) => {
  const month = new Date(date).getMonth(); 
  return isNaN(month) ? null : 
   ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"][month];
}

// getDay = (date) => {
//   let
//     str = date,
//     parts = str.split('-'),
//     // year = parseInt(parts[2], 10),
//     // month = parseInt(parts[1], 10) - 1, // NB: month is zero-based!
//     day = parseInt(parts[0], 10),
//     dayOnly = new Date( day);

//     return dayOnly
// }
  render(){
    console.log('[Reminder.js] rendering...')
    let tempState = [...this.state.Items]
      let items = (
        <React.Fragment>
          {tempState.map((item, index) => {
            console.log('mapping state to Item...')
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