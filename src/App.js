import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ListOfEmployee from './Components/ListOfEmployee';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" exact component={ListOfEmployee}></Route>
              <Route path="/employee" component={ListOfEmployee}></Route>
              <Route path="/add-employee" component={CreateEmployeeComponent}></Route>
            </Switch>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
