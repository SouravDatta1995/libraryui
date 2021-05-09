import './App.css';
import Login from "./components/Login";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./components/Home";

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-content">
                    <Switch>
                        <Route path="/" exact component={Login}/>
                        <Route path="/home" component={Home}/>
                    </Switch>
                </header>
            </div>
        </Router>
    );
}

export default App;
