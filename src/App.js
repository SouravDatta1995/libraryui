import './App.css';
import Login from "./components/Login/Login";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./components/Home/Home";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/home" component={Home}/>
            </Switch>
        </Router>
    );
}

export default App;
