import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <div className="choicesWrapper">
       <h2 className="choicesHeader">Pick Entries</h2>
        <div className="btnWrapper">
          <Link to='/reminder'>
          <button className="btn">Reminders</button>
          </Link>
        </div>
     </div>
    </div>
  );
}

export default App;
