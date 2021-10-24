import './App.css';
import Home from './components/Home'
import List from './components/List'
import CreateTask from './components/CreateTask'
import BulkDelete from './components/BulkDelete'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/list-tasks' exact component={List} />
          <Route path='/create-task' exact component={CreateTask} />
          <Route path='/bulk-delete' exact component={BulkDelete} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
