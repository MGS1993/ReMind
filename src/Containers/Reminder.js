import React, {Component} from 'react';
import Layout from '../Components/Layout/Layout';
import Input from '../Components/Inputs/Input';
import Display from '../Components/Display/Display';
import Item from '../Components/ReminderItems/Item';
import firebase from 'firebase';
import {  format, add } from 'date-fns';

class Reminder extends Component {
  state = {
    Items: [

    ],
    today: null,
    tomorrow: null
    

  }

  componentDidMount() {
    this.getUserData();
    this.setWeekFrame();
    
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
    // console.log(formatDistanceStrict(this.state.today, this.state.tomorrow))
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

  setWeekFrame = () => {
    const now = new Date();

    const nextWeek = add(new Date(now), {
      weeks: 1
    })

    let tomorrow = add(new Date(now), {
      days: 1
    })

    
    this.setState({
      today: now,
      tomorrow: tomorrow,
      nextWeek: nextWeek
    })
    console.log('setWeekFrame ran...')

  }
  


handleSubmit = (e) => {
  e.preventDefault();
  let titleValue = this.state.reminderTitle;
  let descValue = this.state.reminderDescription;
  let dateValue = this.state.reminderDueDate;
  // let dateCategory 
  // this.dateCategoryHandler()

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
  ///main logic code for chosen date in calender
  let date = new Date(e.target.value)

  let formattedDate = add(new Date(date), {days: 1})
  let completeFormat = format(formattedDate, 'ccc, MMM do')

  this.setState({
    [e.target.name]: completeFormat
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