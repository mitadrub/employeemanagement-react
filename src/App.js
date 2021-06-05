import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ListOfEmployee from './Components/ListOfEmployee';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';
import ViewEmployeeComponent from './Components/ViewEmployeeComponent';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" exact component={HomePage}></Route>
              <Route path="/employee" component={ListOfEmployee}></Route>
              <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route>
              <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route>
            </Switch>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
